const DICT = {
  ru: {
    search: "Поиск узлов...",
    types: "Типы узлов",
    projects: "Проекты",
    new_graph: "Новый граф",
    t_sel: "Выбор  V",
    t_edge: "Связь  E",
    t_pan: "Рука  H / Пробел",
    t_del: "Удалить  Del",
    t_auto: "Круговая расстановка",
    t_style_c: "Стиль рёбер: кривые  T",
    t_style_s: "Стиль рёбер: прямые  T",
    t_force: "Симуляция Force",
    t_undo: "Отменить  Ctrl+Z",
    t_redo: "Повторить  Ctrl+Y",
    t_snap: "Сетка  Alt+G",
    t_save: "Сохранить  Ctrl+S",
    t_open: "Открыть  Ctrl+O",
    t_exp: "Экспорт",
    t_fit: "Вписать в экран  F",
    t_present: "Презентационный режим  P",
    l_sel: "Выбор",
    l_edge: "Связь",
    l_pan: "Рука",
    l_del: "Удалить",
    l_auto: "Авто",
    l_curves: " Кривые",
    l_straight: " Прямые",
    l_ortho: " Ортогональные",
    l_snap: "Сетка",
    l_save: "Сохранить",
    l_open: "Открыть",
    l_exp: "Экспорт",
    exp_png: "Экспорт PNG",
    exp_svg: "Экспорт SVG",
    exp_csv: "Экспорт CSV",
    imp_csv: "Импорт CSV",
    empty_title: "Граф пуст",
    empty_sub: "Перетащи тип из панели или нажми кнопку + Узел",
    edge_hint: "Кликните на второй узел",
    st_nodes: "Узлов:",
    st_edges: "Связей:",
    st_none: "Нет выбора",
    st_sel: "Выбрано: ",
    p_node: "СВОЙСТВА УЗЛА",
    p_multi: "МНОЖЕСТВЕННЫЙ ВЫБОР",
    p_name: "Название",
    p_desc: "Описание",
    p_url: "URL",
    p_date: "Дата",
    p_status: "Статус",
    p_group: "Группа",
    p_icon_url: "Своя иконка (URL)",
    p_tags: "Теги",
    p_tags_hint: "(через запятую)",
    p_icon: "Тип иконки",
    p_color: "Цвет (+ свой цвет)",
    p_del_all: "Удалить все",
    p_group_btn: "Сгруппировать",
    p_link: "Связать",
    m_cancel: "Отмена",
    m_edge: "Связь",
    m_edge_lbl: "Подпись связи",
    m_edge_ph: "Например: Работает в",
    m_edge_str: "Прямая линия",
    m_save: "Сохранить",
    m_group: "Группировка",
    m_group_name: "Название группы",
    m_group_ph: "Например: Сеть А",
    m_create: "Создать",
    ren_proj: "Переименовать проект",
    ren_name: "Название проекта",
    ren_name_ph: "Название",
    m_ok: "ОК",
    c_prop: "Свойства",
    c_dup: "Дублировать  Ctrl+D",
    c_link: "Связать",
    c_group: "Сгруппировать",
    c_del: "Удалить",
    nt_person: "Персона",
    nt_company: "Компания",
    nt_domain: "Домен",
    nt_ip: "IP / Сеть",
    nt_server: "Сервер",
    nt_database: "База данных",
    nt_file: "Файл",
    nt_note: "Заметка",
    nt_phone: "Телефон",
    nt_email: "Email",
    nt_money: "Финансы",
    nt_instagram: "Instagram",
    nt_telegram: "Telegram",
    nt_vk: "VK",
    nt_discord: "Discord",
    nt_youtube: "YouTube",
    nt_github: "GitHub",
    nt_address: "Адрес",
    nt_car: "Автомобиль",
    nt_bankcard: "Банк. карта",
    nt_passport: "Документ",
    nt_org: "Организация",
    nt_crypto: "Крипто",
    nt_twitter: "Twitter/X",
    nt_linkedin: "LinkedIn",
    nt_facebook: "Facebook",
    nt_tiktok: "TikTok",
    nt_whatsapp: "WhatsApp",
    nt_skype: "Skype",
    st_act: "Активен",
    st_inact: "Неактивен",
    st_susp: "Подозреваемый",
    st_conf: "Подтверждён",
    tag_reset: "сбросить",
    warn_empty: "Граф пуст.",
    warn_png: "Ошибка сохранения PNG: ",
    warn_csv: "Ошибка импорта CSV: ",
    edge_color_default: "По умолчанию",
    warn_png_rnd: "Ошибка рендера PNG. Что-то пошло не так при генерации.",
    warn_corr: "Ошибка: файл повреждён.",
    warn_unsaved: "Создать новый граф? Несохранённые изменения будут потеряны.",
    toast_copied: "Скопировано!",
    toast_autosave: "Автосохранение…",
    toast_present: "Презентационный режим — нажмите P или Esc для выхода",
    toast_imported: "Импортировано:",
    toast_nodes: "узлов,",
    toast_edges: "связей",
    help_title: "Горячие клавиши",
    tmpl_title: "Шаблоны",
    tmpl_tg: "Telegram-канал",
    tmpl_crypto: "Crypto Cluster",
    tmpl_company: "Структура компании",
    tmpl_fraud: "Fraud Ring",
    upd_checking: "Проверка обновлений…",
    upd_available: "Доступно обновление",
    upd_download: "Скачать",
    upd_latest: "Установлена последняя версия",
    upd_error: "Ошибка проверки обновлений",
    exp_graphml: "Экспорт GraphML",
    exp_json: "Экспорт JSON",
    exp_gexf: "Экспорт GEXF (Gephi)",
    p_created: "Создано",
    p_modified: "Изменено",
    p_history: "История изменений",
    p_whois: "WHOIS (офлайн)",
    p_rename_multi: "Массовое переименование",
    p_find: "Найти",
    p_replace: "Заменить",
    p_regex: "Regex",
    p_replace_btn: "Заменить",
    p_pin: "Закрепить",
    p_unpin: "Открепить",
    p_pinned: "Закреплено",
    p_path: "Кратчайший путь",
    p_path_btn: "Найти путь",
    p_path_none: "Путь не найден",
    p_path_select: "Выберите вторую ноду",
    p_dup_find: "Найти дубликаты",
    p_dup_none: "Дубликатов не найдено",
    p_dup_found: "Дубликаты найдены:",
    p_collapse: "Свернуть группу",
    p_expand: "Развернуть группу",
    e_weight: "Вес",
    imp_graphml: "Импорт GraphML / GEXF",
    nt_malware: "Вредонос",
    nt_virus: "Вирус",
    nt_hash: "Хеш / IOC",
    nt_url: "URL",
    nt_wallet: "Кошелёк",
    nt_leak: "Утечка данных",
    nt_tor: "Tor / .onion",
    nt_vpn: "VPN / Proxy",
    nt_apk: "APK / App",
    nt_cve: "CVE / Уязвимость",
    nt_cert: "SSL Сертификат",
    nt_asn: "AS / BGP",
    nt_port: "Порт / Сервис",
    nt_registry: "Реестр",
    nt_event: "Событие",
    nt_location: "Локация",
    nt_screenshot: "Скриншот",
    nt_api: "API / Endpoint",
    cat_identity: "Персоны",
    cat_infra: "Инфраструктура",
    cat_social: "Соцсети",
    cat_finance: "Финансы",
    cat_cyber: "Кибер / IOC",
    cat_docs: "Документы",
    cat_all: "Все",
    p_lookup: "Lookup",
    p_hist_empty: "Нет изменений",
    p_hist_field: "поле",
    p_hist_was: "было",
    nt_signal: "Signal",
    nt_viber: "Viber",
    nt_snapchat: "Snapchat",
    nt_twitch: "Twitch",
    nt_reddit: "Reddit",
    nt_onlyfans: "OnlyFans",
    nt_patreon: "Patreon",
    nt_medium: "Medium",
    nt_gitlab: "GitLab",
    nt_bitbucket: "Bitbucket",
    nt_npmpackage: "NPM Пакет",
    nt_docker: "Docker",
    nt_aws: "AWS / Облако",
    nt_ethereum: "Ethereum",
    nt_bitcoin: "Bitcoin",
    nt_tron: "Tron / USDT",
    nt_nft: "NFT",
    nt_exchange: "Крипто-биржа",
    nt_sim: "SIM-карта",
    nt_imei: "IMEI / Устройство",
    nt_camera: "Камера / CCTV",
    nt_drone: "Дрон",
    nt_weapon: "Оружие",
    nt_vehicle: "ТС / Номер",
    nt_property: "Недвижимость",
    nt_company_reg: "Регистр. данные",
    nt_court: "Судебный акт",
    nt_contract: "Контракт",
    nt_invoice: "Счёт / Инвойс",
    nt_chat: "Чат / Переписка",
    nt_audio: "Аудио / Запись",
    nt_video: "Видео",
    nt_printer: "Принтер / МФУ",
    nt_router: "Маршрутизатор",
    nt_iot: "IoT / Умный дом",
    nt_satellite: "Спутник / GPS",
    nt_darkweb: "Даркнет-ресурс",
    nt_forum: "Форум",
    nt_shop: "Магазин",
    nt_ad: "Объявление",
    nt_person_alias: "Псевдоним",
    nt_group: "Группа / Канал",
    nt_unknown: "Неизвестно",
    warn_storage:
      "Хранилище переполнено! Данные не сохранены. Удалите старые проекты.",
  },
  en: {
    search: "Search nodes...",
    types: "Node Types",
    projects: "Projects",
    new_graph: "New Graph",
    t_sel: "Select  V",
    t_edge: "Edge  E",
    t_pan: "Pan  H / Space",
    t_del: "Delete  Del",
    t_auto: "Circular Layout",
    t_style_c: "Edge style: Curved  T",
    t_style_s: "Edge style: Straight  T",
    t_force: "Force Simulation",
    t_undo: "Undo  Ctrl+Z",
    t_redo: "Redo  Ctrl+Y",
    t_snap: "Grid  Alt+G",
    t_save: "Save  Ctrl+S",
    t_open: "Open  Ctrl+O",
    t_exp: "Export",
    t_fit: "Fit to screen  F",
    t_present: "Presentation mode  P",
    l_sel: "Select",
    l_edge: "Edge",
    l_pan: "Pan",
    l_del: "Delete",
    l_auto: "Auto",
    l_curves: " Curved",
    l_straight: " Straight",
    l_ortho: " Orthogonal",
    l_snap: "Grid",
    l_save: "Save",
    l_open: "Open",
    l_exp: "Export",
    exp_png: "Export PNG",
    exp_svg: "Export SVG",
    exp_csv: "Export CSV",
    imp_csv: "Import CSV",
    empty_title: "Graph is empty",
    empty_sub: "Drag a type from the panel or click the + Node button",
    edge_hint: "Click on the second node",
    st_nodes: "Nodes:",
    st_edges: "Edges:",
    st_none: "No selection",
    st_sel: "Selected: ",
    p_node: "NODE PROPERTIES",
    p_multi: "MULTIPLE SELECTION",
    p_name: "Name",
    p_desc: "Description",
    p_url: "URL",
    p_date: "Date",
    p_status: "Status",
    p_group: "Group",
    p_icon_url: "Custom Icon (URL)",
    p_tags: "Tags",
    p_tags_hint: "(comma separated)",
    p_icon: "Icon Type",
    p_color: "Color (+ custom color)",
    p_del_all: "Delete All",
    p_group_btn: "Group Nodes",
    p_link: "Connect",
    m_cancel: "Cancel",
    m_edge: "Connection",
    m_edge_lbl: "Edge Label",
    m_edge_ph: "e.g., Works at",
    m_edge_str: "Straight line",
    m_save: "Save",
    m_group: "Grouping",
    m_group_name: "Group Name",
    m_group_ph: "e.g., Network A",
    m_create: "Create",
    ren_proj: "Rename Project",
    ren_name: "Project Name",
    ren_name_ph: "Name",
    m_ok: "OK",
    c_prop: "Properties",
    c_dup: "Duplicate  Ctrl+D",
    c_link: "Connect",
    c_group: "Group",
    c_del: "Delete",
    nt_person: "Person",
    nt_company: "Company",
    nt_domain: "Domain",
    nt_ip: "IP / Network",
    nt_server: "Server",
    nt_database: "Database",
    nt_file: "File",
    nt_note: "Note",
    nt_phone: "Phone",
    nt_email: "Email",
    nt_money: "Finance",
    nt_instagram: "Instagram",
    nt_telegram: "Telegram",
    nt_vk: "VK",
    nt_discord: "Discord",
    nt_youtube: "YouTube",
    nt_github: "GitHub",
    nt_address: "Address",
    nt_car: "Vehicle",
    nt_bankcard: "Bank Card",
    nt_passport: "Document",
    nt_org: "Organization",
    nt_crypto: "Crypto",
    nt_twitter: "Twitter/X",
    nt_linkedin: "LinkedIn",
    nt_facebook: "Facebook",
    nt_tiktok: "TikTok",
    nt_whatsapp: "WhatsApp",
    nt_skype: "Skype",
    st_act: "Active",
    st_inact: "Inactive",
    st_susp: "Suspect",
    st_conf: "Confirmed",
    tag_reset: "reset",
    warn_empty: "Graph is empty.",
    warn_png: "Error saving PNG: ",
    warn_csv: "CSV import error: ",
    edge_color_default: "Default",
    warn_png_rnd: "PNG render error. Something went wrong.",
    warn_corr: "Error: file corrupted.",
    warn_unsaved: "Create new graph? Unsaved changes will be lost.",
    toast_copied: "Copied!",
    toast_autosave: "Autosaved…",
    toast_present: "Presentation mode — press P or Esc to exit",
    toast_imported: "Imported:",
    toast_nodes: "nodes,",
    toast_edges: "edges",
    help_title: "Keyboard Shortcuts",
    tmpl_title: "Templates",
    tmpl_tg: "Telegram Channel",
    tmpl_crypto: "Crypto Cluster",
    tmpl_company: "Company Structure",
    tmpl_fraud: "Fraud Ring",
    upd_checking: "Checking for updates…",
    upd_available: "Update available",
    upd_download: "Download",
    upd_latest: "You have the latest version",
    upd_error: "Update check failed",
    exp_graphml: "Export GraphML",
    exp_json: "Export JSON",
    exp_gexf: "Export GEXF (Gephi)",
    p_created: "Created",
    p_modified: "Modified",
    p_history: "Change History",
    p_whois: "WHOIS (offline)",
    p_rename_multi: "Bulk Rename",
    p_find: "Find",
    p_replace: "Replace",
    p_regex: "Regex",
    p_replace_btn: "Replace",
    p_pin: "Pin",
    p_unpin: "Unpin",
    p_pinned: "Pinned",
    p_path: "Shortest Path",
    p_path_btn: "Find Path",
    p_path_none: "No path found",
    p_path_select: "Select second node",
    p_dup_find: "Find Duplicates",
    p_dup_none: "No duplicates found",
    p_dup_found: "Duplicates found:",
    p_collapse: "Collapse group",
    p_expand: "Expand group",
    e_weight: "Weight",
    imp_graphml: "Import GraphML / GEXF",
    nt_malware: "Malware",
    nt_virus: "Virus",
    nt_hash: "Hash / IOC",
    nt_url: "URL",
    nt_wallet: "Wallet",
    nt_leak: "Data Leak",
    nt_tor: "Tor / .onion",
    nt_vpn: "VPN / Proxy",
    nt_apk: "APK / App",
    nt_cve: "CVE / Vuln",
    nt_cert: "SSL Cert",
    nt_asn: "AS / BGP",
    nt_port: "Port / Service",
    nt_registry: "Registry",
    nt_event: "Event",
    nt_location: "Location",
    nt_screenshot: "Screenshot",
    nt_api: "API / Endpoint",
    cat_identity: "Identity",
    cat_infra: "Infrastructure",
    cat_social: "Social Media",
    cat_finance: "Finance",
    cat_cyber: "Cyber / IOC",
    cat_docs: "Documents",
    cat_all: "All",
    p_lookup: "Lookup",
    p_hist_empty: "No changes",
    p_hist_field: "field",
    p_hist_was: "was",
    nt_signal: "Signal",
    nt_viber: "Viber",
    nt_snapchat: "Snapchat",
    nt_twitch: "Twitch",
    nt_reddit: "Reddit",
    nt_onlyfans: "OnlyFans",
    nt_patreon: "Patreon",
    nt_medium: "Medium",
    nt_gitlab: "GitLab",
    nt_bitbucket: "Bitbucket",
    nt_npmpackage: "NPM Package",
    nt_docker: "Docker",
    nt_aws: "AWS / Cloud",
    nt_ethereum: "Ethereum",
    nt_bitcoin: "Bitcoin",
    nt_tron: "Tron / USDT",
    nt_nft: "NFT",
    nt_exchange: "Crypto Exchange",
    nt_sim: "SIM Card",
    nt_imei: "IMEI / Device",
    nt_camera: "Camera / CCTV",
    nt_drone: "Drone",
    nt_weapon: "Weapon",
    nt_vehicle: "Vehicle / Plate",
    nt_property: "Real Estate",
    nt_company_reg: "Corp Registry",
    nt_court: "Court Record",
    nt_contract: "Contract",
    nt_invoice: "Invoice",
    nt_chat: "Chat / Messages",
    nt_audio: "Audio / Recording",
    nt_video: "Video",
    nt_printer: "Printer / MFP",
    nt_router: "Router",
    nt_iot: "IoT / Smart",
    nt_satellite: "Satellite / GPS",
    nt_darkweb: "Darkweb Resource",
    nt_forum: "Forum",
    nt_shop: "Shop / Market",
    nt_ad: "Ad / Listing",
    nt_person_alias: "Alias / Nickname",
    nt_group: "Group / Channel",
    nt_unknown: "Unknown",
    warn_storage: "Storage full! Data not saved. Delete old projects.",
  },
  uk: {
    search: "Пошук вузлів...",
    types: "Типи вузлів",
    projects: "Проєкти",
    new_graph: "Новий граф",
    t_sel: "Вибір  V",
    t_edge: "Зв'язок  E",
    t_pan: "Рука  H / Пробіл",
    t_del: "Видалити  Del",
    t_auto: "Кругове розташування",
    t_style_c: "Стиль ліній: криві  T",
    t_style_s: "Стиль ліній: прямі  T",
    t_force: "Симуляція Force",
    t_undo: "Скасувати  Ctrl+Z",
    t_redo: "Повторити  Ctrl+Y",
    t_snap: "Сітка  Alt+G",
    t_save: "Зберегти  Ctrl+S",
    t_open: "Відкрити  Ctrl+O",
    t_exp: "Експорт",
    t_fit: "Вписати в екран  F",
    t_present: "Презентаційний режим  P",
    l_sel: "Вибір",
    l_edge: "Зв'язок",
    l_pan: "Рука",
    l_del: "Видалити",
    l_auto: "Авто",
    l_curves: " Криві",
    l_straight: " Прямі",
    l_ortho: " Ортогональні",
    l_snap: "Сітка",
    l_save: "Зберегти",
    l_open: "Відкрити",
    l_exp: "Експорт",
    exp_png: "Експорт PNG",
    exp_svg: "Експорт SVG",
    exp_csv: "Експорт CSV",
    imp_csv: "Імпорт CSV",
    empty_title: "Граф порожній",
    empty_sub: "Перетягніть тип з панелі або натисніть кнопку + Вузол",
    edge_hint: "Клікніть на другий вузол",
    st_nodes: "Вузлів:",
    st_edges: "Зв'язків:",
    st_none: "Немає вибору",
    st_sel: "Вибрано: ",
    p_node: "ВЛАСТИВОСТІ ВУЗЛА",
    p_multi: "МНОЖИННИЙ ВИБІР",
    p_name: "Назва",
    p_desc: "Опис",
    p_url: "URL",
    p_date: "Дата",
    p_status: "Статус",
    p_group: "Група",
    p_icon_url: "Своя іконка (URL)",
    p_tags: "Теги",
    p_tags_hint: "(через кому)",
    p_icon: "Тип іконки",
    p_color: "Колір (+ свій колір)",
    p_del_all: "Видалити все",
    p_group_btn: "Згрупувати",
    p_link: "Зв'язати",
    m_cancel: "Скасувати",
    m_edge: "Зв'язок",
    m_edge_lbl: "Підпис зв'язку",
    m_edge_ph: "Наприклад: Працює в",
    m_edge_str: "Пряма лінія",
    m_save: "Зберегти",
    m_group: "Групування",
    m_group_name: "Назва групи",
    m_group_ph: "Наприклад: Мережа А",
    m_create: "Створити",
    ren_proj: "Перейменувати проєкт",
    ren_name: "Назва проєкту",
    ren_name_ph: "Назва",
    m_ok: "ОК",
    c_prop: "Властивості",
    c_dup: "Дублювати  Ctrl+D",
    c_link: "Зв'язати",
    c_group: "Згрупувати",
    c_del: "Видалити",
    nt_person: "Персона",
    nt_company: "Компанія",
    nt_domain: "Домен",
    nt_ip: "IP / Мережа",
    nt_server: "Сервер",
    nt_database: "База даних",
    nt_file: "Файл",
    nt_note: "Нотатка",
    nt_phone: "Телефон",
    nt_email: "Email",
    nt_money: "Фінанси",
    nt_instagram: "Instagram",
    nt_telegram: "Telegram",
    nt_vk: "VK",
    nt_discord: "Discord",
    nt_youtube: "YouTube",
    nt_github: "GitHub",
    nt_address: "Адреса",
    nt_car: "Автомобіль",
    nt_bankcard: "Банк. картка",
    nt_passport: "Документ",
    nt_org: "Організація",
    nt_crypto: "Крипто",
    nt_twitter: "Twitter/X",
    nt_linkedin: "LinkedIn",
    nt_facebook: "Facebook",
    nt_tiktok: "TikTok",
    nt_whatsapp: "WhatsApp",
    nt_skype: "Skype",
    st_act: "Активний",
    st_inact: "Неактивний",
    st_susp: "Підозрюваний",
    st_conf: "Підтверджений",
    tag_reset: "скинути",
    warn_empty: "Граф порожній.",
    warn_png: "Помилка збереження PNG: ",
    warn_csv: "Помилка імпорту CSV: ",
    edge_color_default: "За замовчуванням",
    warn_png_rnd: "Помилка рендеру PNG. Щось пішло не так.",
    warn_corr: "Помилка: файл пошкоджено.",
    warn_unsaved: "Створити новий граф? Незбережені зміни будуть втрачені.",
    toast_copied: "Скопійовано!",
    toast_autosave: "Автозбереження…",
    toast_present: "Презентаційний режим — натисніть P або Esc для виходу",
    toast_imported: "Імпортовано:",
    toast_nodes: "вузлів,",
    toast_edges: "зв'язків",
    help_title: "Гарячі клавіші",
    tmpl_title: "Шаблони",
    tmpl_tg: "Telegram-канал",
    tmpl_crypto: "Crypto Кластер",
    tmpl_company: "Структура компанії",
    tmpl_fraud: "Fraud Ring",
    upd_checking: "Перевірка оновлень…",
    upd_available: "Доступне оновлення",
    upd_download: "Завантажити",
    upd_latest: "Встановлена остання версія",
    upd_error: "Помилка перевірки оновлень",
    exp_graphml: "Експорт GraphML",
    exp_json: "Експорт JSON",
    exp_gexf: "Експорт GEXF (Gephi)",
    p_created: "Створено",
    p_modified: "Змінено",
    p_history: "Історія змін",
    p_whois: "WHOIS (офлайн)",
    p_lookup: "Lookup",
    p_hist_empty: "Немає змін",
    p_hist_field: "поле",
    p_hist_was: "було",
    p_rename_multi: "Масова заміна",
    p_find: "Знайти",
    p_replace: "Замінити",
    p_regex: "Regex",
    p_replace_btn: "Замінити",
    p_pin: "Закріпити",
    p_unpin: "Відкріпити",
    p_pinned: "Закріплено",
    p_path: "Найкоротший шлях",
    p_path_btn: "Шлях",
    p_path_none: "Шлях не знайдено",
    p_path_select: "Виберіть другий вузол",
    p_dup_find: "Дублікати",
    p_dup_none: "Дублікатов не знайдено",
    p_dup_found: "Дублікати знайдено:",
    p_collapse: "Згорнути",
    p_expand: "Розгорнути",
    e_weight: "Вага",
    imp_graphml: "Імпорт GraphML / GEXF",
    nt_malware: "Шкідливе ПЗ",
    nt_virus: "Вірус",
    nt_hash: "Хеш / IOC",
    nt_url: "URL",
    nt_wallet: "Гаманець",
    nt_leak: "Витік даних",
    nt_tor: "Tor / .onion",
    nt_vpn: "VPN / Proxy",
    nt_apk: "APK / App",
    nt_cve: "CVE / Уразливість",
    nt_cert: "SSL Сертифікат",
    nt_asn: "AS / BGP",
    nt_port: "Порт / Сервіс",
    nt_registry: "Реєстр",
    nt_event: "Подія",
    nt_location: "Локація",
    nt_screenshot: "Скріншот",
    nt_api: "API / Endpoint",
    cat_identity: "Особи",
    cat_infra: "Інфраструктура",
    cat_social: "Соціальні мережі",
    cat_finance: "Фінанси",
    cat_cyber: "Кібер / IOC",
    cat_docs: "Документи",
    cat_all: "Всі",
    nt_signal: "Signal",
    nt_viber: "Viber",
    nt_snapchat: "Snapchat",
    nt_twitch: "Twitch",
    nt_reddit: "Reddit",
    nt_onlyfans: "OnlyFans",
    nt_patreon: "Patreon",
    nt_medium: "Medium",
    nt_gitlab: "GitLab",
    nt_bitbucket: "Bitbucket",
    nt_npmpackage: "NPM Пакет",
    nt_docker: "Docker",
    nt_aws: "AWS / Cloud",
    nt_ethereum: "Ethereum",
    nt_bitcoin: "Bitcoin",
    nt_tron: "Tron / USDT",
    nt_nft: "NFT",
    nt_exchange: "Крипто-біржа",
    nt_sim: "SIM-картка",
    nt_imei: "IMEI / Пристрій",
    nt_camera: "Камера / CCTV",
    nt_drone: "Дрон",
    nt_weapon: "Зброя",
    nt_vehicle: "ТЗ / Номер",
    nt_property: "Нерухомість",
    nt_company_reg: "Реєстр. дані",
    nt_court: "Судовий акт",
    nt_contract: "Контракт",
    nt_invoice: "Рахунок",
    nt_chat: "Чат / Переписка",
    nt_audio: "Аудіо / Запис",
    nt_video: "Відео",
    nt_printer: "Принтер / МФУ",
    nt_router: "Маршрутизатор",
    nt_iot: "IoT / Smart",
    nt_satellite: "Супутник / GPS",
    nt_darkweb: "Даркнет-ресурс",
    nt_forum: "Форум",
    nt_shop: "Магазин",
    nt_ad: "Рекламне ОГ",
    nt_person_alias: "Псевдонім",
    nt_group: "Група / Канал",
    nt_unknown: "Невідомо",
    warn_storage: "Сховище заповнене! Дані не збережено.",
  },
};

let currentLang = localStorage.getItem("krapka_lang") || "ru";
function t(key) {
  return DICT[currentLang][key] || key;
}

function applyTranslations() {
  document
    .querySelectorAll("[data-i18n]")
    .forEach((el) => (el.innerHTML = t(el.dataset.i18n)));
  document
    .querySelectorAll("[data-i18n-title]")
    .forEach((el) => (el.title = t(el.dataset.i18nTitle)));
  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((el) => (el.placeholder = t(el.dataset.i18nPlaceholder)));

  const btnStyle = document.getElementById("tbEdgeStyle");
  if (btnStyle) {
    let t_lbl = t("l_curves");
    if (edgeStyle === "straight") t_lbl = t("l_straight");
    if (edgeStyle === "orthogonal") t_lbl = t("l_ortho");
    btnStyle.title = t_lbl;
    const span = btnStyle.querySelector("span");
    if (span) span.textContent = t_lbl;
  }
}

window.changeLang = function (lang) {
  currentLang = lang;
  localStorage.setItem("krapka_lang", lang);
  applyTranslations();
  buildPalette();
  renderSelection();
  if (selectedIds.size > 0) openPanelForSelection();
  _refreshTagBar();
};

const NODE_TYPES = [
  {
    id: "person",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
  },
  {
    id: "company",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="14" rx="1.5"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/><circle cx="9" cy="13" r=".8" fill="currentColor"/><circle cx="12" cy="13" r=".8" fill="currentColor"/><circle cx="15" cy="13" r=".8" fill="currentColor"/></svg>`,
  },
  {
    id: "domain",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9"/><path d="M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>`,
  },
  {
    id: "ip",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1.2" fill="currentColor"/></svg>`,
  },
  {
    id: "server",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="6" rx="1.5"/><rect x="2" y="10" width="20" height="6" rx="1.5"/><rect x="2" y="17" width="20" height="4" rx="1.5"/><circle cx="6" cy="6" r=".8" fill="currentColor"/><circle cx="6" cy="13" r=".8" fill="currentColor"/></svg>`,
  },
  {
    id: "database",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 5v4c0 1.66-4.03 3-9 3s-9-1.34-9-3V5"/><path d="M21 9v4c0 1.66-4.03 3-9 3s-9-1.34-9-3V9"/><path d="M21 13v4c0 1.66-4.03 3-9 3s-9-1.34-9-3v-4"/></svg>`,
  },
  {
    id: "file",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>`,
  },
  {
    id: "note",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="11" y2="17"/></svg>`,
  },
  {
    id: "phone",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" stroke-width="2.5"/></svg>`,
  },
  {
    id: "email",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><polyline points="2 5 12 13 22 5"/></svg>`,
  },
  {
    id: "money",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>`,
  },
  {
    id: "instagram",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  },
  {
    id: "telegram",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.15-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.28-.01.07.01.25 0 .37z"/></svg>`,
  },
  {
    id: "vk",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.38 14.28h-1.63c-.45 0-.58-.35-1.38-1.16-.69-.76-.99-.86-1.18-.86-.28 0-.36.1-.36.56v1.02c0 .28-.09.44-1.29.44-1.91 0-4.04-1.16-5.32-3.08-1.54-2.18-2-3.83-2-4.11 0-.14.09-.28.38-.28h1.63c.26 0 .36.12.47.4 1.15 3.3 2.65 4.6 3.1 4.6.17 0 .25-.09.25-.56V9.45c-.05-.8-.36-1.05-1.04-1.05l-.26-.03c.18-.54.67-.71 1.54-.71h1.02c.23 0 .32.12.32.41v2.96c0 .35.15.45.26.45.2 0 .4-.1.88-.6 1.18-1.34 1.68-2.88 1.68-2.88.08-.22.25-.33.51-.33h1.63c.35 0 .42.18.35.43-.16.63-1.66 2.71-1.74 2.82-.16.21-.21.31 0 .58.15.19.67.65 1 1.02 1.05 1.15 1.34 1.76 1.34 1.76.12.28-.05.45-.33.45z"/></svg>`,
  },
  {
    id: "discord",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.33-.35-.76-.53-1.09A.09.09 0 0 0 9 4c-1.5.26-2.94.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.03.02.03.08-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.01.02.04.03.07.02 1.71-.53 3.44-1.33 5.24-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.03-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z"/></svg>`,
  },
  {
    id: "youtube",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><polygon points="10 9 16 12 10 15 10 9" fill="currentColor" stroke="none"/></svg>`,
  },
  {
    id: "github",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  },
  {
    id: "address",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  },
  {
    id: "car",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3v-5l2.5-6h11L19 12v5h-2"/><rect x="1" y="12" width="22" height="5" rx="1"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M5 12l1.5-4h11l1.5 4"/></svg>`,
  },
  {
    id: "bankcard",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="6" y1="15" x2="10" y2="15"/><line x1="13" y1="15" x2="16" y2="15"/></svg>`,
  },
  {
    id: "passport",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3"/><line x1="7" y1="17" x2="17" y2="17"/><line x1="7" y1="14" x2="17" y2="14"/></svg>`,
  },
  {
    id: "org",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/><circle cx="6" cy="6" r=".8" fill="currentColor"/><circle cx="10" cy="6" r=".8" fill="currentColor"/></svg>`,
  },
  {
    id: "crypto",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 8h4.5a2 2 0 010 4H9m0-4v8m0-4h5a2 2 0 010 4H9"/></svg>`,
  },
  {
    id: "twitter",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
  {
    id: "linkedin",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    id: "facebook",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  },
  {
    id: "tiktok",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z"/></svg>`,
  },
  {
    id: "whatsapp",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  },
  {
    id: "skype",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .789-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.668 4.324m11.084-4.882l-.008.06c.035-.34.055-.685.055-1.034a9.986 9.986 0 00-2.941-7.049 9.98 9.98 0 00-7.146-2.964c-.352 0-.698.019-1.04.055l.059-.008A5.945 5.945 0 009.069 2C5.766 2 3.089 4.68 3.089 7.989c0 1.087.292 2.107.8 2.979l-.016-.028a9.907 9.907 0 00-.526 3.187c0 5.479 4.404 9.906 9.944 9.906 1.094 0 2.146-.173 3.132-.49l-.064.017A5.95 5.95 0 0019.362 24c3.302 0 5.98-2.681 5.98-5.988 0-.731-.13-1.432-.368-2.079l.015.059z"/></svg>`,
  },
  {
    id: "malware",
    cat: "cyber",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-1 0-2 .5-2.5 1.5L5 12l2 2 2-2 1 4 2-3 1 3 1.5-4 2 2 2-2-4.5-7.5C13.5 3.5 13 3 12 3z"/><circle cx="12" cy="18" r="2"/></svg>`,
  },
  {
    id: "virus",
    cat: "cyber",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="2" x2="12" y2="7"/><line x1="12" y1="17" x2="12" y2="22"/><line x1="2" y1="12" x2="7" y2="12"/><line x1="17" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="8.46" y2="8.46"/><line x1="15.54" y1="15.54" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="15.54" y2="8.46"/><line x1="8.46" y1="15.54" x2="4.93" y2="19.07"/></svg>`,
  },
  {
    id: "hash",
    cat: "cyber",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
  },
  {
    id: "cve",
    cat: "cyber",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L4 6v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V6z"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="16" r=".8" fill="currentColor"/></svg>`,
  },
  {
    id: "url",
    cat: "cyber",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>`,
  },
  {
    id: "tor",
    cat: "cyber",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v5M12 16v5M3 12h5M16 12h5"/></svg>`,
  },
  {
    id: "vpn",
    cat: "cyber",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="6"/><circle cx="8" cy="12" r="3"/><line x1="15" y1="10" x2="19" y2="10"/><line x1="15" y1="14" x2="17" y2="14"/></svg>`,
  },
  {
    id: "apk",
    cat: "cyber",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="18" rx="2"/><path d="M7 7h10M7 17h10"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  },
  {
    id: "cert",
    cat: "cyber",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/><line x1="12" y1="9" x2="12" y2="15"/><line x1="9" y1="12" x2="15" y2="12"/></svg>`,
  },
  {
    id: "asn",
    cat: "infra",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/><path d="M7 15h.01M12 15h.01M17 15h.01"/></svg>`,
  },
  {
    id: "port",
    cat: "infra",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a4 4 0 018 0v2"/><circle cx="12" cy="14" r="2" fill="currentColor" stroke="none"/></svg>`,
  },
  {
    id: "registry",
    cat: "infra",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v4H3z"/><path d="M3 11h18v4H3z"/><path d="M3 19h18v2H3z"/><circle cx="6" cy="5" r=".7" fill="currentColor" stroke="none"/><circle cx="6" cy="13" r=".7" fill="currentColor" stroke="none"/></svg>`,
  },
  {
    id: "api",
    cat: "infra",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  },
  {
    id: "wallet",
    cat: "finance",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 3H8L4 7h16z"/><circle cx="17" cy="14" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  },
  {
    id: "leak",
    cat: "finance",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><line x1="9" y1="10" x2="9.01" y2="10" stroke-width="3"/><line x1="12" y1="10" x2="12.01" y2="10" stroke-width="3"/><line x1="15" y1="10" x2="15.01" y2="10" stroke-width="3"/></svg>`,
  },
  {
    id: "event",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  },
  {
    id: "location",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  },
  {
    id: "screenshot",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  },
  {
    id: "signal",
    cat: "social",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2zm0-8h2v6h-2z"/><path d="M5.64 3.22l1.06 1.77A7.96 7.96 0 004 12c0 2.62 1.27 4.94 3.22 6.42L6.14 20.2A9.97 9.97 0 012 12c0-3.54 1.84-6.65 4.6-8.43l-.96-1.35zm12.72 0l.96 1.35A9.97 9.97 0 0122 12a9.97 9.97 0 01-4.14 8.2l-1.08-1.78A7.96 7.96 0 0020 12c0-2.62-1.27-4.94-3.22-6.42l1.58-2.36z"/></svg>`,
  },
  {
    id: "viber",
    cat: "social",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.9 4.02C18.7 1.96 12.05 1.48 7.7 5.6c-2.95 2.96-3.56 7.22-1.68 11.44L4 22l5.13-2.02c1.3.55 4.4 1.3 7.15-.4 4.42-2.7 5.27-9.5 2.06-13.4-.38-.48-.86-.84-1.38-1.16h-.06zm-4.7 13c-.7.44-2.1.82-3.8.35L8 18.53l-1.8.7.7-1.82-1.3-1.44c-1.47-3.1-.9-6.5 1.5-8.87 3.2-3.1 8.5-2.6 10.26-.32 2.45 3.08 1.67 8.05-1.16 9.84zm-3.3-7.52l1.38 1.38 1.85-1.85 1.41 1.41-1.85 1.86.7.7.71.7-1.41 1.42-.7-.71-.71-.7-1.85 1.85-1.42-1.42 1.85-1.85-1.38-1.38 1.42-1.41z"/></svg>`,
  },
  {
    id: "snapchat",
    cat: "social",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12.17 2C8.85 2 6.15 4.7 6.15 8.02v.55c-.48.16-.93.27-1.35.27-.34 0-.64-.05-.9-.14l-.2-.07-.08.2c-.1.28-.16.55-.16.8 0 .82.5 1.5 1.3 1.87-.07.27-.16.51-.27.72C3.3 13.6 2 14.9 2 16.53c0 .16.02.32.05.48.4 2.02 3.1 2.68 5.16 2.94.08.22.17.45.24.66.1.28.3.39.5.39.26 0 .54-.12.83-.26.5-.23 1.12-.5 2.1-.5.97 0 1.58.27 2.08.5.3.14.57.26.84.26.2 0 .4-.11.5-.39.07-.2.16-.44.24-.66 2.06-.26 4.75-.92 5.15-2.94.03-.16.05-.32.05-.48 0-1.63-1.3-2.93-2.5-4.31-.11-.21-.2-.45-.27-.72.8-.37 1.3-1.05 1.3-1.87 0-.25-.06-.52-.16-.8l-.08-.2-.2.07c-.26.09-.56.14-.9.14-.42 0-.87-.11-1.35-.27v-.55C18.2 4.7 15.49 2 12.17 2z"/></svg>`,
  },
  {
    id: "twitch",
    cat: "social",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M11.64 5.93h1.43v4.28h-1.43zm3.93 0H17v4.28h-1.43zM7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2zm11.57 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h10.86z"/></svg>`,
  },
  {
    id: "reddit",
    cat: "social",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>`,
  },
  {
    id: "onlyfans",
    cat: "social",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12a4 4 0 108 0 4 4 0 00-8 0"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2"/></svg>`,
  },
  {
    id: "patreon",
    cat: "social",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21zM2 21.6h3.5V2.41H2V21.6z"/></svg>`,
  },
  {
    id: "medium",
    cat: "social",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>`,
  },
  {
    id: "gitlab",
    cat: "infra",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z"/></svg>`,
  },
  {
    id: "bitbucket",
    cat: "infra",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.52.87 1.02.87h15.383c.372 0 .7-.258.771-.626L23.99 2.105a.768.768 0 00-.768-.892L.778 1.213zM14.52 15.53H9.522L8.17 8.466h7.561l-1.211 7.064z"/></svg>`,
  },
  {
    id: "npmpackage",
    cat: "infra",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.331h-2.669zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z"/></svg>`,
  },
  {
    id: "docker",
    cat: "infra",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13.98 11.08H12.5v-1.5h1.48zm0-2.99H12.5V6.6h1.48zm-2.99 2.99h-1.49v-1.5H11zm0-2.99h-1.49V6.6H11zM8.01 11.08H6.5v-1.5h1.51zm4.5-4.47v-1.5h-1.48v1.5zm0 2.98V8.09h-1.48V9.6zm-2.97-2.98V5.12H8.05V6.61zm0 2.98V8.09H8.05V9.6zM5.03 11.08H3.5v-1.5h1.53zM23.5 9.6H22v-1.5h1.5zM22 11.08h-1.5v-1.5H22zm-3.02-1.49v-1.5h-1.5v1.5zM16.5 11.08h-1.5v-1.5h1.5zM24 12.08c-.67 3.5-3.46 5.92-7.14 5.92-1.75 0-3.13-.5-4.09-1.09C11.92 18.8 10.24 20 8.16 20 5.59 20 4 18.35 4 16c0-.27.03-.53.07-.8H2.5C1.12 15.2 0 14.06 0 12.67c0-.78.35-1.47.9-1.95h.01c-.01.09-.01.17-.01.26 0 1.1.91 2 2 2h.5c0 .27-.02.54-.02.82C3.38 15.5 4.75 17 6.5 17c1.55 0 2.9-1 3.23-2.5H10c.28 0 .5-.22.5-.5v-1h2.68c.26.57.77.99 1.37 1.14C15.39 15.46 17 14.19 17 12c0-.28-.03-.55-.08-.82C17 11.2 17 11.14 17 11.08h7V12c0 .03 0 .06-.01.08H24z"/></svg>`,
  },
  {
    id: "aws",
    cat: "infra",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.246-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32L12.56 7.063l-1.238 5.318c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.142.167z"/><path d="M21.557 17.668c-2.55 1.884-6.254 2.885-9.442 2.885-4.47 0-8.492-1.651-11.534-4.401-.24-.215-.024-.51.263-.343 3.284 1.908 7.343 3.059 11.539 3.059 2.83 0 5.943-.587 8.807-1.803.431-.185.796.28.367.603z"/><path d="M22.605 16.47c-.327-.42-2.167-.199-2.994-.1-.252.032-.29-.189-.064-.352 1.469-1.032 3.874-.734 4.153-.389.28.35-.073 2.755-1.453 3.904-.211.178-.413.083-.32-.152.311-.773.997-2.511.678-2.911z"/></svg>`,
  },
  {
    id: "ethereum",
    cat: "finance",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/></svg>`,
  },
  {
    id: "bitcoin",
    cat: "finance",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.236-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/></svg>`,
  },
  {
    id: "tron",
    cat: "finance",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.93 5.93L3.07 2l4.55 17.64L12 22l8.93-16.07zm-4.48 1.44l-3.05 7.44-4.43-7.83 7.48.39zm-8.78-.78l4.92 8.72-1.78.9-3.14-9.62zm3.56 10.09l2.01-1.02 1.96 3.06-3.97-2.04zm4.03-1.4l3.19-7.79L21 7.12l-5.74 8.16z"/></svg>`,
  },
  {
    id: "nft",
    cat: "finance",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 2 17 12 22 22 17 22 7"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="2" y1="17" x2="22" y2="17"/></svg>`,
  },
  {
    id: "exchange",
    cat: "finance",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>`,
  },
  {
    id: "sim",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 2l-4 4"/><rect x="8" y="10" width="3" height="3" rx=".5"/><rect x="13" y="10" width="3" height="3" rx=".5"/><rect x="8" y="15" width="3" height="3" rx=".5"/><rect x="13" y="15" width="3" height="3" rx=".5"/></svg>`,
  },
  {
    id: "imei",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="6" x2="13" y2="6"/><line x1="7" y1="10" x2="17" y2="10"/><line x1="7" y1="14" x2="17" y2="14"/><circle cx="12" cy="18" r="1.2" fill="currentColor" stroke="none"/></svg>`,
  },
  {
    id: "camera",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  },
  {
    id: "drone",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M5 5l3.5 3.5M19 5l-3.5 3.5M5 19l3.5-3.5M19 19l-3.5-3.5"/><circle cx="4" cy="4" r="2"/><circle cx="20" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/></svg>`,
  },
  {
    id: "weapon",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h12l3-5h3l1 2h1v3h-1l-1 2h-3l-1-2H14"/><path d="M14 12v5l-2 2H8l-2-2v-5"/><line x1="8" y1="12" x2="8" y2="17"/><line x1="11" y1="12" x2="11" y2="17"/></svg>`,
  },
  {
    id: "vehicle",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M2 11h20"/><path d="M6 7l2-4h8l2 4"/><circle cx="7" cy="17" r="1.5" fill="currentColor" stroke="none"/><circle cx="17" cy="17" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  },
  {
    id: "property",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5L12 3l9 7.5V21H3V10.5z"/><path d="M9 21V12h6v9"/></svg>`,
  },
  {
    id: "company_reg",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="16" y2="16"/><line x1="8" y1="9" x2="10" y2="9"/><circle cx="19" cy="19" r="4" fill="var(--bg,#0A0A0A)" stroke="currentColor"/><line x1="17" y1="19" x2="21" y2="19"/><line x1="19" y1="17" x2="19" y2="21"/></svg>`,
  },
  {
    id: "court",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 10h1v8H9zM14 10h1v8h-1z"/><rect x="7" y="3" width="10" height="4" rx="1"/></svg>`,
  },
  {
    id: "contract",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/><path d="M10 9H8"/><path d="M16 20l-2-2 2-2"/></svg>`,
  },
  {
    id: "invoice",
    cat: "finance",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="2" width="18" height="20" rx="2"/><line x1="7" y1="7" x2="17" y2="7"/><line x1="7" y1="11" x2="17" y2="11"/><line x1="7" y1="15" x2="13" y2="15"/><path d="M15 15l2 2 4-4" stroke-width="1.8"/></svg>`,
  },
  {
    id: "chat",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><line x1="8" y1="10" x2="8.01" y2="10" stroke-width="2.5"/><line x1="12" y1="10" x2="12.01" y2="10" stroke-width="2.5"/><line x1="16" y1="10" x2="16.01" y2="10" stroke-width="2.5"/></svg>`,
  },
  {
    id: "audio",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  },
  {
    id: "video",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="15" height="14" rx="2"/><polygon points="17 9 23 6 23 18 17 15" fill="currentColor" stroke="none" opacity=".7"/></svg>`,
  },
  {
    id: "printer",
    cat: "infra",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  },
  {
    id: "router",
    cat: "infra",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="20" height="8" rx="2"/><circle cx="7" cy="13" r=".8" fill="currentColor"/><circle cx="11" cy="13" r=".8" fill="currentColor"/><path d="M8 9V5m4 4V3m4 6V7"/></svg>`,
  },
  {
    id: "iot",
    cat: "infra",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M6.3 6.3a8 8 0 000 11.4M17.7 6.3a8 8 0 010 11.4"/><path d="M3.5 3.5a13 13 0 000 17M20.5 3.5a13 13 0 010 17"/></svg>`,
  },
  {
    id: "satellite",
    cat: "infra",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7L17 3M7 13L3 17"/><rect x="7" y="7" width="10" height="10" rx="1" transform="rotate(-45 12 12)"/><path d="M17 17l4 4M20 17l1 4-4-1"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/></svg>`,
  },
  {
    id: "darkweb",
    cat: "cyber",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 8v4M12 16h.01" stroke-width="2"/><path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke-dasharray="2 2"/></svg>`,
  },
  {
    id: "forum",
    cat: "social",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><path d="M8 9h8M8 13h5"/></svg>`,
  },
  {
    id: "shop",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`,
  },
  {
    id: "ad",
    cat: "docs",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 16V8l4 8 4-8v8"/><path d="M18 8h-3"/><path d="M18 12h-3"/></svg>`,
  },
  {
    id: "person_alias",
    cat: "identity",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3.5"/><path d="M3 19c0-3.3 2.7-6 6-6"/><circle cx="17" cy="10" r="2.5" stroke-dasharray="3 1.5"/><path d="M13 20c0-2.8 1.8-4 4-4s4 1.2 4 4"/></svg>`,
  },
  {
    id: "group",
    cat: "social",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3 19c0-3 2.4-5 6-5h6c3.6 0 6 2 6 5"/><path d="M9 14c-1.5 0-2.5.3-3.5.8"/></svg>`,
  },
  {
    id: "unknown",
    cat: "identity",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" stroke-width="2.5"/></svg>`,
  },
];

const NODE_TYPE_CATS = {
  identity: ["person", "passport", "org", "person_alias", "unknown"],
  infra: [
    "domain",
    "ip",
    "server",
    "database",
    "asn",
    "port",
    "registry",
    "api",
    "gitlab",
    "bitbucket",
    "npmpackage",
    "docker",
    "aws",
    "printer",
    "router",
    "iot",
    "satellite",
  ],
  social: [
    "instagram",
    "telegram",
    "vk",
    "discord",
    "youtube",
    "github",
    "twitter",
    "linkedin",
    "facebook",
    "tiktok",
    "whatsapp",
    "skype",
    "signal",
    "viber",
    "snapchat",
    "twitch",
    "reddit",
    "onlyfans",
    "patreon",
    "medium",
    "forum",
    "group",
  ],
  finance: [
    "money",
    "bankcard",
    "crypto",
    "wallet",
    "leak",
    "ethereum",
    "bitcoin",
    "tron",
    "nft",
    "exchange",
    "invoice",
  ],
  cyber: [
    "malware",
    "virus",
    "hash",
    "cve",
    "url",
    "tor",
    "vpn",
    "apk",
    "cert",
    "darkweb",
  ],
  docs: [
    "file",
    "note",
    "phone",
    "email",
    "address",
    "car",
    "company",
    "event",
    "location",
    "screenshot",
    "sim",
    "imei",
    "camera",
    "drone",
    "weapon",
    "vehicle",
    "property",
    "company_reg",
    "court",
    "contract",
    "chat",
    "audio",
    "video",
    "shop",
    "ad",
  ],
};

let _palFilterCat = "all";

const COLORS = [
  { id: "lime", hex: "#BEFF00" },
  { id: "blue", hex: "#60A5FA" },
  { id: "purple", hex: "#A78BFA" },
  { id: "red", hex: "#FC6464" },
  { id: "orange", hex: "#FB923C" },
  { id: "teal", hex: "#2DD4BF" },
  { id: "pink", hex: "#EC4899" },
  { id: "yellow", hex: "#EAB308" },
  { id: "cyan", hex: "#06B6D4" },
  { id: "gray", hex: "#9CA3AF" },
];

let nodes = [],
  edges = [],
  selectedIds = new Set(),
  selectedEdgeId = null;
let tool = "select",
  edgeSrcId = null,
  zoom = 1,
  panX = 0,
  panY = 0,
  nextId = 1;
let currentFile = null,
  dirty = false;
let dragging = null,
  dragOff = { x: 0, y: 0 },
  dragMoved = false;
let panning = false,
  panStart = { x: 0, y: 0 },
  panBase = { x: 0, y: 0 },
  spaceDown = false;
let rectSel = false,
  rectStart = { x: 0, y: 0 };
let ctxNodeId = null,
  undoStack = [],
  redoStack = [],
  editingEdgeId = null;
let _minimapDirty = true,
  snapGrid = false,
  _clipboard = [],
  _forceRunning = false,
  _activeTags = new Set(),
  edgeStyle = "curved",
  _presentMode = false,
  _pathSrcId = null,
  _collapsedGroups = new Map();

function togglePresentMode() {
  _presentMode = !_presentMode;
  const sidebar = document.querySelector(".sidebar");
  const toolbar = document.querySelector(".toolbar");
  const rpanel = document.getElementById("rPanel");
  const statusbar = document.querySelector(".statusbar");
  const tagbar = document.getElementById("tagBar");
  const tbPresent = document.getElementById("tbPresent");

  if (_presentMode) {
    sidebar.style.display = "none";
    toolbar.style.display = "none";
    statusbar.style.display = "none";
    if (tagbar) tagbar.style.display = "none";
    rpanel.classList.add("hidden");
    tbPresent && tbPresent.classList.add("active");
    _showToast(t("toast_present"), 2800);
  } else {
    sidebar.style.display = "";
    toolbar.style.display = "";
    statusbar.style.display = "";
    tbPresent && tbPresent.classList.remove("active");
    _refreshTagBar();
  }
}

function _showToast(msg, duration) {
  const el = document.getElementById("autosaveToast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => {
      el.textContent = "Autosaved";
    }, 300);
  }, duration || 2000);
}

function showModal(id) {
  document.getElementById(id).classList.add("visible");
}
function hideModal(id) {
  document.getElementById(id).classList.remove("visible");
}
function modalBg(e, id) {
  if (e.target === document.getElementById(id)) hideModal(id);
}

function _confirm(msg) {
  const result = confirm(msg);
  if (window.krapka && window.krapka.refocus) {
    window.krapka.refocus();
  }
  return result;
}
function _scheduleMinimapRedraw() {
  _minimapDirty = true;
}

(function minimapLoop() {
  if (_minimapDirty && document.getElementById("minimapCanvas")) {
    drawMinimap();
    _minimapDirty = false;
  }
  requestAnimationFrame(minimapLoop);
})();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("langSelect").value = currentLang;
  applyTranslations();
  buildPalette();
  setupCanvas();
  setupKeyboard();
  setupMinimap();
  setupPanelTabOrder();
  updateEmpty();
  updateUndoButtons();
  document.getElementById("tbFilename").addEventListener("dblclick", (e) => {
    e.stopPropagation();
    renameProject();
  });
  setTimeout(function () {
    _PM.init();
  }, 0);
  window.addEventListener("beforeunload", function () {
    _PM.persistNow();
  });
  _initAutoUpdate();
  document
    .querySelectorAll(".tbtn, .btn-new-graph, .wbtn, .tb-rename-btn")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.blur();
      });
    });
});

function initDemo() {
  setTimeout(() => {
    const w = cw().offsetWidth,
      h = cw().offsetHeight;
    const n1id = nid();
    _addNode({
      id: n1id,
      typeId: "person",
      label: "Alice Johnson",
      color: "lime",
      x: w * 0.28,
      y: h * 0.25,
    });
    const n2id = nid();
    _addNode({
      id: n2id,
      typeId: "company",
      label: "Acme Corp",
      color: "blue",
      x: w * 0.6,
      y: h * 0.18,
    });
    const n3id = nid();
    _addNode({
      id: n3id,
      typeId: "domain",
      label: "acme.com",
      color: "teal",
      x: w * 0.62,
      y: h * 0.55,
      group: "=",
    });
    const n4id = nid();
    _addNode({
      id: n4id,
      typeId: "ip",
      label: "192.168.1.1",
      color: "orange",
      x: w * 0.26,
      y: h * 0.58,
      group: "=",
    });
    const n5id = nid();
    _addNode({
      id: n5id,
      typeId: "telegram",
      label: "@alice_j",
      color: "purple",
      x: w * 0.44,
      y: h * 0.38,
    });
    _addEdge({ id: nid(), from: n1id, to: n2id, label: "" });
    _addEdge({ id: nid(), from: n2id, to: n3id, label: "" });
    _addEdge({ id: nid(), from: n1id, to: n4id, label: "" });
    _addEdge({ id: nid(), from: n3id, to: n4id, label: "" });
    _addEdge({ id: nid(), from: n1id, to: n5id, label: "" });
    applyTransform();
    updateCounts();
    updateEmpty();
    dirty = false;
    setUnsaved(false);
  }, 60);
}

function nid() {
  return nextId++;
}
function cw() {
  return document.getElementById("canvasWrap");
}
function nl() {
  return document.getElementById("nodesLayer");
}

function buildPalette() {
  const filterWrap = document.getElementById("palFilterBar");
  if (filterWrap) {
    const cats = [
      "all",
      "identity",
      "infra",
      "social",
      "finance",
      "cyber",
      "docs",
    ];
    filterWrap.innerHTML = cats
      .map(
        (c) =>
          `<button class="pal-cat${_palFilterCat === c ? " active" : ""}" onclick="setPalCat('${c}')">${t("cat_" + c)}</button>`,
      )
      .join("");
  }

  const el = document.getElementById("nodePalette");
  el.innerHTML = "";
  NODE_TYPES.forEach((nt) => {
    if (_palFilterCat !== "all") {
      const catIds = NODE_TYPE_CATS[_palFilterCat] || [];
      if (!catIds.includes(nt.id)) return;
    }
    const d = document.createElement("div");
    d.className = "pal-item";
    d.draggable = true;
    d.dataset.type = nt.id;
    d.innerHTML = `<span class="pi-svg">${nt.svg}</span><span>${t("nt_" + nt.id)}</span>`;
    d.addEventListener("dragstart", (e) =>
      e.dataTransfer.setData("nodeType", nt.id),
    );
    el.appendChild(d);
  });
}

function setPalCat(cat) {
  _palFilterCat = cat;
  buildPalette();
}

function buildIconPicker(cid) {
  const el = document.getElementById(cid);
  if (!el) return;
  el.innerHTML = "";
  NODE_TYPES.forEach((nt) => {
    const d = document.createElement("div");
    d.className = "ip-item";
    d.dataset.type = nt.id;
    d.title = t("nt_" + nt.id);
    d.innerHTML = nt.svg;
    d.onclick = () => onPickIcon(d, nt.id);
    el.appendChild(d);
  });
}
function buildColorPicker(cid, node) {
  const el = document.getElementById(cid);
  if (!el) return;
  el.innerHTML = "";
  COLORS.forEach((c) => {
    const d = document.createElement("div");
    d.className = "cc" + (node && node.color === c.id ? " selected" : "");
    d.dataset.color = c.id;
    d.style.background = c.hex;
    d.title = c.id;
    d.onclick = () => onPickColor(d, c.id);
    el.appendChild(d);
  });
  if (node) {
    const customWrap = document.createElement("div");
    customWrap.className = "custom-color-wrap";
    customWrap.innerHTML = `<label class="cc-custom-label"><input type="color" class="cc-input" value="${node.customColor || "#ffffff"}"><span class="cc-custom-text">Custom color</span></label>`;
    customWrap.querySelector("input").onchange = (e) => {
      pushUndo();
      selectedIds.forEach((id) => {
        const n = nodes.find((x) => x.id === id);
        if (n) {
          n.customColor = e.target.value;
          n.color = "custom";
          _updateNodeVisual(n);
        }
      });
      markDirty();
      openPanelForSelection();
    };
    el.appendChild(customWrap);
  }
}

function setTool(t_id) {
  tool = t_id;
  document
    .getElementById("tbSelect")
    .classList.toggle("active", t_id === "select");
  document.getElementById("tbEdge").classList.toggle("active", t_id === "edge");
  document.getElementById("tbPan").classList.toggle("active", t_id === "pan");
  document
    .getElementById("edgeHint")
    .classList.toggle("visible", t_id === "edge");
  document.getElementById("drawLine").style.display = "none";
  cw().classList.toggle("pan-mode", t_id === "pan");
  if (t_id !== "edge") {
    edgeSrcId = null;
    highlightSrc(null);
  }
}

function getType(id) {
  return NODE_TYPES.find((x) => x.id === id) || NODE_TYPES[0];
}

function _addNode(cfg) {
  if (!cfg.createdAt) cfg.createdAt = Date.now();
  if (!cfg.history) cfg.history = [];
  nodes.push(cfg);
  const el = document.createElement("div");
  el.id = `node-${cfg.id}`;
  el.style.left = cfg.x + "px";
  el.style.top = cfg.y + "px";
  el.innerHTML = `<div class="node-box"></div><div class="node-lbl">${escHtml(cfg.label)}</div>`;
  el.addEventListener("mousedown", (e) => onNodeMD(e, cfg.id));
  el.addEventListener("dblclick", (e) => {
    e.stopPropagation();
    e.preventDefault();
    const nd = nodes.find((n) => n.id === cfg.id);
    if (nd) {
      selectedIds.clear();
      selectedIds.add(cfg.id);
      renderSelection();
      openNodePanel(nd);

      setTimeout(() => {
        const inp = document.getElementById("propName");
        if (inp) {
          inp.focus();
          inp.select();
        }
      }, 50);
    }
  });
  el.addEventListener("contextmenu", (e) => onNodeCtx(e, cfg.id));
  nl().appendChild(el);
  _updateNodeVisual(cfg);
}
function _removeNode(id) {
  document.getElementById(`node-${id}`)?.remove();
  nodes = nodes.filter((n) => n.id !== id);
}
function _addEdge(e) {
  edges.push(e);
}
function _removeEdge(id) {
  edges = edges.filter((e) => e.id !== id);
}

function _updateNodeVisual(n) {
  const el = document.getElementById(`node-${n.id}`);
  if (!el) return;
  const isSel = selectedIds.has(n.id);
  el.className = `graph-node nc-${n.color || "lime"} ${isSel ? "selected" : ""}`;

  if (n.color === "custom" && n.customColor)
    el.style.setProperty("--node-color", n.customColor);
  else el.style.removeProperty("--node-color");

  const box = el.querySelector(".node-box");
  box.innerHTML = "";

  if (n.customIconUrl)
    box.innerHTML = `<img src="${escHtml(n.customIconUrl)}" class="custom-icon-img" onerror="this.style.display='none'">`;
  else box.innerHTML = getType(n.typeId).svg;

  if (n.group)
    box.innerHTML += `<div class="node-group-badge">${escHtml(n.group)}</div>`;
  if (n.typeId === "note" && n.desc) {
    el.querySelector(".node-lbl").innerHTML = _mdToHtml(n.desc.slice(0, 80));
  } else {
    el.querySelector(".node-lbl").textContent = n.label || "—";
  }
  el.classList.toggle("pinned", !!n.pinned);

  const tipParts = [n.label || "—"];
  const typeName = t("nt_" + (n.typeId || "person"));
  tipParts.push("[" + typeName + "]");
  if (n.status) tipParts.push("● " + t("st_" + n.status.slice(0, 4)));
  if (n.desc)
    tipParts.push(n.desc.slice(0, 120) + (n.desc.length > 120 ? "…" : ""));
  if (n.url) tipParts.push("🔗 " + n.url);
  if (n.tags && n.tags.length) tipParts.push("# " + n.tags.join(", "));
  el.title = tipParts.join("\n");
}

function applyTransform() {
  const content = document.getElementById("canvasContent");
  if (content)
    content.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;

  const wrap = cw();
  if (wrap) {
    if (snapGrid) {
      wrap.style.backgroundPosition = `0 0, ${panX}px ${panY}px`;
      wrap.style.backgroundSize = `100% 100%, ${20 * zoom}px ${20 * zoom}px`;
    } else {
      wrap.style.backgroundPosition = `0 0, ${panX}px ${panY}px, ${panX}px ${panY}px`;
      wrap.style.backgroundSize = `100% 100%, ${28 * zoom}px ${28 * zoom}px, ${28 * zoom}px ${28 * zoom}px`;
    }
  }
  nodes.forEach((n) => {
    const el = document.getElementById(`node-${n.id}`);
    if (el) {
      el.style.left = n.x + "px";
      el.style.top = n.y + "px";
    }
  });
  renderEdges();
  renderGroups();
  _scheduleMinimapRedraw();
}

function onNodeMD(e, id) {
  e.stopPropagation();

  closeExportMenu();
  hideCtx();
  if (tool === "edge") {
    if (!edgeSrcId) {
      edgeSrcId = id;
      highlightSrc(id);
    } else if (edgeSrcId !== id) {
      const srcId = edgeSrcId,
        dstId = id;
      edgeSrcId = null;
      highlightSrc(null);
      document.getElementById("drawLine").style.display = "none";
      const exists = edges.find((ed) => ed.from === srcId && ed.to === dstId);
      if (exists) {
        openEdgeModal(exists.id);
        return;
      }
      openNewEdgeModal(srcId, dstId);
    } else {
      edgeSrcId = null;
      highlightSrc(null);
      document.getElementById("drawLine").style.display = "none";
    }
    return;
  }
  if (e.shiftKey || e.ctrlKey || e.metaKey) {
    selectedIds.has(id) ? selectedIds.delete(id) : selectedIds.add(id);
    renderSelection();
    openPanelForSelection();
    return;
  }
  if (_pathSrcId !== null && _pathSrcId !== id) {
    const path = _findShortestPath(_pathSrcId, id);
    if (path) {
      _highlightPath(path);
      _showToast(`${t("p_path")}: ${path.length - 1} steps`, 2500);
    } else {
      _showToast(t("p_path_none"), 2000);
    }
    _pathSrcId = null;
    return;
  }
  if (!selectedIds.has(id)) {
    selectedIds.clear();
    selectedIds.add(id);
    renderSelection();
    openPanelForSelection();
  }
  dragging = id;
  dragMoved = false;
  const nd = nodes.find((n) => n.id === id);
  const rect = cw().getBoundingClientRect();
  dragOff.x = (e.clientX - rect.left - panX) / zoom - nd.x;
  dragOff.y = (e.clientY - rect.top - panY) / zoom - nd.y;
}
function highlightSrc(id) {
  nodes.forEach((n) => {
    const el = document.getElementById(`node-${n.id}`);
    if (el)
      el.querySelector(".node-box").style.boxShadow =
        n.id === id ? "0 0 0 3px rgba(190,255,0,.6)" : "";
  });
}
function renderSelection() {
  nodes.forEach((n) => {
    const el = document.getElementById(`node-${n.id}`);
    if (el) el.classList.toggle("selected", selectedIds.has(n.id));
  });
  const has = selectedIds.size > 0;
  document.getElementById("tbDelete").style.display = has ? "" : "none";
  const ss = document.getElementById("sSelection");
  if (has) {
    if (selectedIds.size === 1) {
      const nd = nodes.find((n) => n.id === [...selectedIds][0]);
      ss.textContent = nd ? nd.label : "";
      ss.style.color = "";
    } else {
      ss.textContent = t("st_sel") + selectedIds.size;
      ss.style.color = "var(--lime)";
    }
  } else {
    ss.textContent = t("st_none");
    ss.style.color = "var(--text3)";
  }
}

function drawGuides(gx, gy) {
  let gl = document.getElementById("guidesLayer");
  if (!gl) {
    gl = document.createElement("div");
    gl.id = "guidesLayer";
    document.getElementById("canvasContent").appendChild(gl);
  }
  gl.innerHTML = "";
  if (gx !== null) {
    const v = document.createElement("div");
    v.className = "smart-guide vertical";
    v.style.left = gx + "px";
    gl.appendChild(v);
  }
  if (gy !== null) {
    const h = document.createElement("div");
    h.className = "smart-guide horizontal";
    h.style.top = gy + "px";
    gl.appendChild(h);
  }
}
function clearGuides() {
  const gl = document.getElementById("guidesLayer");
  if (gl) gl.innerHTML = "";
}

function setupCanvas() {
  const wrap = cw();
  wrap.addEventListener("mousedown", (e) => {
    const isBg =
      e.target === wrap ||
      e.target === document.getElementById("nodesLayer") ||
      e.target.id === "canvasContent" ||
      e.target.id === "svgLayer" ||
      e.target.id === "groupsLayer";
    if (!isBg) return;
    closeExportMenu();
    hideCtx();
    if (tool === "pan" || spaceDown || e.button === 1) {
      panning = true;
      panStart.x = e.clientX;
      panStart.y = e.clientY;
      panBase.x = panX;
      panBase.y = panY;
      wrap.classList.add("panning");
      return;
    }
    if (tool === "select") {
      if (!e.shiftKey) {
        selectedIds.clear();
        renderSelection();
        window.closePanel();
        selectedEdgeId = null;
        renderEdges();
      }
      const rect = wrap.getBoundingClientRect();
      rectSel = true;
      rectStart.x = e.clientX - rect.left;
      rectStart.y = e.clientY - rect.top;
      const sr = document.getElementById("selRect");
      sr.style.cssText = `display:block;left:${rectStart.x}px;top:${rectStart.y}px;width:0;height:0`;
    }
  });
  window.addEventListener("mousemove", (e) => {
    const rect = cw().getBoundingClientRect();
    const logicalX = (e.clientX - rect.left - panX) / zoom,
      logicalY = (e.clientY - rect.top - panY) / zoom;

    if (dragging !== null) {
      dragMoved = true;
      const nd = nodes.find((n) => n.id === dragging);
      const dx = logicalX - dragOff.x - nd.x,
        dy = logicalY - dragOff.y - nd.y;
      let finalDx = dx,
        finalDy = dy;

      if (!snapGrid && !e.altKey) {
        let snapX = null,
          snapY = null;
        const threshold = 10 / zoom;
        let minX = threshold,
          minY = threshold;
        const proposedX = nd.x + dx,
          proposedY = nd.y + dy;

        nodes.forEach((other) => {
          if (selectedIds.has(other.id)) return;
          if (Math.abs(proposedX - other.x) < minX) {
            minX = Math.abs(proposedX - other.x);
            snapX = other.x;
          }
          if (Math.abs(proposedY - other.y) < minY) {
            minY = Math.abs(proposedY - other.y);
            snapY = other.y;
          }
        });

        if (snapX !== null) finalDx = snapX - nd.x;
        if (snapY !== null) finalDy = snapY - nd.y;

        drawGuides(
          snapX !== null ? snapX + 29 : null,
          snapY !== null ? snapY + 29 : null,
        );
      } else {
        clearGuides();
      }

      const ids = selectedIds.has(dragging) ? [...selectedIds] : [dragging];
      ids.forEach((id) => {
        const n = nodes.find((x) => x.id === id);
        let nx = n.x + finalDx,
          ny = n.y + finalDy;
        if (snapGrid) {
          const gs = 20;
          nx = Math.round(nx / gs) * gs;
          ny = Math.round(ny / gs) * gs;
        }
        n.x = nx;
        n.y = ny;
        const el = document.getElementById(`node-${id}`);
        if (el) {
          el.style.left = n.x + "px";
          el.style.top = n.y + "px";
        }
      });
      renderEdges();
      renderGroups();
      _scheduleMinimapRedraw();
      return;
    }

    if (panning) {
      panX = panBase.x + (e.clientX - panStart.x);
      panY = panBase.y + (e.clientY - panStart.y);
      applyTransform();
      return;
    }
    if (rectSel) {
      const cx = e.clientX - rect.left,
        cy2 = e.clientY - rect.top;
      const x = Math.min(cx, rectStart.x),
        y = Math.min(cy2, rectStart.y),
        w = Math.abs(cx - rectStart.x),
        h = Math.abs(cy2 - rectStart.y);
      const sr = document.getElementById("selRect");
      sr.style.left = x + "px";
      sr.style.top = y + "px";
      sr.style.width = w + "px";
      sr.style.height = h + "px";
      const wx1 = (x - panX) / zoom,
        wy1 = (y - panY) / zoom,
        wx2 = (x + w - panX) / zoom,
        wy2 = (y + h - panY) / zoom;
      nodes.forEach((n) => {
        if (n.x >= wx1 && n.x <= wx2 && n.y >= wy1 && n.y <= wy2)
          selectedIds.add(n.id);
        else if (!e.shiftKey) selectedIds.delete(n.id);
      });
      renderSelection();
      return;
    }
    if (tool === "edge" && edgeSrcId) {
      const src = nodes.find((n) => n.id === edgeSrcId);
      if (!src) return;
      const dl = document.getElementById("drawLine");
      dl.style.display = "";
      dl.setAttribute("x1", src.x);
      dl.setAttribute("y1", src.y);
      dl.setAttribute("x2", logicalX);
      dl.setAttribute("y2", logicalY);
    }
  });
  window.addEventListener("mouseup", () => {
    if (dragging !== null) {
      if (dragMoved) {
        const nd = nodes.find((n) => n.id === dragging);
        if (nd) {
          const [rx, ry] = _resolveCollision(nd.x, nd.y, dragging);
          if (rx !== nd.x || ry !== nd.y) {
            nd.x = rx;
            nd.y = ry;
            const el = document.getElementById("node-" + nd.id);
            if (el) {
              el.style.left = rx + "px";
              el.style.top = ry + "px";
            }
          }
        }
        pushUndo();
        markDirty();
      }
      dragging = null;
      clearGuides();
    }
    if (panning) {
      panning = false;
      cw().classList.remove("panning");
    }
    if (rectSel) {
      rectSel = false;
      document.getElementById("selRect").style.display = "none";
      openPanelForSelection();
    }
  });
  wrap.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const rect = wrap.getBoundingClientRect(),
        mx = e.clientX - rect.left,
        my = e.clientY - rect.top;
      const lx = (mx - panX) / zoom,
        ly = (my - panY) / zoom;
      const factor = e.deltaY < 0 ? 1.12 : 0.89;
      zoom = Math.min(3, Math.max(0.1, zoom * factor));
      panX = mx - lx * zoom;
      panY = my - ly * zoom;
      document.getElementById("zoomLabel").textContent =
        Math.round(zoom * 100) + "%";
      applyTransform();
    },
    { passive: false },
  );
  wrap.addEventListener("dragover", (e) => e.preventDefault());
  wrap.addEventListener("drop", (e) => {
    e.preventDefault();
    const typeId = e.dataTransfer.getData("nodeType");
    if (!typeId) return;
    const rect = wrap.getBoundingClientRect();
    let dropX = (e.clientX - rect.left - panX) / zoom;
    let dropY = (e.clientY - rect.top - panY) / zoom;
    [dropX, dropY] = _resolveCollision(dropX, dropY);
    pushUndo();
    const newId = nid();
    _addNode({
      id: newId,
      typeId,
      label: t("nt_" + typeId),
      color: "lime",
      x: dropX,
      y: dropY,
    });
    applyTransform();
    updateCounts();
    updateEmpty();
    markDirty();
    selectedIds.clear();
    selectedIds.add(newId);
    renderSelection();
    openPanelForSelection();
    setTimeout(() => {
      const inp = document.getElementById("propName");
      if (inp) {
        inp.focus();
        inp.select();
      }
    }, 60);
  });
}

function _resolveCollision(x, y, excludeId) {
  const R = 62;
  let nx = x,
    ny = y;
  for (let attempt = 0; attempt < 30; attempt++) {
    let colliding = false;
    for (const n of nodes) {
      if (n.id === excludeId) continue;
      const dx = nx - n.x,
        dy = ny - n.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < R) {
        colliding = true;
        const angle = Math.atan2(dy, dx);
        nx = n.x + Math.cos(angle) * R;
        ny = n.y + Math.sin(angle) * R;
        break;
      }
    }
    if (!colliding) break;
  }
  return [nx, ny];
}

function changeZoom(delta) {
  const factor = delta > 0 ? 1.18 : 1 / 1.18;
  const wrap = cw(),
    mx = wrap.offsetWidth / 2,
    my = wrap.offsetHeight / 2;
  const lx = (mx - panX) / zoom,
    ly = (my - panY) / zoom;
  zoom = Math.min(3, Math.max(0.1, zoom * factor));
  panX = mx - lx * zoom;
  panY = my - ly * zoom;
  document.getElementById("zoomLabel").textContent =
    Math.round(zoom * 100) + "%";
  applyTransform();
}
function fitToSelection() {
  const ids = [...selectedIds];
  const sel = nodes.filter((n) => ids.includes(n.id));
  if (!sel.length) {
    fitView();
    return;
  }
  const pad = 80,
    wrap = cw();
  const minX = Math.min(...sel.map((n) => n.x)),
    minY = Math.min(...sel.map((n) => n.y)),
    maxX = Math.max(...sel.map((n) => n.x + 58)),
    maxY = Math.max(...sel.map((n) => n.y + 58));
  const gw = maxX - minX || 1,
    gh = maxY - minY || 1;
  zoom = Math.min(
    2,
    Math.min(
      (wrap.offsetWidth - pad * 2) / gw,
      (wrap.offsetHeight - pad * 2) / gh,
    ),
  );
  panX = (wrap.offsetWidth - gw * zoom) / 2 - minX * zoom;
  panY = (wrap.offsetHeight - gh * zoom) / 2 - minY * zoom;
  document.getElementById("zoomLabel").textContent =
    Math.round(zoom * 100) + "%";
  applyTransform();
}

function fitView() {
  if (!nodes.length) return;
  const pad = 80,
    wrap = cw();
  const minX = Math.min(...nodes.map((n) => n.x)),
    minY = Math.min(...nodes.map((n) => n.y)),
    maxX = Math.max(...nodes.map((n) => n.x + 58)),
    maxY = Math.max(...nodes.map((n) => n.y + 58));
  const gw = maxX - minX || 1,
    gh = maxY - minY || 1;
  zoom = Math.min(
    2,
    Math.min(
      (wrap.offsetWidth - pad * 2) / gw,
      (wrap.offsetHeight - pad * 2) / gh,
    ),
  );
  panX = (wrap.offsetWidth - gw * zoom) / 2 - minX * zoom;
  panY = (wrap.offsetHeight - gh * zoom) / 2 - minY * zoom;
  document.getElementById("zoomLabel").textContent =
    Math.round(zoom * 100) + "%";
  applyTransform();
}

function _edgeTangentAngle(sx1, sy1, cx, cy, sx2, sy2) {
  const dx = sx2 - cx,
    dy = sy2 - cy;
  return Math.atan2(dy, dx);
}
function _mkArrowhead(g, tip_x, tip_y, angle, isSel, edgeHex) {
  const L = 10,
    W = 3.5,
    cos = Math.cos(angle),
    sin = Math.sin(angle);
  const bx = tip_x - cos * L,
    by = tip_y - sin * L,
    px = -sin * W,
    py = cos * W;
  const pts = `${tip_x},${tip_y} ${bx + px},${by + py} ${bx - px},${by - py}`;
  const tri = mkSvg("polygon");
  tri.setAttribute("points", pts);
  tri.setAttribute(
    "fill",
    isSel ? "#BEFF00" : edgeHex || "rgba(190,255,0,0.55)",
  );
  tri.style.pointerEvents = "none";
  g.appendChild(tri);
}
function _bezierCtrl(sx1, sy1, sx2, sy2) {
  const dx = sx2 - sx1,
    dy = sy2 - sy1,
    dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const bend = Math.min(dist * 0.28, 70),
    mx = (sx1 + sx2) / 2,
    my = (sy1 + sy2) / 2;
  return { cx: mx + (-dy / dist) * bend, cy: my + (dx / dist) * bend };
}

function renderEdges() {
  const g = document.getElementById("edgesGroup");
  g.setAttribute("pointer-events", "all");
  g.innerHTML = "";
  const R_node = 29;

  edges.forEach((edge) => {
    const fn = nodes.find((n) => n.id === edge.from),
      tn = nodes.find((n) => n.id === edge.to);
    if (!fn || !tn) return;
    const fx = fn.x,
      fy = fn.y,
      ex = tn.x,
      ey = tn.y;
    const dx = ex - fx,
      dy = ey - fy,
      dist = Math.sqrt(dx * dx + dy * dy) || 1;
    if (dist < R_node * 1.5) return;

    const sx1 = fx + (dx / dist) * R_node,
      sy1 = fy + (dy / dist) * R_node;
    const tipX = ex - (dx / dist) * R_node,
      tipY = ey - (dy / dist) * R_node;
    const sx2 = tipX - (dx / dist) * 1.5,
      sy2 = tipY - (dy / dist) * 1.5;

    const useStraight =
      edge.straight === true ||
      (edgeStyle === "straight" && edge.straight !== false);
    const useOrtho =
      edgeStyle === "orthogonal" &&
      edge.straight !== false &&
      edge.straight !== true;

    let pathD, lx, ly, arrowAngle;

    if (useStraight) {
      pathD = `M${sx1} ${sy1} L${sx2} ${sy2}`;
      lx = (sx1 + sx2) / 2;
      ly = (sy1 + sy2) / 2;
      arrowAngle = Math.atan2(dy, dx);
    } else if (useOrtho) {
      if (Math.abs(dx) > Math.abs(dy)) {
        const cx = (sx1 + sx2) / 2;
        pathD = `M${sx1} ${sy1} L${cx} ${sy1} L${cx} ${sy2} L${sx2} ${sy2}`;
        lx = cx;
        ly = (sy1 + sy2) / 2;
        arrowAngle = dx > 0 ? 0 : Math.PI;
      } else {
        const cy = (sy1 + sy2) / 2;
        pathD = `M${sx1} ${sy1} L${sx1} ${cy} L${sx2} ${cy} L${sx2} ${sy2}`;
        lx = (sx1 + sx2) / 2;
        ly = cy;
        arrowAngle = dy > 0 ? Math.PI / 2 : -Math.PI / 2;
      }
    } else {
      const { cx, cy } = _bezierCtrl(sx1, sy1, sx2, sy2);
      pathD = `M${sx1} ${sy1} Q${cx} ${cy} ${sx2} ${sy2}`;
      lx = (sx1 + 2 * cx + sx2) / 4;
      ly = (sy1 + 2 * cy + sy2) / 4;
      arrowAngle = _edgeTangentAngle(sx1, sy1, cx, cy, sx2, sy2);
    }

    const hit = mkSvg("path");
    hit.setAttribute("d", pathD);
    hit.setAttribute("stroke", "transparent");
    hit.setAttribute("stroke-width", 18);
    hit.setAttribute("fill", "none");
    hit.style.cursor = "pointer";
    hit.style.pointerEvents = "stroke";
    hit.addEventListener("click", (ev) => {
      ev.stopPropagation();
      onEdgeClick(ev, edge.id);
    });
    hit.addEventListener("dblclick", (ev) => {
      ev.stopPropagation();
      openEdgeModal(edge.id);
    });
    g.appendChild(hit);

    const isSel = edge.id === selectedEdgeId;
    const edgeHex = _getEdgeColor(edge, isSel);
    const line = mkSvg("path");
    line.setAttribute("d", pathD);
    line.setAttribute("stroke", edgeHex);
    line.setAttribute("stroke-width", isSel ? 2 : 1.5);
    line.setAttribute("fill", "none");
    line.style.cursor = "pointer";
    line.style.pointerEvents = "stroke";
    line.addEventListener("click", (ev) => {
      ev.stopPropagation();
      onEdgeClick(ev, edge.id);
    });
    line.addEventListener("dblclick", (ev) => {
      ev.stopPropagation();
      openEdgeModal(edge.id);
    });
    g.appendChild(line);

    _mkArrowhead(g, tipX, tipY, arrowAngle, isSel, edgeHex);

    const _dispLabel = edge.label
      ? edge.weight !== undefined
        ? `${edge.label} (${edge.weight})`
        : edge.label
      : edge.weight !== undefined
        ? String(edge.weight)
        : null;
    if (_dispLabel) {
      const tw = Math.max(_dispLabel.length * 6.2 + 16, 24);
      const bg = mkSvg("rect");
      bg.setAttribute("x", lx - tw / 2);
      bg.setAttribute("y", ly - 8);
      bg.setAttribute("width", tw);
      bg.setAttribute("height", 15);
      bg.setAttribute("rx", 4);
      bg.setAttribute("fill", isSel ? "#1a2200" : "#0A0A0A");
      bg.setAttribute(
        "stroke",
        isSel ? "rgba(190,255,0,0.4)" : "rgba(255,255,255,0.06)",
      );
      bg.setAttribute("stroke-width", "0.5");
      bg.style.cursor = "pointer";
      bg.style.pointerEvents = "all";
      bg.addEventListener("click", (ev) => {
        ev.stopPropagation();
        onEdgeClick(ev, edge.id);
      });
      bg.addEventListener("dblclick", (ev) => {
        ev.stopPropagation();
        openEdgeModal(edge.id);
      });
      g.appendChild(bg);
      const txt = mkSvg("text");
      txt.setAttribute("x", lx);
      txt.setAttribute("y", ly);
      txt.setAttribute("text-anchor", "middle");
      txt.setAttribute("dominant-baseline", "central");
      txt.setAttribute("font-family", "Manrope,sans-serif");
      txt.setAttribute("font-size", "10");
      txt.setAttribute("font-weight", "600");
      txt.setAttribute("fill", isSel ? "#BEFF00" : "#999");
      txt.style.pointerEvents = "none";
      txt.textContent = _dispLabel;
      g.appendChild(txt);
    }
  });
}

function renderGroups() {
  let gl = document.getElementById("groupsLayer");
  if (!gl) {
    gl = document.createElement("div");
    gl.id = "groupsLayer";
    document
      .getElementById("canvasContent")
      .insertBefore(gl, document.getElementById("nodesLayer"));
  }
  gl.innerHTML = "";
  const groups = {};
  nodes.forEach((n) => {
    if (n.group) {
      if (!groups[n.group]) groups[n.group] = [];
      groups[n.group].push(n);
    }
  });
  for (const [gName, gNodes] of Object.entries(groups)) {
    if (gNodes.length === 0) continue;
    const pad = 35;
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;
    gNodes.forEach((n) => {
      if (n.x < minX) minX = n.x;
      if (n.y < minY) minY = n.y;
      if (n.x > maxX) maxX = n.x;
      if (n.y > maxY) maxY = n.y;
    });
    const el = document.createElement("div");
    el.className = "visual-group";
    el.style.left = `${minX - 29 - pad}px`;
    el.style.top = `${minY - 29 - pad}px`;
    el.style.width = `${maxX - minX + 58 + pad * 2}px`;
    el.style.height = `${maxY - minY + 58 + pad * 2}px`;
    el.innerHTML = `<div class="vg-label">${escHtml(gName)}</div>`;
    gl.appendChild(el);
  }
}

function onEdgeClick(e, edgeId) {
  e.stopPropagation();
  selectedIds.clear();
  renderSelection();
  selectedEdgeId = selectedEdgeId === edgeId ? null : edgeId;
  renderEdges();
  const ss = document.getElementById("sSelection");
  if (selectedEdgeId) {
    const ed = edges.find((x) => x.id === edgeId);
    const fn = nodes.find((n) => n.id === ed.from);
    const tn = nodes.find((n) => n.id === ed.to);
    ss.textContent = `${fn?.label || "?"} = ${tn?.label || "?"}`;
    ss.style.color = "var(--lime)";
    document.getElementById("tbDelete").style.display = "";
  } else {
    window.closePanel();
    document.getElementById("tbDelete").style.display = "none";
    ss.textContent = t("st_none");
    ss.style.color = "var(--text3)";
  }
}

function mkSvg(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag);
}

let _lastPanelNodeId = null;
window.closePanel = function () {
  document.getElementById("rPanel").classList.add("hidden");
  _lastPanelNodeId = null;
};

function openPanelForSelection() {
  selectedEdgeId = null;
  renderEdges();
  if (!selectedIds.size) {
    window.closePanel();
    return;
  }
  if (selectedIds.size === 1) {
    const nd = nodes.find((n) => n.id === [...selectedIds][0]);
    if (nd) {
      if (_lastPanelNodeId !== nd.id) openNodePanel(nd);
      else document.getElementById("rPanel").classList.remove("hidden");
    }
  } else {
    _lastPanelNodeId = null;
    openMultiPanel();
  }
  _refreshTagBar();
}
function openNodePanel(node) {
  _lastPanelNodeId = node.id;
  document.getElementById("rPanel").classList.remove("hidden");
  document.getElementById("rpTitle").textContent = t("p_node");
  document.getElementById("rpBody").innerHTML = `
    <div class="fg"><label class="fl">${t("p_name")}</label><div class="fi-copy-row"><input class="fi fi-copy-input" id="propName" value="${escHtml(node.label)}" placeholder="e.g. John Doe" oninput="liveUpdate('label',this.value)"><button class="fi-copy-btn" onclick="copyField('propName')" title="Copy"><svg width=\"11\" height=\"11\" viewBox=\"0 0 12 12\" fill=\"none\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"7\" rx=\"1.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><path d=\"M1 8V2.5A1.5 1.5 0 012.5 1H8\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/></svg></button></div></div>
    <div class="fg"><label class="fl">${t("p_desc")}</label><textarea class="fi fi-ta" id="propDesc" placeholder="${node.typeId === "note" ? "**bold** *italic* `code` - list" : "Brief description..."}" oninput="liveUpdate('desc',this.value)">${escHtml(node.desc || "")}</textarea></div>
    ${_renderNotePreview(node)}
    <div class="fg"><label class="fl">${t("p_url")}</label><div class="fi-copy-row"><input class="fi fi-copy-input" id="propUrl" placeholder="https://example.com" value="${escHtml(node.url || "")}" oninput="liveUpdate('url',this.value)"><button class="fi-copy-btn" onclick="copyField('propUrl')" title="Copy"><svg width=\"11\" height=\"11\" viewBox=\"0 0 12 12\" fill=\"none\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"7\" rx=\"1.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><path d=\"M1 8V2.5A1.5 1.5 0 012.5 1H8\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/></svg></button></div></div>
    <div class="fg attr-row"><div><label class="fl">${t("p_date")}</label><input class="fi" id="propDate" type="text" placeholder="2024-01-15" value="${escHtml(node.date || "")}" oninput="liveUpdate('date',this.value)"></div><div><label class="fl">${t("p_status")}</label><select class="fi" id="propStatus" onchange="liveUpdate('status',this.value)"><option value="">=</option><option value="active" ${node.status === "active" ? "selected" : ""}>${t("st_act")}</option><option value="inactive" ${node.status === "inactive" ? "selected" : ""}>${t("st_inact")}</option><option value="suspect" ${node.status === "suspect" ? "selected" : ""}>${t("st_susp")}</option><option value="confirmed" ${node.status === "confirmed" ? "selected" : ""}>${t("st_conf")}</option></select></div></div>
    <div class="fg"><label class="fl">${t("p_group")}</label><input class="fi" placeholder="e.g. Network A" value="${escHtml(node.group || "")}" oninput="liveUpdate('group',this.value)"></div>
    <div class="fg"><label class="fl">${t("p_icon_url")}</label><input class="fi" placeholder="https://example.com/icon.png" value="${escHtml(node.customIconUrl || "")}" oninput="liveUpdate('customIconUrl',this.value)"></div>
    <div class="fg"><label class="fl">${t("p_tags")} <span style="opacity:.5;font-weight:400">${t("p_tags_hint")}</span></label><input class="fi" id="propTags" placeholder="work, important, archive" value="${escHtml((node.tags || []).join(", "))}" oninput="liveUpdateTags(this.value)"></div>
    <div class="fg"><label class="fl">${t("p_icon")}</label><div class="icon-picker" id="iconPicker"></div></div>
    <div class="fg"><label class="fl">${t("p_color")}</label><div class="color-row" id="colorPicker"></div></div>
    ${_renderNodeMeta(node)}`;
  buildIconPicker("iconPicker");
  buildColorPicker("colorPicker", node);
  document
    .querySelectorAll(".ip-item")
    .forEach((el) =>
      el.classList.toggle(
        "selected",
        el.dataset.type === node.typeId && !node.customIconUrl,
      ),
    );
  const _pinLbl = node.pinned ? t("p_unpin") : t("p_pin");
  const _pinIco = node.pinned
    ? `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M3 4l3-3 3 3M3 8h6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    : `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 11V5M4 7l2 4 2-4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="3" r="2" stroke="currentColor" stroke-width="1.2"/></svg>`;
  const _grpBtn = node.group
    ? `<button class="btn-ghost" onclick="toggleGroupCollapse(${JSON.stringify(node.group)})" style="font-size:10px;padding:4px 7px">${_collapsedGroups.has(node.group) ? t("p_expand") : t("p_collapse")}</button>`
    : "";
  document.getElementById("rpFooter").innerHTML =
    `<button class="btn-ghost-danger" onclick="deleteSelected()"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 3h8M4.5 3V2h3v1M4 3l.5 7h3l.5-7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>${t("p_del_all").split(" ")[0]}</button><button class="btn-ghost" onclick="togglePinNode(${node.id})" title="${_pinLbl}">${_pinIco}</button>${_grpBtn}<button class="btn-ghost" onclick="startPathMode(${node.id})" style="font-size:10px;padding:4px 7px">${t("p_path_btn")}</button><button class="btn-lime" onclick="startEdgeFromPanel()"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="2" cy="6" r="1.5" stroke="currentColor" stroke-width="1.2"/><circle cx="10" cy="6" r="1.5" stroke="currentColor" stroke-width="1.2"/><line x1="3.5" y1="6" x2="8.5" y2="6" stroke="currentColor" stroke-width="1.2"/></svg>${t("p_link")}</button>`;
}
function openMultiPanel() {
  document.getElementById("rPanel").classList.remove("hidden");
  document.getElementById("rpTitle").textContent = t("p_multi");
  document.getElementById("rpBody").innerHTML = `
    <div class="multi-info">${t("st_sel")}<b>${selectedIds.size}</b></div>
    <div class="fg"><label class="fl">${t("p_color").split(" ")[0]}</label><div class="color-row" id="colorPicker"></div></div>
    <div class="fg">
      <label class="fl">${t("p_rename_multi")}</label>
      <div class="bulk-row">
        <input class="fi" id="bulkFind" placeholder="${t("p_find")}…" style="flex:1">
        <input class="fi" id="bulkReplace" placeholder="${t("p_replace")}…" style="flex:1">
      </div>
      <div class="bulk-opts">
        <label class="bulk-chk-lbl"><input type="checkbox" id="bulkRegex" style="accent-color:var(--lime)"> ${t("p_regex")}</label>
        <button class="btn-ghost" style="padding:4px 10px;font-size:11px" onclick="applyBulkRename()">${t("p_replace_btn")}</button>
      </div>
      <div id="bulkResult" style="font-size:10px;color:var(--text3);margin-top:4px"></div>
    </div>`;
  buildColorPicker("colorPicker");
  document.getElementById("rpFooter").innerHTML = `
    <div class="multi-footer-row">
      <button class="btn-ghost-danger" onclick="deleteSelected()" style="flex:none;padding:6px 8px;font-size:11px">${t("p_del_all")}</button>
      <button class="btn-ghost" onclick="findDuplicates()" style="flex:none;padding:6px 8px;font-size:11px">${t("p_dup_find")}</button>
      <button class="btn-lime" onclick="showGroupModal()" style="flex:none;padding:6px 8px;font-size:11px">${t("p_group_btn")}</button>
    </div>`;
}

function applyBulkRename() {
  const findVal = document.getElementById("bulkFind")?.value;
  const replVal = document.getElementById("bulkReplace")?.value ?? "";
  const useRegex = document.getElementById("bulkRegex")?.checked;
  const result = document.getElementById("bulkResult");
  if (!findVal) return;
  let changed = 0,
    err = null;
  pushUndo();
  try {
    const pattern = useRegex ? new RegExp(findVal, "g") : null;
    selectedIds.forEach((id) => {
      const nd = nodes.find((n) => n.id === id);
      if (!nd) return;
      const before = nd.label || "";
      const after = pattern
        ? before.replace(pattern, replVal)
        : before.split(findVal).join(replVal);
      if (after !== before) {
        nd.label = after;
        nd.updatedAt = Date.now();
        if (!nd.history) nd.history = [];
        nd.history.push({
          ts: Date.now(),
          field: "label",
          from: before,
          to: after,
        });
        _updateNodeVisual(nd);
        changed++;
      }
    });
  } catch (e) {
    err = e.message;
  }
  markDirty();
  if (result)
    result.textContent = err
      ? "⚠ " + err
      : changed
        ? `✓ ${changed} замінено`
        : "—";
}

function findDuplicates() {
  const labelMap = {},
    urlMap = {};
  nodes.forEach((n) => {
    const lk = (n.label || "").toLowerCase().trim();
    if (lk) {
      if (!labelMap[lk]) labelMap[lk] = [];
      labelMap[lk].push(n.id);
    }
    if (n.url) {
      if (!urlMap[n.url]) urlMap[n.url] = [];
      urlMap[n.url].push(n.id);
    }
  });
  const dupIds = new Set();
  Object.values(labelMap).forEach((arr) => {
    if (arr.length > 1) arr.forEach((id) => dupIds.add(id));
  });
  Object.values(urlMap).forEach((arr) => {
    if (arr.length > 1) arr.forEach((id) => dupIds.add(id));
  });
  if (!dupIds.size) {
    _showToast(t("p_dup_none"), 2000);
    return;
  }
  selectedIds.clear();
  dupIds.forEach((id) => selectedIds.add(id));
  renderSelection();
  openPanelForSelection();
  _showToast(`${t("p_dup_found")} ${dupIds.size}`, 2500);
}
let _liveUpdateUndoPending = false;
function liveUpdate(field, val) {
  if (selectedIds.size !== 1) return;
  const nd = nodes.find((n) => n.id === [...selectedIds][0]);
  if (!nd) return;
  const _tracked = [
    "label",
    "desc",
    "url",
    "status",
    "group",
    "date",
    "tags",
    "typeId",
  ];
  if (_tracked.includes(field) && nd[field] !== val) {
    if (!_liveUpdateUndoPending) {
      pushUndo();
      _liveUpdateUndoPending = true;
      setTimeout(function () {
        _liveUpdateUndoPending = false;
      }, 1000);
    }
    if (!nd.history) nd.history = [];
    nd.history.push({ ts: Date.now(), field, from: nd[field], to: val });
    if (nd.history.length > 50) nd.history.shift();
  }
  nd[field] = val;
  nd.updatedAt = Date.now();
  markDirty();
  if (
    field === "label" ||
    field === "status" ||
    field === "customIconUrl" ||
    field === "group"
  )
    _updateNodeVisual(nd);
  if (field === "label")
    document.getElementById("sSelection").textContent = val || "=";
  if (field === "group") renderGroups();
}
function liveUpdateTags(val) {
  if (selectedIds.size !== 1) return;
  const nd = nodes.find((n) => n.id === [...selectedIds][0]);
  if (!nd) return;
  nd.tags = val
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  markDirty();
  _refreshTagBar();
}
function _mdToHtml(md) {
  if (!md) return "";
  let s = escHtml(md);
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/\*(.+?)\*/g, "<em>$1</em>");
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, function (_, txt, url) {
    return (
      '<a href="#" onclick="event.preventDefault();window.open(\'' +
      url +
      '\')" style="color:var(--lime)">' +
      txt +
      "</a>"
    );
  });
  s = s.replace(/^- (.+)$/gm, "\u2022 $1");
  s = s.replace(/\n/g, "<br>");
  return s;
}

function _renderNotePreview(node) {
  if (node.typeId !== "note" || !node.desc) return "";
  return `<div class="fg note-preview-wrap">
    <label class="fl">Preview</label>
    <div class="note-preview">${_mdToHtml(node.desc)}</div>
  </div>`;
}

function _fmtTs(ts) {
  if (!ts) return "—";
  const d = new Date(ts);
  return (
    d.toLocaleDateString() +
    " " +
    d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
}

function _renderNodeMeta(node) {
  const created = _fmtTs(node.createdAt);
  const modified = node.updatedAt ? _fmtTs(node.updatedAt) : "—";

  const hist = (node.history || []).slice().reverse().slice(0, 10);
  const histRows = hist.length
    ? hist
        .map(
          (h) =>
            `<div class="hist-row">
          <span class="hist-ts">${_fmtTs(h.ts)}</span>
          <span class="hist-field">${escHtml(h.field)}</span>
          <span class="hist-arrow">→</span>
          <span class="hist-val">${escHtml(String(h.to || "").slice(0, 40))}</span>
        </div>`,
        )
        .join("")
    : `<div class="hist-empty">${t("p_hist_empty")}</div>`;

  const whoisBtn =
    node.typeId === "domain" && node.label
      ? `<button class="btn-lookup" onclick="showWhoisPanel(${node.id})">
         <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
           <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" stroke-width="1.2"/>
           <path d="M6.5 3.5v3l1.5 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
         </svg>${t("p_lookup")}
       </button>`
      : "";

  return `
    <div class="fg meta-ts-row">
      <span class="meta-ts"><span class="meta-ts-lbl">${t("p_created")}</span>${escHtml(created)}</span>
      <span class="meta-ts"><span class="meta-ts-lbl">${t("p_modified")}</span>${escHtml(modified)}</span>
      ${whoisBtn}
    </div>
    <div class="fg">
      <label class="fl">${t("p_history")}</label>
      <div class="hist-list">${histRows}</div>
    </div>`;
}

const _WHOIS_TLD = {
  com: {
    reg: "Verisign",
    iana: "https://www.iana.org/domains/root/db/com.html",
    note: "Generic TLD, most popular",
  },
  net: {
    reg: "Verisign",
    iana: "https://www.iana.org/domains/root/db/net.html",
    note: "Network services",
  },
  org: {
    reg: "PIR",
    iana: "https://www.iana.org/domains/root/db/org.html",
    note: "Non-profit / open use",
  },
  io: {
    reg: "IANA / Afilias",
    iana: "https://www.iana.org/domains/root/db/io.html",
    note: "British Indian Ocean Territory, popular for tech",
  },
  ru: {
    reg: "RU-CENTER / RIPN",
    iana: "https://www.iana.org/domains/root/db/ru.html",
    note: "Russian Federation ccTLD",
  },
  ua: {
    reg: "HOSTMASTER",
    iana: "https://www.iana.org/domains/root/db/ua.html",
    note: "Ukraine ccTLD",
  },
  de: {
    reg: "DENIC",
    iana: "https://www.iana.org/domains/root/db/de.html",
    note: "Germany ccTLD",
  },
  uk: {
    reg: "Nominet",
    iana: "https://www.iana.org/domains/root/db/uk.html",
    note: "United Kingdom ccTLD",
  },
  cn: {
    reg: "CNNIC",
    iana: "https://www.iana.org/domains/root/db/cn.html",
    note: "China ccTLD, strict regulation",
  },
  xyz: {
    reg: "XYZ.com LLC",
    iana: "https://www.iana.org/domains/root/db/xyz.html",
    note: "Generic, often used by free/cheap projects",
  },
  top: {
    reg: "Jiangsu Bangning",
    iana: "https://www.iana.org/domains/root/db/top.html",
    note: "High abuse rate — frequent spam/phishing",
  },
  info: {
    reg: "Afilias",
    iana: "https://www.iana.org/domains/root/db/info.html",
    note: "Generic information TLD",
  },
  biz: {
    reg: "Neustar",
    iana: "https://www.iana.org/domains/root/db/biz.html",
    note: "Business use",
  },
  cc: {
    reg: "VeriSign / IANA",
    iana: "https://www.iana.org/domains/root/db/cc.html",
    note: "Cocos Islands, used as generic",
  },
  tv: {
    reg: "VeriSign",
    iana: "https://www.iana.org/domains/root/db/tv.html",
    note: "Tuvalu, popular for media/streaming",
  },
  me: {
    reg: "Montenegro NIC",
    iana: "https://www.iana.org/domains/root/db/me.html",
    note: "Montenegro ccTLD, used as personal",
  },
  co: {
    reg: "COINTERNET",
    iana: "https://www.iana.org/domains/root/db/co.html",
    note: "Colombia, used as generic .co",
  },
  app: {
    reg: "Google",
    iana: "https://www.iana.org/domains/root/db/app.html",
    note: "Enforces HTTPS, popular for apps",
  },
  dev: {
    reg: "Google",
    iana: "https://www.iana.org/domains/root/db/dev.html",
    note: "Enforces HTTPS, developer tools",
  },
  gov: {
    reg: "GSA (US Gov)",
    iana: "https://www.iana.org/domains/root/db/gov.html",
    note: "US government only, verified",
  },
  mil: {
    reg: "DoD (US)",
    iana: "https://www.iana.org/domains/root/db/mil.html",
    note: "US military only",
  },
  edu: {
    reg: "Educause",
    iana: "https://www.iana.org/domains/root/db/edu.html",
    note: "US educational institutions",
  },
  onion: { reg: "—", iana: "", note: "Tor hidden service — not public DNS" },
  bit: { reg: "—", iana: "", note: "Namecoin blockchain domain" },
};

function _parseWhois(label) {
  const raw = label
    .toLowerCase()
    .trim()
    .replace(/^https?:\/\//, "")
    .split("/")[0];
  const parts = raw.split(".");
  if (parts.length < 2) return null;
  const tld = parts[parts.length - 1];
  const sld = parts[parts.length - 2];
  const sub = parts.length > 2 ? parts.slice(0, -2).join(".") : null;

  const suspicious = [];
  if (/\d{4,}/.test(sld)) suspicious.push("Много цифр в имени");
  if (sld.length > 30) suspicious.push("Очень длинное имя");
  if (/-{2,}/.test(sld)) suspicious.push("Двойные дефисы");
  if (/(.) {3,}/.test(sld)) suspicious.push("Повторяющиеся символы");
  const phish = [
    "paypal",
    "google",
    "amazon",
    "apple",
    "microsoft",
    "facebook",
    "instagram",
    "telegram",
    "binance",
    "coinbase",
  ];
  if (phish.some((p) => sld.includes(p) && sld !== p))
    suspicious.push("Возможный фишинг — имитация бренда");
  const highAbuse = [
    "top",
    "buzz",
    "click",
    "loan",
    "win",
    "gdn",
    "icu",
    "cyou",
    "cam",
    "cfd",
  ];
  if (highAbuse.includes(tld))
    suspicious.push("TLD с высоким показателем злоупотреблений");

  const tldInfo = _WHOIS_TLD[tld] || {
    reg: "Unknown",
    note: "Нет данных о TLD",
    iana: "",
  };

  return { raw, tld, sld, sub, tldInfo, suspicious };
}

function showWhoisPanel(nodeId) {
  const nd = nodes.find((n) => n.id === nodeId);
  if (!nd) return;
  const info = _parseWhois(nd.label);
  if (!info) return;

  const suspHtml = info.suspicious.length
    ? info.suspicious
        .map((s) => `<div class="whois-warn">⚠ ${escHtml(s)}</div>`)
        .join("")
    : `<div class="whois-ok">✓ Подозрительных паттернов не обнаружено</div>`;

  const subRow = info.sub
    ? `<div class="whois-row"><span class="whois-k">Субдомен</span><span class="whois-v">${escHtml(info.sub)}</span></div>`
    : "";

  document.getElementById("rpBody").insertAdjacentHTML(
    "beforeend",
    `
    <div class="whois-panel" id="whoisPanel">
      <div class="fg">
        <label class="fl">${t("p_whois")}: <span style="color:var(--lime);font-weight:600">${escHtml(info.raw)}</span></label>
        <div class="whois-card">
          <div class="whois-row"><span class="whois-k">TLD</span><span class="whois-v mono">.${escHtml(info.tld)}</span></div>
          <div class="whois-row"><span class="whois-k">SLD</span><span class="whois-v mono">${escHtml(info.sld)}</span></div>
          ${subRow}
          <div class="whois-row"><span class="whois-k">Реестр</span><span class="whois-v">${escHtml(info.tldInfo.reg)}</span></div>
          <div class="whois-row"><span class="whois-k">Заметка</span><span class="whois-v">${escHtml(info.tldInfo.note)}</span></div>
        </div>
        <div class="whois-flags">${suspHtml}</div>
      </div>
    </div>
  `,
  );
  const wp = document.getElementById("whoisPanel");
  if (wp) wp.scrollIntoView({ behavior: "smooth" });
}

function exportGraphML() {
  closeExportMenu();
  if (!nodes.length) {
    alert(t("warn_empty"));
    return;
  }

  const esc = (v) =>
    String(v || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<graphml xmlns="http://graphml.graphdrawing.org/graphml"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://graphml.graphdrawing.org/graphml
           http://graphml.graphdrawing.org/graphml/graphml.xsd">
  <key id="d_label"   for="node" attr.name="label"     attr.type="string"/>
  <key id="d_type"    for="node" attr.name="type"      attr.type="string"/>
  <key id="d_color"   for="node" attr.name="color"     attr.type="string"/>
  <key id="d_status"  for="node" attr.name="status"    attr.type="string"/>
  <key id="d_group"   for="node" attr.name="group"     attr.type="string"/>
  <key id="d_url"     for="node" attr.name="url"       attr.type="string"/>
  <key id="d_desc"    for="node" attr.name="desc"      attr.type="string"/>
  <key id="d_tags"    for="node" attr.name="tags"      attr.type="string"/>
  <key id="d_created" for="node" attr.name="createdAt" attr.type="long"/>
  <key id="d_updated" for="node" attr.name="updatedAt" attr.type="long"/>
  <key id="d_x"       for="node" attr.name="x"         attr.type="double"/>
  <key id="d_y"       for="node" attr.name="y"         attr.type="double"/>
  <key id="e_label"   for="edge" attr.name="label"     attr.type="string"/>
  <graph id="G" edgedefault="directed">
`;

  nodes.forEach((n) => {
    xml += `    <node id="n${n.id}">
`;
    xml += `      <data key="d_label">${esc(n.label)}</data>
`;
    xml += `      <data key="d_type">${esc(n.typeId)}</data>
`;
    xml += `      <data key="d_color">${esc(n.color)}</data>
`;
    if (n.status)
      xml += `      <data key="d_status">${esc(n.status)}</data>
`;
    if (n.group)
      xml += `      <data key="d_group">${esc(n.group)}</data>
`;
    if (n.url)
      xml += `      <data key="d_url">${esc(n.url)}</data>
`;
    if (n.desc)
      xml += `      <data key="d_desc">${esc(n.desc)}</data>
`;
    if (n.tags && n.tags.length)
      xml += `      <data key="d_tags">${esc(n.tags.join(";"))}</data>
`;
    if (n.createdAt)
      xml += `      <data key="d_created">${n.createdAt}</data>
`;
    if (n.updatedAt)
      xml += `      <data key="d_updated">${n.updatedAt}</data>
`;
    xml += `      <data key="d_x">${Math.round(n.x)}</data>
`;
    xml += `      <data key="d_y">${Math.round(n.y)}</data>
`;
    xml += `    </node>
`;
  });

  edges.forEach((e) => {
    xml += `    <edge id="e${e.id}" source="n${e.from}" target="n${e.to}">
`;
    if (e.label)
      xml += `      <data key="e_label">${esc(e.label)}</data>
`;
    xml += `    </edge>
`;
  });

  xml += `  </graph>
</graphml>`;

  _downloadText(xml, "graph.graphml", "application/xml");
}

function exportGexf() {
  closeExportMenu();
  if (!nodes.length) {
    alert(t("warn_empty"));
    return;
  }

  const esc = (v) =>
    String(v || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  const now = new Date().toISOString().split("T")[0];

  const COLOR_HEX = {
    lime: "#BEFF00",
    blue: "#60A5FA",
    purple: "#A78BFA",
    red: "#FC6464",
    orange: "#FB923C",
    teal: "#2DD4BF",
    pink: "#EC4899",
    yellow: "#EAB308",
    cyan: "#06B6D4",
    gray: "#9CA3AF",
  };
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<gexf xmlns="http://gexf.net/1.3"
      xmlns:viz="http://gexf.net/1.3/viz"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://gexf.net/1.3 http://gexf.net/1.3/gexf.xsd"
      version="1.3">
  <meta lastmodifieddate="${esc(now)}">
    <creator>Krapka Graph</creator>
    <description>Exported graph</description>
  </meta>
  <graph defaultedgetype="directed" timeformat="timestamp">
    <attributes class="node">
      <attribute id="a0" title="type"   type="string"/>
      <attribute id="a1" title="status" type="string"/>
      <attribute id="a2" title="group"  type="string"/>
      <attribute id="a3" title="url"    type="string"/>
      <attribute id="a4" title="tags"   type="string"/>
      <attribute id="a5" title="createdAt" type="long"/>
      <attribute id="a6" title="updatedAt" type="long"/>
    </attributes>
    <nodes>
`;

  nodes.forEach((n) => {
    const hex =
      n.color === "custom" && n.customColor
        ? n.customColor
        : COLOR_HEX[n.color] || "#BEFF00";
    const { r, g, b } = hexToRgb(hex);
    const startStr = n.createdAt ? ` start="${n.createdAt}"` : "";
    xml += `      <node id="n${n.id}" label="${esc(n.label)}"${startStr}>
`;
    xml += `        <attvalues>
`;
    xml += `          <attvalue for="a0" value="${esc(n.typeId)}"/>
`;
    if (n.status)
      xml += `          <attvalue for="a1" value="${esc(n.status)}"/>
`;
    if (n.group)
      xml += `          <attvalue for="a2" value="${esc(n.group)}"/>
`;
    if (n.url)
      xml += `          <attvalue for="a3" value="${esc(n.url)}"/>
`;
    if (n.tags && n.tags.length)
      xml += `          <attvalue for="a4" value="${esc(n.tags.join(";"))}"/>
`;
    if (n.createdAt)
      xml += `          <attvalue for="a5" value="${n.createdAt}"/>
`;
    if (n.updatedAt)
      xml += `          <attvalue for="a6" value="${n.updatedAt}"/>
`;
    xml += `        </attvalues>
`;
    xml += `        <viz:color r="${r}" g="${g}" b="${b}"/>
`;
    xml += `        <viz:position x="${Math.round(n.x)}" y="${Math.round(n.y)}" z="0"/>
`;
    xml += `        <viz:size value="10"/>
`;
    xml += `      </node>
`;
  });

  xml += `    </nodes>
    <edges>
`;

  edges.forEach((e) => {
    xml += `      <edge id="e${e.id}" source="n${e.from}" target="n${e.to}"`;
    if (e.label) xml += ` label="${esc(e.label)}"`;
    xml += `/>
`;
  });

  xml += `    </edges>
  </graph>
</gexf>`;

  _downloadText(xml, "graph.gexf", "application/xml");
}

function triggerGraphmlImport() {
  closeExportMenu();
  const inp = document.getElementById("graphmlFileInput");
  if (inp) {
    inp.value = "";
    inp.click();
  }
}

function handleGraphmlImport(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const text = e.target.result;
      if (text.includes("<gexf")) _importGexf(text);
      else _importGraphML(text);
    } catch (err) {
      alert("Import error: " + err.message);
    }
  };
  reader.readAsText(file, "UTF-8");
}

function _importGraphML(text) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "application/xml");
  if (doc.querySelector("parsererror")) throw new Error("Invalid XML");
  pushUndo();
  _clearCanvas();
  const idMap = {};
  const W = cw().offsetWidth / zoom,
    H = cw().offsetHeight / zoom;
  let autoX = 100,
    autoY = 100;

  const keyMap = {};
  doc.querySelectorAll("key").forEach((k) => {
    keyMap[k.getAttribute("id")] = k.getAttribute("attr.name");
  });
  function getData(el, keyName) {
    for (const d of el.querySelectorAll(":scope > data")) {
      if (keyMap[d.getAttribute("key")] === keyName)
        return d.textContent.trim();
    }
    return null;
  }

  doc.querySelectorAll("node").forEach((nodeEl) => {
    const gmlId = nodeEl.getAttribute("id");
    const label = getData(nodeEl, "label") || gmlId || "Node";
    const typeId = getData(nodeEl, "type") || "person";
    const color = getData(nodeEl, "color") || "lime";
    const status = getData(nodeEl, "status") || undefined;
    const group = getData(nodeEl, "group") || undefined;
    const url = getData(nodeEl, "url") || undefined;
    const desc = getData(nodeEl, "desc") || undefined;
    const tags = getData(nodeEl, "tags")
      ? getData(nodeEl, "tags").split(";").filter(Boolean)
      : undefined;
    const x = parseFloat(getData(nodeEl, "x") || autoX);
    const y = parseFloat(getData(nodeEl, "y") || autoY);
    const created = parseInt(getData(nodeEl, "createdAt") || "0") || undefined;
    autoX += 80;
    if (autoX > W - 80) {
      autoX = 100;
      autoY += 80;
    }
    const newId = nid();
    idMap[gmlId] = newId;
    _addNode({
      id: newId,
      typeId,
      label,
      color,
      status,
      group,
      url,
      desc,
      tags,
      x: isNaN(x) ? autoX : x,
      y: isNaN(y) ? autoY : y,
      createdAt: created || Date.now(),
    });
  });

  doc.querySelectorAll("edge").forEach((edgeEl) => {
    const src = idMap[edgeEl.getAttribute("source")];
    const dst = idMap[edgeEl.getAttribute("target")];
    if (!src || !dst) return;
    const lbl = getData(edgeEl, "label") || undefined;
    _addEdge({ id: nid(), from: src, to: dst, label: lbl });
  });

  applyTransform();
  updateCounts();
  updateEmpty();
  markDirty();
  _refreshTagBar();
  if (nodes.length) setTimeout(fitView, 60);
  _showToast(`Imported: ${nodes.length} nodes, ${edges.length} edges`, 2500);
}

function _importGexf(text) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "application/xml");
  if (doc.querySelector("parsererror")) throw new Error("Invalid GEXF");
  pushUndo();
  _clearCanvas();
  const idMap = {};
  const W = cw().offsetWidth / zoom;
  let autoX = 100,
    autoY = 100;

  const attrMap = {};
  doc.querySelectorAll("attributes[class='node'] attribute").forEach((a) => {
    attrMap[a.getAttribute("id")] = a.getAttribute("title");
  });
  function getAttr(nodeEl, attrTitle) {
    for (const av of nodeEl.querySelectorAll("attvalues > attvalue")) {
      const key = av.getAttribute("for");
      if (attrMap[key] === attrTitle) return av.getAttribute("value");
    }
    return null;
  }
  function getViz(nodeEl, tag, attr) {
    const el = nodeEl.querySelector("viz\:" + tag + ", " + tag);
    return el ? el.getAttribute(attr) : null;
  }

  doc.querySelectorAll("nodes > node").forEach((nodeEl) => {
    const gmlId = nodeEl.getAttribute("id");
    const label = nodeEl.getAttribute("label") || gmlId || "Node";
    const typeId = getAttr(nodeEl, "type") || "person";
    const status = getAttr(nodeEl, "status") || undefined;
    const group = getAttr(nodeEl, "group") || undefined;
    const url = getAttr(nodeEl, "url") || undefined;
    const tags = getAttr(nodeEl, "tags")
      ? getAttr(nodeEl, "tags").split(";").filter(Boolean)
      : undefined;
    const created = parseInt(getAttr(nodeEl, "createdAt") || "0") || undefined;
    let x = parseFloat(getViz(nodeEl, "position", "x") || autoX);
    let y = parseFloat(getViz(nodeEl, "position", "y") || autoY);
    autoX += 80;
    if (autoX > W - 80) {
      autoX = 100;
      autoY += 80;
    }
    let color = "lime";
    const vizR = getViz(nodeEl, "color", "r"),
      vizG = getViz(nodeEl, "color", "g"),
      vizB = getViz(nodeEl, "color", "b");
    if (vizR && vizG && vizB) {
      const hex =
        "#" +
        [vizR, vizG, vizB]
          .map((v) => parseInt(v).toString(16).padStart(2, "0"))
          .join("");
      color = "custom";
    }
    const newId = nid();
    idMap[gmlId] = newId;
    _addNode({
      id: newId,
      typeId,
      label,
      color,
      status,
      group,
      url,
      tags,
      x: isNaN(x) ? autoX : x,
      y: isNaN(y) ? autoY : y,
      createdAt: created || Date.now(),
    });
  });

  doc.querySelectorAll("edges > edge").forEach((edgeEl) => {
    const src = idMap[edgeEl.getAttribute("source")];
    const dst = idMap[edgeEl.getAttribute("target")];
    if (!src || !dst) return;
    const lbl = edgeEl.getAttribute("label") || undefined;
    _addEdge({ id: nid(), from: src, to: dst, label: lbl });
  });

  applyTransform();
  updateCounts();
  updateEmpty();
  markDirty();
  _refreshTagBar();
  if (nodes.length) setTimeout(fitView, 60);
  _showToast(`Imported: ${nodes.length} nodes, ${edges.length} edges`, 2500);
}

function exportJson() {
  closeExportMenu();
  if (!nodes.length) {
    alert(t("warn_empty"));
    return;
  }
  const data = {
    version: "1.2",
    exportedAt: new Date().toISOString(),
    nodes: nodes.map((n) => ({ ...n })),
    edges: edges.map((e) => ({ ...e })),
  };
  _downloadText(
    JSON.stringify(data, null, 2),
    "graph.json",
    "application/json",
  );
}

function _downloadText(text, filename, mime) {
  const blob = new Blob([text], { type: mime + ";charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function startPathMode(srcId) {
  _pathSrcId = srcId;
  _showToast(t("p_path_select"), 3000);
  const el = document.getElementById("node-" + srcId);
  if (el) el.classList.add("path-src");
}

function _findShortestPath(srcId, dstId) {
  const adj = {};
  nodes.forEach((n) => {
    adj[n.id] = [];
  });
  edges.forEach((e) => {
    adj[e.from]?.push(e.to);
    adj[e.to]?.push(e.from);
  });
  const visited = new Set([srcId]);
  const prev = { [srcId]: null };
  const queue = [srcId];
  while (queue.length) {
    const cur = queue.shift();
    if (cur === dstId) break;
    for (const nb of adj[cur] || []) {
      if (!visited.has(nb)) {
        visited.add(nb);
        prev[nb] = cur;
        queue.push(nb);
      }
    }
  }
  if (prev[dstId] === undefined) return null;
  const path = [];
  let c = dstId;
  while (c !== null) {
    path.unshift(c);
    c = prev[c];
  }
  return path;
}

function _highlightPath(pathIds) {
  const pathSet = new Set(pathIds);
  nodes.forEach((n) => {
    const el = document.getElementById("node-" + n.id);
    if (!el) return;
    el.classList.remove("path-src");
    el.classList.toggle("highlighted", pathSet.has(n.id));
    el.classList.toggle("dimmed", !pathSet.has(n.id));
  });
  renderEdges();
}

function clearPath() {
  _pathSrcId = null;
  nodes.forEach((n) => {
    const el = document.getElementById("node-" + n.id);
    if (el) {
      el.classList.remove("path-src", "highlighted", "dimmed");
    }
  });
}

function toggleGroupCollapse(groupName) {
  if (_collapsedGroups.has(groupName)) {
    _expandGroup(groupName);
  } else {
    _collapseGroup(groupName);
  }
}

function _collapseGroup(groupName) {
  const members = nodes.filter((n) => n.group === groupName);
  if (members.length < 2) return;
  pushUndo();
  const cx = members.reduce((s, n) => s + n.x, 0) / members.length;
  const cy = members.reduce((s, n) => s + n.y, 0) / members.length;
  const proxyId = nid();
  const proxy = {
    id: proxyId,
    typeId: "company",
    label: `[${groupName}] ×${members.length}`,
    color: "teal",
    x: cx,
    y: cy,
    _isProxy: true,
    _groupName: groupName,
    _memberIds: members.map((n) => n.id),
  };
  _addNode(proxy);
  edges.forEach((e) => {
    const fromMem = members.find((m) => m.id === e.from);
    const toMem = members.find((m) => m.id === e.to);
    if (fromMem && !toMem) ((e._origFrom = e.from), (e.from = proxyId));
    if (toMem && !fromMem) ((e._origTo = e.to), (e.to = proxyId));
  });
  members.forEach((n) => {
    const el = document.getElementById("node-" + n.id);
    if (el) el.style.display = "none";
  });
  _collapsedGroups.set(groupName, proxyId);
  renderEdges();
  applyTransform();
  markDirty();
}

function _expandGroup(groupName) {
  const proxyId = _collapsedGroups.get(groupName);
  if (!proxyId) return;
  edges.forEach((e) => {
    if (e._origFrom !== undefined) {
      e.from = e._origFrom;
      delete e._origFrom;
    }
    if (e._origTo !== undefined) {
      e.to = e._origTo;
      delete e._origTo;
    }
  });
  const proxy = nodes.find((n) => n.id === proxyId);
  if (proxy && proxy._memberIds) {
    proxy._memberIds.forEach((mid) => {
      const el = document.getElementById("node-" + mid);
      if (el) el.style.display = "";
    });
  }
  _removeNode(proxyId);
  _collapsedGroups.delete(groupName);
  renderEdges();
  applyTransform();
  markDirty();
}

function _refreshTagBar() {
  const allTags = new Set();
  nodes.forEach((n) => (n.tags || []).forEach((t) => allTags.add(t)));
  const bar = document.getElementById("tagBar");
  if (!bar) return;
  bar.innerHTML = "";
  if (!allTags.size) {
    bar.style.display = "none";
    return;
  }
  bar.style.display = "flex";
  allTags.forEach((tag) => {
    const b = document.createElement("button");
    b.className = "tag-pill" + (_activeTags.has(tag) ? " active" : "");
    b.textContent = tag;
    b.onclick = () => {
      _activeTags.has(tag) ? _activeTags.delete(tag) : _activeTags.add(tag);
      _applyTagFilter();
      _refreshTagBar();
    };
    bar.appendChild(b);
  });
  if (_activeTags.size) {
    const cl = document.createElement("button");
    cl.className = "tag-pill tag-clear";
    cl.textContent = "= " + t("tag_reset");
    cl.onclick = () => {
      _activeTags.clear();
      _applyTagFilter();
      _refreshTagBar();
    };
    bar.appendChild(cl);
  }
}
function _applyTagFilter() {
  nodes.forEach((n) => {
    const el = document.getElementById(`node-${n.id}`);
    if (!el) return;
    if (!_activeTags.size) {
      el.classList.remove("dimmed");
      return;
    }
    const has = (n.tags || []).some((t) => _activeTags.has(t));
    el.classList.toggle("dimmed", !has);
  });
}
function onPickIcon(el, typeId) {
  document
    .querySelectorAll(".ip-item")
    .forEach((x) => x.classList.remove("selected"));
  el.classList.add("selected");
  if (selectedIds.size !== 1) return;
  pushUndo();
  const nd = nodes.find((n) => n.id === [...selectedIds][0]);
  nd.typeId = typeId;
  nd.customIconUrl = "";
  _updateNodeVisual(nd);
  markDirty();
}
function onPickColor(el, colorId) {
  document
    .querySelectorAll(".cc")
    .forEach((x) => x.classList.remove("selected"));
  el.classList.add("selected");
  pushUndo();
  selectedIds.forEach((id) => {
    const nd = nodes.find((n) => n.id === id);
    if (nd) {
      nd.color = colorId;
      nd.customColor = null;
      _updateNodeVisual(nd);
    }
  });
  markDirty();
}
function togglePinNode(id) {
  const nd = nodes.find((n) => n.id === id);
  if (!nd) return;
  nd.pinned = !nd.pinned;
  _updateNodeVisual(nd);
  markDirty();
  openNodePanel(nd);
}

function startEdgeFromPanel() {
  if (selectedIds.size !== 1) return;
  const id = [...selectedIds][0];
  window.closePanel();
  setTool("edge");
  edgeSrcId = id;
  highlightSrc(id);
  selectedIds.clear();
  renderSelection();
}

function deleteSelected() {
  if (selectedEdgeId) {
    pushUndo();
    _removeEdge(selectedEdgeId);
    selectedEdgeId = null;
    renderEdges();
    updateCounts();
    window.closePanel();
    markDirty();
    document.getElementById("tbDelete").style.display = "none";
    const ss = document.getElementById("sSelection");
    ss.textContent = t("st_none");
    ss.style.color = "var(--text3)";
    return;
  }
  if (!selectedIds.size) return;
  const edgesToDelete = new Set();
  selectedIds.forEach((id) => {
    edges.forEach((e) => {
      if (e.from === id || e.to === id) edgesToDelete.add(e.id);
    });
  });
  const _ec = edgesToDelete.size;
  if (
    _ec >= 5 &&
    !_confirm(
      "Delete " + selectedIds.size + " node(s) with " + _ec + " connection(s)?",
    )
  )
    return;
  pushUndo();
  selectedIds.forEach((id) => {
    edges = edges.filter((e) => e.from !== id && e.to !== id);
    _removeNode(id);
  });
  selectedIds.clear();
  applyTransform();
  updateCounts();
  updateEmpty();
  window.closePanel();
  renderSelection();
  markDirty();
  _refreshTagBar();
}

function autoLayout() {
  if (!nodes.length) return;
  pushUndo();
  const w = cw().offsetWidth / zoom,
    h = cw().offsetHeight / zoom,
    cx = w / 2 - panX / zoom,
    cy = h / 2 - panY / zoom,
    r = Math.min(w, h) * 0.34;
  nodes.forEach((nd, i) => {
    const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
    nd.x = cx + Math.cos(a) * r;
    nd.y = cy + Math.sin(a) * r;
    const el = document.getElementById(`node-${nd.id}`);
    if (el) {
      el.style.transition =
        "left .38s cubic-bezier(.4,0,.2,1),top .38s cubic-bezier(.4,0,.2,1)";
      el.style.left = nd.x + "px";
      el.style.top = nd.y + "px";
      setTimeout(() => {
        if (el) el.style.transition = "";
      }, 450);
    }
  });
  setTimeout(() => {
    applyTransform();
  }, 20);
  markDirty();
}

function toggleSnap() {
  snapGrid = !snapGrid;
  document.getElementById("tbSnap").classList.toggle("active", snapGrid);
  cw().classList.toggle("snap-grid", snapGrid);
  applyTransform();
}

function copySelected() {
  if (!selectedIds.size) return;
  _clipboard = nodes
    .filter((n) => selectedIds.has(n.id))
    .map((n) => ({ ...n }));
}
function pasteClipboard() {
  if (!_clipboard.length) return;
  pushUndo();
  const off = 30,
    idMap = {},
    newIds = [];
  _clipboard.forEach((n) => {
    const newId = nid();
    idMap[n.id] = newId;
    _addNode({ ...n, id: newId, x: n.x + off, y: n.y + off });
    newIds.push(newId);
  });
  edges.forEach((e) => {
    if (idMap[e.from] !== undefined && idMap[e.to] !== undefined)
      _addEdge({ ...e, id: nid(), from: idMap[e.from], to: idMap[e.to] });
  });
  selectedIds.clear();
  newIds.forEach((id) => selectedIds.add(id));
  applyTransform();
  renderSelection();
  updateCounts();
  updateEmpty();
  markDirty();
  openPanelForSelection();
}
function duplicateSelected() {
  if (!selectedIds.size) return;
  copySelected();
  pasteClipboard();
}

function forceLayout() {
  if (!nodes.length) return;
  if (_forceRunning) {
    _forceRunning = false;
    const btn = document.getElementById("tbForce");
    btn.classList.remove("active");
    btn.querySelector("span") &&
      (btn.querySelector("span").textContent = "Force");
    return;
  }
  pushUndo();
  _forceRunning = true;
  const btn = document.getElementById("tbForce");
  btn.classList.add("active");

  const wrap = cw(),
    W = wrap.offsetWidth / zoom,
    H = wrap.offsetHeight / zoom,
    area = W * H;
  const k = Math.sqrt(area / Math.max(nodes.length, 1)) * 0.85,
    centerX = (wrap.offsetWidth / 2 - panX) / zoom,
    centerY = (wrap.offsetHeight / 2 - panY) / zoom;
  const sim = nodes.map((n) => ({ id: n.id, x: n.x, y: n.y, dx: 0, dy: 0 })),
    simMap = {};
  sim.forEach((s) => (simMap[s.id] = s));
  let temp = W * 0.15,
    tick = 0;

  const _recentMove = [];

  function _stopForce() {
    _forceRunning = false;
    btn.classList.remove("active");
    const sp = btn.querySelector("span");
    if (sp) sp.textContent = "Force";
    markDirty();
  }

  function step() {
    if (!_forceRunning) {
      _stopForce();
      return;
    }

    tick++;
    temp *= 0.97;

    sim.forEach((s) => {
      s.dx = 0;
      s.dy = 0;
    });

    for (let i = 0; i < sim.length; i++) {
      for (let j = i + 1; j < sim.length; j++) {
        const a = sim[i],
          b = sim[j];
        let dx = b.x - a.x,
          dy = b.y - a.y;
        const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
        const repF = (k * k) / d;
        const nx = (dx / d) * repF,
          ny = (dy / d) * repF;
        a.dx -= nx;
        a.dy -= ny;
        b.dx += nx;
        b.dy += ny;
      }
    }

    edges.forEach((e) => {
      const a = simMap[e.from],
        b = simMap[e.to];
      if (!a || !b) return;
      const dx = b.x - a.x,
        dy = b.y - a.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
      const attF = (d * d) / k;
      const nx = (dx / d) * attF,
        ny = (dy / d) * attF;
      a.dx += nx;
      a.dy += ny;
      b.dx -= nx;
      b.dy -= ny;
    });

    sim.forEach((s) => {
      s.dx += (centerX - s.x) * 0.01;
      s.dy += (centerY - s.y) * 0.01;
    });

    let totalMove = 0;
    sim.forEach((s) => {
      const n = nodes.find((x) => x.id === s.id);
      if (n && n.pinned) {
        totalMove += 0.01;
        return;
      }
      const d = Math.sqrt(s.dx * s.dx + s.dy * s.dy) || 0.01;
      const move = Math.min(d, temp);
      s.x += (s.dx / d) * move;
      s.y += (s.dy / d) * move;
      s.x = Math.max(-panX / zoom, Math.min(W - panX / zoom, s.x));
      s.y = Math.max(-panY / zoom, Math.min(H - panY / zoom, s.y));
      totalMove += move;
    });

    _recentMove.push(totalMove);
    if (_recentMove.length > 12) _recentMove.shift();
    const avgMove = _recentMove.reduce((a, b) => a + b, 0) / _recentMove.length;

    sim.forEach((s) => {
      const n = nodes.find((x) => x.id === s.id);
      if (!n) return;
      n.x = s.x;
      n.y = s.y;
      const el = document.getElementById("node-" + n.id);
      if (el) {
        el.style.left = n.x + "px";
        el.style.top = n.y + "px";
      }
    });

    if (tick % 10 === 0) {
      const sp = btn.querySelector("span");
      if (sp) sp.textContent = `Force ${Math.min(100, Math.round(tick / 5))}%`;
    }

    renderEdges();
    renderGroups();
    _scheduleMinimapRedraw();

    if (temp < 0.5 || (tick > 30 && avgMove < 0.3) || tick > 600) {
      _stopForce();
      return;
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
  markDirty();
}

function toggleEdgeStyle() {
  if (edgeStyle === "curved") edgeStyle = "straight";
  else if (edgeStyle === "straight") edgeStyle = "orthogonal";
  else edgeStyle = "curved";

  const btn = document.getElementById("tbEdgeStyle");
  if (btn) {
    btn.classList.toggle("active", edgeStyle !== "curved");
    let t_lbl = t("l_curves");
    if (edgeStyle === "straight") t_lbl = t("l_straight");
    if (edgeStyle === "orthogonal") t_lbl = t("l_ortho");
    btn.title = t_lbl;
    const span = btn.querySelector("span");
    if (span) span.textContent = t_lbl;
  }
  renderEdges();
}

const EDGE_COLORS = [
  {
    id: "default",
    hex: "rgba(190,255,0,0.55)",
    get label() {
      return t("edge_color_default");
    },
  },
  { id: "lime", hex: "#BEFF00" },
  { id: "blue", hex: "#60A5FA" },
  { id: "purple", hex: "#A78BFA" },
  { id: "red", hex: "#FC6464" },
  { id: "orange", hex: "#FB923C" },
  { id: "teal", hex: "#2DD4BF" },
  { id: "pink", hex: "#EC4899" },
  { id: "yellow", hex: "#EAB308" },
  { id: "cyan", hex: "#06B6D4" },
  { id: "gray", hex: "#9CA3AF" },
];
let _edgeModalColor = "default";

function buildEdgeColorPicker(currentColor) {
  _edgeModalColor = currentColor || "default";
  const el = document.getElementById("edgeColorPicker");
  if (!el) return;
  el.innerHTML = "";
  EDGE_COLORS.forEach((c) => {
    const d = document.createElement("div");
    d.className = "ecc" + (_edgeModalColor === c.id ? " selected" : "");
    d.style.background = c.hex;
    d.title = c.label || c.id;
    d.dataset.color = c.id;
    if (c.id === "default") {
      d.style.background = "rgba(190,255,0,0.32)";
      d.style.border = "1.5px dashed rgba(190,255,0,0.5)";
    }
    d.onclick = () => {
      _edgeModalColor = c.id;
      el.querySelectorAll(".ecc").forEach((x) =>
        x.classList.remove("selected"),
      );
      d.classList.add("selected");
    };
    el.appendChild(d);
  });
}

function _getEdgeColor(edge, isSel) {
  if (isSel) return "#BEFF00";
  if (!edge.color || edge.color === "default") return "rgba(190,255,0,0.55)";
  const found = EDGE_COLORS.find((c) => c.id === edge.color);
  return found ? found.hex : "rgba(190,255,0
