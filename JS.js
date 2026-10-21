// ===================== 即時時鐘程式 =====================

// 常數提取到函式外，避免每次呼叫重建
const WEEKDAYS = [
    '星期日', '星期一', '星期二', '星期三',
    '星期四', '星期五', '星期六'
];

// 快取 DOM 元素引用，避免每幀重複查詢
const clockEl = document.getElementById('clock');
const dateEl  = document.getElementById('dateDisplay');

function updateClock() {
    const now = new Date();

    // 時、分、秒（補零至兩位數）
    const hours   = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 更新時間顯示
    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
    // 同步 datetime 屬性（語意 & 無障礙）
    clockEl.dateTime = now.toISOString();

    // 日期（月、日補零，與時間風格一致）
    const year  = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day   = String(now.getDate()).padStart(2, '0');
    const weekday = WEEKDAYS[now.getDay()];

    dateEl.textContent = `${year}年${month}月${day}日 ${weekday}`;
}

// 首次立即執行，避免初始空白
updateClock();

// 每秒更新一次
setInterval(updateClock, 1000);