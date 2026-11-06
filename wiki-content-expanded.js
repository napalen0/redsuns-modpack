// Player-facing guides checked against rs_launcher/launcher.py,
// launcher_profiles.py, profile_data.py and the BeamMP launch diagnostics.
window.wikiContent = [
  {
    id: 'first-join',
    ru: {
      title: 'Первое подключение',
      desc: 'Что происходит от нажатия «Играть» до появления меню на сервере.',
      body: `<p class="article-opening">Войдите в RedSuns Launcher, откройте «Игра», выберите сервер и нажмите «Играть». Дождитесь, пока игра закончит загрузку ресурсов и появится меню RedSuns.</p>
      <h2>Подготовка ресурсов</h2><p>Лаунчер получает список архивов выбранного сервера. Уже скачанные файлы он проверяет и использует повторно; новые скачивает в кэш. При первом входе этот этап может занять заметно больше времени, чем при повторном. Следите за прогрессом в лаунчере и оставьте место на диске с ресурсами.</p>
      <h2>Когда открылась BeamNG</h2><p>Не закрывайте BeamMP Launcher: его окно должно оставаться запущенным во время игры. На главной странице BeamNG обратите внимание на кнопку «Репозиторий». Если её счётчик обновляется, синхронизация модов ещё идёт. Открывать кнопку не требуется.</p>
      <h2>Подключение к серверу</h2><p>Сообщение <code>Connected!</code> в логе BeamMP означает, что транспортное соединение установлено. После этого ещё могут загружаться архивы и карта, а затем выполняется авторизация RedSuns. Дождитесь игрового меню и выбора машины: это более надёжный признак готовности, чем одна строка в логе.</p>
      <h2>Перед первой поездкой</h2><p>Проверьте <a href="wiki.html?article=steering-assist">подруль</a> в настройках RedSuns и подберите его силу под клавиатуру, геймпад или руль. Так проще освоиться с поведением машины при заносе.</p>
      <h2>Если загрузка остановилась</h2><p>Не запускайте вторую копию BeamNG или BeamMP. Если появилось сообщение об ошибке, запомните его и откройте <a href="wiki.html?article=join-troubleshooting">разбор этапов подключения</a>. Если карта загрузилась, но нет меню или HUD, смотрите <a href="wiki.html?article=missing-ui">отдельную инструкцию</a>.</p>`
    },
    en: {
      title: 'First connection',
      desc: 'What happens between pressing Play and seeing the server menu.',
      body: `<p class="article-opening">Sign in to RedSuns Launcher, open Game, select a server and press Play. Wait until resources have loaded and the RedSuns menu appears.</p>
      <h2>Preparing resources</h2><p>The launcher reads the selected server's archive list. It verifies and reuses cached files, and downloads missing ones. The first connection can take much longer than later joins. Watch the launcher progress and make sure the resource drive has free space.</p>
      <h2>After BeamNG opens</h2><p>Keep BeamMP Launcher running while you play. On the BeamNG home screen, watch the Repository button. If its counter changes, mod synchronization is still running. You do not need to open it.</p>
      <h2>Joining the server</h2><p><code>Connected!</code> in the BeamMP log means the transport connection is established. Archives, the map and RedSuns authorization may still be loading. Wait for the in-game menu and vehicle selection; these are better signs of readiness than a single log line.</p>
      <h2>Before your first drive</h2><p>Check the <a href="wiki.html?article=steering-assist">countersteer assist</a> in RedSuns settings and tune it for your keyboard, controller or wheel. This helps you get used to how the car behaves in a slide.</p>
      <h2>If loading stops</h2><p>Do not start a second BeamNG or BeamMP instance. Keep the exact error and use the <a href="wiki.html?article=join-troubleshooting">connection-stage guide</a>. If the map appears without the menu or HUD, follow the <a href="wiki.html?article=missing-ui">missing UI guide</a>.</p>`
    }
  },
  {
    id: 'profile', after: 'first-join', cat: 'start', icon: 'folder',
    ru: {
      title: 'Отдельный профиль RedSuns',
      desc: 'Где хранятся настройки игры, личные сборки и серверные моды.',
      body: String.raw`<p class="article-opening">RedSuns запускает BeamNG с отдельной папкой пользователя. Обычный профиль игры остаётся на месте: серверные архивы устанавливаются в профиль RedSuns.</p>
      <h2>Папка профиля</h2><p>Стандартный путь — <code>%LOCALAPPDATA%\RedSuns\BeamNG\Multiplayer\current</code>. Если вы перенесли ресурсы через настройки лаунчера, ориентируйтесь на путь, который там показан. Внутри находятся настройки, личные конфигурации и <code>mods\multiplayer</code> для серверных архивов.</p>
      <h2>Что происходит при создании</h2><p>При первом создании профиля лаунчер копирует часть настроек BeamNG и раскладки управления. Личные моды из обычного профиля не переносятся вместе с ними. После этого серверные архивы устанавливаются в отдельную папку, и лаунчер может использовать уже проверенный кэш.</p>
      <h2>Личные конфигурации</h2><p>Файлы конфигураций машин и раскладки управления обслуживает отдельная синхронизация. Это не копия всего профиля. Подробнее о допустимых файлах и конфликтах — в статье <a href="wiki.html?article=config-sync">«Синхронизация конфигураций»</a>.</p>
      <h2>Если указан неправильный профиль</h2><p>Посмотрите строку <code>Game user path</code> в свежем <code>Launcher.log</code>. Она должна указывать на выбранный профиль RedSuns. Если путь другой, сохраните свежие логи и проверьте путь установки BeamNG и настройки ресурсов лаунчера. Не перемещайте <code>current</code> вручную во время работы игры.</p>`
    },
    en: {
      title: 'Separate RedSuns profile',
      desc: 'Where settings, personal builds and server mods are stored.',
      body: String.raw`<p class="article-opening">RedSuns starts BeamNG with a separate user folder. Your regular game profile remains in place; server archives are installed into the RedSuns profile.</p>
      <h2>Profile folder</h2><p>The default location is <code>%LOCALAPPDATA%\RedSuns\BeamNG\Multiplayer\current</code>. If you moved resources through launcher settings, use the path shown there. The folder contains settings, personal configurations and <code>mods\multiplayer</code> for server archives.</p>
      <h2>First creation</h2><p>When the profile is first created, the launcher copies selected BeamNG settings and input maps. It does not copy personal mods from the regular profile. Server archives are then installed separately, and the launcher can reuse verified downloads.</p>
      <h2>Personal configurations</h2><p>A separate synchronization process handles vehicle configurations and input maps. It does not duplicate the entire profile. See <a href="wiki.html?article=config-sync">Configuration synchronization</a> for file types and conflicts.</p>
      <h2>If the wrong profile opens</h2><p>Read <code>Game user path</code> in a fresh <code>Launcher.log</code>. It should point to the selected RedSuns profile. If it differs, save the logs and check the BeamNG installation and launcher resource paths. Do not move <code>current</code> manually while the game is running.</p>`
    }
  },
  {
    id: 'resource-sync',
    ru: {
      title: 'Как загружаются ресурсы',
      desc: 'Манифест сервера, проверка архивов и повторное использование кэша.',
      body: `<p class="article-opening">Набор модов зависит от выбранного сервера. Лаунчер не угадывает состав папки: он читает манифест с именем, размером и SHA-256 каждого архива.</p>
      <h2>Проверка перед загрузкой</h2><p>Сначала проверяется доступное место. Затем лаунчер ищет архивы в кэше BeamMP и сверяет их с манифестом. Подходящие файлы не скачиваются повторно. Для нового или изменённого архива используется отдельное имя с частью хеша, поэтому старая и новая версии не смешиваются.</p>
      <h2>Прерванная загрузка</h2><p>Данные скачиваются в файл <code>.part</code>. При кратком обрыве сети лаунчер пытается продолжить его с того же места. Если сервер не поддерживает продолжение, загрузка начинается заново. Полностью скачанный файл становится рабочим только после проверки размера и SHA-256.</p>
      <h2>Установка в профиль</h2><p>Проверенные архивы попадают в папку <code>mods/multiplayer</code> отдельного профиля. При переключении сервера лаунчер учитывает набор ресурсов каждого сервера и убирает только архивы, которыми сам управляет. Личные моды не определяются по одному совпадению имени файла.</p>
      <h2>Что означают ошибки</h2><p><code>hash mismatch</code> означает, что полученный ZIP не совпал с ожидаемым. Ошибка копирования может указывать на нехватку места или недоступность папки. Для последовательности действий откройте <a href="wiki.html?article=sync-errors">«Ошибка синхронизации»</a>.</p>`
    },
    en: {
      title: 'How resources are downloaded',
      desc: 'Server manifests, archive verification and cache reuse.',
      body: `<p class="article-opening">The mod set depends on the selected server. The launcher reads a manifest containing each archive's name, size and SHA-256.</p>
      <h2>Before downloading</h2><p>The launcher checks free space, then looks for archives in the BeamMP cache and compares them with the manifest. Matching files are reused. New versions receive a cache name containing part of the hash, so old and new archives cannot be confused.</p>
      <h2>Interrupted downloads</h2><p>Downloads use a <code>.part</code> file. After a short network interruption, the launcher attempts to resume from the saved bytes. If the server does not support resuming, it starts over. An archive becomes active only after its size and SHA-256 match.</p>
      <h2>Installing into the profile</h2><p>Verified archives are installed under <code>mods/multiplayer</code> in the separate profile. When changing servers, the launcher tracks each server's resource set and removes only archives it manages. A matching filename alone does not establish ownership of a personal mod.</p>
      <h2>Errors</h2><p><code>hash mismatch</code> means the ZIP does not match the expected archive. A copy error may indicate insufficient space or inaccessible folders. Follow the <a href="wiki.html?article=sync-errors">synchronization error guide</a>.</p>`
    }
  },
  {
    id: 'config-sync',
    ru: {
      title: 'Синхронизация личных конфигураций',
      desc: 'Какие файлы передаются между профилями и где искать конфликтные версии.',
      body: String.raw`<p class="article-opening">Лаунчер синхронизирует выбранные личные файлы между обычным профилем BeamNG и RedSuns. Серверные ZIP и вся папка модов в этот механизм не входят.</p>
      <h2>Какие файлы участвуют</h2><ul><li><code>vehicles\&lt;модель&gt;\*.pc</code> — сохранённые конфигурации, а также их изображения и описание при наличии.</li><li>Файлы раскладок в <code>settings\inputmaps</code> и <code>settings\cloud\inputmaps</code>.</li><li><code>settings\redsuns\controls.json</code> — настройки управления RedSuns.</li></ul>
      <h2>Когда происходит обмен</h2><p>Перед запуском игра получает изменения из обычного профиля. Пока работает именно запущенная через RedSuns игра, помощник выгружает изменения обратно. Удаления во время игры не передаются мгновенно; после её закрытия выполняется итоговая синхронизация.</p>
      <h2>Конфликты и резервные версии</h2><p>Для каждого файла хранится предыдущий хеш. Если обе стороны изменились, перезаписываемая версия сохраняется в <code>personal-sync-backups</code> рядом с профилем, с именем по хешу. Не удаляйте эту папку, если разбираете пропавшую сборку.</p>
      <h2>Важное ограничение</h2><p>Наличие файла <code>.pc</code> в профиле не означает, что соответствующая машина установлена на сервере. При поиске сборок для импорта в аккаунт лаунчер отдельно сверяет модель с загруженными серверными архивами. Если в папке профиля появились конфигурации несерверных машин, они сами по себе не добавляют мод и их не нужно пытаться загрузить на сервере.</p>`
    },
    en: {
      title: 'Personal configuration sync',
      desc: 'Which files move between profiles and where conflicting versions are saved.',
      body: String.raw`<p class="article-opening">The launcher synchronizes selected personal files between the regular BeamNG profile and RedSuns. Server ZIPs and the entire mods folder are outside this process.</p>
      <h2>Included files</h2><ul><li><code>vehicles\&lt;model&gt;\*.pc</code> configurations, with available preview images and descriptions.</li><li>Input maps in <code>settings\inputmaps</code> and <code>settings\cloud\inputmaps</code>.</li><li><code>settings\redsuns\controls.json</code> for RedSuns controls.</li></ul>
      <h2>When files are exchanged</h2><p>Changes from the regular profile are considered before launch. While the game started by RedSuns is running, a helper exports changes back. Deletions are held until the game has closed and the final sync runs.</p>
      <h2>Conflicts and backups</h2><p>The previous hash is recorded for each file. If both sides changed, the displaced version is saved under <code>personal-sync-backups</code> beside the profile, indexed by its hash. Keep this folder while investigating a missing build.</p>
      <h2>Important limitation</h2><p>A <code>.pc</code> file in the profile does not mean that vehicle is available on the server. Account build import separately checks models against downloaded server archives. A configuration for another vehicle does not install its mod or make it usable on the server.</p>`
    }
  },
  {
    id: 'join-troubleshooting', after: 'missing-ui', cat: 'help', icon: 'network',
    ru: {
      title: 'На каком этапе остановился вход',
      desc: 'Как отличить проблему BeamMP, загрузки ресурсов и авторизации RedSuns.',
      body: `<p class="article-opening">Перед повторным запуском посмотрите, на каком этапе остановилось подключение. Это поможет сразу выбрать нужную инструкцию и сохранить правильный лог.</p>
      <h2>Игра или BeamMP не запустились</h2><p>Если BeamNG не открылась, проверьте путь к установленной игре в лаунчере. Если открылся BeamMP, но игра не стартовала, сохраните свежий <code>Launcher.log</code> из папки BeamMP. Лаунчер проверяет, что игра открыла ожидаемую установку и отдельный профиль RedSuns.</p>
      <h2>Авторизация BeamMP</h2><p>После <code>Game Connected!</code> BeamMP пытается авторизоваться. Если ошибка относится к <code>auth.beammp.com</code> или <code>backend.beammp.com</code>, проблема возникла до загрузки игрового сервера. Проверьте сеть и повторите вход; VPN должен пропускать трафик BeamMP и BeamNG, а не только браузера.</p>
      <h2>Архивы и карта</h2><p>Строки <code>Checking Resources...</code> и <code>Syncing...</code> относятся к проверке и подготовке модов. На главной странице BeamNG может меняться счётчик кнопки «Репозиторий». Если появился <code>hash mismatch</code>, перейдите к <a href="wiki.html?article=sync-errors">ошибкам синхронизации</a>.</p>
      <h2>Соединение уже есть, меню ещё нет</h2><p><code>Connected!</code> — ещё не готовый игровой сеанс. После него могут загружаться карта и авторизация RedSuns. Если осталась пустая карта, следуйте статье <a href="wiki.html?article=missing-ui">«Нет меню или HUD»</a>.</p>
      <h2>Что передать поддержке</h2><p>Укажите сервер, время попытки и последний видимый этап. Сохраните логи <em>до следующего запуска</em>: BeamMP перезаписывает <code>Launcher.log</code> при новом старте. Подробный список — в статье <a href="wiki.html?article=logs">о логах</a>.</p>`
    },
    en: {
      title: 'Find the failed join stage',
      desc: 'Distinguish BeamMP sign-in, resource loading and RedSuns authorization.',
      body: `<p class="article-opening">Before retrying, identify the last completed stage. This helps you choose the right guide and preserve the relevant log.</p>
      <h2>BeamNG or BeamMP did not start</h2><p>If BeamNG did not open, check its installation path in the launcher. If BeamMP opened but the game did not, save a fresh <code>Launcher.log</code> from the BeamMP folder. The launcher checks that the expected game installation and RedSuns profile were selected.</p>
      <h2>BeamMP sign-in</h2><p>After <code>Game Connected!</code>, BeamMP authenticates. An error mentioning <code>auth.beammp.com</code> or <code>backend.beammp.com</code> occurs before the game server loads. Check the connection and retry; a VPN must route BeamMP and BeamNG, not only the browser.</p>
      <h2>Archives and map</h2><p><code>Checking Resources...</code> and <code>Syncing...</code> mean mods are being checked and prepared. The Repository button counter may change on the BeamNG home screen. For <code>hash mismatch</code>, follow the <a href="wiki.html?article=sync-errors">sync error guide</a>.</p>
      <h2>Connected, but no menu yet</h2><p><code>Connected!</code> does not mean the game session is ready. The map and RedSuns authorization may still be loading. If the map stays empty, follow <a href="wiki.html?article=missing-ui">Missing menu or HUD</a>.</p>
      <h2>Send the right evidence</h2><p>Include the server, attempt time and last visible stage. Save logs <em>before the next launch</em>: BeamMP overwrites <code>Launcher.log</code> at startup. See the <a href="wiki.html?article=logs">logs guide</a>.</p>`
    }
  },
  {
    id: 'logs',
    ru: {
      title: 'Какие логи нужны поддержке',
      desc: 'Точные пути и порядок сбора файлов после неудачного входа.',
      body: String.raw`<p class="article-opening">Сохраните файлы сразу после ошибки и до следующей попытки. В особенности это касается BeamMP: он начинает новый <code>Launcher.log</code> при каждом запуске.</p>
      <h2>Лог BeamNG</h2><p><code>beamng.log</code> находится в активном профиле игры. По умолчанию это <code>%LOCALAPPDATA%\RedSuns\BeamNG\Multiplayer\current\beamng.log</code>. При переносе ресурсов путь изменится; его можно проверить по строке <code>Game user path</code> в BeamMP.</p>
      <h2>Лог BeamMP</h2><p><code>Launcher.log</code> лежит рядом с используемым <code>BeamMP-Launcher.exe</code>. Точный путь к исполняемому файлу указан в настройках RedSuns Launcher. Скопируйте лог до повторного запуска, иначе предыдущая попытка может быть затёрта.</p>
      <h2>Диагностика RedSuns Launcher</h2><p><code>launcher-network.log</code> и предыдущий файл <code>launcher-network.log.1</code> находятся в <code>%LOCALAPPDATA%\RedSuns</code>. Здесь же лежит <code>launch-diagnostic.json</code> с последним этапом входа. Сетевой лог записывает диагностические события; он полезен, если лаунчер не получает манифест или архив.</p>
      <h2>Что написать в обращении</h2><ul><li>Никнейм и выбранный сервер.</li><li>Время попытки с часовым поясом.</li><li>Что именно видно: ошибка в лаунчере, загрузка модов, пустая карта или закрывшаяся игра.</li><li>Точный текст ошибки и имена архивов, если они указаны.</li></ul><p>Перед отправкой проверьте, нет ли в логах личных данных, которые вы не хотите раскрывать. Не публикуйте логи в открытом канале, если можно передать их поддержке приватно.</p>`
    },
    en: {
      title: 'Logs for support',
      desc: 'Exact locations and how to preserve files after a failed join.',
      body: String.raw`<p class="article-opening">Copy the files immediately after an error and before trying again. BeamMP starts a new <code>Launcher.log</code> at every launch.</p>
      <h2>BeamNG log</h2><p><code>beamng.log</code> is in the active game profile. The default is <code>%LOCALAPPDATA%\RedSuns\BeamNG\Multiplayer\current\beamng.log</code>. If you moved resources, the path changes; check <code>Game user path</code> in the BeamMP log.</p>
      <h2>BeamMP log</h2><p><code>Launcher.log</code> is beside the <code>BeamMP-Launcher.exe</code> in use. RedSuns Launcher settings show that executable's location. Copy the log before restarting, or the previous attempt may be overwritten.</p>
      <h2>RedSuns Launcher diagnostics</h2><p><code>launcher-network.log</code> and the rotated <code>launcher-network.log.1</code> are under <code>%LOCALAPPDATA%\RedSuns</code>. The same directory contains <code>launch-diagnostic.json</code> with the latest join stage. The network log helps when the launcher cannot obtain a manifest or archive.</p>
      <h2>Include with your report</h2><ul><li>Nickname and selected server.</li><li>Attempt time and time zone.</li><li>What you saw: launcher error, mod loading, empty map or game closure.</li><li>The exact error and archive filenames, if shown.</li></ul><p>Check the files for personal data you do not want to disclose. Send logs privately to support when possible.</p>`
    }
  },
  {
    id: 'sync-errors',
    ru: {
      title: 'Ошибка загрузки или проверки модов',
      desc: 'Что делать при обрыве загрузки, hash mismatch и ошибке копирования.',
      body: `<p class="article-opening">Сначала запишите точный текст ошибки и имя архива. Эти данные помогут отличить сетевой обрыв от повреждённого файла и нехватки места.</p>
      <h2>Загрузка прервалась</h2><p>Лаунчер хранит недокачанный архив в <code>.part</code> и при повторной попытке может продолжить загрузку. Проверьте подключение к сети и нажмите «Играть» ещё раз. Если используете VPN, убедитесь, что через него идёт трафик RedSuns Launcher и BeamMP.</p>
      <h2>Hash mismatch</h2><p>Размер или SHA-256 скачанного архива не совпал с манифестом. Лаунчер не должен устанавливать такой файл. Повторите попытку: повреждённый полный файл не используется как готовый кэш. Если ошибка повторяется на том же ZIP, сохраните имя архива, <code>launcher-network.log</code> и свежий BeamMP <code>Launcher.log</code>.</p>
      <h2>Не удалось скопировать мод</h2><p>Проверьте свободное место и доступность папки профиля RedSuns и кэша BeamMP. Во время загрузки нужно место не только для итогового ZIP, но и для временного файла и копирования. Не переносите папки вручную при запущенной игре.</p>
      <h2>Когда обращаться в поддержку</h2><p>Если повторный запуск снова останавливается на том же архиве, передайте сервер, время, имя файла и <a href="wiki.html?article=logs">логи</a>. Не скачивайте архив из случайного источника: его хеш должен совпасть с серверным манифестом.</p>`
    },
    en: {
      title: 'Mod download or verification error',
      desc: 'Interrupted downloads, hash mismatch and copy failures.',
      body: `<p class="article-opening">First note the exact error and archive name. They help distinguish a network interruption from a damaged file or insufficient space.</p>
      <h2>Interrupted download</h2><p>The launcher keeps partial bytes in a <code>.part</code> file and may resume on retry. Check the connection and press Play again. If using a VPN, make sure it carries RedSuns Launcher and BeamMP traffic.</p>
      <h2>Hash mismatch</h2><p>The archive size or SHA-256 differs from the manifest. The launcher must not install that file. Retry: a damaged complete archive is not accepted as a valid cache entry. If the same ZIP fails again, save its name, <code>launcher-network.log</code> and a fresh BeamMP <code>Launcher.log</code>.</p>
      <h2>Copy failed</h2><p>Check free space and access to the RedSuns profile and BeamMP cache. Downloading can require room for the temporary file as well as the final ZIP and copy. Do not move folders manually while the game is running.</p>
      <h2>Contacting support</h2><p>If the same archive fails after retrying, send the server, time, filename and <a href="wiki.html?article=logs">logs</a>. Do not use an archive from an unrelated source; its hash must match the server manifest.</p>`
    }
  },
  {
    id: 'missing-ui',
    ru: {
      title: 'Нет меню или HUD',
      desc: 'Что делать, если вместо интерфейса RedSuns видна пустая карта.',
      body: `<p class="article-opening">Если BeamNG показала карту без меню RedSuns и HUD, сначала сохраните сведения о неудачной попытке. Одна строка <code>Connected!</code> в BeamMP ещё не подтверждает, что игровой интерфейс загрузился.</p>
      <h2>Сохраните признаки ошибки</h2><p>Запишите сервер, время и то, что осталось на экране. Если игра ещё открыта, сохраните <code>beamng.log</code> из активного профиля и свежий BeamMP <code>Launcher.log</code>. Последний будет перезаписан при следующем запуске BeamMP.</p>
      <h2>Повторный вход</h2><ol><li>Полностью закройте BeamNG и BeamMP Launcher.</li><li>Проверьте, что оба процесса завершились.</li><li>Запустите сервер заново через RedSuns Launcher и дождитесь окончания загрузки ресурсов и появления меню.</li></ol><p>Не копируйте вручную архив Framework в профиль во время работающей игры.</p>
      <h2>Если повторяется</h2><p>Откройте <a href="wiki.html?article=join-troubleshooting">диагностику этапов входа</a>. Приложите к обращению оба свежих лога, <code>launch-diagnostic.json</code>, сервер и время. Особое значение имеют строки после подключения к серверу и сообщения о загрузке Framework или Lua.</p>`
    },
    en: {
      title: 'Missing menu or HUD',
      desc: 'What to do if the map appears without the RedSuns interface.',
      body: `<p class="article-opening">If BeamNG shows the map without the RedSuns menu or HUD, first preserve evidence from the failed attempt. A single <code>Connected!</code> line in BeamMP does not prove the interface loaded.</p>
      <h2>Preserve the evidence</h2><p>Note the server, time and what remained on screen. If the game is still open, save <code>beamng.log</code> from the active profile and a fresh BeamMP <code>Launcher.log</code>. The latter will be overwritten when BeamMP starts again.</p>
      <h2>Join again</h2><ol><li>Close BeamNG and BeamMP Launcher completely.</li><li>Verify that both processes have exited.</li><li>Start the server through RedSuns Launcher and wait for resources and the menu to finish loading.</li></ol><p>Do not manually copy Framework archives while the game is running.</p>
      <h2>If it repeats</h2><p>Use the <a href="wiki.html?article=join-troubleshooting">connection-stage guide</a>. Include both fresh logs, <code>launch-diagnostic.json</code>, the server and attempt time. Lines after the server connection and Framework or Lua loading errors are especially useful.</p>`
    }
  },
  {
    id: 'cars',
    ru: {
      title: 'Выбор машины', desc: 'Как выбрать модель и конфигурацию перед появлением на сервере.',
      body: `<p class="article-opening">Откройте меню RedSuns клавишей <strong>G</strong> и перейдите в «Машины». Здесь вы выбираете модель, затем доступную конфигурацию и появляетесь на сервере.</p>
      <h2>Модель и конфигурация</h2><p>Сначала выберите машину из списка выбранного сервера. Затем выберите конфигурацию этой модели. Состав машин и конфигураций зависит от серверного модпака; <a href="wiki.html?vehicles=all">каталог Wiki</a> показывает модели, найденные в серверных архивах.</p>
      <h2>Свои сборки</h2><p>Если вы сохранили собственную конфигурацию, она появляется среди вариантов выбранной машины. Создание и сохранение сборки выполняется в <a href="wiki.html?article=tuning">тюнинге</a>; правила хранения, импорта и лимиты описаны в статье <a href="wiki.html?article=garage">«Личные сборки»</a>.</p>`
    },
    en: {
      title: 'Choose a vehicle', desc: 'Select a model and configuration before spawning on the server.',
      body: `<p class="article-opening">Open the RedSuns menu with <strong>G</strong> and select Vehicles. Choose a model, then one of its available configurations, and spawn on the server.</p>
      <h2>Model and configuration</h2><p>Start with a vehicle from the selected server's list, then choose its configuration. Vehicles and configurations depend on the server modpack; the <a href="wiki.html?vehicles=all">Wiki catalogue</a> shows models found in server archives.</p>
      <h2>Your builds</h2><p>A saved personal configuration appears among the choices for its vehicle. Create and save builds in <a href="wiki.html?article=tuning">Tuning</a>; storage, imports and limits are covered in <a href="wiki.html?article=garage">Personal builds</a>.</p>`
    }
  },
  {
    id: 'garage',
    ru: {
      title: 'Личные сборки',
      desc: 'Сохранение конфигураций, импорт из BeamNG и лимит коллекции.',
      body: `<p class="article-opening">Личная сборка — это сохранённая конфигурация машины. В <a href="wiki.html?article=tuning">тюнинге</a> вы меняете и сохраняете её; в гараже меню <strong>G → Машины</strong> выбираете сборку перед появлением. <a href="wiki.html?article=workshop">Мастерская лаунчера</a> хранит публикации отдельно.</p>
      <h2>Сохранение и проверка</h2><p>В тюнинге откройте «Мои сборки», сохраните текущую конфигурацию под различимым именем и попробуйте загрузить её снова. Там же можно назначить сборку основной или удалить. Если конфигурация опирается на деталь, которой нет в модпаке выбранного сервера, сохранённый файл сам по себе не добавит эту деталь в игру.</p>
      <h2>Импорт из обычной BeamNG</h2><p>Лаунчер ищет собственные <code>.pc</code> файлы в папке <code>vehicles/&lt;модель&gt;</code> обычного профиля. Для импорта в аккаунт он рассматривает только модели, найденные в скачанных серверных архивах. Сервер дополнительно проверяет формат конфигурации, детали и доступ игрока к базовой машине.</p>
      <h2>Почему написано «Уже сохранено»</h2><p>Одинаковая по содержимому сборка не добавляется повторно. Несколько записей в отчёте могут относиться к разным локальным файлам с одинаковой конфигурацией. При повторном входе список уже импортированных сборок сохраняется.</p>
      <h2>Почему написано «Build limit reached»</h2><p>Для импортируемых сборок действует лимит <strong>12 конфигураций на одну модель</strong>. Если он достигнут, новые импорты отклоняются, а существующие сборки остаются на месте. Освободите место именно в «Моих сборках» этой машины и повторите импорт. Удаление публикации из мастерской не решает этот лимит.</p>
      <h2>Если сборка пропала</h2><p>Проверьте выбранный сервер и модель машины. Если проблема связана с переносом файла между профилями, не удаляйте <code>personal-sync-backups</code>; смотрите <a href="wiki.html?article=config-sync">синхронизацию конфигураций</a> и сохраните свежие <a href="wiki.html?article=logs">логи</a>.</p>`
    },
    en: {
      title: 'Personal builds',
      desc: 'Save configurations, import from BeamNG and manage collection limits.',
      body: `<p class="article-opening">A personal build is a saved vehicle configuration. Edit and save it in <a href="wiki.html?article=tuning">Tuning</a>; select it before spawning under <strong>G → Vehicles</strong>. <a href="wiki.html?article=workshop">Launcher Workshop</a> stores publications separately.</p>
      <h2>Saving and checking</h2><p>In Tuning, open My Builds, save the current configuration under a distinct name and load it again to check it. You can also set a default or delete a build there. A saved file cannot install a part absent from the selected server's modpack.</p>
      <h2>Importing from regular BeamNG</h2><p>The launcher scans native <code>.pc</code> files under <code>vehicles/&lt;model&gt;</code> in the regular profile. For account import it considers only models found in downloaded server archives. The server also validates the format, parts and access to the base vehicle.</p>
      <h2>“Already saved”</h2><p>An identical build is not added twice. Several report lines can refer to different local files with the same configuration. Previously imported builds are retained between joins.</p>
      <h2>“Build limit reached”</h2><p>Imported builds have a limit of <strong>12 configurations per model</strong>. When full, new imports are rejected while existing builds remain. Free space in that vehicle's My Builds collection and retry. Removing a Workshop publication does not change this limit.</p>
      <h2>If a build disappears</h2><p>Check the selected server and vehicle model. If a file transfer between profiles is involved, keep <code>personal-sync-backups</code>; see <a href="wiki.html?article=config-sync">configuration sync</a> and save fresh <a href="wiki.html?article=logs">logs</a>.</p>`
    }
  },
  {
    id: 'low-pc',
    ru: {
      title: 'Слабый ПК', desc: 'Отображение машин игроков, очередь синхронизации и графика BeamNG.',
      body: `<p class="article-opening">Если FPS падает рядом с другими игроками, начните с отображения чужих машин в меню RedSuns: <strong>ESC → Multiplayer → Машины</strong>. Эти настройки меняют только то, что видите вы.</p>
      <h2>Как показывать чужие машины</h2><ul><li><strong>Original</strong> — реальные модели и конфигурации игроков.</li><li><strong>RS Sedan</strong> — облегчённая серверная Altezza вместо каждой чужой машины.</li><li><strong>My Car</strong> — ваша текущая модель вместо чужих машин. Пока своя машина не загружена, используется RS Sedan.</li><li><strong>Balls</strong> — движущиеся шары вместо машин игроков.</li></ul><p>В трёх упрощённых режимах столкновения с другими игроками отключаются: показанная модель не совпадает с их настоящей машиной. Ваша машина и машины других игроков на их экранах не меняются.</p>
      <h2>Когда обновлять чужие машины</h2><p>Для <strong>Original + Smart</strong> обновления применяются по одной машине после трёх секунд остановки. <strong>Manual</strong> оставляет их в очереди до нажатия <strong>F5</strong> или кнопки «Синхронизировать». В RS Sedan, My Car и Balls автоматическое обновление после первоначальной загрузки приостанавливается: нажмите F5, когда хотите применить накопившиеся изменения. Это позволяет выбрать момент без резкого падения FPS в движении.</p>
      <h2>Настройки BeamNG 0.40</h2><p>На совместимой видеокарте попробуйте DLSS или FSR 3 в настройках графики BeamNG. Результат зависит от видеокарты и выбранного режима. Если ограничивает процессор из-за машин и физики, масштабирование картинки не устранит этот предел; тогда особенно полезны облегчённые модели. Уменьшение теней и отражений также может помочь.</p>`
    },
    en: {
      title: 'Lower-end PCs', desc: 'Remote vehicle presentation, sync queues and BeamNG graphics.',
      body: `<p class="article-opening">If FPS drops around other players, start with remote vehicle display under <strong>RedSuns ESC menu → Multiplayer → Vehicles</strong>. These settings change only what you see.</p>
      <h2>How other vehicles appear</h2><ul><li><strong>Original</strong> shows real models and configurations.</li><li><strong>RS Sedan</strong> replaces each remote vehicle with the lightweight server Altezza.</li><li><strong>My Car</strong> uses your current model; RS Sedan is used until your car is ready.</li><li><strong>Balls</strong> displays moving spheres.</li></ul><p>In the three simplified modes, collisions with other players are disabled because the displayed geometry is not their real vehicle. Your car and what other players see remain unchanged.</p>
      <h2>When remote cars update</h2><p>With <strong>Original + Smart</strong>, updates apply one vehicle at a time after you have stopped for three seconds. <strong>Manual</strong> keeps updates queued until you press <strong>F5</strong> or Sync. In RS Sedan, My Car and Balls, automatic updates pause after the initial join; press F5 when you want to apply later changes. This lets you avoid a sudden rebuild while driving.</p>
      <h2>BeamNG 0.40 graphics</h2><p>On supported hardware, try DLSS or FSR 3 in BeamNG graphics settings. The gain depends on your GPU and selected mode. If vehicle physics limits the CPU, upscaling cannot remove that limit; simplified remote models are more relevant. Lower shadows and reflections may also help.</p>`
    }
  },
  {
    id: 'multiplayer-settings', after: 'low-pc', cat: 'settings', icon: 'network',
    ru: {
      title: 'Настройки Multiplayer', desc: 'Машины игроков, таблички с именами, коллизия и сеть.',
      body: `<p class="article-opening">Меню RedSuns открывается через <strong>ESC</strong>. В разделе Multiplayer находятся клиентские параметры: «Игроки», «Машины» и «Сеть».</p>
      <h2>Игроки</h2><p>Можно включить имена над автомобилями, расстояние до игрока, плавное затухание дальних имён и сокращение длинных никнеймов. Отдельный переключатель показывает метки зрителей. Эти параметры влияют на отображение у вас.</p>
      <h2>Машины игроков</h2><p>Здесь выбирают вид чужих машин и способ применения сетевых обновлений. Режимы Original, RS Sedan, My Car, Balls и Smart/Manual подробно разобраны в статье <a href="wiki.html?article=low-pc">«Слабый ПК»</a>. Правила столкновений и возврата к настоящим моделям описаны отдельно в статье <a href="wiki.html?article=collisions">«Столкновения с игроками»</a>.</p>
      <h2>Сеть</h2><p>«Плавные позиции машин» сглаживает видимые рывки при нестабильной связи. «Отправлять изменения моей машины автоматически» помогает другим клиентам получить ваши новые детали, но не заставляет их немедленно перестроить вашу машину: у них может быть своя очередь синхронизации.</p>`
    },
    en: {
      title: 'Multiplayer settings', desc: 'Remote cars, nametags, collisions and network options.',
      body: `<p class="article-opening">Open the RedSuns menu with <strong>ESC</strong>. Multiplayer contains client settings under Players, Vehicles and Network.</p>
      <h2>Players</h2><p>Choose whether to show nametags, distance, fading at range and shortened long names. A separate option shows spectator tags. These affect your display.</p>
      <h2>Vehicles</h2><p>Choose how remote vehicles appear and when network updates apply. Original, RS Sedan, My Car, Balls and Smart/Manual are explained in <a href="wiki.html?article=low-pc">Lower-end PCs</a>. Collision behavior and returning to real models are covered under <a href="wiki.html?article=collisions">Collisions with players</a>.</p>
      <h2>Network</h2><p>Smooth vehicle positions reduces visible warping on an unstable connection. Send my car changes automatically helps other clients receive your new parts, but their own sync queues decide when your car is rebuilt on their screens.</p>`
    }
  },
  {
    id: 'voice',
    ru: {
      title: 'Голосовой чат', desc: 'Как включить микрофон, выбрать устройства и проверить соединение.',
      body: `<p class="article-opening">Голосовой чат RedSuns привязан к вашему автомобилю. Игра передаёт положение машины, а захват микрофона и соединение выполняет запущенный RedSuns Launcher. Во время игры оставляйте лаунчер открытым.</p>
      <h2>Как говорить</h2><p>Назначьте действие «Переключить микрофон» в <strong>ESC → Управление</strong>. Нажатие включает передачу голоса, повторное нажатие выключает. В HUD видны состояния «Голос готов», «Передача», «Подключение» или «Офлайн». При потере связи с лаунчером микрофон закрывается автоматически.</p>
      <h2>Устройства и громкость</h2><p>В <strong>ESC → Аудио → Голосовой чат</strong> выберите микрофон и устройство вывода. Там есть живой индикатор уровня микрофона, отдельная громкость своего микрофона и голосов других игроков. Показатель входного сигнала помогает проверить устройство до разговора. В списке игроков можно локально заглушить голос конкретного человека.</p>
      <h2>Если не работает</h2><ol><li>Убедитесь, что лаунчер запущен и в разделе Аудио соединение отображается как подключённое.</li><li>Проверьте устройство ввода и движение индикатора при разговоре.</li><li>Проверьте разрешение микрофона в Windows и уровень устройства.</li><li>Если статус остаётся «Подключение / офлайн», нажмите «Перезагрузить» у состояния голоса. После смены устройства подождите применения настроек.</li></ol><p>Если проблема сохраняется, укажите, отсутствует ли соединение или только входной звук, и приложите <a href="wiki.html?article=logs">логи</a>.</p>`
    },
    en: {
      title: 'Voice chat', desc: 'Enable the microphone, select devices and check the connection.',
      body: `<p class="article-opening">RedSuns spatial voice follows your vehicle. The game provides its position, while the running RedSuns Launcher captures the microphone and maintains the connection. Keep the launcher open while playing.</p>
      <h2>Speaking</h2><p>Bind Toggle microphone under <strong>ESC → Controls</strong>. Press once to transmit and again to mute. The HUD reports Voice ready, Transmitting, Connecting or Offline. The microphone closes automatically if the launcher connection is lost.</p>
      <h2>Devices and levels</h2><p>Under <strong>ESC → Audio → Voice Chat</strong>, select input and output devices. There is a live microphone meter, separate gain for your transmitted voice and volume for other players. Use the meter to confirm the input before speaking. You can locally mute an individual player in the player list.</p>
      <h2>Troubleshooting</h2><ol><li>Keep the launcher running and check that Audio reports Connected.</li><li>Check the selected input and whether the meter moves while you speak.</li><li>Check Windows microphone permission and device level.</li><li>If the status stays Connecting / Offline, use Reload beside the connection status. After changing devices, allow time for the change to apply.</li></ol><p>If it still fails, tell support whether the connection or only microphone input is missing, and include <a href="wiki.html?article=logs">logs</a>.</p>`
    }
  },
  {
    id: 'replays',
    ru: {
      title: 'Реплеи', desc: 'Запись на сервере, сохранение, просмотр и совместимость модов.',
      body: `<p class="article-opening">В RedSuns можно записать заезд, не покидая сервер. Запись использует встроенный механизм BeamNG; кнопка «Остановить и сохранить» завершает её локально.</p>
      <h2>Записать заезд</h2><p>Откройте «Реплеи» в игровом меню и нажмите «Начать запись». В окне видны состояние и таймер; в HUD во время записи появляется REC. Клавишу «Начать / остановить запись» можно назначить через управление. Перед стартом дождитесь загрузки карты и завершения синхронизации машин игроков. Для новой записи после остановки требуется короткая пауза.</p>
      <h2>Открыть библиотеку</h2><p>Просмотр и настройка камер выполняются штатными инструментами BeamNG вне сетевого сеанса. Кнопка «Библиотека реплеев» запросит подтверждение выхода с сервера; активная запись сначала будет сохранена. Простое закрытие окна рекордера запись не останавливает.</p>
      <h2>Совместимость</h2><p>Рядом с новой записью RedSuns сохраняет файл метаданных <code>.redsuns.json</code>: версию BeamNG, карту, список модов и машины на момент записи. При открытии проверяются версия игры и необходимые архивы. Старые записи без этого файла открываются через штатные проверки BeamNG, без гарантии совместимости. Повреждение метаданных само по себе не удаляет реплей.</p>
      <h2>Если реплей не открывается</h2><p>Сохраните точный текст ошибки и файл записи. Сообщение о другом наборе модов означает, что серверные архивы изменились или отсутствуют; сообщение о другой версии BeamNG относится к версии игры. Воспроизведение во время подключения к серверу не поддерживается.</p>`
    },
    en: {
      title: 'Replays', desc: 'Recording on the server, saving, playback and mod compatibility.',
      body: `<p class="article-opening">RedSuns can record a drive without leaving the server. It uses BeamNG's native recorder; Stop & save completes the local recording.</p>
      <h2>Record a drive</h2><p>Open Replays in the game menu and press Start recording. The panel shows status and a timer; REC appears in the HUD during recording. Bind Record / stop replay under Controls if you prefer a key. Wait for the map and remote vehicle sync to settle first. There is a brief cooldown before starting another recording.</p>
      <h2>Open the library</h2><p>Playback and camera editing use BeamNG's native tools outside the multiplayer session. Replay library asks you to confirm leaving the server and saves an active recording first. Closing the recorder panel alone does not stop recording.</p>
      <h2>Compatibility</h2><p>RedSuns saves a <code>.redsuns.json</code> metadata file alongside new recordings with the BeamNG version, map, mods and vehicles at capture time. Opening checks the game version and required archives. Older recordings without this file use BeamNG's native checks without a compatibility guarantee. Damaged metadata alone does not remove the replay.</p>
      <h2>If playback fails</h2><p>Keep the exact error and replay file. A mod-set error means required server archives changed or are missing; a game-version error refers to BeamNG itself. Playback while connected to the server is not supported.</p>`
    }
  },
  {
    id: 'controls',
    ru: {
      title: 'Управление', desc: 'Клавиатура, геймпад, руль и отдельные назначения RedSuns.',
      body: `<p class="article-opening">Откройте <strong>ESC → Управление</strong>. Назначения RedSuns сохраняются в отдельном профиле и действуют во время серверной сессии; стандартные раскладки BeamNG не переписываются.</p>
      <h2>Найти действие</h2><p>Сверху выберите устройство: клавиатуру, мышь, геймпад, руль, педали и коробку или другое устройство. Поиск фильтрует список действий. Внутри есть управление интерфейсом RedSuns, вождением и механической коробкой. Например, здесь назначаются открытие гаража, микрофон, запись реплея и переключение автомата/механики.</p>
      <h2>Изменить клавишу</h2><p>Откройте строку действия и нажмите «Изменить», затем нужную клавишу. Можно добавить вторую клавишу или сочетание. Нажатие Esc отменяет захват. Если ввод уже назначен другому действию, появится явное предложение связать оба действия; подтвердите его только если хотите запускать их одной клавишей. Лишнее назначение удаляется кнопкой рядом с ним.</p>
      <h2>Оси, руль и геймпад</h2><p>Для осей доступны проверка входного сигнала, калибровка, мёртвые зоны, линейность и инверсия. В настройке оси руля есть угол, силовая отдача и дополнительные параметры вибрации для совместимого устройства. Отдельного общего переключателя вибрации геймпада в текущем меню RedSuns нет; вкладка геймпада показывает обнаруженные назначения устройства.</p><p>После назначения кнопок настройте <a href="wiki.html?article=steering-assist">подруль — помощник контрруления</a>: его сила заметно меняет поведение машины при заносе. Он находится в другом разделе меню, а для руля и геймпада применяется отдельно.</p>
      <h2>Если устройство не реагирует</h2><p>Проверьте, что оно отображается как подключённое, и откройте деталь конкретного назначения. Посмотрите, движется ли индикатор оси. Затем проверьте назначение в машине. Кнопка сброса восстанавливает назначения выбранного типа устройства; используйте её, если ручное исправление не помогло.</p>`
    },
    en: {
      title: 'Controls', desc: 'Keyboard, gamepad, wheel and separate RedSuns bindings.',
      body: `<p class="article-opening">Open <strong>ESC → Controls</strong>. RedSuns bindings are saved in a separate profile and active for the server session; native BeamNG input maps are not rewritten.</p>
      <h2>Find an action</h2><p>Select Keyboard, Mouse, Gamepad, Wheel, Pedals & shifter or Other devices. Search filters the action list. Categories include the RedSuns interface, driving and manual transmission. You can bind the garage, microphone, replay recording and automatic/manual gearbox switch here.</p>
      <h2>Change a key</h2><p>Expand an action and choose Change, then press the key. You can add an alternate key or a combination. Esc cancels capture. If the input already belongs to another action, the interface asks whether to link both actions; accept only if you want one key to trigger both. Remove an unwanted binding with the button beside it.</p>
      <h2>Axes, wheel and gamepad</h2><p>Axis options include an input meter, calibration, deadzones, linearity and inversion. The wheel steering axis has angle, force feedback and additional vibration options for compatible hardware. The current RedSuns menu has no separate global gamepad vibration switch; the Gamepad tab shows detected device bindings.</p><p>After binding controls, adjust the <a href="wiki.html?article=steering-assist">countersteer assistant</a>. Its strength changes how the car responds during a slide. It lives in a different menu section and has a separate switch for wheels and controllers.</p>
      <h2>If an input does not respond</h2><p>Check that the device is shown as connected and expand its binding. Watch the axis meter, then test the action in a car. Reset to defaults restores bindings for the selected device type if manual correction does not help.</p>`
    }
  },
  {
    id: 'steering-assist', after: 'controls', cat: 'settings', icon: 'settings',
    ru: {
      title: 'Подруль и помощники руления',
      desc: 'Как настроить контрруление под клавиатуру, геймпад или руль.',
      body: `<p class="article-opening">«Подруль» — так игроки называют помощник контрруления. Когда задняя ось начинает скользить, он добавляет поворот руля навстречу заносу. Настройте его под свой способ управления и машину: от этого зависит, насколько предсказуемо автомобиль ведёт себя в повороте и дрифте.</p>
      <h2>Где найти</h2><p>На сервере откройте <strong>ESC → Игра → Рулевое управление → Профиль руления RedSuns</strong>. Нужный переключатель называется <strong>«Помощник при избыточной поворачиваемости»</strong>. Это настройка поведения автомобиля, а не назначение клавиш: раскладка находится в отдельном разделе <a href="wiki.html?article=controls">«Управление»</a>.</p>
      <h2>Сила и скорость</h2><p><strong>«Сила коррекции заноса»</strong> определяет, насколько заметно помощник вмешивается; ползунок позволяет выбрать от 0 до 150%. <strong>«Полная сила при»</strong> задаёт скорость, на которой коррекция достигает выбранной силы. При исходных настройках RedSuns помощник включён, сила — 100%, полная сила достигается примерно к 47 км/ч. Эти значения — отправная точка, а не универсальный пресет для каждой машины.</p>
      <h2>Клавиатура, геймпад и руль</h2><p>Для кнопочного руления помощь действует при включённом основном переключателе. Руль, геймпад и другие назначения прямого ввода обрабатываются отдельно: переключатель <strong>«Применить к прямому рулевому управлению»</strong> по умолчанию выключен. Если ездите с аналоговой осью и хотите такой же подруль, включите его осознанно. С рулём сначала попробуйте без помощи, затем сравните поведение с небольшой силой: вмешательство может мешать вашему собственному контррулению.</p>
      <h2>Как подобрать под себя</h2><ol><li>Возьмите знакомую машину и проедьте одинаковый поворот на безопасной площадке.</li><li>Начните с текущей настройки. Если машина резко возвращается из заноса или кажется, что руль спорит с вами, уменьшите силу. Если занос трудно поймать на клавиатуре, попробуйте немного увеличить её.</li><li>Меняйте по одному параметру и повторяйте тот же манёвр. Для геймпада или руля проверьте отдельно, включено ли применение к прямому рулевому управлению.</li></ol><p>Помощник уменьшает избыточную поворачиваемость, но не заменяет настройку оси, угол руля и практику. Если передняя ось теряет сцепление и машина не поворачивает, ниже в том же разделе есть отдельный <strong>«Помощник при недостаточной поворачиваемости»</strong>.</p>`
    },
    en: {
      title: 'Countersteer and steering assists',
      desc: 'Set up countersteer for keyboard, controller or steering wheel.',
      body: `<p class="article-opening">The countersteer assistant adds steering opposite a slide when the rear axle starts to lose grip. Set it for your input device and car: it changes how predictable cornering and drifting feel.</p>
      <h2>Where to find it</h2><p>On the server, open <strong>ESC → Gameplay → Steering → RedSuns steering profile</strong>. The switch is <strong>Oversteer reduction assistant</strong>. This changes vehicle behavior; key assignments are under the separate <a href="wiki.html?article=controls">Controls</a> section.</p>
      <h2>Strength and speed</h2><p><strong>Oversteer strength</strong> sets how much the assistant intervenes, from 0 to 150%. <strong>Strength reached at</strong> sets the vehicle speed where the selected correction reaches full strength. In the initial RedSuns profile, the assistant is on, strength is 100%, and full strength is reached around 47 km/h. Treat these as a starting point, not a universal preset for every car.</p>
      <h2>Keyboard, controller and wheel</h2><p>For button steering, the main switch enables the assist. Wheels, controllers and other direct-input bindings have a separate <strong>Apply to direct steering</strong> switch, off by default. If you drive with an analog axis and want the assist, turn that switch on deliberately. With a wheel, try driving without it first, then compare with a low strength: the assist can work against your own countersteering.</p>
      <h2>Find a comfortable setting</h2><ol><li>Use a familiar car and repeat the same corner on a safe open area.</li><li>Start with your current setting. Reduce strength if the car snaps back from a slide or seems to fight your steering. If slides are hard to catch on a keyboard, try increasing it slightly.</li><li>Change one setting at a time and repeat the maneuver. On controller or wheel, check the direct-steering switch separately.</li></ol><p>The assist reduces oversteer; it does not replace axis calibration, steering angle or practice. If the front tires lose grip and the car will not turn, <strong>Understeer reduction assistant</strong> is a separate option farther down the same page.</p>`
    }
  },
  {
    id: 'daily-reward', after: 'replays', cat: 'game', icon: 'replay',
    ru: {
      title: 'Ежедневная награда', desc: 'Как считается активная игра и почему прогресс может остановиться.',
      body: `<p class="article-opening">Индикатор ежедневной награды в HUD показывает текущую цель, награду и зачтённое активное время. Сервер считает время, а клиент только показывает полученное состояние.</p>
      <h2>Что засчитывается</h2><p>Прогресс идёт во время активной игры на сервере. Если сервер определил AFK, счётчик приостанавливается. После возвращения к машине дождитесь восстановления активной сессии. Не ориентируйтесь только на время, в течение которого игра была открыта: оно может включать простой.</p>
      <h2>Цель и начисление</h2><p>Смотрите число часов и размер награды прямо в HUD: они могут меняться вместе с кампанией. Достигнутый порог ещё должен быть подтверждён сервером; до этого может отображаться «Подтверждение». После начисления появляется отметка о получении. Если на сегодня настроена награда автомобилем, индикатор показывает её название вместо обычной монетной награды.</p>
      <h2>Когда начинается новый день</h2><p>Дневные окна считаются по московскому времени и переключаются в <strong>00:00 МСК</strong>. Если прогресс внезапно сбросился в это время, откройте индикатор следующего дня. При застывшем или устаревшем состоянии переподключитесь и проверьте свежие <a href="wiki.html?article=logs">логи</a>, прежде чем делать вывод, что награда потеряна.</p>`
    },
    en: {
      title: 'Daily reward', desc: 'How active play is counted and why progress can pause.',
      body: `<p class="article-opening">The daily reward HUD shows today's target, prize and credited active time. The server counts time; the client displays the reported state.</p>
      <h2>What counts</h2><p>Progress advances during active play on the server. It pauses when the server marks you AFK. After returning to your car, wait for the active session to resume. Time with the game merely open can include inactivity and is not the same as credited time.</p>
      <h2>Target and credit</h2><p>Read today's required hours and prize in the HUD; campaigns can change them. Reaching the threshold still needs server confirmation, so Confirming may appear briefly before Credited. If today's campaign grants a vehicle, the panel names it instead of the usual coin prize.</p>
      <h2>New day</h2><p>Daily windows use Moscow time and change at <strong>00:00 MSK</strong>. If progress resets then, check the next day's panel. If the state seems stale, reconnect and preserve fresh <a href="wiki.html?article=logs">logs</a> before assuming the prize was lost.</p>`
    }
  },
  {
    id: 'tuning',
    ru: {
      title: 'Тюнинг автомобиля', desc: 'Детали, технические параметры и внешний вид текущей машины.',
      body: `<p class="article-opening">Тюнинг меняет вашу текущую машину. Откройте его из игрового меню или назначенной клавишей (в стандартной схеме — <strong>U</strong>). Это игровое окно отличается от <a href="wiki.html?article=workshop">Мастерской в лаунчере</a>.</p>
      <h2>Что есть в тюнинге</h2><p>Разделы охватывают готовые конфигурации, детали, технические параметры, внешний вид и «Мои сборки». Выберите доступную деталь и примените изменение к активной машине. Данные автомобиля во время настройки показывает отдельная <a href="wiki.html?article=telemetry">панель телеметрии</a>.</p>
      <h2>Почему деталь или сборка недоступна</h2><p>Клиент проверяет отключённые детали и право игрока на компоненты. Сервер дополнительно проверяет сохранение. Если в сборке есть отключённая деталь или компонент вне вашей коллекции, применение может быть отклонено. Базовая машина и состав модов также зависят от выбранного сервера.</p>
      <h2>Сохранить результат</h2><p>После настройки откройте «Мои сборки» и сохраните конфигурацию. Как её загрузить, назначить основной, удалить или импортировать из обычного профиля BeamNG, описано в статье <a href="wiki.html?article=garage">«Личные сборки»</a>.</p>
      <h2>Если изменение не применилось</h2><p>Дождитесь полной загрузки машины, закройте и снова откройте тюнинг. Если ошибка повторяется, запишите модель, название детали и сообщение, затем сохраните свежий <a href="wiki.html?article=logs">лог игры</a>.</p>`
    },
    en: {
      title: 'Vehicle tuning', desc: 'Parts, technical settings and appearance of your current car.',
      body: `<p class="article-opening">Tuning changes your current vehicle. Open it from the game menu or with its assigned key (default <strong>U</strong>). This in-game screen is separate from <a href="wiki.html?article=workshop">Workshop in the launcher</a>.</p>
      <h2>In the tuning screen</h2><p>Sections cover presets, parts, technical variables, appearance and My Builds. Choose an available part and apply it to the active vehicle. A separate <a href="wiki.html?article=telemetry">telemetry panel</a> shows live vehicle data while tuning.</p>
      <h2>Unavailable parts or builds</h2><p>The client checks disabled parts and your access to components. The server also validates saved builds. A disabled part or an item outside your collection can prevent a build from being applied. The base car and installed mod set also depend on the selected server.</p>
      <h2>Save the result</h2><p>After tuning, open My Builds and save the configuration. Loading, setting a default, deleting and importing from a regular BeamNG profile are covered under <a href="wiki.html?article=garage">Personal builds</a>.</p>
      <h2>If a change does not apply</h2><p>Wait until the vehicle has fully loaded, close and reopen Tuning. If the issue repeats, note the model, part and exact message, then keep a fresh <a href="wiki.html?article=logs">game log</a>.</p>`
    }
  },
  {
    id: 'workshop', after: 'garage', cat: 'game', icon: 'wrench',
    ru: {
      title: 'Мастерская в лаунчере', desc: 'Каталог работ авторов и отличие публикаций от личных сборок.',
      body: `<p class="article-opening">«Мастерская» находится в RedSuns Launcher. Здесь размещаются работы авторов: машины, обвесы и ливреи. Это отдельный каталог, а не вкладка «Мои сборки» в игровом тюнинге.</p>
      <h2>Просмотр и доступ</h2><p>Откройте «Мастерскую» в лаунчере, выберите работу и посмотрите её состав и условия доступа. Доступность конкретного компонента в игре зависит от выбранного сервера и вашей коллекции. Если сборка в гараже помечена как недоступная, проверьте право на её компоненты в Мастерской.</p>
      <h2>Публикации и личные сборки</h2><p>Авторская публикация может проходить проверку до появления в каталоге. Свои настройки машины сохраняются отдельно через <a href="wiki.html?article=tuning">игровой тюнинг</a>. Удаление публикации не освобождает место в <a href="wiki.html?article=garage">личной коллекции сборок</a>.</p>`
    },
    en: {
      title: 'Launcher Workshop', desc: 'Creator catalogue and the difference between publications and personal builds.',
      body: `<p class="article-opening">Workshop is in RedSuns Launcher. It contains creator vehicles, body kits and liveries. This catalogue is separate from My Builds in in-game Tuning.</p>
      <h2>Browse and access</h2><p>Open Workshop in the launcher, choose a publication and check its contents and access conditions. Availability of a specific component in game depends on the selected server and your collection. If a garage build is marked unavailable, check access to its components in Workshop.</p>
      <h2>Publications and personal builds</h2><p>A creator publication may be reviewed before it appears in the catalogue. Save your own vehicle setup through <a href="wiki.html?article=tuning">in-game Tuning</a>. Removing a publication does not free space in your <a href="wiki.html?article=garage">personal build collection</a>.</p>`
    }
  },
  {
    id: 'telemetry',
    ru: {
      title: 'Телеметрия автомобиля', desc: 'Реальные данные BeamNG в панели настройки машины.',
      body: `<p class="article-opening">Панель телеметрии открывается вместе с тюнингом и использует штатные приложения BeamNG для текущей машины. Числа не берутся из карточки каталога: они меняются вместе с состоянием автомобиля.</p>
      <h2>Что можно посмотреть</h2><p>В панели есть график мощности и крутящего момента, данные колёс, трансмиссии и температуры двигателя. Секции можно раскрывать отдельно. Они загружаются только пока открыт тюнинг, поэтому первое раскрытие может занять мгновение.</p>
      <h2>Как сравнивать изменения</h2><p>Откройте тюнинг на полностью загруженной машине, отметьте исходные параметры, примените одну деталь или техническую настройку и проверьте их снова. Для графика мощности двигатель должен быть в подходящем состоянии; разные машины и детали дают разный набор данных. Телеметрия помогает увидеть результат, но не гарантирует одинаковое поведение на дороге.</p>
      <h2>Если панель пуста</h2><p>Убедитесь, что активная машина уже загружена и окно тюнинга открыто. Сверните и раскройте нужный раздел, затем закройте и снова откройте тюнинг после смены машины. Если появляется «Телеметрия недоступна для этой машины» или ошибка повторяется, сохраните модель машины и свежий <a href="wiki.html?article=logs">beamng.log</a>.</p>`
    },
    en: {
      title: 'Vehicle telemetry', desc: 'Live BeamNG data in the vehicle tuning panel.',
      body: `<p class="article-opening">Telemetry opens with tuning and mounts BeamNG's native apps for the current vehicle. Numbers do not come from catalogue cards; they follow the car's live state.</p>
      <h2>Available data</h2><p>The panel includes power and torque curves, wheels, drivetrain and engine temperatures. Expand sections individually. They load only while tuning is open, so the first expansion can take a moment.</p>
      <h2>Compare changes</h2><p>Open tuning after the vehicle fully loads, note the initial values, apply one part or technical setting and check again. The engine needs an appropriate state for power data. Available signals vary by vehicle and parts. Telemetry helps inspect changes but cannot guarantee identical on-road behavior.</p>
      <h2>If the panel is empty</h2><p>Make sure the active car has loaded and tuning is open. Collapse and reopen a section, then close and reopen tuning after changing cars. If Telemetry unavailable for this vehicle appears or the issue persists, save the model and a fresh <a href="wiki.html?article=logs">beamng.log</a>.</p>`
    }
  },
  {
    id: 'players-friends', after: 'daily-reward', cat: 'game', icon: 'voice',
    ru: {
      title: 'Игроки, друзья и чат', desc: 'Список игроков, заявки в друзья и личные сообщения.',
      body: `<p class="article-opening">В меню <strong>G</strong> есть вкладки «Игроки» и «Друзья». Общий чат расположен поверх игры и открывается назначенной клавишей.</p>
      <h2>Игроки онлайн</h2><p>Список показывает ник, очки дрифта, лучший заезд и время игры. У строки другого игрока есть кнопка локального отключения его голоса. Это меняет только то, что слышите вы. В профиле можно посмотреть статистику выбранного сезона.</p>
      <h2>Друзья</h2><p>Во вкладке «Друзья» найдите игрока по нику и отправьте заявку. Входящую заявку можно принять или отклонить; отправленную — отменить. У друга показан статус присутствия, а на его карточке доступны профиль и личные сообщения. Непрочитанные сообщения отмечаются счётчиком.</p>
      <h2>Сообщения</h2><p>В общем чате Enter отправляет текст, Esc закрывает поле ввода. Пока сервер не подтвердил сообщение, оно помечается как стоящее в очереди или отправляемое. При ошибке доставки текст возвращается в поле для повторной попытки. Личные сообщения друзьям находятся во вкладке «Друзья»; у отправленных сообщений отображается статус отправки и прочтения.</p>`
    },
    en: {
      title: 'Players, friends and chat', desc: 'Player list, friend requests and direct messages.',
      body: `<p class="article-opening">The <strong>G</strong> menu has Players and Friends tabs. General chat appears over the game and opens with its assigned key.</p>
      <h2>Players online</h2><p>The list shows nickname, drift points, best run and play time. Each other player's row has a local voice mute button. It changes only what you hear. Profiles show statistics for the selected season.</p>
      <h2>Friends</h2><p>Search for a nickname in Friends and send a request. Accept or decline incoming requests; cancel outgoing ones. Friends have a presence indicator, and their cards open a profile and direct messages. An unread counter marks new messages.</p>
      <h2>Messages</h2><p>In general chat, Enter sends and Esc closes the input. Until the server acknowledges a message, it shows as queued or sending. On delivery failure, the text returns for another attempt. Direct messages to friends are under Friends; sent messages display sent and read states.</p>`
    }
  },
  {
    id: 'collisions', after: 'players-friends', cat: 'game', icon: 'car',
    ru: {
      title: 'Столкновения с игроками', desc: 'Режимы «Все», «Друзья» и автоматическая защита.',
      body: `<p class="article-opening">В профиле игрового меню <strong>G</strong> можно выбрать, с кем ваша машина сталкивается. Выбор действует только если сервер не включил временную защиту или административное ограничение.</p>
      <h2>Ваш режим</h2><ul><li><strong>Выключено</strong> — столкновения возможны с теми, кто тоже разрешает их.</li><li><strong>Друзья</strong> — столкновения только с друзьями, если они со своей стороны тоже их разрешают.</li><li><strong>Все</strong> — проходить сквозь все машины игроков.</li></ul><p>Названия режима описывают, от столкновений с кем вы защищены. Машины сталкиваются только при согласии обеих сторон.</p>
      <h2>Почему настройка заблокирована</h2><p>После появления или сброса машины может действовать короткая защита. Во время наблюдения за другим игроком, свободной камеры или фоторежима защита тоже включается временно. При RS Sedan, My Car или Balls она обязательна, потому что отображаемые чужие машины не соответствуют их настоящей геометрии. Администратор также может ограничить режим. Если переключатель неактивен, посмотрите пояснение рядом с ним.</p>
      <h2>Возврат к обычной физике</h2><p>Переключитесь на Original и дождитесь, пока чужие машины перестроятся в настоящие модели. Пока остался хотя бы один упрощённый автомобиль, защита может сохраняться. После переподключения модели загружаются заново.</p>`
    },
    en: {
      title: 'Collisions with players', desc: 'Everyone, Friends and automatic protection.',
      body: `<p class="article-opening">Your profile in the <strong>G</strong> menu lets you choose which players your car can collide with, unless the server applies temporary protection or an administrative rule.</p>
      <h2>Your mode</h2><ul><li><strong>Off</strong> allows collisions with players who also permit them.</li><li><strong>Friends</strong> allows collisions only with friends who permit them too.</li><li><strong>Everyone</strong> lets your car pass through all other players.</li></ul><p>The mode names describe who you are protected from. Both sides must allow a collision for their cars to hit.</p>
      <h2>Why the setting is locked</h2><p>A short protection period may follow a spawn or reset. Spectating, free camera and Photo Mode also apply temporary protection. RS Sedan, My Car and Balls require it because displayed remote cars do not match real collision geometry. An administrator can also restrict the mode. Read the note beside the disabled control.</p>
      <h2>Returning to normal physics</h2><p>Switch to Original and wait until remote cars are rebuilt with their real models. Protection may remain while any proxied car is still present. Reconnecting loads the models again.</p>`
    }
  },
  {
    id: 'drift-seasons', after: 'collisions', cat: 'game', icon: 'car',
    ru: {
      title: 'Дрифт и сезоны', desc: 'Очки заезда, лучший результат и таблица лидеров.',
      body: `<p class="article-opening">HUD показывает текущий дрифт-заезд: очки, угол и множитель. Завершённый заезд передаётся серверу, который проверяет его длительность и допустимость результата перед записью в профиль.</p>
      <h2>Текущий заезд</h2><p>Во время скольжения счёт растёт вместе с движением машины и комбо. Смена машины, сброс и серьёзное столкновение могут прервать серию. Проверка покрытия колёс не даёт бесконечно набирать очки за пределами дороги: после краткого допуска езда вне трассы блокирует продолжение заезда.</p>
      <h2>Профиль и рейтинг</h2><p>В меню <strong>G → Профиль</strong> видны очки текущего сезона, лучший заезд, место в рейтинге и общее время игры. Стрелками можно посмотреть предыдущие сезоны. Вкладка «Таблица лидеров» сортирует игроков по очкам выбранного сезона; список «Игроки» показывает текущих участников сервера.</p>
      <h2>Почему очки не прибавились</h2><p>Слишком короткий или незавершённый заезд не обязательно попадёт в статистику. Сервер отклоняет результаты с недостоверной длительностью или невозможными показателями. Если HUD показал завершение, но профиль не обновился, подождите ответа сервера, затем сохраните время, сервер и <a href="wiki.html?article=logs">логи</a>.</p>`
    },
    en: {
      title: 'Drifting and seasons', desc: 'Run score, personal best and leaderboard.',
      body: `<p class="article-opening">The HUD shows the current drift run's score, angle and multiplier. A finished run is sent to the server, which validates its duration and result before adding points to the profile.</p>
      <h2>Current run</h2><p>During a slide, score grows with vehicle motion and combo. Changing cars, resetting or a heavy impact can interrupt a run. Wheel-surface checks prevent unlimited scoring off the road: after a short grace period, an off-road run is stopped.</p>
      <h2>Profile and ranking</h2><p><strong>G → Profile</strong> shows current season points, best run, rank and total play time. Use its arrows to view earlier seasons. Leaderboard sorts players by points in the selected season; Players shows current server participants.</p>
      <h2>If points did not appear</h2><p>A very short or unfinished run may not enter the statistics. The server rejects implausible duration or impossible values. If the HUD marked the run complete but the profile did not update, allow for the server response, then save the time, server and <a href="wiki.html?article=logs">logs</a>.</p>`
    }
  }
];
