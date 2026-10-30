# RedSuns Modpack

Канонический набор ресурсов для двух игровых серверов RedSuns. Текущие архивы опубликованы на [RedSuns CDN](https://updates.redsuns.ru/mods/). Манифесты сервера 1 и сервера 2 содержат точные SHA-256 и размеры.

Активно 31 уникальных ZIP (7,868,200,455 байт): 30 на сервере 1 и 28 на сервере 2. Повторяющихся внутренних путей в проверенном наборе нет.

## Порядок

| Папка источника | Содержимое | Архивов |
|---|---|---:|
| [cameras](cameras/README.md) | Камеры | 2 |
| [framework](framework/README.md) | Клиентский Framework | 1 |
| [maps](maps/README.md) | Карты серверов | 2 |
| [parts](parts/README.md) | Отдельные наборы деталей | 7 |
| [shared](shared/README.md) | Общие моторы, звуки, колёса, детали и номера | 5 |
| [plates](plates/README.md) | Номера | 1 |
| [vehicles](vehicles/README.md) | Машины с их собственными исправлениями | 13 |

Папки описывают владение исходными архивами. BeamMP получает плоский `Resources/Client`, а пути внутри ZIP остаются игровыми. Каждый общий ресурс присутствует в наборе один раз.

Новый набор опубликован как [GitHub Release modpack-5bcbc133e52905dc](https://github.com/napalen0/redsuns-modpack/releases/tag/modpack-5bcbc133e52905dc). Каждый архив скачан анонимно и повторно проверен по SHA-256. Игровые манифесты сначала предлагают GitHub, затем RedSuns CDN. Прежние выпуски сохранены для старых клиентов.

## Проверка

Полный список имён, хэшей, URL и состав серверов: [modpack-inventory.json](modpack-inventory.json). Сборка Framework связана с коммитом `rs_content` `7e7708cf8517a45ce63456d6f9f06aeda9c26224`; серверный выпуск — `rs_server` `0140063e6e12feb84a69e258d8fc4e793ab9ce34`.
