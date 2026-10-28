# RedSuns Modpack

Ресурсы двух публичных игровых серверов RedSuns. Большие ZIP-файлы публикуются
в **GitHub Releases**. В Git хранятся перечень файлов и инструмент публикации.

Состояние подготовки: 29 уникальных архивов, 7 892 585 555 байт. Это снимок
рабочего модпака от 28 октября 2026 года. SHA-256 исходников проверены на сервере.
Репозиторий и Release **ещё не опубликованы**; GitHub-ссылки не активированы.
Код лаунчера, API, серверные конфигурации и ключи сюда не входят.

## Публикация

1. Создать отдельный публичный репозиторий `redsuns-modpack` в нужном аккаунте.
2. Загрузить содержимое этого подготовленного репозитория. Его история содержит
   только публичные сведения о ресурсах и утилиту публикации.
3. На сервере после выпуска актуального Framework заново построить план для
   фактического `OWNER/redsuns-modpack`. Стандартные строители манифестов из
   подготовленного rs_server должны быть установлены до активации зеркал.
4. Загрузить черновик Release, проверить хеши, опубликовать его и проверить
   анонимное скачивание. Лишь после этого активировать GitHub URL в манифестах.

```bash
python3 tools/publish-github-modpack.py plan \
  --mods-dir /srv/redsuns/updates/mods --plan /private/staging/modpack-plan.json \
  --repo OWNER/redsuns-modpack
python3 tools/publish-github-modpack.py upload \
  --mods-dir /srv/redsuns/updates/mods --plan /private/staging/modpack-plan.json
python3 tools/publish-github-modpack.py publish \
  --mods-dir /srv/redsuns/updates/mods --plan /private/staging/modpack-plan.json
python3 tools/publish-github-modpack.py activate \
  --mods-dir /srv/redsuns/updates/mods --plan /private/staging/modpack-plan.json
```

`OWNER` — место для фактического владельца, не готовый адрес репозитория.
Инструмент не создаёт аккаунты и не меняет видимость существующих репозиториев.
Для `upload` и `publish` требуется `GH_TOKEN` в защищённом окружении оператора.
Его нельзя включать в Git, лаунчер или публичные манифесты. Для `plan` и
анонимной проверки `activate` токен не нужен. Активация рассчитана на Linux-хост
публикации и использует штатную блокировку обновления контента.

Внутри Release имя архива равно его SHA-256 с расширением `.zip`. Лаунчер
сохраняет исходные названия модов из манифеста. Оригинальная CDN остаётся
резервным источником, а старые версии лаунчера продолжают использовать её.

## Снимок файлов

Актуальные машиночитаемые сведения находятся в `modpack-inventory.json`.
При изменении Framework, карты или другого ресурса план и снимок нужно обновить.

| Архив | Размер, байт | SHA-256 |
|---|---:|---|
| `2K-Akagi-RedSuns.zip` | 153 298 541 | `bec7a047f26284e389b557bd6db52769b339fc4863fff29590607a054ed21791` |
| `Altezza_1.0.zip` | 177 663 347 | `3392b8fe220eb026edd64445810b8e3bf28c7c17b234af9e3472cb17b5078d25` |
| `B3_Silvia_S15_RedSuns.zip` | 448 181 036 | `7fd2742e922cf250fa85b479cd6e99fc70dfb62c16b25f765f68aaf3c6a073f9` |
| `BMW_E36_by_desu_redsuns.zip` | 448 506 820 | `7ee5783d1f3afbc71a749761f41696a6ea1c41e6918fa3d7635b23bf8be90719` |
| `Drift-Industrial-RedSuns.zip` | 811 628 692 | `bfa8622bf387feb06ecb4f47c6a85d1c39006d2ae8eecdaf3297806c29deab6d` |
| `enhanced_chase_camera.zip` | 37 972 | `4e520e2183ba5baba8b42a78099602e4175df248c03eada3aff0dfe024b8fac8` |
| `enhanceddriver.zip` | 3 958 433 | `48c523fd0336d078279a3deda9802651f8c1e8ddbfd19340e830a37f241bf2ec` |
| `Framework_UI.zip` | 41 443 157 | `75262973c05ce8d8f78d29bd170416d9e69026baaadaa3eed2d184fae1dc92b5` |
| `hachiimpreza2.zip` | 487 691 764 | `ab37dc374e544d8df7ed1ca94c160b39338c466d60e0a099b4ce598343cb049b` |
| `Honda_Civic_EG6.zip` | 147 127 191 | `c24dd2b3d02152d8a0dee7882edf27e9ced36de07bcb1fb857cc3fc55d3df896` |
| `japan_plates_am5.zip` | 8 363 857 | `67244923373a31b6a054e203618f0d99e8beecc4b7bfa8b0a0b5d95591eacd03` |
| `LXR_R34_config_by_desu.zip` | 27 256 844 | `94685c2e5cd1a59af69224f8e07fb02a1bb36dde013bc95638832322f10d2456` |
| `LXR_R34_v2.0.zip` | 386 338 978 | `f0b65cf0d825f540dbf7ae12142b5ba0a3b3ed3bd657e645791aa81b9d7b82f7` |
| `Mazda_RX-7.zip` | 88 585 472 | `f212e43a0f54f9c029327f886c49aeb606e93556b7c369a80fe31bb701e582d2` |
| `redsuns_vehicle_cresta_jzx100.zip` | 902 647 383 | `3e2a97ddae97c622c77bff1dc598a03a39f0b458bb9b886fa1b7b2f374d2f5d2` |
| `redsuns_vehicle_mark2_jzx100.zip` | 1 098 048 043 | `1361914d7144cae048a8a0bc1dd63f4cabda736f4eccbcdd51e9547c798a0e1f` |
| `redsuns_vehicle_mark2_jzx100_previewfix.zip` | 656 016 | `e2ff7a65cc2f3a4987f3d45012a3e9b1baddd636eb8cca80bffcc5db6fdc5c24` |
| `redsuns_vehicle_mark2_jzx100_tirefix.zip` | 2 446 | `20932653677094587cd5ead4b262562de27b929b53baf58d9356effc09d5446f` |
| `redsuns_vehicle_mark2_jzx90.zip` | 210 966 171 | `0caf8bc57286c42b622aa70d41f2fb6455216bd3c1e2237742b9c70743253d4d` |
| `redsuns_wheels_dtroxx_bulletz_fix.zip` | 263 236 546 | `a9577694bf1112bb088ab46b81deec1439dbbc3ac55406aa42e1032afdfc21d8` |
| `redsuns_wheels_kirun_v3.zip` | 5 432 053 | `94570483f67519c0d1e3025541bc2e46b95e7870576a663c07b449362cd3a59f` |
| `redsuns_wheels_zl_v3.zip` | 94 524 259 | `f8cb89ebd2c3c260bbbee2af26f41d2fba9e2b985995a3b96dc6a10e2a0ec826` |
| `Toyota_Chaser_X100.zip` | 259 455 715 | `33b6b335227f8905b31121747f8e3bd0dd2c6afcf70437bde69501d0584bc7c7` |
| `Toyota_Supra_A80_Previews.zip` | 307 891 | `588f7c3034cdfcf464f2e52465063fb655a941d3adac8c03ed54161069451a0a` |
| `Toyota_Supra_A80_v2.zip` | 311 209 760 | `41c4bfacdc782a28133df08b4ac869c672a3af47acd9046351c601e2da0582a4` |
| `Vossen_Work_Wheelpack.zip` | 336 577 504 | `715298e805c0845cfdf5d2ea9b923f779b53f105eb9982d8b1482c2362a0da09` |
| `vr30.zip` | 125 450 909 | `171387f3821faa367b5e24e92c42b6b0a15a69b008be13d8a09bd6849b26ac14` |
| `Wheels_And_Common_Pack_For_S15.zip` | 1 005 864 189 | `02fc56b615e8935041d3cee20009c494304787b71fabedb72e397ba044cadbd2` |
| `yan41kk_steering_wheel_pack.zip` | 48 124 566 | `b7f1c734b0aff15e0f0d59d90becdbcc680114cdd94106ce1281fa22f8be9575` |
