const DICT = {
  ru: {
    search: "Поиск узлов...",
    types: "Типы узлов",
    projects: "Проекты",
    new_graph: "Новый граф",
    t_sel: "Выбор  V",
    t_edge: "Связь  E",
    t_pan: "Рука  H / Пробел",
    t_add: "Узел  A",
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
    l_sel: "Выбор",
    l_edge: "Связь",
    l_pan: "Рука",
    l_node: "Узел",
    l_del: "Удалить",
    l_auto: "Авто",
    l_curves: " Кривые",
    l_straight: " Прямые",
    l_snap: "Сетка",
    l_save: "Сохранить",
    l_open: "Открыть",
    l_exp: "Экспорт",
    exp_png: "Экспорт PNG",
    exp_svg: "Экспорт SVG",
    empty_title: "Граф пуст",
    empty_sub: "Перетащи тип из панели или нажми <kbd>A</kbd>",
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
    m_new_node: "Новый узел",
    m_name: "Название",
    m_name_ph: "Например: John Doe",
    m_type: "Тип",
    m_cancel: "Отмена",
    m_add: "Добавить",
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
    warn_png_rnd: "Ошибка рендера PNG. Что-то пошло не так при генерации.",
    warn_corr: "Ошибка: файл повреждён.",
    warn_unsaved: "Создать новый граф? Несохранённые изменения будут потеряны.",
  },
  en: {
    search: "Search nodes...",
    types: "Node Types",
    projects: "Projects",
    new_graph: "New Graph",
    t_sel: "Select  V",
    t_edge: "Edge  E",
    t_pan: "Pan  H / Space",
    t_add: "Node  A",
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
    l_sel: "Select",
    l_edge: "Edge",
    l_pan: "Pan",
    l_node: "Node",
    l_del: "Delete",
    l_auto: "Auto",
    l_curves: " Curved",
    l_straight: " Straight",
    l_snap: "Grid",
    l_save: "Save",
    l_open: "Open",
    l_exp: "Export",
    exp_png: "Export PNG",
    exp_svg: "Export SVG",
    empty_title: "Graph is empty",
    empty_sub: "Drag a type from the panel or press <kbd>A</kbd>",
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
    m_new_node: "New Node",
    m_name: "Name",
    m_name_ph: "e.g., John Doe",
    m_type: "Type",
    m_cancel: "Cancel",
    m_add: "Add",
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
    warn_png_rnd: "PNG render error. Something went wrong.",
    warn_corr: "Error: file corrupted.",
    warn_unsaved: "Create new graph? Unsaved changes will be lost.",
  },
  uk: {
    search: "Пошук вузлів...",
    types: "Типи вузлів",
    projects: "Проєкти",
    new_graph: "Новий граф",
    t_sel: "Вибір  V",
    t_edge: "Зв'язок  E",
    t_pan: "Рука  H / Пробіл",
    t_add: "Вузол  A",
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
    l_sel: "Вибір",
    l_edge: "Зв'язок",
    l_pan: "Рука",
    l_node: "Вузол",
    l_del: "Видалити",
    l_auto: "Авто",
    l_curves: " Криві",
    l_straight: " Прямі",
    l_snap: "Сітка",
    l_save: "Зберегти",
    l_open: "Відкрити",
    l_exp: "Експорт",
    exp_png: "Експорт PNG",
    exp_svg: "Експорт SVG",
    empty_title: "Граф порожній",
    empty_sub: "Перетягніть тип з панелі або натисніть <kbd>A</kbd>",
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
    m_new_node: "Новий вузол",
    m_name: "Назва",
    m_name_ph: "Наприклад: John Doe",
    m_type: "Тип",
    m_cancel: "Скасувати",
    m_add: "Додати",
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
    warn_png_rnd: "Помилка рендеру PNG. Щось пішло не так.",
    warn_corr: "Помилка: файл пошкоджено.",
    warn_unsaved: "Створити новий граф? Незбережені зміни будуть втрачені.",
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
    if (edgeStyle === "orthogonal")
      t_lbl =
        currentLang === "ru"
          ? " Ортогональные"
          : currentLang === "uk"
            ? " Ортогональні"
            : " Orthogonal";
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
  buildModalTypeGrid();
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
];

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
  dirty = false,
  modalTypeId = "person";
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
  edgeStyle = "curved";

function showModal(id) {
  document.getElementById(id).classList.add("visible");
}
function hideModal(id) {
  document.getElementById(id).classList.remove("visible");
}
function modalBg(e, id) {
  if (e.target === document.getElementById(id)) hideModal(id);
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
  buildModalTypeGrid();
  setupCanvas();
  setupKeyboard();
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
});

function initDemo() {
  setTimeout(() => {
    const w = cw().offsetWidth,
      h = cw().offsetHeight;
    _addNode({
      id: nid(),
      typeId: "person",
      label: "Alice Johnson",
      color: "lime",
      x: w * 0.28,
      y: h * 0.25,
    });
    _addNode({
      id: nid(),
      typeId: "company",
      label: "Acme Corp",
      color: "blue",
      x: w * 0.6,
      y: h * 0.18,
    });
    _addNode({
      id: nid(),
      typeId: "domain",
      label: "acme.com",
      color: "teal",
      x: w * 0.62,
      y: h * 0.55,
      group: "=",
    });
    _addNode({
      id: nid(),
      typeId: "ip",
      label: "192.168.1.1",
      color: "orange",
      x: w * 0.26,
      y: h * 0.58,
      group: "=",
    });
    _addNode({
      id: nid(),
      typeId: "telegram",
      label: "@alice_j",
      color: "purple",
      x: w * 0.44,
      y: h * 0.38,
    });
    _addEdge({ id: nid(), from: 1, to: 2, label: "= =" });
    _addEdge({ id: nid(), from: 2, to: 3, label: "=" });
    _addEdge({ id: nid(), from: 1, to: 4, label: "=" });
    _addEdge({ id: nid(), from: 3, to: 4, label: "= =" });
    _addEdge({ id: nid(), from: 1, to: 5, label: "=" });
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
  const el = document.getElementById("nodePalette");
  el.innerHTML = "";
  NODE_TYPES.forEach((nt) => {
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
function buildModalTypeGrid() {
  const el = document.getElementById("modalTypeGrid");
  el.innerHTML = "";
  NODE_TYPES.forEach((nt) => {
    const d = document.createElement("div");
    d.className = "mt-item" + (nt.id === "person" ? " selected" : "");
    d.dataset.type = nt.id;
    d.innerHTML = `${nt.svg}<span>${t("nt_" + nt.id)}</span>`;
    d.onclick = () => {
      document
        .querySelectorAll(".mt-item")
        .forEach((x) => x.classList.remove("selected"));
      d.classList.add("selected");
      modalTypeId = nt.id;
    };
    el.appendChild(d);
  });
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
  el.querySelector(".node-lbl").textContent = n.label || "=";
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
  e.preventDefault();
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
  if (e.shiftKey) {
    selectedIds.has(id) ? selectedIds.delete(id) : selectedIds.add(id);
    renderSelection();
    openPanelForSelection();
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

// ИСПРАВЛЕНИЕ: Отрисовка умных направляющих
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

    // ИСПРАВЛЕНИЕ: Добавлен расчет для умных направляющих (Smart Guides)
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
        const threshold = 10 / zoom; // радиус захвата
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
    pushUndo();
    _addNode({
      id: nid(),
      typeId,
      label: t("nt_" + typeId),
      color: "lime",
      x: (e.clientX - rect.left - panX) / zoom,
      y: (e.clientY - rect.top - panY) / zoom,
    });
    applyTransform();
    updateCounts();
    updateEmpty();
    markDirty();
  });
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
function _mkArrowhead(g, tip_x, tip_y, angle, isSel) {
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
  tri.setAttribute("fill", isSel ? "#BEFF00" : "rgba(190,255,0,0.55)");
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

// ИСПРАВЛЕНИЕ: Добавлен режим ортогональных связей
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
    const line = mkSvg("path");
    line.setAttribute("d", pathD);
    line.setAttribute("stroke", isSel ? "#BEFF00" : "rgba(190,255,0,0.32)");
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

    _mkArrowhead(g, tipX, tipY, arrowAngle, isSel);

    if (edge.label) {
      const tw = Math.max(edge.label.length * 6.2 + 16, 24);
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
      bg.style.pointerEvents = "none";
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
      txt.textContent = edge.label;
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
    <div class="fg"><label class="fl">${t("p_desc")}</label><textarea class="fi fi-ta" id="propDesc" placeholder="Brief description..." oninput="liveUpdate('desc',this.value)">${escHtml(node.desc || "")}</textarea></div>
    <div class="fg"><label class="fl">${t("p_url")}</label><div class="fi-copy-row"><input class="fi fi-copy-input" id="propUrl" placeholder="https://example.com" value="${escHtml(node.url || "")}" oninput="liveUpdate('url',this.value)"><button class="fi-copy-btn" onclick="copyField('propUrl')" title="Copy"><svg width=\"11\" height=\"11\" viewBox=\"0 0 12 12\" fill=\"none\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"7\" rx=\"1.5\" stroke=\"currentColor\" stroke-width=\"1.2\"/><path d=\"M1 8V2.5A1.5 1.5 0 012.5 1H8\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linecap=\"round\"/></svg></button></div></div>
    <div class="fg attr-row"><div><label class="fl">${t("p_date")}</label><input class="fi" id="propDate" type="text" placeholder="2024-01-15" value="${escHtml(node.date || "")}" oninput="liveUpdate('date',this.value)"></div><div><label class="fl">${t("p_status")}</label><select class="fi" id="propStatus" onchange="liveUpdate('status',this.value)"><option value="">=</option><option value="active" ${node.status === "active" ? "selected" : ""}>${t("st_act")}</option><option value="inactive" ${node.status === "inactive" ? "selected" : ""}>${t("st_inact")}</option><option value="suspect" ${node.status === "suspect" ? "selected" : ""}>${t("st_susp")}</option><option value="confirmed" ${node.status === "confirmed" ? "selected" : ""}>${t("st_conf")}</option></select></div></div>
    <div class="fg"><label class="fl">${t("p_group")}</label><input class="fi" placeholder="e.g. Network A" value="${escHtml(node.group || "")}" oninput="liveUpdate('group',this.value)"></div>
    <div class="fg"><label class="fl">${t("p_icon_url")}</label><input class="fi" placeholder="https://example.com/icon.png" value="${escHtml(node.customIconUrl || "")}" oninput="liveUpdate('customIconUrl',this.value)"></div>
    <div class="fg"><label class="fl">${t("p_tags")} <span style="opacity:.5;font-weight:400">${t("p_tags_hint")}</span></label><input class="fi" id="propTags" placeholder="work, important, archive" value="${escHtml((node.tags || []).join(", "))}" oninput="liveUpdateTags(this.value)"></div>
    <div class="fg"><label class="fl">${t("p_icon")}</label><div class="icon-picker" id="iconPicker"></div></div>
    <div class="fg"><label class="fl">${t("p_color")}</label><div class="color-row" id="colorPicker"></div></div>`;
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
  document.getElementById("rpFooter").innerHTML =
    `<button class="btn-ghost-danger" onclick="deleteSelected()"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 3h8M4.5 3V2h3v1M4 3l.5 7h3l.5-7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>${t("p_del_all").split(" ")[0]}</button><button class="btn-lime" onclick="startEdgeFromPanel()"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="2" cy="6" r="1.5" stroke="currentColor" stroke-width="1.2"/><circle cx="10" cy="6" r="1.5" stroke="currentColor" stroke-width="1.2"/><line x1="3.5" y1="6" x2="8.5" y2="6" stroke="currentColor" stroke-width="1.2"/></svg>${t("p_link")}</button>`;
}
function openMultiPanel() {
  document.getElementById("rPanel").classList.remove("hidden");
  document.getElementById("rpTitle").textContent = t("p_multi");
  document.getElementById("rpBody").innerHTML =
    `<div class="multi-info">${t("st_sel")}<b>${selectedIds.size}</b></div><div class="fg"><label class="fl">${t("p_color").split(" ")[0]}</label><div class="color-row" id="colorPicker"></div></div>`;
  buildColorPicker("colorPicker");
  document.getElementById("rpFooter").innerHTML =
    `<button class="btn-ghost-danger" onclick="deleteSelected()">${t("p_del_all")}</button><button class="btn-lime" onclick="showGroupModal()">${t("p_group_btn")}</button>`;
}
function liveUpdate(field, val) {
  if (selectedIds.size !== 1) return;
  const nd = nodes.find((n) => n.id === [...selectedIds][0]);
  if (!nd) return;
  nd[field] = val;
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
    !confirm(
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
    document.getElementById("tbForce").classList.remove("active");
    return;
  }
  pushUndo();
  _forceRunning = true;
  document.getElementById("tbForce").classList.add("active");

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

  function step() {
    if (!_forceRunning || tick > 500) {
      _forceRunning = false;
      document.getElementById("tbForce").classList.remove("active");
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
    sim.forEach((s) => {
      const d = Math.sqrt(s.dx * s.dx + s.dy * s.dy) || 0.01;
      const move = Math.min(d, temp);
      s.x += (s.dx / d) * move;
      s.y += (s.dy / d) * move;
      s.x = Math.max(-panX / zoom, Math.min(W - panX / zoom, s.x));
      s.y = Math.max(-panY / zoom, Math.min(H - panY / zoom, s.y));
    });
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
    renderEdges();
    renderGroups();
    _scheduleMinimapRedraw();
    if (temp < 0.5) {
      _forceRunning = false;
      document.getElementById("tbForce").classList.remove("active");
      return;
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
  markDirty();
}

// ИСПРАВЛЕНИЕ: Функция включает новый Ортогональный режим
function toggleEdgeStyle() {
  if (edgeStyle === "curved") edgeStyle = "straight";
  else if (edgeStyle === "straight") edgeStyle = "orthogonal";
  else edgeStyle = "curved";

  const btn = document.getElementById("tbEdgeStyle");
  if (btn) {
    btn.classList.toggle("active", edgeStyle !== "curved");
    let t_lbl = t("l_curves");
    if (edgeStyle === "straight") t_lbl = t("l_straight");
    if (edgeStyle === "orthogonal")
      t_lbl =
        currentLang === "ru"
          ? " Ортогональные"
          : currentLang === "uk"
            ? " Ортогональні"
            : " Orthogonal";
    btn.title = t_lbl;
    const span = btn.querySelector("span");
    if (span) span.textContent = t_lbl;
  }
  renderEdges();
}

let _pendingEdge = null;
function openNewEdgeModal(fromId, toId) {
  _pendingEdge = { from: fromId, to: toId };
  editingEdgeId = null;
  const fn = nodes.find((n) => n.id === fromId),
    tn = nodes.find((n) => n.id === toId);
  document.getElementById("edgeLabel").value = "";
  document.getElementById("edgeInfo").textContent =
    `${fn?.label || "?"} = ${tn?.label || "?"}`;
  document.getElementById("edgeDeleteBtn").style.display = "none";
  const row = document.getElementById("edgeStraightRow");
  if (row) row.style.display = "none";
  showModal("edgeModal");
  setTimeout(() => {
    const el = document.getElementById("edgeLabel");
    if (el) el.focus();
  }, 150);
}
function openEdgeModal(edgeId) {
  _pendingEdge = null;
  editingEdgeId = edgeId;
  const ed = edges.find((e) => e.id === edgeId);
  if (!ed) return;
  const fn = nodes.find((n) => n.id === ed.from),
    tn = nodes.find((n) => n.id === ed.to);
  document.getElementById("edgeLabel").value = ed.label || "";
  document.getElementById("edgeInfo").textContent =
    `${fn?.label || "?"} = ${tn?.label || "?"}`;
  document.getElementById("edgeDeleteBtn").style.display = "";
  const row = document.getElementById("edgeStraightRow"),
    chk = document.getElementById("edgeStraightChk");
  if (row && chk) {
    row.style.display = "";
    chk.checked = ed.straight === true;
  }
  showModal("edgeModal");
  setTimeout(() => {
    const el = document.getElementById("edgeLabel");
    if (el) el.select();
  }, 150);
}
function applyEdgeEdit() {
  const lbl = document.getElementById("edgeLabel").value.trim();
  if (_pendingEdge) {
    pushUndo();
    _addEdge({
      id: nid(),
      from: _pendingEdge.from,
      to: _pendingEdge.to,
      label: lbl,
    });
    _pendingEdge = null;
    hideModal("edgeModal");
    renderEdges();
    updateCounts();
    markDirty();
    return;
  }
  if (!editingEdgeId) return;
  pushUndo();
  const ed = edges.find((e) => e.id === editingEdgeId);
  if (ed) {
    ed.label = lbl;
    const chk = document.getElementById("edgeStraightChk");
    if (chk) ed.straight = chk.checked ? true : undefined;
  }
  editingEdgeId = null;
  hideModal("edgeModal");
  renderEdges();
  markDirty();
}
function deleteEdge() {
  if (!editingEdgeId) return;
  pushUndo();
  _removeEdge(editingEdgeId);
  editingEdgeId = null;
  hideModal("edgeModal");
  renderEdges();
  updateCounts();
  markDirty();
}

function showAddModal() {
  showModal("addModal");
  modalTypeId = "person";
  document
    .querySelectorAll(".mt-item")
    .forEach((x) =>
      x.classList.toggle("selected", x.dataset.type === "person"),
    );
  setTimeout(() => {
    const inp = document.getElementById("modalName");
    if (inp) {
      inp.value = "";
      inp.focus();
      inp.select();
    }
  }, 150);
}
function addNodeFromModal() {
  const name =
    document.getElementById("modalName").value.trim() || t("nt_" + modalTypeId);
  const w = cw().offsetWidth / zoom,
    h = cw().offsetHeight / zoom;
  pushUndo();
  _addNode({
    id: nid(),
    typeId: modalTypeId,
    label: name,
    color: "lime",
    x: w / 2 - panX / zoom,
    y: h / 2 - panY / zoom,
  });
  hideModal("addModal");
  applyTransform();
  updateCounts();
  updateEmpty();
  markDirty();
  const newId = nodes[nodes.length - 1].id;
  selectedIds.clear();
  selectedIds.add(newId);
  renderSelection();
  openPanelForSelection();
}

function showGroupModal() {
  showModal("groupModal");
  setTimeout(() => {
    const el = document.getElementById("groupName");
    if (el) el.focus();
  }, 150);
}
function applyGroup() {
  const name = document.getElementById("groupName").value.trim();
  if (!name) return;
  pushUndo();
  selectedIds.forEach((id) => {
    const nd = nodes.find((n) => n.id === id);
    if (nd) {
      nd.group = name;
      _updateNodeVisual(nd);
    }
  });
  document.getElementById("groupName").value = "";
  hideModal("groupModal");
  markDirty();
  renderGroups();
}

function onNodeCtx(e, id) {
  e.preventDefault();
  e.stopPropagation();
  ctxNodeId = id;
  if (!selectedIds.has(id)) {
    selectedIds.clear();
    selectedIds.add(id);
    renderSelection();
    openPanelForSelection();
  }
  document.getElementById("ctxGroup").style.display =
    selectedIds.size > 1 ? "" : "none";
  const m = document.getElementById("ctxMenu");
  m.style.left = e.clientX + "px";
  m.style.top = e.clientY + "px";
  m.classList.add("visible");
}
function hideCtx() {
  document.getElementById("ctxMenu").classList.remove("visible");
}
function ctxAction(action) {
  hideCtx();
  if (action === "edit") {
    const nd = nodes.find((n) => n.id === ctxNodeId);
    if (nd) openNodePanel(nd);
  } else if (action === "duplicate") {
    if (!selectedIds.has(ctxNodeId)) {
      selectedIds.clear();
      selectedIds.add(ctxNodeId);
      renderSelection();
    }
    duplicateSelected();
  } else if (action === "connect") {
    setTool("edge");
    edgeSrcId = ctxNodeId;
    highlightSrc(ctxNodeId);
    selectedIds.clear();
    renderSelection();
  } else if (action === "group") showGroupModal();
  else if (action === "delete") {
    if (!selectedIds.has(ctxNodeId)) {
      selectedIds.clear();
      selectedIds.add(ctxNodeId);
      renderSelection();
    }
    deleteSelected();
  }
}
document.addEventListener("click", (e) => {
  if (!e.target.closest("#ctxMenu")) hideCtx();
  if (!e.target.closest("#exportDropdown")) closeExportMenu();
});

function onSearch(q) {
  const lq = q.toLowerCase().trim();
  document.getElementById("searchClear").style.display = q ? "" : "none";
  nodes.forEach((n) => {
    const el = document.getElementById(`node-${n.id}`);
    if (!el) return;
    if (!lq) {
      el.classList.remove("highlighted", "dimmed");
      return;
    }
    const m =
      (n.label || "").toLowerCase().includes(lq) ||
      (n.desc || "").toLowerCase().includes(lq) ||
      (n.url || "").toLowerCase().includes(lq) ||
      (n.status || "").toLowerCase().includes(lq) ||
      (n.tags || []).some((t) => t.toLowerCase().includes(lq));
    el.classList.toggle("highlighted", m);
    el.classList.toggle("dimmed", !m);
  });
}
function clearSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("searchClear").style.display = "none";
  onSearch("");
}

function drawMinimap() {
  const canvas = document.getElementById("minimapCanvas"),
    ctx = canvas.getContext("2d"),
    mw = canvas.width,
    mh = canvas.height;
  ctx.clearRect(0, 0, mw, mh);
  if (!nodes.length) return;
  const minX = Math.min(...nodes.map((n) => n.x - 29)),
    minY = Math.min(...nodes.map((n) => n.y - 29)),
    maxX = Math.max(...nodes.map((n) => n.x + 29)),
    maxY = Math.max(...nodes.map((n) => n.y + 29));
  const gw = maxX - minX || 1,
    gh = maxY - minY || 1,
    scale = Math.min((mw - 8) / gw, (mh - 8) / gh),
    ox = (mw - gw * scale) / 2 - minX * scale,
    oy = (mh - gh * scale) / 2 - minY * scale;
  ctx.strokeStyle = "rgba(190,255,0,.2)";
  ctx.lineWidth = 1;
  edges.forEach((e) => {
    const fn = nodes.find((n) => n.id === e.from),
      tn = nodes.find((n) => n.id === e.to);
    if (!fn || !tn) return;
    ctx.beginPath();
    ctx.moveTo(fn.x * scale + ox, fn.y * scale + oy);
    ctx.lineTo(tn.x * scale + ox, tn.y * scale + oy);
    ctx.stroke();
  });
  nodes.forEach((n) => {
    const x = n.x * scale + ox,
      y = n.y * scale + oy,
      s = Math.max(3, 5 * scale);
    ctx.fillStyle = selectedIds.has(n.id) ? "#BEFF00" : "rgba(190,255,0,.4)";
    ctx.beginPath();
    ctx.arc(x, y, s / 2, 0, Math.PI * 2);
    ctx.fill();
  });
  const wrap = cw(),
    vx = (-panX / zoom) * scale + ox,
    vy = (-panY / zoom) * scale + oy,
    vw = (wrap.offsetWidth / zoom) * scale,
    vh = (wrap.offsetHeight / zoom) * scale;
  const vp = document.getElementById("minimapViewport"),
    cl = canvas.getBoundingClientRect(),
    wl = document.getElementById("minimap").getBoundingClientRect();
  vp.style.cssText = `left:${vx + cl.left - wl.left}px;top:${vy + cl.top - wl.top}px;width:${vw}px;height:${vh}px`;
}

// ИСПРАВЛЕНИЕ: оптимизированное сохранение и восстановление истории без JSON
function snapshot() {
  return {
    nodes: nodes.map((n) => ({ ...n })),
    edges: edges.map((e) => ({ ...e })),
  };
}
function pushUndo() {
  undoStack.push(snapshot());
  if (undoStack.length > 80) undoStack.shift();
  redoStack = [];
  updateUndoButtons();
}
function undo() {
  if (!undoStack.length) return;
  redoStack.push(snapshot());
  restoreSnapshot(undoStack.pop());
  updateUndoButtons();
  markDirty();
}
function redo() {
  if (!redoStack.length) return;
  undoStack.push(snapshot());
  restoreSnapshot(redoStack.pop());
  updateUndoButtons();
  markDirty();
}
function restoreSnapshot(s) {
  if (!s) return;
  nl().innerHTML = "";
  nodes = [];
  edges = [];
  s.nodes.forEach((n) => _addNode({ ...n }));
  s.edges.forEach((e) => _addEdge({ ...e }));
  nextId =
    Math.max(0, ...[...s.nodes, ...s.edges].map((x) => x.id), nextId) + 1;
  selectedIds.clear();
  selectedEdgeId = null;
  applyTransform();
  renderSelection();
  updateCounts();
  updateEmpty();
  window.closePanel();
  _refreshTagBar();
}
function updateUndoButtons() {
  document.getElementById("tbUndo").disabled = !undoStack.length;
  document.getElementById("tbRedo").disabled = !redoStack.length;
}

function toggleExportMenu() {
  document.getElementById("exportMenu").classList.toggle("open");
}
function closeExportMenu() {
  document.getElementById("exportMenu").classList.remove("open");
}

async function exportSvg() {
  closeExportMenu();
  if (!nodes.length) {
    alert(t("warn_empty"));
    return;
  }
  const { svgStr } = await buildExportSvg();
  await window.krapka.exportSvg(svgStr);
}

async function exportPng() {
  closeExportMenu();
  if (!nodes.length) {
    alert(t("warn_empty"));
    return;
  }

  const { svgStr, w, h } = await buildExportSvg();
  const scale = 2;
  const c = document.createElement("canvas");
  c.width = w * scale;
  c.height = h * scale;
  const ctx = c.getContext("2d");
  const img = new Image();

  img.onload = async () => {
    ctx.fillStyle = "#0A0A0A";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(img, 0, 0, c.width, c.height);
    try {
      if (window.krapka && window.krapka.exportPng) {
        await window.krapka.exportPng(c.toDataURL("image/png"));
      }
    } catch (err) {
      alert(t("warn_png") + err.message);
    }
    URL.revokeObjectURL(img.src);
  };

  img.onerror = () => {
    alert(t("warn_png_rnd"));
    URL.revokeObjectURL(img.src);
  };

  const blob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
  img.src = URL.createObjectURL(blob);
}

async function buildExportSvg() {
  const pad = 80,
    rawMinX = Math.min(...nodes.map((n) => n.x - 29)),
    rawMinY = Math.min(...nodes.map((n) => n.y - 29)),
    rawMaxX = Math.max(...nodes.map((n) => n.x + 29)),
    rawMaxY = Math.max(...nodes.map((n) => n.y + 29));
  const offX = -rawMinX + pad,
    offY = -rawMinY + pad;
  const w = rawMaxX - rawMinX + pad * 2,
    h = rawMaxY - rawMinY + pad * 2;
  const IC = {
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
  let edgeSvg = "",
    nodeSvg = "";

  edges.forEach((edge) => {
    const fn = nodes.find((n) => n.id === edge.from),
      tn = nodes.find((n) => n.id === edge.to);
    if (!fn || !tn) return;
    const fx = fn.x + offX,
      fy = fn.y + offY,
      ex = tn.x + offX,
      ey = tn.y + offY;
    const dx = ex - fx,
      dy = ey - fy,
      dist = Math.sqrt(dx * dx + dy * dy) || 1;
    if (dist < 44) return;
    const R_node = 29;
    const sx1 = fx + (dx / dist) * R_node,
      sy1 = fy + (dy / dist) * R_node;
    const sx2 = ex - (dx / dist) * R_node,
      sy2 = ey - (dy / dist) * R_node;

    // Экспорт также должен учитывать новые ортогональные связи
    const useStraight =
      edge.straight === true ||
      (edgeStyle === "straight" && edge.straight !== false);
    const useOrtho =
      edgeStyle === "orthogonal" &&
      edge.straight !== false &&
      edge.straight !== true;
    let pathD, lx, ly, arrowAngle;

    if (useStraight) {
      pathD = `M${R(sx1)} ${R(sy1)} L${R(sx2)} ${R(sy2)}`;
      lx = (sx1 + sx2) / 2;
      ly = (sy1 + sy2) / 2;
      arrowAngle = Math.atan2(dy, dx);
    } else if (useOrtho) {
      if (Math.abs(dx) > Math.abs(dy)) {
        const cx = (sx1 + sx2) / 2;
        pathD = `M${R(sx1)} ${R(sy1)} L${R(cx)} ${R(sy1)} L${R(cx)} ${R(sy2)} L${R(sx2)} ${R(sy2)}`;
        lx = cx;
        ly = (sy1 + sy2) / 2;
        arrowAngle = dx > 0 ? 0 : Math.PI;
      } else {
        const cy = (sy1 + sy2) / 2;
        pathD = `M${R(sx1)} ${R(sy1)} L${R(sx1)} ${R(cy)} L${R(sx2)} ${R(cy)} L${R(sx2)} ${R(sy2)}`;
        lx = (sx1 + sx2) / 2;
        ly = cy;
        arrowAngle = dy > 0 ? Math.PI / 2 : -Math.PI / 2;
      }
    } else {
      const bend = Math.min(dist * 0.28, 70),
        mx2 = (sx1 + sx2) / 2,
        my2 = (sy1 + sy2) / 2,
        px2 = -dy / dist,
        py2 = dx / dist,
        qx = mx2 + px2 * bend,
        qy = my2 + py2 * bend;
      lx = (sx1 + 2 * qx + sx2) / 4;
      ly = (sy1 + 2 * qy + sy2) / 4;
      arrowAngle = Math.atan2(sy2 - qy, sx2 - qx);
      pathD = `M${R(sx1)} ${R(sy1)} Q${R(qx)} ${R(qy)} ${R(sx2)} ${R(sy2)}`;
    }

    const tipX = ex - (dx / dist) * R_node,
      tipY = ey - (dy / dist) * R_node;
    const L = 10,
      W = 3.5;
    const cos = Math.cos(arrowAngle),
      sin = Math.sin(arrowAngle);
    const bx = tipX - cos * L,
      by = tipY - sin * L;
    const pts = `${R(tipX)},${R(tipY)} ${R(bx - sin * W)},${R(by + cos * W)} ${R(bx + sin * W)},${R(by - cos * W)}`;

    edgeSvg += `<path d="${pathD}" stroke="#BEFF00" stroke-opacity="0.38" stroke-width="1.5" fill="none"/>`;
    edgeSvg += `<polygon points="${pts}" fill="#BEFF00" fill-opacity="0.55"/>`;
    if (edge.label) {
      const tw = Math.max(edge.label.length * 6.2 + 16, 24);
      edgeSvg += `<rect x="${R(lx - tw / 2)}" y="${R(ly - 8)}" width="${R(tw)}" height="15" rx="4" fill="#0A0A0A" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>`;
      edgeSvg += `<text x="${R(lx)}" y="${R(ly)}" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="10" font-weight="600" fill="#999999">${escHtml(edge.label)}</text>`;
    }
  });

  for (const n of nodes) {
    const t_type = getType(n.typeId),
      col = n.color || "lime",
      hexColor = n.customColor || IC[col];
    const nx = n.x + offX - 29,
      ny = n.y + offY - 29;
    let innerContent = "";

    if (n.customIconUrl) {
      if (window.krapka && window.krapka.fetchImage) {
        const base64Data = await window.krapka.fetchImage(n.customIconUrl);
        if (base64Data) {
          innerContent = `<image href="${base64Data}" x="${R(nx + 15)}" y="${R(ny + 15)}" height="28" width="28" style="opacity:0.9"/>`;
        }
      }
    } else {
      const safeSvg = t_type.svg
        .replace(/stroke="currentColor"/g, `stroke="${hexColor}"`)
        .replace(/fill="currentColor"/g, `fill="${hexColor}"`)
        .replace(
          "<svg ",
          `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" `,
        );
      innerContent = `<g transform="translate(${R(nx + 17)},${R(ny + 17)})">${safeSvg}</g>`;
    }
    nodeSvg += `<g><rect x="${R(nx)}" y="${R(ny)}" width="58" height="58" rx="13" fill="#181818" stroke="${hexColor}" stroke-opacity="0.35" stroke-width="1.5"/>${innerContent}<text x="${R(nx + 29)}" y="${R(ny + 71)}" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="500" fill="#999999">${escHtml(n.label)}</text></g>`;
  }

  return {
    svgStr: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="#0A0A0A"/>${edgeSvg}${nodeSvg}</svg>`,
    w,
    h,
  };
}
function R(n) {
  return Math.round(n * 100) / 100;
}

async function saveGraph() {
  _PM.persistNow();
  const data = {
    version: "1.1",
    projectName: document
      .getElementById("tbFilename")
      .textContent.replace(/\.kg$/, ""),
    nodes,
    edges,
  };
  const r = await window.krapka.saveGraph(data);
  if (r.success) {
    currentFile = r.filePath;
    document.getElementById("tbFilename").textContent = r.filePath
      .split(/[\\/]/)
      .pop();
    setUnsaved(false);
  }
}
async function openGraph() {
  const r = await window.krapka.openGraph();
  if (!r.success) return;
  let parsed;
  try {
    parsed = typeof r.data === "object" ? r.data : JSON.parse(r.data);
  } catch (e) {
    alert(t("warn_corr"));
    return;
  }
  nl().innerHTML = "";
  nodes = [];
  edges = [];
  nextId = 1;
  parsed.nodes.forEach((n) => {
    if (n.id >= nextId) nextId = n.id + 1;
    _addNode(n);
  });
  parsed.edges.forEach((e) => {
    if (e.id >= nextId) nextId = e.id + 1;
    _addEdge(e);
  });
  selectedIds.clear();
  selectedEdgeId = null;
  applyTransform();
  renderSelection();
  updateCounts();
  updateEmpty();
  window.closePanel();
  currentFile = r.filePath;
  document.getElementById("tbFilename").textContent = r.filePath
    .split(/[\\/]/)
    .pop();
  setUnsaved(false);
  undoStack = [];
  redoStack = [];
  updateUndoButtons();
  fitView();
  _refreshTagBar();
}
function newGraph() {
  _PM.createNew();
}
function _clearCanvas() {
  _forceRunning = false;
  document.getElementById("tbForce") &&
    document.getElementById("tbForce").classList.remove("active");
  nl().innerHTML = "";
  nodes = [];
  edges = [];
  nextId = 1;
  currentFile = null;
  selectedIds.clear();
  selectedEdgeId = null;
  _activeTags.clear();
  _clipboard = [];
  undoStack = [];
  redoStack = [];
  applyTransform();
  renderSelection();
  updateCounts();
  updateEmpty();
  window.closePanel();
  updateUndoButtons();
  dirty = false;
  setUnsaved(false);
  _refreshTagBar();
}

function setupKeyboard() {
  document.addEventListener("keydown", (e) => {
    const tag = document.activeElement?.tagName,
      inInput = tag === "INPUT" || tag === "TEXTAREA";
    const modalOpen = document.querySelector(".modal-ov.visible") !== null;
    if (e.code === "Space" && !inInput && !modalOpen) {
      e.preventDefault();
      spaceDown = true;
      cw().classList.add("pan-mode");
    }
    if (!inInput && !modalOpen) {
      if (e.key === "Escape") {
        setTool("select");
        selectedIds.clear();
        renderSelection();
        window.closePanel();
        clearSearch();
        selectedEdgeId = null;
        renderEdges();
        hideCtx();
        hideModal("addModal");
        hideModal("edgeModal");
        hideModal("groupModal");
      }
      if (e.code === "KeyV") setTool("select");
      if (e.code === "KeyE") setTool("edge");
      if (e.code === "KeyH") setTool("pan");
      if (e.code === "KeyF") fitView();
      if (e.code === "KeyT") toggleEdgeStyle();
      if (e.code === "KeyA" && !e.ctrlKey && !e.metaKey) showAddModal();
      if (e.key === "Delete" || e.key === "Backspace") deleteSelected();
      if (e.code === "Equal" || e.code === "NumpadAdd" || e.key === "+")
        changeZoom(0.15);
      if (e.code === "Minus" || e.code === "NumpadSubtract" || e.key === "-")
        changeZoom(-0.15);
      if (e.key === "0" || e.code === "Digit0" || e.code === "Numpad0") {
        zoom = 1;
        panX = 0;
        panY = 0;
        document.getElementById("zoomLabel").textContent = "100%";
        applyTransform();
      }
      if (e.code === "ArrowLeft") {
        panX += 40;
        applyTransform();
      }
      if (e.code === "ArrowRight") {
        panX -= 40;
        applyTransform();
      }
      if (e.code === "ArrowUp") {
        panY += 40;
        applyTransform();
      }
      if (e.code === "ArrowDown") {
        panY -= 40;
        applyTransform();
      }
      if (e.ctrlKey && e.code === "KeyA") {
        e.preventDefault();
        nodes.forEach((n) => selectedIds.add(n.id));
        renderSelection();
        openPanelForSelection();
      }
      if (e.ctrlKey && e.code === "KeyD") {
        e.preventDefault();
        duplicateSelected();
      }
      if (e.ctrlKey && e.code === "KeyC") {
        e.preventDefault();
        copySelected();
      }
      if (e.altKey && e.code === "KeyG") {
        e.preventDefault();
        toggleSnap();
      }
    }
    if (e.key === "Escape" && modalOpen) {
      hideModal("addModal");
      hideModal("edgeModal");
      hideModal("groupModal");
      hideModal("renameModal");
    }
    if (!inInput || modalOpen) {
      if (e.ctrlKey && e.code === "KeyS") {
        e.preventDefault();
        if (!modalOpen) saveGraph();
      }
      if (e.ctrlKey && e.code === "KeyO") {
        e.preventDefault();
        if (!modalOpen) openGraph();
      }
    }
    if (e.ctrlKey && e.code === "KeyZ") {
      e.preventDefault();
      if (!modalOpen) undo();
    }
    if (e.ctrlKey && (e.code === "KeyY" || (e.shiftKey && e.code === "KeyZ"))) {
      e.preventDefault();
      if (!modalOpen) redo();
    }
    if (e.ctrlKey && e.code === "KeyV" && !inInput && !modalOpen) {
      e.preventDefault();
      pasteClipboard();
    }
  });
  document.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
      spaceDown = false;
      if (!panning) cw().classList.remove("pan-mode");
    }
  });
}

function renameProject() {
  const tbFile = document.getElementById("tbFilename");
  const cur = tbFile.textContent.replace(/\.kg$/, "");
  showRenameModal(cur);
}
function showRenameModal(currentName) {
  document.getElementById("renameInput").value = currentName || "";
  showModal("renameModal");
  setTimeout(() => {
    const inp = document.getElementById("renameInput");
    if (inp) {
      inp.focus();
      inp.select();
    }
  }, 150);
}
function applyRename() {
  const nw = document.getElementById("renameInput").value.trim();
  if (!nw) {
    hideModal("renameModal");
    return;
  }
  const safe = nw.replace(/[\\/:*?"<>|]/g, "_");
  document.getElementById("tbFilename").textContent = safe + ".kg";
  _PM.renameActive(safe);
  hideModal("renameModal");
  markDirty();
}

function updateCounts() {
  document.getElementById("sNodes").textContent = nodes.length;
  document.getElementById("sEdges").textContent = edges.length;
}
function updateEmpty() {
  document
    .getElementById("canvasEmpty")
    .classList.toggle("hidden", nodes.length > 0);
}
function markDirty() {
  dirty = true;
  setUnsaved(true);
}
function setUnsaved(v) {
  dirty = v;
  document.getElementById("tbUnsaved").style.display = v ? "" : "none";
}
function escHtml(s) {
  return (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

var _PM = (function () {
  var KEY_META = "krapka_projects";
  var KEY_ACT = "krapka_active";

  var _projects = [];
  var _activeId = null;

  function _pid() {
    return "p" + Date.now() + Math.random().toString(36).slice(2, 6);
  }
  function _lsKey(id) {
    return "krapka_g_" + id;
  }

  function _persist(id, name) {
    try {
      localStorage.setItem(
        _lsKey(id),
        JSON.stringify({
          nodes: nodes.map(function (n) {
            return Object.assign({}, n);
          }),
          edges: edges.map(function (e) {
            return Object.assign({}, e);
          }),
          nextId: nextId,
          name: name,
        }),
      );
    } catch (e) {
      console.warn("PM persist failed", e);
    }
  }

  function _load(id) {
    try {
      var s = localStorage.getItem(_lsKey(id));
      return s ? JSON.parse(s) : null;
    } catch (e) {
      return null;
    }
  }

  function _saveMeta() {
    try {
      localStorage.setItem(KEY_META, JSON.stringify(_projects));
      localStorage.setItem(KEY_ACT, _activeId);
    } catch (e) {}
  }

  function _renderList() {
    var el = document.getElementById("graphList");
    if (!el) return;
    el.innerHTML = "";
    _projects.forEach(function (p) {
      var item = document.createElement("div");
      item.className = "gl-item" + (p.id === _activeId ? " active" : "");
      var delBtn =
        _projects.length > 1
          ? '<span class="gl-del" title="Delete project"><svg width="9" height="9" viewBox="0 0 10 10"><line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>'
          : "";
      item.innerHTML =
        '<svg width="11" height="11" viewBox="0 0 11 11" fill="none"><circle cx="5.5" cy="5.5" r="2" fill="currentColor"/><circle cx="1.5" cy="2" r="1.2" fill="currentColor" opacity=".5"/><circle cx="9.5" cy="2" r="1.2" fill="currentColor" opacity=".5"/><circle cx="9.5" cy="9" r="1.2" fill="currentColor" opacity=".5"/></svg>' +
        '<span class="gl-name">' +
        escHtml(p.name) +
        "</span>" +
        delBtn;

      (function (pid, pname) {
        item.addEventListener("click", function (e) {
          if (e.target.closest(".gl-del")) return;
          if (pid !== _activeId) _PM.switchTo(pid);
        });
        var db = item.querySelector(".gl-del");
        if (db)
          db.addEventListener("click", function (e) {
            e.stopPropagation();
            if (confirm('Delete project "' + pname + '"?'))
              _PM.deleteProject(pid);
          });
      })(p.id, p.name);

      el.appendChild(item);
    });
  }

  function _applyData(data) {
    _clearCanvas();
    if (data) {
      (data.nodes || []).forEach(function (n) {
        if (n.id >= nextId) nextId = n.id + 1;
        _addNode(n);
      });
      (data.edges || []).forEach(function (e) {
        if (e.id >= nextId) nextId = e.id + 1;
        _addEdge(e);
      });
      if (data.nextId && data.nextId > nextId) nextId = data.nextId;
    }
    applyTransform();
    updateCounts();
    updateEmpty();
    if (nodes.length) setTimeout(fitView, 60);
  }

  return {
    init: function () {
      try {
        var raw = localStorage.getItem(KEY_META);
        _projects = raw ? JSON.parse(raw) : [];
        _activeId = localStorage.getItem(KEY_ACT) || null;
      } catch (e) {
        _projects = [];
        _activeId = null;
      }

      if (!_projects.length) {
        var id = _pid();
        _projects = [{ id: id, name: "Untitled Graph" }];
        _activeId = id;
        _saveMeta();
        document.getElementById("tbFilename").textContent = "Untitled Graph.kg";
        initDemo();
        setTimeout(function () {
          _PM.persistNow();
        }, 400);
      } else {
        if (
          !_projects.find(function (p) {
            return p.id === _activeId;
          })
        )
          _activeId = _projects[0].id;
        var p = _projects.find(function (x) {
          return x.id === _activeId;
        });
        document.getElementById("tbFilename").textContent =
          (p && p.name ? p.name : "Untitled") + ".kg";
        _applyData(_load(_activeId));
        _saveMeta();
      }
      _renderList();

      setInterval(function () {
        if (dirty) {
          _PM.persistNow();
          _showAutosaveToast();
        }
      }, 30000);
    },

    createNew: function () {
      if (dirty && !confirm(t("warn_unsaved"))) return;
      _PM.persistNow();
      var id = _pid(),
        name = "Untitled Graph";
      _projects.push({ id: id, name: name });
      _activeId = id;
      _saveMeta();
      document.getElementById("tbFilename").textContent = name + ".kg";
      _clearCanvas();
      _renderList();
    },

    switchTo: function (id) {
      if (id === _activeId) return;
      if (dirty && !confirm(t("warn_unsaved"))) return;
      _PM.persistNow();
      _activeId = id;
      _saveMeta();
      var p = _projects.find(function (x) {
        return x.id === id;
      });
      document.getElementById("tbFilename").textContent =
        (p && p.name ? p.name : "Untitled") + ".kg";
      currentFile = null;
      _applyData(_load(id));
      _renderList();
    },

    deleteProject: function (id) {
      if (_projects.length <= 1) return;
      var idx = _projects.findIndex(function (p) {
        return p.id === id;
      });
      if (idx === -1) return;
      try {
        localStorage.removeItem(_lsKey(id));
      } catch (e) {}
      var wasActive = _activeId === id;
      _projects.splice(idx, 1);
      if (wasActive) {
        _activeId = _projects[Math.max(0, idx - 1)].id;
        _saveMeta();
        var p = _projects.find(function (x) {
          return x.id === _activeId;
        });
        document.getElementById("tbFilename").textContent =
          (p && p.name ? p.name : "Untitled") + ".kg";
        _applyData(_load(_activeId));
      } else {
        _saveMeta();
      }
      _renderList();
    },

    renameActive: function (name) {
      var p = _projects.find(function (x) {
        return x.id === _activeId;
      });
      if (p) {
        p.name = name;
        _saveMeta();
        _renderList();
      }
    },

    persistNow: function () {
      if (!_activeId) return;
      var p = _projects.find(function (x) {
        return x.id === _activeId;
      });
      _persist(_activeId, p ? p.name : "Untitled");
    },
  };
})();

function copyField(fieldId) {
  var el = document.getElementById(fieldId);
  if (!el || !el.value) return;
  navigator.clipboard
    .writeText(el.value)
    .then(function () {
      _showCopyToast();
    })
    .catch(function () {
      el.select();
      document.execCommand("copy");
      _showCopyToast();
    });
}
function _showCopyToast() {
  var el = document.getElementById("autosaveToast");
  if (!el) return;
  var prev = el.textContent;
  el.textContent = "Copied!";
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(function () {
    el.classList.remove("show");
    setTimeout(function () {
      el.textContent = "Autosaved";
    }, 300);
  }, 1400);
}

function _showAutosaveToast() {
  var el = document.getElementById("autosaveToast");
  if (!el) return;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(function () {
    el.classList.remove("show");
  }, 2000);
}
