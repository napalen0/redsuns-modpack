#!/usr/bin/env python3
"""Plan, upload, publish and verify a public modpack Release in separate steps.

No token is needed for plan or activate. Upload/publish read GH_TOKEN from the
environment; credentials are never written to the plan or public manifests.
"""
from __future__ import annotations

import argparse
import hashlib
import http.client
import json
import os
import re
import tempfile
from contextlib import contextmanager
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import unquote, urlsplit
from urllib.request import Request, urlopen

from github_mirrors import attach_mirrors, load_registry, valid_release_url

CHUNK = 1024 * 1024


def digest_file(path: Path) -> tuple[str, int]:
    digest, size = hashlib.sha256(), 0
    with path.open("rb") as source:
        for chunk in iter(lambda: source.read(CHUNK), b""):
            digest.update(chunk)
            size += len(chunk)
    return digest.hexdigest(), size


def atomic_json(path: Path, value) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, temporary = tempfile.mkstemp(dir=path.parent, prefix="." + path.name)
    try:
        with os.fdopen(fd, "w", encoding="utf-8", newline="\n") as stream:
            json.dump(value, stream, ensure_ascii=False, indent=2)
            stream.write("\n")
        os.chmod(temporary, 0o644)
        os.replace(temporary, path)
    finally:
        Path(temporary).unlink(missing_ok=True)


def under(root: Path, relative: str) -> Path:
    path = (root / relative).resolve()
    if not path.is_relative_to(root.resolve()) or Path(relative).is_absolute():
        raise ValueError("Path escapes the public mod directory")
    return path


def make_plan(root: Path, repo: str, origin: str) -> dict:
    if not re.fullmatch(r"[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+", repo):
        raise ValueError("Use an existing public owner/repository")
    root = root.resolve()
    manifests = sorted(set(root.glob("*-manifest.json")) | set((root / "servers").glob("*.json")))
    assets, pointers, verified_sources = {}, [], set()
    for path in manifests:
        document = json.loads(path.read_text("utf-8"))
        if not isinstance(document.get("mods"), list):
            continue
        pointers.append({"path": path.relative_to(root).as_posix(), "sha256": digest_file(path)[0]})
        for mod in document["mods"]:
            digest, size = mod["sha256"], mod["size"]
            if not re.fullmatch(r"[0-9a-f]{64}", digest) or type(size) is not int or not 0 < size < 2 ** 31:
                raise ValueError("Release assets must have a valid digest and be smaller than 2 GiB")
            url = mod["url"]
            if not url.startswith(origin.rstrip("/") + "/"):
                raise ValueError("Resource is outside the configured CDN origin")
            parsed = urlsplit(url)
            if parsed.query or parsed.fragment:
                raise ValueError("Resource URL must be immutable")
            relative = unquote(url[len(origin.rstrip("/")) + 1:])
            source = under(root, relative)
            identity = (source, digest, size)
            if not source.is_file() or (identity not in verified_sources and digest_file(source) != (digest, size)):
                raise ValueError(f"Local resource failed SHA-256 verification: {mod['name']}")
            verified_sources.add(identity)
            if digest in assets and assets[digest]["size"] != size:
                raise ValueError("Inconsistent resource size")
            entry = assets.setdefault(digest, {"sha256": digest, "size": size,
                                               "source": relative, "names": []})
            if mod["name"] not in entry["names"]:
                entry["names"].append(mod["name"])
    if not assets or len(assets) > 1000:
        raise ValueError("A Release must contain between 1 and 1000 unique assets")
    material = "\n".join(f"{key}:{assets[key]['size']}" for key in sorted(assets)).encode()
    tag = "modpack-" + hashlib.sha256(material).hexdigest()[:16]
    for digest, entry in assets.items():
        entry["assetName"] = digest + ".zip"
        entry["url"] = f"https://github.com/{repo}/releases/download/{tag}/{digest}.zip"
    return {"schema": 1, "repo": repo, "tag": tag, "manifests": pointers,
            "assets": [assets[key] for key in sorted(assets)]}


def validate_plan(plan: dict) -> None:
    if (plan.get("schema") != 1 or not re.fullmatch(r"[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+", plan.get("repo", ""))
            or not re.fullmatch(r"modpack-[0-9a-f]{16}", plan.get("tag", ""))
            or not 0 < len(plan.get("assets", [])) <= 1000):
        raise ValueError("Invalid modpack plan")
    seen = set()
    for asset in plan["assets"]:
        digest = asset["sha256"]
        expected = f"https://github.com/{plan['repo']}/releases/download/{plan['tag']}/{digest}.zip"
        if (not re.fullmatch(r"[0-9a-f]{64}", digest) or digest in seen
                or asset["assetName"] != digest + ".zip" or asset["url"] != expected
                or not valid_release_url(asset["url"]) or type(asset["size"]) is not int
                or not 0 < asset["size"] < 2 ** 31):
            raise ValueError("Invalid planned asset")
        seen.add(digest)


class GitHub:
    def __init__(self):
        self.token = os.environ.get("GH_TOKEN", "")
        if not self.token:
            raise ValueError("Configure GH_TOKEN through the operator's secure environment")

    def request(self, method: str, path: str, body=None):
        payload = json.dumps(body).encode() if body is not None else None
        request = Request("https://api.github.com" + path, data=payload, method=method,
                          headers={"Authorization": "Bearer " + self.token,
                                   "Accept": "application/vnd.github+json", "User-Agent": "RedSuns-modpack-publisher",
                                   "Content-Type": "application/json", "X-GitHub-Api-Version": "2022-11-28"})
        with urlopen(request, timeout=60) as response:
            return json.load(response)

    def release(self, plan: dict, create=False):
        base = "/repos/" + plan["repo"]
        repository = self.request("GET", base)
        if repository.get("private") is not False or repository.get("visibility", "public") != "public":
            raise ValueError("Modpack delivery requires an existing public repository; its visibility will not be changed")
        try:
            release = self.request("GET", base + "/releases/tags/" + plan["tag"])
        except HTTPError as error:
            if error.code != 404 or not create:
                raise
            release = self.request("POST", base + "/releases", {
                "tag_name": plan["tag"], "name": plan["tag"], "draft": True,
                "body": "Immutable RedSuns resources. Asset names are their SHA-256 digests."})
        return release

    def assets(self, plan: dict, release: dict) -> dict:
        result = {}
        for page in range(1, 12):
            rows = self.request("GET", f"/repos/{plan['repo']}/releases/{release['id']}/assets?per_page=100&page={page}")
            result.update({row["name"]: row for row in rows})
            if len(rows) < 100:
                return result
        raise ValueError("Unexpected asset count")

    def upload(self, plan: dict, release: dict, asset: dict, source: Path):
        if digest_file(source) != (asset["sha256"], asset["size"]):
            raise ValueError("Source changed after planning")
        connection = http.client.HTTPSConnection("uploads.github.com", timeout=300)
        try:
            connection.putrequest("POST", f"/repos/{plan['repo']}/releases/{release['id']}/assets?name={asset['assetName']}")
            for key, value in {"Authorization": "Bearer " + self.token, "User-Agent": "RedSuns-modpack-publisher",
                               "Content-Type": "application/zip", "Content-Length": str(asset["size"])}.items():
                connection.putheader(key, value)
            connection.endheaders()
            with source.open("rb") as stream:
                for block in iter(lambda: stream.read(CHUNK), b""):
                    connection.send(block)
            response = connection.getresponse()
            payload = response.read()
            if response.status != 201:
                raise ValueError(f"GitHub asset upload failed: HTTP {response.status}")
            return json.loads(payload)
        finally:
            connection.close()


def check_asset(remote: dict, asset: dict) -> None:
    if (remote.get("size") != asset["size"] or remote.get("state") != "uploaded"
            or remote.get("digest") != "sha256:" + asset["sha256"]):
        raise ValueError("Existing Release asset has no matching verified digest; refusing replacement")


def verify_public(asset: dict) -> None:
    # No Authorization header: players must be able to download anonymously.
    request = Request(asset["url"], headers={"User-Agent": "RedSuns-modpack-verifier"})
    digest, size = hashlib.sha256(), 0
    with urlopen(request, timeout=120) as response:
        if urlsplit(response.url).scheme != "https":
            raise ValueError("Insecure Release redirect")
        for block in iter(lambda: response.read(CHUNK), b""):
            digest.update(block)
            size += len(block)
            if size > asset["size"]:
                raise ValueError("Public asset is larger than expected")
    if (digest.hexdigest(), size) != (asset["sha256"], asset["size"]):
        raise ValueError("Anonymous public asset failed SHA-256 verification")


@contextmanager
def deployment_lock(path: Path | None):
    if path is None:
        yield
        return
    import fcntl
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open('a+b') as handle:
        fcntl.flock(handle.fileno(), fcntl.LOCK_EX)
        try:
            yield
        finally:
            fcntl.flock(handle.fileno(), fcntl.LOCK_UN)


def activate(root: Path, plan: dict, verify=verify_public, lock_path: Path | None = None) -> None:
    for asset in plan["assets"]:
        verify(asset)
    # Share the normal content/Workshop deploy lock only for the pointer swap;
    # anonymous verification can take minutes and must not hold that lock.
    with deployment_lock(lock_path):
        activate_verified(root, plan)


def activate_verified(root: Path, plan: dict) -> None:
    targets = []
    for pointer in plan["manifests"]:
        path = under(root, pointer["path"])
        if digest_file(path)[0] != pointer["sha256"]:
            raise ValueError("Manifests changed since planning; generate a fresh plan")
        targets.append((path, json.loads(path.read_text("utf-8"))))
    registry_path = root / "github-mirrors.json"
    registry = load_registry(registry_path)
    for asset in plan["assets"]:
        registry["assets"][asset["sha256"]] = {"size": asset["size"], "url": asset["url"]}
    # Registry is durable across normal content and map deployments. CDN URLs,
    # sizes and digests remain unchanged for clients predating downloadUrls.
    atomic_json(registry_path, registry)
    for path, manifest in targets:
        atomic_json(path, attach_mirrors(manifest, registry))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("action", choices=("plan", "upload", "publish", "activate"))
    parser.add_argument("--mods-dir", type=Path, required=True)
    parser.add_argument("--plan", type=Path, required=True)
    parser.add_argument("--repo", help="Existing public owner/repository; required for plan")
    parser.add_argument("--origin", default="https://updates.redsuns.ru/mods")
    parser.add_argument("--lock-file", type=Path,
                        default=Path(os.environ.get("CONTENT_DEPLOY_LOCK", "/run/lock/redsuns-content-deploy.lock")))
    args = parser.parse_args()
    if args.action == "plan":
        plan = make_plan(args.mods_dir, args.repo or "", args.origin)
        atomic_json(args.plan, plan)
        print(f"Verified {len(plan['assets'])} unique assets, {sum(a['size'] for a in plan['assets'])} bytes; {plan['tag']}")
        return
    plan = json.loads(args.plan.read_text("utf-8"))
    validate_plan(plan)
    if args.action == "activate":
        activate(args.mods_dir, plan, lock_path=args.lock_file)
        print("Verified anonymous downloads; GitHub mirrors activated with CDN fallback")
        return
    github = GitHub()
    release = github.release(plan, create=args.action == "upload")
    remote = github.assets(plan, release)
    for asset in plan["assets"]:
        row = remote.get(asset["assetName"])
        if row is None and args.action == "upload":
            if not release["draft"]:
                raise ValueError("Refusing to add files to a published immutable Release")
            row = github.upload(plan, release, asset, under(args.mods_dir, asset["source"]))
        check_asset(row or {}, asset)
        print("Verified " + asset["assetName"])
    if args.action == "publish" and release["draft"]:
        github.request("PATCH", f"/repos/{plan['repo']}/releases/{release['id']}", {"draft": False})
        print("Release published; run activate to verify public bytes before updating manifests")


if __name__ == "__main__":
    main()
