/* ======DATA HELPERS========= */

const SYM = { INR: "₹", USD: "$", EUR: "€", GBP: "£", JPY: "¥" };
const FLAGS = { INR: "🇮🇳", USD: "🇺🇸", EUR: "🇪🇺", GBP: "🇬🇧", JPY: "🇯🇵" };
const CAT_INCOME = [
  "Salary",
  "Freelance",
  "Business",
  "Investment",
  "Gift",
  "Refund",
  "Other",
];
const CAT_EXPENSE = [
  "Food & Dining",
  "Shopping",
  "Recharge & Bills",
  "Petrol & Auto",
  "Utilities",
  "Entertainment",
  "Rent",
  "Healthcare",
  "Education",
  "Travel",
  "Other",
];
const CAT_EMOJI = {
  Salary: "💼",
  Freelance: "💻",
  Business: "🏪",
  Investment: "📈",
  Gift: "🎁",
  Refund: "↩️",
  "Food & Dining": "🍽️",
  Shopping: "🛍️",
  "Recharge & Bills": "📱",
  "Petrol & Auto": "⛽",
  Utilities: "💡",
  Entertainment: "🎬",
  Rent: "🏠",
  Healthcare: "🏥",
  Education: "📚",
  Travel: "✈️",
  Other: "📦",
};
const AV_COLORS = [
  "#4f46e5",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#ec4899",
  "#84cc16",
  "#f97316",
];

let CU = null; // current user key
let txFilter = "all",
  chartType = "bar",
  chartInst = null,
  budgChartInst = null;
let txType = "income",
  calDate = new Date(),
  txPage = 1,
  TX_PER_PAGE = 10;

function getUsers() {
  return JSON.parse(localStorage.getItem("ft2_users") || "{}");
}
function setUsers(u) {
  localStorage.setItem("ft2_users", JSON.stringify(u));
}
function ud() {
  return (
    getUsers()[CU] || {
      transactions: [],
      currency: "INR",
      name: "",
      darkMode: false,
      budgets: {},
    }
  );
}
function setud(d) {
  const u = getUsers();
  u[CU] = d;
  setUsers(u);
}
function sym() {
  return SYM[ud().currency] || "₹";
}
function fmt(n) {
  return (
    sym() +
    Number(n).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}
function fmtDate(d) {
  if (!d) return "";
  const [y, m, day] = d.split("-");
  return `${day} ${
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][m - 1]
  } ${y}`;
}
function todayStr() {
  return new Date().toISOString().split("T")[0];
}
function esc(s) {
  const e = document.createElement("div");
  e.textContent = s;
  return e.innerHTML;
}
function toast(msg, type = "") {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.className = "show " + (type || "");
  setTimeout(() => (el.className = ""), 2500);
}

/* ============================================================
   AUTH
   ============================================================ */
function authTab(t) {
  document
    .querySelectorAll(".a-tab")
    .forEach((el, i) =>
      el.classList.toggle("on", t === "login" ? i === 0 : i === 1)
    );
  document.getElementById("form-login").classList.toggle("on", t === "login");
  document
    .getElementById("form-register")
    .classList.toggle("on", t === "register");
  ["l-msg", "r-msg"].forEach((id) => {
    const el = document.getElementById(id);
    el.style.display = "none";
    el.className = "auth-msg";
  });
}
function showMsg(id, msg, type) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.className = "auth-msg " + (type === "ok" ? "ok" : "err");
  el.style.display = "block";
}
function doRegister() {
  const name = document.getElementById("r-name").value.trim();
  const user = document
    .getElementById("r-user")
    .value.trim()
    .toLowerCase()
    .replace(/\s+/g, "");
  const pass = document.getElementById("r-pass").value;
  const cur = document.getElementById("r-cur").value;
  if (!name || !user || !pass)
    return showMsg("r-msg", "Please fill all fields.", "err");
  if (pass.length < 4)
    return showMsg("r-msg", "Password must be at least 4 characters.", "err");
  if (!/^[a-z0-9_]+$/.test(user))
    return showMsg(
      "r-msg",
      "Username: letters, numbers, underscores only.",
      "err"
    );
  const users = getUsers();
  if (users[user])
    return showMsg("r-msg", "Username already taken. Try another.", "err");
  users[user] = {
    transactions: [],
    currency: cur,
    name,
    darkMode: false,
    budgets: {},
    passwordHash: btoa(pass + user),
  };
  setUsers(users);
  showMsg("r-msg", "Account created! Sign in now.", "ok");
  setTimeout(() => {
    authTab("login");
    document.getElementById("l-user").value = user;
  }, 1200);
}
function doLogin() {
  const user = document.getElementById("l-user").value.trim().toLowerCase();
  const pass = document.getElementById("l-pass").value;
  const users = getUsers();
  if (!users[user]) return showMsg("l-msg", "Username not found.", "err");
  if (users[user].passwordHash !== btoa(pass + user))
    return showMsg("l-msg", "Incorrect password.", "err");
  CU = user;
  localStorage.setItem("ft2_session", user);
  bootApp();
}
function doLogout() {
  CU = null;
  localStorage.removeItem("ft2_session");
  document.getElementById("main-app").style.display = "none";
  document.getElementById("auth-page").style.display = "flex";
  goPage("pg-dash");
}
function checkSession() {
  const s = localStorage.getItem("ft2_session");
  if (s && getUsers()[s]) {
    CU = s;
    bootApp();
  } else {
    document.getElementById("auth-page").style.display = "flex";
    document.getElementById("main-app").style.display = "none";
  }
}

/* ============================================================
   BOOT
   ============================================================ */
function bootApp() {
  document.getElementById("auth-page").style.display = "none";
  document.getElementById("main-app").style.display = "block";
  const data = ud();
  // Dark mode
  document.body.classList.toggle("dark", !!data.darkMode);
  document.getElementById("dk-tog").checked = !!data.darkMode;
  // Nav
  updateNavUser();
  // Settings prefill
  document.getElementById("s-name").value = data.name || "";
  document.getElementById("s-cur").value = data.currency || "INR";
  updateCurDisplay();
  // Calendar
  calDate = new Date();
  renderCalendar();
  // All refresh
  masterRefresh();
  document.getElementById("tx-date").value = todayStr();
}
function updateNavUser() {
  const data = ud();
  const initials = (data.name || CU)
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  document.getElementById("nav-av").textContent = initials;
  document.getElementById("nav-uname").textContent = data.name || CU;
  const i = Object.keys(getUsers()).indexOf(CU) % AV_COLORS.length;
  document.getElementById(
    "nav-av"
  ).style.background = `linear-gradient(135deg,${AV_COLORS[i]},${
    AV_COLORS[(i + 2) % AV_COLORS.length]
  })`;
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function goPage(id) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("on"));
  document.getElementById(id).classList.add("on");
  const pgs = ["pg-dash", "pg-cal", "pg-budget", "pg-settings"];
  document
    .querySelectorAll(".nl")
    .forEach((el, i) => el.classList.toggle("on", pgs[i] === id));
  if (id === "pg-cal") renderCalendar();
  if (id === "pg-budget") {
    renderBudgets();
    renderBudgetChart();
  }
}

/* ============================================================
   SETTINGS
   ============================================================ */
function saveProfile() {
  const data = ud();
  data.name = document.getElementById("s-name").value.trim() || CU;
  data.currency = document.getElementById("s-cur").value;
  setud(data);
  updateNavUser();
  updateCurDisplay();
  masterRefresh();
  toast("Profile saved ✓", "ok");
}
function updateCurDisplay() {
  const c = ud().currency || "INR";
  document.getElementById("cur-display").textContent = `${SYM[c]} ${c}`;
  document.getElementById("cur-flag").textContent = FLAGS[c] || "💱";
}
function toggleDark() {
  const on = document.getElementById("dk-tog").checked;
  document.body.classList.toggle("dark", on);
  const data = ud();
  data.darkMode = on;
  setud(data);
  setTimeout(() => {
    renderChart();
    renderBudgetChart();
  }, 150);
}
function resetAll() {
  if (
    !confirm(
      "This will delete ALL your transactions and budgets. Are you sure?"
    )
  )
    return;
  const data = ud();
  data.transactions = [];
  data.budgets = {};
  setud(data);
  txPage = 1;
  masterRefresh();
  renderCalendar();
  renderBudgets();
  toast("Data reset ✓", "ok");
}
function exportCSV() {
  const txs = ud().transactions;
  if (!txs.length) return toast("No transactions to export.", "err");
  const rows = [["Date", "Description", "Category", "Type", "Amount", "Notes"]];
  txs.forEach((t) =>
    rows.push([t.date, t.desc, t.category, t.type, t.amount, t.note || ""])
  );
  const csv = rows
    .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const a = document.createElement("a");
  a.href = "data:text/csv;charset=utf-8,\uFEFF" + encodeURIComponent(csv);
  a.download = `fintrack_${CU}_${todayStr()}.csv`;
  a.click();
  toast("Exported ✓", "ok");
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal() {
  document.getElementById("tx-overlay").classList.add("open");
  document.getElementById("tx-date").value = todayStr();
  setType("income");
  document.getElementById("tx-desc").value = "";
  document.getElementById("tx-amt").value = "";
  document.getElementById("tx-note").value = "";
}
function closeModal() {
  document.getElementById("tx-overlay").classList.remove("open");
}
function ovClick(e) {
  if (e.target === document.getElementById("tx-overlay")) closeModal();
}
function openBudgetModal() {
  document.getElementById("bg-overlay").classList.add("open");
}
function closeBudgetModal() {
  document.getElementById("bg-overlay").classList.remove("open");
}
function bgOvClick(e) {
  if (e.target === document.getElementById("bg-overlay")) closeBudgetModal();
}

function setType(t) {
  txType = t;
  document.getElementById("tt-inc").classList.toggle("on", t === "income");
  document.getElementById("tt-exp").classList.toggle("on", t === "expense");
  const sel = document.getElementById("tx-cat");
  const cats = t === "income" ? CAT_INCOME : CAT_EXPENSE;
  sel.innerHTML = cats
    .map((c) => `<option value="${c}">${CAT_EMOJI[c] || "📦"} ${c}</option>`)
    .join("");
}

function saveTx() {
  const desc = document.getElementById("tx-desc").value.trim();
  const amt = parseFloat(document.getElementById("tx-amt").value);
  const date = document.getElementById("tx-date").value;
  const cat = document.getElementById("tx-cat").value;
  const note = document.getElementById("tx-note").value.trim();
  if (!desc) return toast("Please enter a description.", "err");
  if (!amt || amt <= 0) return toast("Please enter a valid amount.", "err");
  if (!date) return toast("Please pick a date.", "err");
  const data = ud();
  data.transactions.push({
    id: Date.now(),
    type: txType,
    desc,
    amount: amt,
    date,
    category: cat,
    note,
  });
  data.transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  setud(data);
  closeModal();
  txPage = 1;
  masterRefresh();
  renderCalendar();
  toast("Transaction saved ✓", "ok");
}
function deleteTx(id) {
  const data = ud();
  data.transactions = data.transactions.filter((t) => t.id !== id);
  setud(data);
  txPage = 1;
  masterRefresh();
  renderCalendar();
  // refresh day panel if open
  const dp = document.getElementById("day-panel");
  if (dp.classList.contains("open")) {
    const ds = dp.dataset.date;
    if (ds) showDayPanel(ds);
  }
  toast("Deleted ✓", "ok");
}

/* ============================================================
   MASTER REFRESH
   ============================================================ */
function masterRefresh() {
  updateCards();
  renderTable();
  renderChart();
}

/* ============================================================
   CARDS
   ============================================================ */
function updateCards() {
  const txs = ud().transactions;
  let inc = 0,
    exp = 0,
    incCnt = 0,
    expCnt = 0;
  const now = new Date();
  const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
  let monthCnt = 0;
  txs.forEach((t) => {
    if (t.type === "income") {
      inc += t.amount;
      incCnt++;
    } else {
      exp += t.amount;
      expCnt++;
    }
    if (t.date && t.date.startsWith(thisMonth)) monthCnt++;
  });
  document.getElementById("c-bal").textContent = fmt(inc - exp);
  document.getElementById("c-inc").textContent = fmt(inc);
  document.getElementById("c-exp").textContent = fmt(exp);
  document.getElementById("c-cnt").textContent = txs.length;
  document.getElementById("c-inc-sub").textContent = `${incCnt} transaction${
    incCnt !== 1 ? "s" : ""
  }`;
  document.getElementById("c-exp-sub").textContent = `${expCnt} transaction${
    expCnt !== 1 ? "s" : ""
  }`;
  document.getElementById("c-cnt-sub").textContent = `This month: ${monthCnt}`;
}

/* ============================================================
   TABLE
   ============================================================ */
function setFilter(f, btn) {
  txFilter = f;
  txPage = 1;
  document.querySelectorAll(".fbt").forEach((b) => b.classList.remove("on"));
  btn.classList.add("on");
  renderTable();
}
function getFiltered() {
  const srch = (document.getElementById("srch")?.value || "").toLowerCase();
  const sort = document.getElementById("sort-sel")?.value || "date-desc";
  let txs = ud().transactions.slice();
  if (txFilter !== "all") txs = txs.filter((t) => t.type === txFilter);
  if (srch)
    txs = txs.filter(
      (t) =>
        (t.desc || "").toLowerCase().includes(srch) ||
        (t.category || "").toLowerCase().includes(srch) ||
        (t.note || "").toLowerCase().includes(srch)
    );
  txs.sort((a, b) => {
    if (sort === "date-desc") return new Date(b.date) - new Date(a.date);
    if (sort === "date-asc") return new Date(a.date) - new Date(b.date);
    if (sort === "amt-desc") return b.amount - a.amount;
    return a.amount - b.amount;
  });
  return txs;
}
function renderTable() {
  const all = getFiltered();
  document.getElementById("tx-badge").textContent = all.length;
  const total = all.length;
  const pages = Math.ceil(total / TX_PER_PAGE) || 1;
  if (txPage > pages) txPage = pages;
  const slice = all.slice((txPage - 1) * TX_PER_PAGE, txPage * TX_PER_PAGE);
  const body = document.getElementById("tx-body");
  if (!slice.length) {
    body.innerHTML = `<tr><td colspan="6" class="empty-row">💸 No transactions found<p>Click <strong>+ Add</strong> to record one.</p></td></tr>`;
    document.getElementById("pag-wrap").innerHTML = "";
    return;
  }
  body.innerHTML = slice
    .map(
      (t) => `
    <tr>
      <td style="color:var(--text2);font-size:12px;white-space:nowrap;">${fmtDate(
        t.date
      )}</td>
      <td><strong>${esc(t.desc)}</strong>${
        t.note
          ? `<br><span style="font-size:11px;color:var(--text3);">${esc(
              t.note
            )}</span>`
          : ""
      }  </td>
      <td><span class="cat-chip">${CAT_EMOJI[t.category] || "📦"} ${
        t.category
      }</span></td>
      <td><span class="tx-type-badge ${t.type}">${
        t.type === "income" ? "↑ Income" : "↓ Expense"
      }</span></td>
      <td class="tx-amt ${t.type}">${t.type === "income" ? "+" : "-"}${fmt(
        t.amount
      )}</td>
      <td style="text-align:center;"><button class="delbtn" onclick="deleteTx(${
        t.id
      })" title="Delete">🗑</button></td>
    </tr>`
    )
    .join("");
  // Pagination
  const wrap = document.getElementById("pag-wrap");
  if (pages <= 1) {
    wrap.innerHTML = "";
    return;
  }
  let btns = "";
  for (let i = 1; i <= pages; i++)
    btns += `<button class="pag-btn${
      i === txPage ? " on" : ""
    }" onclick="goPag(${i})">${i}</button>`;
  wrap.innerHTML = `
    <div class="pag-info">Showing ${(txPage - 1) * TX_PER_PAGE + 1}–${Math.min(
    txPage * TX_PER_PAGE,
    total
  )} of ${total}</div>
    <div class="pag-btns">
      <button class="pag-btn" onclick="goPag(${txPage - 1})" ${
    txPage === 1 ? "disabled" : ""
  }>‹</button>
      ${btns}
      <button class="pag-btn" onclick="goPag(${txPage + 1})" ${
    txPage === pages ? "disabled" : ""
  }>›</button>
    </div>`;
}
function goPag(p) {
  txPage = p;
  renderTable();
}

/* ============================================================
   CHART
   ============================================================ */
function setChart(type, btn) {
  chartType = type;
  document.querySelectorAll(".cbt").forEach((b) => b.classList.remove("on"));
  btn.classList.add("on");
  renderChart();
}
function renderChart() {
  const txs = ud().transactions;
  const canvas = document.getElementById("mainChart");
  if (chartInst) {
    chartInst.destroy();
    chartInst = null;
  }
  const dark = document.body.classList.contains("dark");
  const grid = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
  const tColor = dark ? "#94a3b8" : "#6b7280";
  if (chartType === "bar" || chartType === "line") {
    const map = {};
    txs.forEach((t) => {
      if (!map[t.date]) map[t.date] = { income: 0, expense: 0 };
      map[t.date][t.type] += t.amount;
    });
    const dates = Object.keys(map).sort().slice(-14);
    const labels = dates.map(fmtDate);
    chartInst = new Chart(canvas, {
      type: chartType,
      data: {
        labels,
        datasets: [
          {
            label: "Income",
            data: dates.map((d) => map[d].income),
            backgroundColor: "rgba(16,185,129,0.7)",
            borderColor: "#10b981",
            borderWidth: 2,
            fill: chartType === "line",
            tension: 0.4,
            pointRadius: 4,
          },
          {
            label: "Expense",
            data: dates.map((d) => map[d].expense),
            backgroundColor: "rgba(239,68,68,0.7)",
            borderColor: "#ef4444",
            borderWidth: 2,
            fill: chartType === "line",
            tension: 0.4,
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: tColor, boxWidth: 12, padding: 16 } },
        },
        scales: {
          x: {
            ticks: { color: tColor, maxRotation: 40 },
            grid: { color: grid },
          },
          y: {
            ticks: {
              color: tColor,
              callback: (v) => sym() + v.toLocaleString(),
            },
            grid: { color: grid },
          },
        },
      },
    });
  } else {
    // Circular charts — expense by category
    const catMap = {};
    txs
      .filter((t) => t.type === "expense")
      .forEach((t) => {
        catMap[t.category] = (catMap[t.category] || 0) + t.amount;
      });
    const cats = Object.keys(catMap);
    const vals = cats.map((c) => catMap[c]);
    const colors = cats.map(
      (_, i) =>
        [
          "#4f46e5",
          "#10b981",
          "#ef4444",
          "#f59e0b",
          "#8b5cf6",
          "#06b6d4",
          "#ec4899",
          "#84cc16",
          "#f97316",
          "#14b8a6",
        ][i % 10]
    );
    if (!cats.length) {
      chartInst = new Chart(canvas, {
        type: chartType,
        data: {
          labels: ["No expenses yet"],
          datasets: [
            { data: [1], backgroundColor: [dark ? "#252840" : "#e2e6f5"] },
          ],
        },
          options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: tColor } } },
        },
      });
      return;
    }
    chartInst = new Chart(canvas, {
      type: chartType,
      data: {
        labels: cats.map((c) => `${CAT_EMOJI[c] || ""} ${c}`),
        datasets: [
          {
            data: vals,
            backgroundColor: colors,
            borderWidth: 2,
            borderColor: dark ? "#161929" : "#fff",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: chartType === "doughnut" ? "58%" : undefined,
        plugins: {
          legend: {
            position: "right",
            labels: {
              color: tColor,
              boxWidth: 12,
              padding: 10,
              generateLabels(chart) {
                const ds = chart.data.datasets[0];
                return chart.data.labels.map((l, i) => ({
                  text: `${l}: ${fmt(ds.data[i])}`,
                  fillStyle: ds.backgroundColor[i],
                  strokeStyle: ds.borderColor,
                  lineWidth: 1,
                  index: i,
                  hidden: false,
                }));
              },
            },
          },
        },
      },
    });
  }
}

/* ============================================================
   CALENDAR
   ============================================================ */
function calMove(d) {
  calDate.setMonth(calDate.getMonth() + d);
  renderCalendar();
  closeDayPanel();
}
function closeDayPanel() {
  document.getElementById("day-panel").classList.remove("open");
}
function renderCalendar() {
  const txs = ud().transactions;
  const y = calDate.getFullYear(),
    m = calDate.getMonth();
  const MN = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("cal-lbl").textContent = `${MN[m]} ${y}`;
  // day names
  const dnames = document.getElementById("cal-daynames");
  dnames.innerHTML = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    .map((d) => `<div class="cal-dn">${d}</div>`)
    .join("");
  // map
  const txMap = {};
  txs.forEach((t) => {
    if (!t.date) return;
    const [ty, tm] = t.date.split("-");
    if (parseInt(ty) === y && parseInt(tm) - 1 === m) {
      if (!txMap[t.date]) txMap[t.date] = [];
      txMap[t.date].push(t);
    }
  });
  const first = new Date(y, m, 1).getDay();
  const dim = new Date(y, m + 1, 0).getDate();
  const today = new Date();
  let html = "";
  for (let i = 0; i < first; i++) html += `<div class="cal-cell empty"></div>`;
  for (let d = 1; d <= dim; d++) {
    const ds = `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(
      2,
      "0"
    )}`;
    const dayTxs = txMap[ds] || [];
    const isToday =
      today.getFullYear() === y &&
      today.getMonth() === m &&
      today.getDate() === d;
    const ni = dayTxs
      .filter((t) => t.type === "income")
      .reduce((a, t) => a + t.amount, 0);
    const ne = dayTxs
      .filter((t) => t.type === "expense")
      .reduce((a, t) => a + t.amount, 0);
    const dots = dayTxs
      .slice(0, 5)
      .map((t) => `<div class="cal-dot ${t.type}"></div>`)
      .join("");
    html += `<div class="cal-cell${
      isToday ? " today" : ""
    }" onclick="showDayPanel('${ds}')">
      <div class="cal-num">${d}</div>
      ${dots ? `<div class="cal-dots">${dots}</div>` : ""}
      <div class="cal-amts">
        ${ni > 0 ? `<div class="cal-a pos">+${fmt(ni)}</div>` : ""}
        ${ne > 0 ? `<div class="cal-a neg">−${fmt(ne)}</div>` : ""}
      </div>
    </div>`;
  }
  document.getElementById("cal-grid").innerHTML = html;
}
function showDayPanel(ds) {
  const txs = ud().transactions.filter((t) => t.date === ds);
  const panel = document.getElementById("day-panel");
  panel.dataset.date = ds;
  document.getElementById(
    "day-panel-title"
  ).textContent = `Transactions on ${fmtDate(ds)}`;
  const body = document.getElementById("day-panel-body");
  if (!txs.length) {
    body.innerHTML = `<tr><td colspan="5" class="empty-row">No transactions on this day.</td></tr>`;
  } else {
    body.innerHTML = txs
      .map(
        (t) => `<tr>
      <td><strong>${esc(t.desc)}</strong>${
          t.note
            ? `<br><span style="font-size:11px;color:var(--text3);">${esc(
                t.note
              )}</span>`
            : ""
        }  </td>
      <td><span class="cat-chip">${CAT_EMOJI[t.category] || "📦"} ${
          t.category
        }</span></td>
      <td><span class="tx-type-badge ${t.type}">${
          t.type === "income" ? "↑" : "↓"
        } ${t.type}</span></td>
      <td class="tx-amt ${t.type}">${t.type === "income" ? "+" : "-"}${fmt(
          t.amount
        )}</td>
      <td><button class="delbtn" onclick="deleteTx(${t.id})">🗑</button></td>
    </tr>`
      )
      .join("");
  }
  panel.classList.add("open");
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ============================================================
   BUDGETS
   ============================================================ */
function saveBudget() {
  const cat = document.getElementById("bg-cat").value;
  const amt = parseFloat(document.getElementById("bg-amt").value);
  if (!amt || amt <= 0) return toast("Enter a valid budget amount.", "err");
  const data = ud();
  if (!data.budgets) data.budgets = {};
  data.budgets[cat] = amt;
  setud(data);
  closeBudgetModal();
  renderBudgets();
  renderBudgetChart();
  toast(`Budget set for ${cat} ✓`, "ok");
}
function renderBudgets() {
  const data = ud();
  const budgets = data.budgets || {};
  const now = new Date();
  const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
  // Current month expense per category
  const spent = {};
  data.transactions
    .filter(
      (t) => t.type === "expense" && t.date && t.date.startsWith(thisMonth)
    )
    .forEach((t) => (spent[t.category] = (spent[t.category] || 0) + t.amount));
  const grid = document.getElementById("budget-grid");
  const cats = Object.keys(budgets);
  if (!cats.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:32px;color:var(--text3);font-size:14px;">No budgets set yet. Click <strong>+ Set Budget</strong> above.</div>`;
    return;
  }
  grid.innerHTML = cats
    .map((cat) => {
      const lim = budgets[cat];
      const sp = spent[cat] || 0;
      const pct = Math.min(100, (sp / lim) * 100);
      const cls = pct >= 100 ? "over" : pct >= 80 ? "warn" : "";
      const color =
        pct >= 100 ? "var(--red)" : pct >= 80 ? "var(--amber)" : "var(--green)";
      return `<div class="budget-item">
      <div class="budget-label">${CAT_EMOJI[cat] || "📦"} ${cat}</div>
      <div class="budget-bar-wrap"><div class="budget-bar ${cls}" style="width:${pct}%"></div></div>
      <div class="budget-info">
        <span style="color:${color};font-weight:700;">${fmt(sp)} used</span>
        <span style="color:var(--text2);">Limit: ${fmt(lim)}</span>
      </div>
      ${
        pct >= 100
          ? `<div style="font-size:11px;color:var(--red);font-weight:600;margin-top:4px;">⚠️ Over budget!</div>`
          : ""
      }
      ${
        pct >= 80 && pct < 100
          ? `<div style="font-size:11px;color:var(--amber);font-weight:600;margin-top:4px;">⚡ Nearly at limit</div>`
          : ""
      }
    </div>`;
    })
    .join("");
}
function renderBudgetChart() {
  const canvas = document.getElementById("budgetChart");
  if (budgChartInst) {
    budgChartInst.destroy();
    budgChartInst = null;
  }
  const dark = document.body.classList.contains("dark");
  const tColor = dark ? "#94a3b8" : "#6b7280";
  const grid = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
  const now = new Date();
  // Last 6 months
  const months = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push({
      label: `${
        [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ][d.getMonth()]
      } ${d.getFullYear()}`,
      key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`,
    });
  }
  const txs = ud().transactions;
  const incData = months.map((mo) =>
    txs
      .filter((t) => t.type === "income" && t.date && t.date.startsWith(mo.key))
      .reduce((a, t) => a + t.amount, 0)
  );
  const expData = months.map((mo) =>
    txs
      .filter(
        (t) => t.type === "expense" && t.date && t.date.startsWith(mo.key)
      )
      .reduce((a, t) => a + t.amount, 0)
  );
  budgChartInst = new Chart(canvas, {
    type: "bar",
    data: {
      labels: months.map((m) => m.label),
      datasets: [
        {
          label: "Income",
          data: incData,
          backgroundColor: "rgba(16,185,129,0.75)",
          borderColor: "#10b981",
          borderWidth: 2,
          borderRadius: 4,
        },
        {
          label: "Expense",
          data: expData,
          backgroundColor: "rgba(239,68,68,0.75)",
          borderColor: "#ef4444",
          borderWidth: 2,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: tColor, boxWidth: 12, padding: 16 } },
      },
      scales: {
        x: { ticks: { color: tColor }, grid: { color: grid } },
        y: {
          ticks: { color: tColor, callback: (v) => sym() + v.toLocaleString() },
          grid: { color: grid },
        },
      },
    },
  });
}

/* ============================================================
   KEYBOARD SHORTCUTS
   ============================================================ */
document.addEventListener("keydown", (e) => {
  if (!CU) return;
  if (e.key === "Escape") {
    closeModal();
    closeBudgetModal();
    closeDayPanel();
  }
  if ((e.ctrlKey || e.metaKey) && e.key === "n") {
    e.preventDefault();
    openModal();
  }
});

/* ============================================================
   INIT
   ============================================================ */
checkSession();