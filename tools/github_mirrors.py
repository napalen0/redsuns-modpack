"""Add verified public Release mirrors without changing legacy CDN identities."""
from __future__ import annotations

import json
import re
from pathlib import Path
from urllib.parse import urlsplit


def valid_release_url(value: str) -> bool:
    try:
        url = urlsplit(value)
        return (url.scheme == "https" and url.hostname == "github.com"
                and not url.username and not url.password and url.port in (None, 443)
                and not url.query and not url.fragment
                and re.fullmatch(r"/[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+/releases/download/"
                                 r"[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+\.zip", url.path) is not None)
    except (ValueError, TypeError):
        return False


def load_registry(path: Path) -> dict:
    if not path.exists():
        return {"schema": 1, "assets": {}}
    registry = json.loads(path.read_text("utf-8"))
    if registry.get("schema") != 1 or not isinstance(registry.get("assets"), dict):
        raise ValueError("Invalid GitHub mirror registry")
    for digest, asset in registry["assets"].items():
        if (not re.fullmatch(r"[0-9a-f]{64}", digest)
                or not isinstance(asset, dict) or not valid_release_url(asset.get("url", ""))
                or type(asset.get("size")) is not int or asset["size"] <= 0):
            raise ValueError("Invalid GitHub mirror asset")
    return registry


def attach_mirrors(manifest: dict, registry: dict) -> dict:
    for mod in manifest.get("mods", []):
        mirror = registry["assets"].get(mod.get("sha256"))
        # Never carry a mirror from a previous build with the same filename.
        if mirror and mirror["size"] == mod.get("size"):
            mod["downloadUrls"] = [mirror["url"], mod["url"]]
        else:
            mod.pop("downloadUrls", None)
    return manifest
