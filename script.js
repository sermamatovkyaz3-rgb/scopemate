const $ = (id) => document.getElementById(id);
const KEY = "scopemate-projects-v1";
const LKEY = "scopemate-language";
const LOC = { ky: "ru-RU", ru: "ru-RU", en: "en-US" };
const SYM = { KGS: "сом", USD: "$", EUR: "€" };

/* ---------- Translations ---------- */
const D = {
  ky: {
    h1: "Долбоордун баасын так эсепте",
    sub: "Ишти тапшырмаларга бөл, убакытты жана баасын эсепте, кардарга даяр сунуш жөнөт.",
    details: "Долбоор жөнүндө", tasks: "Тапшырмалар",
    hint: "Ишти майда бөлүктөргө бөлүп, ар биринин убактысын жаз.",
    name: "Долбоордун аталышы", client: "Кардар", type: "Түрү", rate: "Саатына баасы",
    currency: "Валюта", reserve: "Резерв, %", deadline: "Мөөнөтү",
    phName: "Мисалы: Компаниянын сайты", phClient: "Кардардын аты", phTask: "Тапшырманын аталышы",
    tpl: "Бул түргө даяр тапшырмалар", tplBtn: "Шаблонду колдонуу",
    taskName: "Тапшырма", hours: "Саат", add: "Тапшырма кошуу", totalH: "Жалпы саат",
    copy: "Сунушту көчүрүү", pdf: "PDF катары сактоо", save: "Долбоорду сактоо", newp: "Жаңы долбоор баштоо",
    saved: "Сакталган долбоорлор", empty: "Азырынча долбоор жок. Эсепти толтуруп, «Долбоорду сактоо» баскычын бас.",
    projects: "долбоор", open: "Ачуу", del: "Өчүрүү", confirmDel: "Бул долбоорду өчүрөсүзбү?",
    tSaved: "Долбоор сакталды", tCopied: "Сунуш көчүрүлдү", tOpened: "Долбоор ачылды", tDeleted: "Долбоор өчүрүлдү",
    tNew: "Жаңы долбоор даяр", tTpl: "Шаблон колдонулду", tName: "Адегенде долбоордун аталышын жаз",
    tClip: "Көчүрүү болгон жок. localhost же HTTPS колдон", tStore: "Браузерде сактоо болгон жок",
    proposal: "Коммерциялык сунуш", forClient: "Кардар", dl: "Мөөнөт", cost: "Баасы",
    subtotal: "Негизги баа", reserveL: "Убакыт резерви", total: "Жалпы баа",
    disclaimer: "Бул болжолдуу эсеп, акыркы келишим эмес. Көлөм, мөөнөт жана төлөм шарттары өзүнчө макулдашылат.",
    untitled: "Аталышы жок долбоор", notSet: "Көрсөтүлгөн эмес", tbd: "Макулдашуу боюнча",
    noTasks: "Тапшырма кошула элек", h: "с", issued: "Даярдалган күнү",
    types: { shop: "Интернет-дүкөн", site: "Бизнес сайты", portfolio: "Портфолио", landing: "Бир барактуу сайт", app: "Веб-тиркеме", other: "Башка" },
    t: { design: "Дизайн", layout: "Беттерди верстка кылуу", pages: "Беттердин мазмуну", catalog: "Товарлар каталогу", cart: "Себет жана буйрутма", payment: "Онлайн төлөм", admin: "Админ панель", auth: "Катталуу жана кирүү", database: "Маалымат базасы", api: "Серверлик логика (API)", forms: "Байланыш формалары", seo: "SEO жана ылдамдык", animation: "Анимациялар", gallery: "Иштер галереясы", qa: "Тестирлөө", launch: "Интернетке чыгаруу" }
  },
  ru: {
    h1: "Считай стоимость проекта точно",
    sub: "Раздели работу на задачи, посчитай время и цену и отправь клиенту готовое предложение.",
    details: "О проекте", tasks: "Задачи",
    hint: "Раздели работу на небольшие части и оцени время на каждую.",
    name: "Название проекта", client: "Клиент", type: "Тип", rate: "Ставка в час",
    currency: "Валюта", reserve: "Резерв, %", deadline: "Срок",
    phName: "Например: сайт компании", phClient: "Имя клиента", phTask: "Название задачи",
    tpl: "Готовые задачи для этого типа", tplBtn: "Применить шаблон",
    taskName: "Задача", hours: "Часы", add: "Добавить задачу", totalH: "Всего часов",
    copy: "Скопировать предложение", pdf: "Сохранить как PDF", save: "Сохранить проект", newp: "Начать новый проект",
    saved: "Сохранённые проекты", empty: "Пока нет проектов. Заполни расчёт и нажми «Сохранить проект».",
    projects: "проектов", open: "Открыть", del: "Удалить", confirmDel: "Удалить этот проект?",
    tSaved: "Проект сохранён", tCopied: "Предложение скопировано", tOpened: "Проект открыт", tDeleted: "Проект удалён",
    tNew: "Новый проект готов", tTpl: "Шаблон применён", tName: "Сначала введи название проекта",
    tClip: "Не удалось скопировать. Используй localhost или HTTPS", tStore: "Не удалось сохранить в браузере",
    proposal: "Коммерческое предложение", forClient: "Клиент", dl: "Срок", cost: "Стоимость",
    subtotal: "Базовая стоимость", reserveL: "Резерв времени", total: "Итого",
    disclaimer: "Это предварительная оценка, а не окончательный договор. Объём, сроки и условия оплаты согласовываются отдельно.",
    untitled: "Проект без названия", notSet: "Не указан", tbd: "По договорённости",
    noTasks: "Задачи ещё не добавлены", h: "ч", issued: "Дата подготовки",
    types: { shop: "Интернет-магазин", site: "Бизнес-сайт", portfolio: "Портфолио", landing: "Лендинг", app: "Веб-приложение", other: "Другое" },
    t: { design: "Дизайн", layout: "Вёрстка страниц", pages: "Наполнение страниц", catalog: "Каталог товаров", cart: "Корзина и заказ", payment: "Онлайн-оплата", admin: "Админ-панель", auth: "Регистрация и вход", database: "База данных", api: "Серверная логика (API)", forms: "Формы обратной связи", seo: "SEO и скорость", animation: "Анимации", gallery: "Галерея работ", qa: "Тестирование", launch: "Запуск в интернете" }
  },
  en: {
    h1: "Price your projects with confidence",
    sub: "Break the work into tasks, calculate time and cost, and send your client a ready proposal.",
    details: "Project details", tasks: "Tasks",
    hint: "Split the work into small pieces and estimate the time for each.",
    name: "Project name", client: "Client", type: "Type", rate: "Hourly rate",
    currency: "Currency", reserve: "Reserve, %", deadline: "Deadline",
    phName: "e.g. Company website", phClient: "Client name", phTask: "Task name",
    tpl: "Ready-made tasks for this type", tplBtn: "Apply template",
    taskName: "Task", hours: "Hours", add: "Add a task", totalH: "Total hours",
    copy: "Copy proposal", pdf: "Save as PDF", save: "Save project", newp: "Start a new project",
    saved: "Saved projects", empty: "No projects yet. Fill in the estimate and press “Save project”.",
    projects: "projects", open: "Open", del: "Delete", confirmDel: "Delete this project?",
    tSaved: "Project saved", tCopied: "Proposal copied", tOpened: "Project opened", tDeleted: "Project deleted",
    tNew: "New project ready", tTpl: "Template applied", tName: "Enter a project name first",
    tClip: "Copy failed. Use localhost or HTTPS", tStore: "Could not save in this browser",
    proposal: "Commercial proposal", forClient: "Client", dl: "Deadline", cost: "Cost",
    subtotal: "Base cost", reserveL: "Time reserve", total: "Total",
    disclaimer: "This is an estimate, not a binding contract. Scope, timeline and payment terms are agreed separately.",
    untitled: "Untitled project", notSet: "Not specified", tbd: "To be agreed",
    noTasks: "No tasks added yet", h: "h", issued: "Prepared on",
    types: { shop: "Online store", site: "Business website", portfolio: "Portfolio", landing: "Landing page", app: "Web application", other: "Other" },
    t: { design: "Design", layout: "Page layout", pages: "Page content", catalog: "Product catalog", cart: "Cart and checkout", payment: "Online payment", admin: "Admin panel", auth: "Sign-up and login", database: "Database", api: "Server logic (API)", forms: "Contact forms", seo: "SEO and speed", animation: "Animations", gallery: "Work gallery", qa: "Testing", launch: "Launch" }
  }
};

/* Task templates: [taskKey, hours] */
const TPL = {
  site: [["design", 10], ["layout", 14], ["pages", 10], ["forms", 4], ["seo", 4], ["qa", 4], ["launch", 2]],
  shop: [["design", 12], ["layout", 16], ["catalog", 16], ["cart", 14], ["payment", 10], ["admin", 14], ["qa", 8], ["launch", 4]],
  portfolio: [["design", 8], ["layout", 10], ["gallery", 8], ["forms", 2], ["seo", 3], ["qa", 3], ["launch", 2]],
  landing: [["design", 6], ["layout", 8], ["animation", 4], ["forms", 2], ["seo", 2], ["qa", 2], ["launch", 1]],
  app: [["design", 16], ["layout", 24], ["auth", 12], ["database", 16], ["api", 20], ["admin", 14], ["qa", 12], ["launch", 6]],
  other: []
};

/* ---------- State and helpers ---------- */
let lang = "ky";
try { const l = localStorage.getItem(LKEY); if (D[l]) lang = l; } catch {}
let saved = load();
let toastTimer;

const taskList = $("taskList");
const rows = () => [...taskList.querySelectorAll(".row")];

function h(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}

function load() {
  try {
    const d = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(d) ? d : [];
  } catch { return []; }
}

function persist() {
  try { localStorage.setItem(KEY, JSON.stringify(saved)); return true; }
  catch { toast(D[lang].tStore); return false; }
}

function toast(msg) {
  const e = $("toast");
  e.textContent = msg;
  e.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => e.classList.remove("show"), 2600);
}

function money(n, cur) {
  const s = new Intl.NumberFormat(LOC[lang], { maximumFractionDigits: 2 }).format(n);
  return cur === "KGS" ? s + " " + SYM.KGS : (SYM[cur] || "") + s;
}

function fmtDate(value) {
  const d = value ? new Date(value + "T00:00") : new Date();
  return d.toLocaleDateString(LOC[lang], { day: "numeric", month: "long", year: "numeric" });
}

/* Numbers always come from the project data, so old saved projects stay valid */
function fig(p) {
  const hours = p.tasks.reduce((s, t) => s + t.hours, 0);
  const base = hours * p.hourlyRate;
  const extra = base * p.reserve / 100;
  return { hours, base, extra, total: base + extra };
}

function read() {
  return {
    name: $("name").value.trim(),
    client: $("client").value.trim(),
    type: $("type").value,
    currency: $("currency").value,
    deadline: $("deadline").value,
    hourlyRate: Math.max(0, Number($("rate").value) || 0),
    reserve: Math.min(100, Math.max(0, Number($("reserve").value) || 0)),
    tasks: rows().map(r => ({
      name: r.querySelector(".tn").value.trim(),
      hours: Math.max(0, Number(r.querySelector(".th").value) || 0)
    }))
  };
}

/* ---------- Tasks ---------- */
function addTask(name = "", hours = 0, key = "") {
  const r = h("div", "row");
  if (key) r.dataset.key = key;

  const n = h("input", "tn");
  n.type = "text"; n.value = name; n.placeholder = D[lang].phTask;
  n.addEventListener("input", () => { delete r.dataset.key; render(); });

  const t = h("input", "th");
  t.type = "number"; t.min = "0"; t.step = "0.5"; t.value = String(hours);
  t.setAttribute("aria-label", D[lang].hours);
  t.addEventListener("input", render);

  const x = h("button", "x", "×");
  x.type = "button"; x.setAttribute("aria-label", D[lang].del);
  x.addEventListener("click", () => { r.remove(); render(); });

  r.append(n, t, x);
  taskList.append(r);
}

function applyTemplate() {
  taskList.replaceChildren();
  const list = TPL[$("type").value] || [];
  if (list.length) list.forEach(([k, hrs]) => addTask(D[lang].t[k], hrs, k));
  else addTask();
  render();
}

/* ---------- Quote sheet (also the PDF) ---------- */
function render() {
  const p = read(), t = D[lang], f = fig(p), s = $("sheet");
  $("sumH").textContent = f.hours + " " + t.h;
  s.replaceChildren();

  const head = h("div", "sh-head");
  head.append(h("span", "", t.proposal), h("span", "", fmtDate()));
  s.append(head, h("h3", "", p.name || t.untitled));

  const meta = h("div", "meta");
  [[t.forClient, p.client || t.notSet], [t.dl, p.deadline ? fmtDate(p.deadline) : t.tbd]].forEach(([k, v]) => {
    const d = h("div"); d.append(h("span", "", k), h("b", "", v)); meta.append(d);
  });
  s.append(meta);

  const table = h("table");
  const hr = table.createTHead().insertRow();
  [t.taskName, t.hours, t.cost].forEach(x => hr.append(h("th", "", x)));
  const body = table.createTBody();
  if (!p.tasks.length) {
    const r = body.insertRow(); const c = h("td", "", t.noTasks); c.colSpan = 3; r.append(c);
  }
  p.tasks.forEach(k => {
    const r = body.insertRow();
    r.append(h("td", "", k.name || "—"), h("td", "", k.hours + " " + t.h), h("td", "", money(k.hours * p.hourlyRate, p.currency)));
  });
  s.append(table);

  const line = (k, v) => { const d = h("div", "line"); d.append(h("span", "", k), h("span", "", v)); return d; };
  const grand = h("div", "grand");
  grand.append(h("span", "", t.total), h("b", "", money(f.total, p.currency)));
  s.append(line(t.subtotal, money(f.base, p.currency)), line(t.reserveL + " (" + p.reserve + "%)", money(f.extra, p.currency)), grand, h("p", "note", t.disclaimer));
}

/* ---------- Actions ---------- */
function proposalText(p) {
  const t = D[lang], f = fig(p);
  const lines = [t.proposal.toUpperCase(), p.name || t.untitled, "",
    t.forClient + ": " + (p.client || t.notSet),
    t.dl + ": " + (p.deadline ? fmtDate(p.deadline) : t.tbd), ""];
  p.tasks.forEach((k, i) => lines.push((i + 1) + ". " + (k.name || "—") + " — " + k.hours + " " + t.h + " — " + money(k.hours * p.hourlyRate, p.currency)));
  lines.push("", t.subtotal + ": " + money(f.base, p.currency),
    t.reserveL + " (" + p.reserve + "%): " + money(f.extra, p.currency),
    t.total + ": " + money(f.total, p.currency), "", t.disclaimer);
  return lines.join("\n");
}

async function copyProposal() {
  try { await navigator.clipboard.writeText(proposalText(read())); toast(D[lang].tCopied); }
  catch { toast(D[lang].tClip); }
}

function printSheet() {
  const old = document.title;
  document.title = read().name || D[lang].untitled;
  window.print();
  document.title = old;
}

function saveProject() {
  const p = read();
  if (!p.name) { toast(D[lang].tName); $("name").focus(); return; }
  const i = saved.findIndex(x => x.name === p.name);
  p.id = i >= 0 ? saved[i].id : Date.now();
  if (i >= 0) saved[i] = p; else saved.unshift(p);
  if (persist()) { renderSaved(); toast(D[lang].tSaved); }
}

function openProject(p) {
  $("name").value = p.name;
  $("client").value = p.client || "";
  $("type").value = TPL[p.type] ? p.type : "other";
  $("currency").value = p.currency;
  $("rate").value = p.hourlyRate;
  $("reserve").value = p.reserve;
  $("deadline").value = p.deadline || "";
  taskList.replaceChildren();
  p.tasks.forEach(k => addTask(k.name, k.hours));
  render();
  toast(D[lang].tOpened);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function newProject() {
  $("form").reset();
  applyTemplate();
  window.scrollTo({ top: 0, behavior: "smooth" });
  toast(D[lang].tNew);
}

function renderSaved() {
  const t = D[lang], box = $("savedList");
  box.replaceChildren();
  $("count").textContent = saved.length + " " + t.projects;
  if (!saved.length) { box.append(h("div", "empty", t.empty)); return; }

  saved.forEach(p => {
    const f = fig(p), card = h("article", "item");
    const info = h("div");
    info.append(h("h3", "", p.name), h("p", "", f.hours + " " + t.h + " • " + (t.types[p.type] || p.type)));

    const btns = h("div", "btns");
    const o = h("button", "", t.open); o.type = "button";
    o.addEventListener("click", () => openProject(p));
    const d = h("button", "del", t.del); d.type = "button";
    d.addEventListener("click", () => {
      if (!confirm(D[lang].confirmDel)) return;
      saved = saved.filter(x => x.id !== p.id);
      persist(); renderSaved(); toast(D[lang].tDeleted);
    });
    btns.append(o, d);
    card.append(info, h("div", "price", money(f.total, p.currency)), btns);
    box.append(card);
  });
}

/* ---------- Language ---------- */
function setLang(next) {
  const old = lang, t = D[next];
  lang = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach(e => { e.textContent = t[e.dataset.i18n]; });
  document.querySelectorAll("[data-ph]").forEach(e => { e.placeholder = t[e.dataset.ph]; });
  document.querySelectorAll("#type option").forEach(o => { o.textContent = t.types[o.value]; });
  rows().forEach(r => {
    const n = r.querySelector(".tn"), k = r.dataset.key;
    n.placeholder = t.phTask;
    if (k && n.value === D[old].t[k]) n.value = t.t[k];
  });
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === next)));
  try { localStorage.setItem(LKEY, next); } catch {}
  render();
  renderSaved();
}

/* ---------- Events and start ---------- */
$("form").addEventListener("submit", e => e.preventDefault());
$("form").addEventListener("input", render);
$("form").addEventListener("change", render);
$("addTask").addEventListener("click", () => { addTask(); render(); taskList.lastElementChild.querySelector(".tn").focus(); });
$("applyTpl").addEventListener("click", () => { applyTemplate(); toast(D[lang].tTpl); });
$("copy").addEventListener("click", copyProposal);
$("print").addEventListener("click", printSheet);
$("save").addEventListener("click", saveProject);
$("newp").addEventListener("click", newProject);
document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

applyTemplate();
setLang(lang);