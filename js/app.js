/** Fallback if bot URL /api/config unavailable */
const SUPPORT_TELEGRAM_URL_FALLBACK = "https://t.me/";
const SUPPORT_URL_KEY = "moget_support_url";
let supportTelegramUrl = SUPPORT_TELEGRAM_URL_FALLBACK;

/**
 * Trade API base.
 * - Production (Vercel): same-origin "" → /api/* proxied by api/[...path].js
 * - Local static: http://127.0.0.1:8787
 * - Override anytime: window.MOGET_API_BASE = "..."
 */
const API_BASE = (function () {
    if (typeof window !== "undefined" && window.MOGET_API_BASE != null && window.MOGET_API_BASE !== "") {
        return String(window.MOGET_API_BASE).replace(/\/$/, "");
    }
    if (typeof location !== "undefined") {
        // file:// открытие с диска — иначе fetch идёт на file:///C:/api/...
        if (location.protocol === "file:") {
            return "http://127.0.0.1:8787";
        }
        const host = location.hostname;
        if (host === "localhost" || host === "127.0.0.1" || host === "") {
            return "http://127.0.0.1:8787";
        }
    }
    return "";
})();

const cryptoPairs = [
    { symbol: "BTC/USD", name: "Bitcoin / US Dollar", hot: true },
    { symbol: "ETH/USD", name: "Ethereum / US Dollar", hot: true },
    { symbol: "SOL/USD", name: "Solana / US Dollar", hot: false },
    { symbol: "BNB/USD", name: "Binance Coin / US Dollar", hot: false },
    { symbol: "XRP/USD", name: "Ripple / US Dollar", hot: false }
];

const stocksList = [
    { symbol: "AAPL", name: "Apple Inc.", hot: true },
    { symbol: "GOOGL", name: "Alphabet Inc.", hot: true },
    { symbol: "MSFT", name: "Microsoft", hot: false },
    { symbol: "TSLA", name: "Tesla", hot: false },
    { symbol: "AMZN", name: "Amazon", hot: false }
];

const OTC_FOREX_ROWS = [
    ["EUR/USD", "Euro / US Dollar", true],
    ["GBP/USD", "British Pound / US Dollar", true],
    ["USD/JPY", "US Dollar / Japanese Yen", true],
    ["AUD/USD", "Australian Dollar / US Dollar", true],
    ["USD/CAD", "US Dollar / Canadian Dollar", true],
    ["NZD/USD", "New Zealand Dollar / US Dollar", true],
    ["USD/CHF", "US Dollar / Swiss Franc", true],
    ["EUR/GBP", "Euro / British Pound", true],
    ["EUR/JPY", "Euro / Japanese Yen", true],
    ["GBP/JPY", "British Pound / Japanese Yen", true],
    ["EUR/AUD", "Euro / Australian Dollar", false],
    ["EUR/CAD", "Euro / Canadian Dollar", false],
    ["EUR/NZD", "Euro / New Zealand Dollar", false],
    ["EUR/CHF", "Euro / Swiss Franc", false],
    ["EUR/SEK", "Euro / Swedish Krona", false],
    ["EUR/NOK", "Euro / Norwegian Krone", false],
    ["EUR/DKK", "Euro / Danish Krone", false],
    ["EUR/PLN", "Euro / Polish Zloty", false],
    ["EUR/CZK", "Euro / Czech Koruna", false],
    ["EUR/HUF", "Euro / Hungarian Forint", false],
    ["EUR/TRY", "Euro / Turkish Lira", false],
    ["GBP/AUD", "British Pound / Australian Dollar", false],
    ["GBP/CAD", "British Pound / Canadian Dollar", false],
    ["GBP/CHF", "British Pound / Swiss Franc", false],
    ["GBP/NZD", "British Pound / New Zealand Dollar", false],
    ["GBP/SEK", "British Pound / Swedish Krona", false],
    ["GBP/NOK", "British Pound / Norwegian Krone", false],
    ["GBP/ZAR", "British Pound / South African Rand", false],
    ["AUD/JPY", "Australian Dollar / Japanese Yen", false],
    ["AUD/CAD", "Australian Dollar / Canadian Dollar", false],
    ["AUD/NZD", "Australian Dollar / New Zealand Dollar", false],
    ["AUD/CHF", "Australian Dollar / Swiss Franc", false],
    ["AUD/SGD", "Australian Dollar / Singapore Dollar", false],
    ["CAD/JPY", "Canadian Dollar / Japanese Yen", false],
    ["CAD/CHF", "Canadian Dollar / Swiss Franc", false],
    ["CHF/JPY", "Swiss Franc / Japanese Yen", false],
    ["NZD/JPY", "New Zealand Dollar / Japanese Yen", false],
    ["NZD/CAD", "New Zealand Dollar / Canadian Dollar", false],
    ["NZD/CHF", "New Zealand Dollar / Swiss Franc", false],
    ["USD/MXN", "US Dollar / Mexican Peso", false],
    ["USD/ZAR", "US Dollar / South African Rand", false],
    ["USD/TRY", "US Dollar / Turkish Lira", false],
    ["USD/SEK", "US Dollar / Swedish Krona", false],
    ["USD/NOK", "US Dollar / Norwegian Krone", false],
    ["USD/DKK", "US Dollar / Danish Krone", false],
    ["USD/HUF", "US Dollar / Hungarian Forint", false],
    ["USD/PLN", "US Dollar / Polish Zloty", false],
    ["USD/CZK", "US Dollar / Czech Koruna", false],
    ["USD/THB", "US Dollar / Thai Baht", false],
    ["USD/SGD", "US Dollar / Singapore Dollar", false],
    ["USD/HKD", "US Dollar / Hong Kong Dollar", false],
    ["USD/INR", "US Dollar / Indian Rupee", false],
    ["USD/KRW", "US Dollar / South Korean Won", false],
    ["USD/CNH", "US Dollar / Chinese Yuan", false],
    ["USD/BRL", "US Dollar / Brazilian Real", false],
    ["USD/CLP", "US Dollar / Chilean Peso", false],
    ["USD/COP", "US Dollar / Colombian Peso", false],
    ["USD/ARS", "US Dollar / Argentine Peso", false],
    ["USD/ILS", "US Dollar / Israeli Shekel", false],
    ["USD/RUB", "US Dollar / Russian Ruble", false],
    ["USD/IDR", "US Dollar / Indonesian Rupiah", false],
    ["USD/MYR", "US Dollar / Malaysian Ringgit", false],
    ["USD/PHP", "US Dollar / Philippine Peso", false],
    ["USD/VND", "US Dollar / Vietnamese Dong", false],
    ["XAU/USD", "Gold / US Dollar", false],
    ["XAG/USD", "Silver / US Dollar", false]
];

const OTC_CRYPTO_ROWS = [
    ["BTC/USD", "Bitcoin / US Dollar", true],
    ["ETH/USD", "Ethereum / US Dollar", true],
    ["SOL/USD", "Solana / US Dollar", true],
    ["XRP/USD", "Ripple / US Dollar", true],
    ["BNB/USD", "BNB / US Dollar", true],
    ["LTC/USD", "Litecoin / US Dollar", false],
    ["BCH/USD", "Bitcoin Cash / US Dollar", false],
    ["ADA/USD", "Cardano / US Dollar", false],
    ["DOT/USD", "Polkadot / US Dollar", false],
    ["LINK/USD", "Chainlink / US Dollar", false],
    ["UNI/USD", "Uniswap / US Dollar", false],
    ["AVAX/USD", "Avalanche / US Dollar", false],
    ["MATIC/USD", "Polygon / US Dollar", false],
    ["DOGE/USD", "Dogecoin / US Dollar", false],
    ["SHIB/USD", "Shiba Inu / US Dollar", false],
    ["TRX/USD", "TRON / US Dollar", false],
    ["XLM/USD", "Stellar / US Dollar", false],
    ["ATOM/USD", "Cosmos / US Dollar", false],
    ["ETC/USD", "Ethereum Classic / US Dollar", false],
    ["FIL/USD", "Filecoin / US Dollar", false],
    ["NEAR/USD", "NEAR Protocol / US Dollar", false],
    ["APT/USD", "Aptos / US Dollar", false],
    ["ARB/USD", "Arbitrum / US Dollar", false],
    ["OP/USD", "Optimism / US Dollar", false],
    ["INJ/USD", "Injective / US Dollar", false],
    ["SUI/USD", "Sui / US Dollar", false],
    ["TON/USD", "Toncoin / US Dollar", false],
    ["XMR/USD", "Monero / US Dollar", false],
    ["AAVE/USD", "Aave / US Dollar", false],
    ["ALGO/USD", "Algorand / US Dollar", false],
    ["SAND/USD", "The Sandbox / US Dollar", false],
    ["MANA/USD", "Decentraland / US Dollar", false],
    ["AXS/USD", "Axie Infinity / US Dollar", false],
    ["CRV/USD", "Curve DAO / US Dollar", false],
    ["MKR/USD", "Maker / US Dollar", false],
    ["GRT/USD", "The Graph / US Dollar", false],
    ["FTM/USD", "Fantom / US Dollar", false],
    ["PEPE/USD", "Pepe / US Dollar", false],
    ["WIF/USD", "dogwifhat / US Dollar", false],
    ["BONK/USD", "Bonk / US Dollar", false],
    ["EOS/USD", "EOS / US Dollar", false],
    ["ZEC/USD", "Zcash / US Dollar", false]
];

function mapStandardPairRows(rows) {
    return rows.map(([symbol, name, hot]) => ({
        symbol,
        name,
        hot: !!hot
    }));
}

function mapOtcPairRows(rows) {
    return rows.map(([symbol, name, hot]) => ({
        symbol: symbol + " (OTC)",
        name: name + " (OTC)",
        hot: !!hot
    }));
}

const forexPairs = mapStandardPairRows(OTC_FOREX_ROWS);
const forexOtcPairs = mapOtcPairRows(OTC_FOREX_ROWS);
const cryptoOtcPairs = mapOtcPairRows(OTC_CRYPTO_ROWS);

const PAIR_MARKET_TOGGLE_ASSETS = ["forex", "crypto"];

const timeframes = ["5s", "10s", "15s", "30s", "1m", "3m", "5m", "15m", "30m"];

const TIMEFRAME_COOLDOWN_MS = {
    "5s": 5 * 1000,
    "10s": 10 * 1000,
    "15s": 15 * 1000,
    "30s": 30 * 1000,
    "1m": 60 * 1000,
    "3m": 3 * 60 * 1000,
    "5m": 5 * 60 * 1000,
    "15m": 15 * 60 * 1000,
    "30m": 30 * 60 * 1000
};

const ASSET_META = {
    forex: { titleKey: "pairs.forex.title", subKey: "pairs.forex.sub", labelKey: "asset.forex.title", defaultPair: "EUR/USD" },
    crypto: { titleKey: "pairs.crypto.title", subKey: "pairs.crypto.sub", labelKey: "asset.crypto.title", defaultPair: "BTC/USD" },
    stocks: { titleKey: "pairs.stocks.title", subKey: "pairs.stocks.sub", labelKey: "asset.stocks.title", defaultPair: "AAPL" }
};

const FLOW_SCREENS = ["assetScreen", "pairsScreen", "timeframeScreen", "signalScreen"];

const LEADERBOARD_PERIODS = {
    today: { labelKey: "lb.today" },
    week: { labelKey: "lb.week" },
    month: { labelKey: "lb.month" }
};

/** Shared leaderboard from backend — same for every user */
const leaderboardCache = {};
let leaderboardRequestId = 0;

async function apiGet(path) {
    const res = await fetch(API_BASE + path, {
        method: "GET",
        headers: { Accept: "application/json" }
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        const msg = data.detail || data.message || "API error " + res.status;
        throw new Error(typeof msg === "string" ? msg : JSON.stringify(msg));
    }
    return data;
}

async function fetchLeaderboard(period) {
    const key = period || "today";
    if (Array.isArray(leaderboardCache[key]) && leaderboardCache[key].length) {
        return leaderboardCache[key];
    }
    const data = await apiGet("/api/leaderboard?period=" + encodeURIComponent(key));
    const traders = Array.isArray(data.traders) ? data.traders : [];
    leaderboardCache[key] = traders;
    return traders;
}

let currentMethod = null;
let selectedAsset = "forex";
const pairMarketKind = { forex: "standard", crypto: "standard" };
let selectedPair = "EUR/USD";
let selectedTimeframe = "1m";
let screenshotTimeframe = "1m";
let currentSignal = null;
let screenshotFile = null;
let screenshotInitialized = false;
const pairCooldownUntil = Object.create(null);
let pairCooldownTimer = null;

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function getCooldownMsForTimeframe(tf) {
    return TIMEFRAME_COOLDOWN_MS[tf] ?? 60 * 1000;
}

function getPairMarketKind(asset = selectedAsset) {
    return pairMarketKind[asset] || "standard";
}

function setPairMarketKind(kind, asset = selectedAsset) {
    if (PAIR_MARKET_TOGGLE_ASSETS.includes(asset)) {
        pairMarketKind[asset] = kind;
    }
}

function getPairsForAsset(asset) {
    if (asset === "crypto") {
        return getPairMarketKind("crypto") === "otc" ? cryptoOtcPairs : cryptoPairs;
    }
    if (asset === "stocks") return stocksList;
    return getPairMarketKind("forex") === "otc" ? forexOtcPairs : forexPairs;
}

function syncSelectedPairWithCurrentList() {
    const pairs = getPairsForAsset(selectedAsset);
    if (!pairs.length) return;
    if (!pairs.some((p) => p.symbol === selectedPair)) {
        selectedPair = pairs[0].symbol;
    }
}

function updateMarketToggleUI() {
    const wrap = $("#marketKindToggle");
    if (!wrap) return;
    const show = PAIR_MARKET_TOGGLE_ASSETS.includes(selectedAsset);
    wrap.hidden = !show;
    if (!show) return;
    const kind = getPairMarketKind();
    wrap.querySelectorAll("[data-market-kind]").forEach((btn) => {
        const on = btn.dataset.marketKind === kind;
        btn.classList.toggle("active", on);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
}

function getAssetLabel() {
    const key = ASSET_META[selectedAsset]?.labelKey || "asset.forex.title";
    return t(key);
}

function isFlowScreen(screenId) {
    return FLOW_SCREENS.includes(screenId);
}

function showLoading(text) {
    const overlay = $("#loadingOverlay");
    const label = $("#loadingText");
    if (label) label.textContent = text || t("loading.market");
    if (overlay) {
        overlay.classList.add("show");
        overlay.setAttribute("aria-hidden", "false");
    }
}

function hideLoading() {
    const overlay = $("#loadingOverlay");
    if (overlay) {
        overlay.classList.remove("show");
        overlay.setAttribute("aria-hidden", "true");
    }
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getPairCooldownRemaining(pair = selectedPair) {
    const until = pairCooldownUntil[pair];
    if (!until) return 0;
    return Math.max(0, until - Date.now());
}

function isPairOnCooldown(pair = selectedPair) {
    return getPairCooldownRemaining(pair) > 0;
}

function markPairSignalUsed(pair = selectedPair, timeframe = selectedTimeframe) {
    const ms = getCooldownMsForTimeframe(timeframe);
    pairCooldownUntil[pair] = Date.now() + ms;
    updateSignalCooldownUI();
    ensurePairCooldownTimer();
}

function hasAnyPairCooldown() {
    return Object.keys(pairCooldownUntil).some((key) => {
        const until = pairCooldownUntil[key];
        return until && until > Date.now();
    });
}

function formatCooldownSeconds(totalSec) {
    const sec = Math.max(0, Math.ceil(totalSec));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m > 0 ? m + ":" + String(s).padStart(2, "0") : sec + "s";
}

function ensurePairCooldownTimer() {
    if (pairCooldownTimer || !hasAnyPairCooldown()) return;
    pairCooldownTimer = setInterval(() => {
        Object.keys(pairCooldownUntil).forEach((k) => {
            if (pairCooldownUntil[k] <= Date.now()) delete pairCooldownUntil[k];
        });
        const active = document.querySelector(".step-container.active");
        if (active?.id === "pairsScreen") renderPairsList();
        else updateSignalCooldownUI();
        if (!hasAnyPairCooldown()) {
            clearInterval(pairCooldownTimer);
            pairCooldownTimer = null;
        }
    }, 500);
}

function updateSignalCooldownUI() {
    const remaining = getPairCooldownRemaining();
    const waitText = t("signal.wait", { time: formatCooldownSeconds(remaining / 1000) });
    const onCooldown = remaining > 0;

    const genBtn = $("#generateSignalBtn");
    if (genBtn) {
        genBtn.disabled = onCooldown;
        genBtn.classList.toggle("is-cooldown", onCooldown);
        genBtn.textContent = onCooldown ? waitText : t("signal.generate");
    }

    const newBtn = $("#newSignalBtn");
    if (newBtn) {
        newBtn.disabled = onCooldown;
        newBtn.classList.toggle("is-cooldown", onCooldown);
        newBtn.innerHTML = onCooldown
            ? '<i class="fas fa-clock"></i> ' + waitText
            : '<i class="fas fa-rotate"></i> ' + t("signal.new");
    }
}

const FLAG_IMG_DIR = "img/";
const CRYPTO_FLAG_IMG_DIR = "img/crypto/";

const CRYPTO_FLAG_FILES = {
    BTC: "btc",
    ETH: "eth",
    SOL: "sol",
    XRP: "xrp",
    BNB: "bnb",
    LTC: "ltc",
    BCH: "bch",
    ADA: "ada",
    DOT: "dot",
    LINK: "link",
    UNI: "uni",
    AVAX: "avax",
    MATIC: "matic",
    DOGE: "doge",
    TRX: "trx",
    XLM: "xlm",
    ATOM: "atom",
    ETC: "etc",
    FIL: "fil",
    XMR: "xmr",
    AAVE: "aave",
    ALGO: "algo",
    SAND: "sand",
    MANA: "mana",
    CRV: "crv",
    MKR: "mkr",
    GRT: "grt",
    EOS: "eos",
    ZEC: "zec",
    NEAR: "generic",
    APT: "generic",
    ARB: "generic",
    OP: "generic",
    INJ: "generic",
    SUI: "generic",
    TON: "generic",
    SHIB: "generic",
    FTM: "generic",
    PEPE: "generic",
    WIF: "generic",
    BONK: "generic",
    AXS: "generic"
};

const CURRENCY_FLAG_CODES = {
    USD: "us",
    EUR: "eu",
    GBP: "gb",
    JPY: "jp",
    AUD: "au",
    CAD: "ca",
    NZD: "nz",
    CHF: "ch",
    SEK: "se",
    NOK: "no",
    DKK: "dk",
    PLN: "pl",
    CZK: "cz",
    HUF: "hu",
    TRY: "tr",
    ZAR: "za",
    MXN: "mx",
    SGD: "sg",
    THB: "th",
    HKD: "hk",
    INR: "in",
    KRW: "kr",
    CNH: "cn",
    CNY: "cn",
    BRL: "br",
    CLP: "cl",
    COP: "co",
    ARS: "ar",
    ILS: "il",
    RUB: "ru",
    IDR: "id",
    MYR: "my",
    PHP: "ph",
    VND: "vn"
};

function normalizePairSymbol(symbol) {
    return symbol.replace(/\s*\(OTC\)\s*$/i, "").trim();
}

function getCurrencyFlagCode(currency) {
    return CURRENCY_FLAG_CODES[String(currency || "").toUpperCase()] || null;
}

function getCryptoFlagFile(currency) {
    const key = String(currency || "").toUpperCase();
    if (CRYPTO_FLAG_FILES[key]) return CRYPTO_FLAG_FILES[key];
    return key.toLowerCase();
}

function resolvePairFlag(currency) {
    const fiat = getCurrencyFlagCode(currency);
    if (fiat) return { dir: FLAG_IMG_DIR, file: fiat };
    return { dir: CRYPTO_FLAG_IMG_DIR, file: getCryptoFlagFile(currency) };
}

function getPairMark(symbol) {
    const clean = normalizePairSymbol(symbol);
    const parts = clean.split("/");
    if (parts.length === 2) {
        return (parts[0].slice(0, 1) + parts[1].slice(0, 1)).toUpperCase();
    }
    return clean.slice(0, 2).toUpperCase();
}

function createPairFlagImg(currency) {
    const label = String(currency || "");
    const { dir, file } = resolvePairFlag(label);
    const img = document.createElement("img");
    img.className = "pair-card__flag" + (dir === CRYPTO_FLAG_IMG_DIR ? " pair-card__flag--crypto" : "");
    img.src = dir + file + ".svg";
    img.alt = label;
    img.loading = "lazy";
    img.decoding = "async";

    img.addEventListener("error", () => {
        if (dir === CRYPTO_FLAG_IMG_DIR && file !== "generic") {
            img.src = CRYPTO_FLAG_IMG_DIR + "generic.svg";
            img.classList.add("pair-card__flag--crypto");
            return;
        }
        img.replaceWith(createPairMarkFallback(label));
    });

    return img;
}

function hasPairFlagIcon(currency) {
    const key = String(currency || "").toUpperCase();
    if (getCurrencyFlagCode(key)) return true;
    if (CRYPTO_FLAG_FILES[key]) return true;
    return /^[A-Z0-9]{2,12}$/.test(key) && key !== "XAU" && key !== "XAG";
}

function createPairMarkFallback(label) {
    const el = document.createElement("span");
    el.className = "pair-card__mark-fallback";
    el.textContent = String(label || "??").slice(0, 2).toUpperCase();
    el.setAttribute("aria-hidden", "true");
    return el;
}

function fillPairMark(markEl, symbol) {
    markEl.textContent = "";
    markEl.classList.remove("pair-card__mark--flags", "pair-card__mark--text");

    const clean = normalizePairSymbol(symbol);
    const slash = clean.indexOf("/");

    if (slash === -1) {
        markEl.classList.add("pair-card__mark--text");
        markEl.textContent = getPairMark(symbol);
        return;
    }

    const base = clean.slice(0, slash);
    const quote = clean.slice(slash + 1);
    const baseHasIcon = hasPairFlagIcon(base);
    const quoteHasIcon = hasPairFlagIcon(quote);

    if (!baseHasIcon && !quoteHasIcon) {
        markEl.classList.add("pair-card__mark--text");
        markEl.textContent = getPairMark(symbol);
        return;
    }

    markEl.classList.add("pair-card__mark--flags");
    markEl.appendChild(baseHasIcon ? createPairFlagImg(base) : createPairMarkFallback(base));
    markEl.appendChild(quoteHasIcon ? createPairFlagImg(quote) : createPairMarkFallback(quote));
}

function updatePairsScreenHeader() {
    const meta = ASSET_META[selectedAsset];
    const titleEl = $("#pairsScreenTitle");
    const subEl = $("#pairsScreenSubtitle");
    const countEl = $("#pairsCount");
    const pairs = getPairsForAsset(selectedAsset);
    if (titleEl) titleEl.textContent = t(meta.titleKey);
    if (subEl) {
        if (selectedAsset === "forex") {
            subEl.textContent =
                getPairMarketKind("forex") === "otc" ? t("pairs.forex.subOtc") : t("pairs.forex.subStd");
        } else if (selectedAsset === "crypto") {
            subEl.textContent =
                getPairMarketKind("crypto") === "otc" ? t("pairs.crypto.subOtc") : t("pairs.crypto.subStd");
        } else {
            subEl.textContent = t(meta.subKey);
        }
    }
    if (countEl) countEl.textContent = t("pairs.available", { n: pairs.length });
}

function updateAssetCards() {
    $$(".asset-card").forEach((card) => {
        card.classList.toggle("selected", card.dataset.asset === selectedAsset);
    });
}

function setBottomNavVisible(visible) {
    const nav = $("#bottomNav");
    if (nav) nav.classList.toggle("hidden", !visible);
}

function showScreen(screenId) {
    $$(".step-container").forEach((el) => el.classList.remove("active"));
    const screen = document.getElementById(screenId);
    if (screen) screen.classList.add("active");

    setBottomNavVisible(true);
    updateBottomNav(screenId);

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateBottomNav(screenId) {
    const navMap = {
        homeScreen: "signals",
        educationScreen: "education",
        leadersScreen: "leaders",
        faqScreen: "faq",
        screenshotScreen: "signals"
    };
    const activeNav = navMap[screenId] || "signals";
    $$(".nav-item").forEach((item) => {
        item.classList.toggle("active", item.dataset.nav === activeNav);
    });
}

function showHome() {
    currentMethod = null;
    showScreen("homeScreen");
}

function showAssetScreen() {
    updateAssetCards();
    showScreen("assetScreen");
}

function showPairsScreen() {
    updateMarketToggleUI();
    syncSelectedPairWithCurrentList();
    updatePairsScreenHeader();
    renderPairsList();
    showScreen("pairsScreen");
}

function showTimeframeScreen() {
    renderTimeframes();
    updateSignalCooldownUI();
    ensurePairCooldownTimer();
    showScreen("timeframeScreen");
}

const FLOW_BACK_ROUTES = {
    home: showHome,
    asset: showAssetScreen,
    pairs: showPairsScreen,
    timeframe: showTimeframeScreen
};

function handleFlowBack(target) {
    const navigate = FLOW_BACK_ROUTES[target];
    if (navigate) navigate();
}

async function showSignalScreen() {
    if (isPairOnCooldown()) {
        updateSignalCooldownUI();
        ensurePairCooldownTimer();
        return;
    }

    showLoading(t("loading.generating"));
    await delay(900);
    currentSignal = await createSignalWithQuote();
    markPairSignalUsed(selectedPair, selectedTimeframe);
    renderSignal();
    hideLoading();
    showScreen("signalScreen");
    updateSignalCooldownUI();
    startSignalCheckTimer();
}

function showScreenshotScreen() {
    showScreen("screenshotScreen");
    const hasResult = Boolean($("#screenshotResult")?.innerHTML.trim());
    renderScreenshotTimeframes();
    setScreenshotHubVisible(!screenshotFile && !hasResult);
    setScreenshotUploadVisible(!hasResult);
    setScreenshotBackVisible(!hasResult);
    setScreenshotTimeframeVisible(Boolean(screenshotFile) && !hasResult);
    if (!screenshotInitialized) setupScreenshot();
}

function showEducationScreen() {
    renderEducation("all");
    showScreen("educationScreen");
}

function showLeadersScreen() {
    const activeTab = document.querySelector("#lbTabs .lb-tab.active");
    const period = activeTab?.dataset.period || "today";
    renderLeaderboard(period);
    showScreen("leadersScreen");
}

function showFaqScreen() {
    renderFaq();
    showScreen("faqScreen");
}

function createPairElement(pair) {
    const item = document.createElement("article");
    item.className = "pair-card" + (pair.symbol === selectedPair ? " is-selected" : "");
    item.dataset.symbol = pair.symbol;

    const mark = document.createElement("span");
    mark.className = "pair-card__mark";
    fillPairMark(mark, pair.symbol);

    const body = document.createElement("span");
    body.className = "pair-card__body";

    const row = document.createElement("span");
    row.className = "pair-card__row";

    const sym = document.createElement("span");
    sym.className = "pair-card__symbol";
    sym.textContent = pair.symbol;

    row.appendChild(sym);

    if (pair.hot) {
        const badge = document.createElement("span");
        badge.className = "pair-card__hot";
        badge.textContent = t("pairs.hot");
        row.appendChild(badge);
    }

    const name = document.createElement("span");
    name.className = "pair-card__name";
    name.textContent = pair.name;

    body.appendChild(row);
    body.appendChild(name);

    const check = document.createElement("span");
    check.className = "pair-card__check";
    check.innerHTML = '<i class="fas fa-check"></i>';

    item.appendChild(mark);
    item.appendChild(body);
    item.appendChild(check);

    item.addEventListener("click", () => {
        selectedPair = pair.symbol;
        $$(".pair-card").forEach((card) => {
            card.classList.toggle("is-selected", card.dataset.symbol === selectedPair);
        });
        showTimeframeScreen();
    });

    return item;
}

function renderPairsList() {
    const container = $("#pairsList");
    if (!container) return;

    const pairs = getPairsForAsset(selectedAsset);
    const searchValue = ($("#searchPairsInput")?.value || "").toLowerCase();
    const filtered = pairs.filter(
        (p) =>
            p.symbol.toLowerCase().includes(searchValue) ||
            p.name.toLowerCase().includes(searchValue)
    );

    container.innerHTML = "";

    if (!filtered.length) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.innerHTML = '<i class="fas fa-search"></i><p>' + t("pairs.none") + "</p>";
        container.appendChild(empty);
        return;
    }

    const countEl = $("#pairsCount");
    if (countEl) {
        countEl.textContent =
            filtered.length === pairs.length
                ? t("pairs.available", { n: filtered.length })
                : filtered.length + " / " + pairs.length;
    }

    filtered.forEach((pair) => container.appendChild(createPairElement(pair)));
    if (hasAnyPairCooldown()) ensurePairCooldownTimer();
}

function updateTimeframeScreenSub() {
    const el = $("#timeframeScreenSub");
    if (el) el.textContent = t("tf.sub", { pair: selectedPair });
}

const TIMEFRAME_GROUPS = [
    { labelKey: "tf.seconds", items: ["5s", "10s", "15s", "30s"] },
    { labelKey: "tf.minutes", items: ["1m", "3m", "5m", "15m", "30m"] }
];

/** Только минуты (акции + режим «Биржа/Stock»; секунды — только OTC). */
const MINUTES_ONLY_TIMEFRAME_GROUPS = [
    { labelKey: "tf.minutes", items: ["1m", "3m", "5m", "15m", "30m"] }
];

const SECOND_TIMEFRAMES = new Set(["5s", "10s", "15s", "30s"]);
const MINUTES_ONLY_TF = new Set(["1m", "3m", "5m", "15m", "30m"]);

/** Секунды только у Forex/Crypto OTC. Stocks и Биржа (standard) — минуты. */
function usesMinutesOnlyTimeframes(asset = selectedAsset) {
    if (asset === "stocks") return true;
    if (PAIR_MARKET_TOGGLE_ASSETS.includes(asset) && getPairMarketKind(asset) === "standard") {
        return true;
    }
    return false;
}

function getTimeframeGroupsForAsset(asset = selectedAsset) {
    if (usesMinutesOnlyTimeframes(asset)) {
        return MINUTES_ONLY_TIMEFRAME_GROUPS.map((g) => ({
            labelKey: g.labelKey,
            items: g.items.slice()
        }));
    }
    return TIMEFRAME_GROUPS;
}

function ensureValidTimeframeForAsset(asset = selectedAsset) {
    if (!usesMinutesOnlyTimeframes(asset)) return;
    if (!MINUTES_ONLY_TF.has(selectedTimeframe)) {
        selectedTimeframe = "1m";
    }
}

function createTimeframeChip(tf, selected, onSelect) {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "tf-chip" + (selected === tf ? " is-selected" : "");
    el.dataset.tf = tf;
    el.textContent = tf;
    el.addEventListener("click", () => onSelect(tf));
    return el;
}

function renderTimeframePanel(container, selected, onSelect, groups = TIMEFRAME_GROUPS) {
    if (!container) return;
    container.innerHTML = "";
    const minutesOnly = usesMinutesOnlyTimeframes();

    groups.forEach((group) => {
        const items = (group.items || []).filter((tf) => {
            if (minutesOnly && SECOND_TIMEFRAMES.has(tf)) return false;
            return true;
        });
        if (!items.length) return;

        const section = document.createElement("section");
        section.className = "tf-group";

        const label = document.createElement("p");
        label.className = "tf-group__label";
        label.textContent = t(group.labelKey);

        const grid = document.createElement("div");
        grid.className = "tf-grid";
        items.forEach((tf) => grid.appendChild(createTimeframeChip(tf, selected, onSelect)));

        section.appendChild(label);
        section.appendChild(grid);
        container.appendChild(section);
    });
}

function renderTimeframes() {
    const container = $("#timeframeSelector");
    if (!container) return;

    ensureValidTimeframeForAsset();
    updateTimeframeScreenSub();
    const groups = getTimeframeGroupsForAsset(selectedAsset);
    const minutesOnly = usesMinutesOnlyTimeframes();
    renderTimeframePanel(container, selectedTimeframe, (tf) => {
        if (minutesOnly && SECOND_TIMEFRAMES.has(tf)) return;
        selectedTimeframe = tf;
        renderTimeframes();
        updateSignalCooldownUI();
    }, groups);
}

function renderScreenshotTimeframes() {
    renderTimeframePanel($("#screenshotTimeframeSelector"), screenshotTimeframe, (tf) => {
        screenshotTimeframe = tf;
        renderScreenshotTimeframes();
    });
}

const SIGNAL_INDICATOR_KEYS = ["rsi", "macd", "ema", "bb", "stoch", "volume", "atr", "adx"];

function pickRandomItems(arr, count) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, count);
}

function isPairOtc(symbol = selectedPair) {
    return /\(\s*OTC\s*\)$/i.test(symbol || "");
}

function getTelegramUserId() {
    const id = window.Telegram?.WebApp?.initDataUnsafe?.user?.id;
    return id ? Number(id) : null;
}

function getTelegramInitData() {
    return window.Telegram?.WebApp?.initData || "";
}

function timeframeToMs(tf) {
    return getCooldownMsForTimeframe(tf);
}

function formatCountdown(ms) {
    const total = Math.max(0, Math.ceil(ms / 1000));
    const m = Math.floor(total / 60);
    const s = total % 60;
    return m > 0 ? m + ":" + String(s).padStart(2, "0") : String(s) + "s";
}

async function apiPost(path, body) {
    const res = await fetch(API_BASE + path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        const msg = data.detail || data.message || "API error " + res.status;
        throw new Error(typeof msg === "string" ? msg : JSON.stringify(msg));
    }
    return data;
}

async function fetchEntryQuote(pair, asset) {
    const telegramId = getTelegramUserId();
    return apiPost("/api/quote", {
        pair,
        asset,
        telegram_id: telegramId || undefined,
        init_data: getTelegramInitData() || undefined
    });
}

const ACCESS_TIER_KEY = "moget_access_tier";

function normalizeSupportUrl(raw) {
    let u = String(raw || "").trim();
    if (!u) return "";
    if (u.startsWith("http://t.me/")) u = "https://t.me/" + u.slice("http://t.me/".length);
    return u;
}

/** Support link from bot (?support=) → session → /api/config → fallback. */
function getSupportUrl() {
    try {
        const params = new URLSearchParams(location.search || "");
        const fromUrl = normalizeSupportUrl(params.get("support") || "");
        if (fromUrl) {
            sessionStorage.setItem(SUPPORT_URL_KEY, fromUrl);
            supportTelegramUrl = fromUrl;
            return fromUrl;
        }
        const stored = normalizeSupportUrl(sessionStorage.getItem(SUPPORT_URL_KEY) || "");
        if (stored) {
            supportTelegramUrl = stored;
            return stored;
        }
    } catch (_) {
        /* private mode */
    }
    return normalizeSupportUrl(supportTelegramUrl) || SUPPORT_TELEGRAM_URL_FALLBACK;
}

async function loadSupportUrlFromApi() {
    try {
        const data = await apiGet("/api/config");
        const fromApi = normalizeSupportUrl(data && data.support_url);
        if (!fromApi) return;
        supportTelegramUrl = fromApi;
        try {
            sessionStorage.setItem(SUPPORT_URL_KEY, fromApi);
        } catch (_) {
            /* ignore */
        }
    } catch (_) {
        /* offline / old backend */
    }
}

/** START | platinum — from bot WebApp URL (?tier=) or stored session. */
function getAccessTier() {
    try {
        const params = new URLSearchParams(location.search || "");
        const fromUrl = (params.get("tier") || "").toLowerCase().trim();
        if (fromUrl === "platinum" || fromUrl === "vip") {
            sessionStorage.setItem(ACCESS_TIER_KEY, "platinum");
            return "platinum";
        }
        if (fromUrl === "start" || fromUrl === "basic") {
            sessionStorage.setItem(ACCESS_TIER_KEY, "start");
            return "start";
        }
        const stored = (sessionStorage.getItem(ACCESS_TIER_KEY) || "").toLowerCase();
        if (stored === "platinum") return "platinum";
    } catch (_) {
        /* private mode */
    }
    return "start";
}

function isPlatinumAccess() {
    return getAccessTier() === "platinum";
}

/** START: 58–67%, PLATINUM: 77–89% */
function randomConfidenceForTier() {
    if (isPlatinumAccess()) {
        return Math.floor(Math.random() * 13) + 77;
    }
    return Math.floor(Math.random() * 10) + 58;
}

function generateRandomSignal() {
    const direction = Math.random() > 0.5 ? "up" : "down";
    const patterns = getSignalPatterns();
    const reasons = getSignalReasons();
    const upTrends = ["bullish", "strongBull", "moderateBull"];
    const downTrends = ["bearish", "strongBear", "moderateBear"];
    const upMomentum = ["high", "building", "steady"];
    const downMomentum = ["fading", "weak", "steady"];
    const indicatorCount = 3;
    const otc = isPairOtc(selectedPair);

    return {
        direction,
        pattern: patterns[Math.floor(Math.random() * patterns.length)],
        reason: reasons[Math.floor(Math.random() * reasons.length)],
        confidence: randomConfidenceForTier(),
        accessTier: getAccessTier(),
        trendKey: pickRandomItems(direction === "up" ? upTrends : downTrends, 1)[0],
        momentumKey: pickRandomItems(direction === "up" ? upMomentum : downMomentum, 1)[0],
        indicatorKeys: pickRandomItems(SIGNAL_INDICATOR_KEYS, indicatorCount),
        pair: selectedPair,
        asset: selectedAsset,
        timeframe: selectedTimeframe,
        isOtc: otc,
        generatedAt: Date.now(),
        entryPrice: null,
        checkResult: null,
        checkError: null
    };
}

async function createSignalWithQuote() {
    signalCheckInFlight = false;
    clearSignalCheckTimer();
    const signal = generateRandomSignal();
    if (!signal.isOtc) {
        try {
            const quote = await fetchEntryQuote(signal.pair, signal.asset);
            signal.entryPrice = quote.price;
            signal.yahooSymbol = quote.yahoo_symbol;
        } catch (err) {
            signal.quoteError = err.message || "quote failed";
        }
    }
    return signal;
}

function getSignalIndicatorsChipsHtml(keys) {
    return keys
        .map((key) => '<span class="scan-result__chip">' + t("signal.ind." + key) + "</span>")
        .join("");
}

function getVerdictStepArrowHtml(isUp) {
    const label = isUp ? t("signal.bullish") : t("signal.bearish");
    const path = isUp
        ? "M8 24 L22 10 L14 10 L22 10 L22 17"
        : "M8 8 L22 22 L14 22 L22 22 L22 15";
    return (
        '<span class="scan-result__verdict" aria-label="' +
        label +
        '" title="' +
        label +
        '"><svg class="scan-result__arrow" viewBox="0 0 32 32" aria-hidden="true">' +
        '<path class="scan-result__arrow-path" d="' +
        path +
        '"/></svg></span>'
    );
}

function buildScanResultHtml(signal, options = {}) {
    const screenshot = Boolean(options.screenshot);
    const timeframe = screenshot ? options.timeframe || screenshotTimeframe : selectedTimeframe;
    const isUp = signal.direction === "up";
    const mod = isUp ? "up" : "down";
    const trendKey = signal.trendKey || (isUp ? "bullish" : "bearish");
    const momentumKey = signal.momentumKey || "steady";
    const indicatorKeys = signal.indicatorKeys || SIGNAL_INDICATOR_KEYS.slice(0, 3);
    let factsHtml =
        "<dt>" +
        t("signal.timeframe") +
        "</dt><dd>" +
        timeframe +
        "</dd>" +
        "<dt>" +
        t("signal.pattern") +
        "</dt><dd>" +
        signal.pattern +
        "</dd>" +
        "<dt>" +
        t("signal.trend") +
        '</dt><dd class="scan-result__trend scan-result__trend--' +
        mod +
        '">' +
        t("signal.trend." + trendKey) +
        "</dd>" +
        "<dt>" +
        t("signal.momentum") +
        "</dt><dd>" +
        t("signal.momentum." + momentumKey) +
        "</dd>";

    const indicatorsBlockHtml =
        '<div class="scan-result__indicators-row">' +
        '<span class="scan-result__indicators-label">' +
        t("signal.indicators") +
        "</span>" +
        '<span class="scan-result__chips">' +
        getSignalIndicatorsChipsHtml(indicatorKeys) +
        "</span></div>";

    const indicatorNames = indicatorKeys.map((key) => t("signal.ind." + key)).join(", ");
    const detailHtml =
        '<p class="scan-result__detail">' +
        t("signal.detail", {
            indicators: indicatorNames,
            trend: t("signal.trend." + trendKey),
            direction: isUp ? t("signal.up") : t("signal.down")
        }) +
        "</p>";

    const pairLineHtml = screenshot
        ? ""
        : '<p class="scan-result__pair-line"><span class="scan-result__pair-label">' + t("signal.pair") + "</span> " +
          selectedPair +
          "</p>";

    const hasResult = signal.checkResult === "win" || signal.checkResult === "lose";
    const isWin = signal.checkResult === "win";
    const resultMod = hasResult ? " scan-result--" + signal.checkResult : "";

    let bannerHtml;
    if (hasResult) {
        bannerHtml =
            '<header class="scan-result__banner">' +
            '<span class="scan-result__verdict" aria-hidden="true">' +
            (isWin ? '<i class="fas fa-check"></i>' : '<i class="fas fa-xmark"></i>') +
            "</span>" +
            '<p class="scan-result__signal-text">' +
            t("signal.yourIs") +
            ' <span class="scan-result__signal-dir">' +
            (isWin ? t("signal.win") : t("signal.lose")) +
            "</span></p></header>";
    } else {
        bannerHtml =
            '<header class="scan-result__banner">' +
            getVerdictStepArrowHtml(isUp) +
            '<p class="scan-result__signal-text">' +
            t("signal.yourIs") +
            ' <span class="scan-result__signal-dir">' +
            (isUp ? t("signal.up") : t("signal.down")) +
            "</span></p></header>";
    }

    let resultMetaHtml = "";
    if (hasResult && !screenshot && signal.isOtc) {
        resultMetaHtml = '<p class="scan-result__check-meta">' + t("signal.otcMode") + "</p>";
    }

    return (
        '<article class="scan-result scan-result--' +
        mod +
        resultMod +
        '">' +
        '<div class="shine-border" aria-hidden="true" style="--duration:10s"></div>' +
        bannerHtml +
        '<div class="scan-result__body">' +
        pairLineHtml +
        resultMetaHtml +
        '<div class="scan-result__row">' +
        '<span class="scan-result__label">' + t("signal.confidence") + "</span>" +
        '<span class="scan-result__track" aria-hidden="true"><i style="width:' +
        signal.confidence +
        '%"></i></span>' +
        '<span class="scan-result__value">' +
        signal.confidence +
        "%</span></div>" +
        '<dl class="scan-result__facts">' +
        factsHtml +
        "</dl>" +
        indicatorsBlockHtml +
        '<p class="scan-result__insight">' +
        signal.reason +
        "</p>" +
        detailHtml +
        "</div></article>"
    );
}

let signalCheckTimer = null;
let signalCheckInFlight = false;

function clearSignalCheckTimer() {
    if (signalCheckTimer) {
        clearTimeout(signalCheckTimer);
        signalCheckTimer = null;
    }
}

function startSignalCheckTimer() {
    clearSignalCheckTimer();
    if (!currentSignal || currentSignal.checkResult || currentSignal.checking) return;

    const expiresAt =
        (currentSignal.generatedAt || Date.now()) +
        timeframeToMs(currentSignal.timeframe || selectedTimeframe);
    const delayMs = Math.max(0, expiresAt - Date.now());

    signalCheckTimer = setTimeout(() => {
        signalCheckTimer = null;
        checkTradeResult();
    }, delayMs);
}

async function checkTradeResult() {
    if (!currentSignal || currentSignal.checkResult || signalCheckInFlight) return;

    const expiresAt =
        (currentSignal.generatedAt || Date.now()) +
        timeframeToMs(currentSignal.timeframe || selectedTimeframe);
    if (Date.now() < expiresAt) {
        startSignalCheckTimer();
        return;
    }

    signalCheckInFlight = true;
    currentSignal.checking = true;
    currentSignal.checkError = null;

    const uid = getTelegramUserId() || 1;

    try {
        if (!currentSignal.isOtc && (currentSignal.entryPrice == null || currentSignal.entryPrice <= 0)) {
            const quote = await fetchEntryQuote(
                currentSignal.pair || selectedPair,
                currentSignal.asset || selectedAsset
            );
            currentSignal.entryPrice = quote.price;
        }

        const data = await apiPost("/api/check", {
            pair: currentSignal.pair || selectedPair,
            asset: currentSignal.asset || selectedAsset,
            direction: currentSignal.direction,
            timeframe: currentSignal.timeframe || selectedTimeframe,
            is_otc: Boolean(currentSignal.isOtc),
            telegram_id: uid,
            generated_at: currentSignal.generatedAt,
            entry_price: currentSignal.isOtc ? null : currentSignal.entryPrice,
            init_data: getTelegramInitData() || undefined
        });

        currentSignal.checkResult = data.result;
        currentSignal.exitPrice = data.exit_price;
        currentSignal.changePct = data.change_pct;
        currentSignal.checkError = null;
        if (data.entry_price != null) currentSignal.entryPrice = data.entry_price;
    } catch (err) {
        // Локально без API (file:// / backend down): OTC — локальный win/lose, иначе ретрай
        if (currentSignal.isOtc) {
            const seed = String(uid) + "|" + (currentSignal.pair || "") + "|" + (currentSignal.generatedAt || 0);
            let h = 0;
            for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
            currentSignal.checkResult = Math.abs(h) % 100 < 60 ? "win" : "lose";
            currentSignal.checkError = null;
        } else {
            currentSignal.checkError = err.message || t("signal.checkFailed");
            setTimeout(() => {
                if (currentSignal && !currentSignal.checkResult) checkTradeResult();
            }, 2500);
        }
    } finally {
        currentSignal.checking = false;
        signalCheckInFlight = false;
        clearSignalCheckTimer();
        renderSignal();
    }
}

function buildSignalCardHtml(signal, options) {
    return buildScanResultHtml(signal, options);
}

function renderSignal() {
    if (!currentSignal) currentSignal = generateRandomSignal();
    const el = $("#signalContent");
    if (el) {
        el.innerHTML = buildSignalCardHtml(currentSignal, { screenshot: false });
    }
}

async function newSignal() {
    if (isPairOnCooldown()) {
        updateSignalCooldownUI();
        ensurePairCooldownTimer();
        return;
    }

    const newBtn = $("#newSignalBtn");
    if (newBtn?.dataset.generating === "1") return;

    if (newBtn) newBtn.dataset.generating = "1";

    showLoading(t("loading.generating"));
    await delay(900);
    currentSignal = await createSignalWithQuote();
    markPairSignalUsed(selectedPair, selectedTimeframe);
    renderSignal();
    hideLoading();

    if (newBtn) delete newBtn.dataset.generating;

    updateSignalCooldownUI();
    startSignalCheckTimer();
}

function setScreenshotHubVisible(visible) {
    const hub = $("#screenshotHub");
    if (hub) hub.hidden = !visible;
}

function setScreenshotUploadVisible(visible) {
    const panel = $("#screenshotUpload");
    if (panel) panel.hidden = !visible;
}

function setScreenshotBackVisible(visible) {
    const btn = $("#screenshotBackBtn");
    if (btn) btn.hidden = !visible;
}

function setScreenshotTimeframeVisible(visible) {
    const wrap = $("#screenshotTimeframeWrap");
    if (wrap) wrap.hidden = !visible;
}

function getScreenshotResultActionsHtml() {
    return (
        '<div class="screenshot-result-actions">' +
        '<button type="button" class="btn-secondary" data-screenshot-back>' +
        '<i class="fas fa-arrow-left"></i> ' + t("btn.backSignals") + "</button>" +
        '<button type="button" class="btn-secondary screenshot-result__reset" data-screenshot-reset>' + t("shot.new") + "</button>" +
        "</div>"
    );
}

function resetScreenshotUI() {
    screenshotFile = null;
    const uploadArea = $("#uploadArea");
    const placeholder = $("#uploadPlaceholder");
    const actions = $("#screenshotActions");
    const result = $("#screenshotResult");
    const fileInput = $("#fileInput");

    if (uploadArea) {
        uploadArea.classList.remove("has-image");
        const img = uploadArea.querySelector("img");
        if (img) img.remove();
    }
    if (placeholder) placeholder.style.display = "";
    if (actions) actions.hidden = true;
    if (result) result.innerHTML = "";
    if (fileInput) fileInput.value = "";
    setScreenshotHubVisible(true);
    setScreenshotUploadVisible(true);
    setScreenshotBackVisible(true);
    setScreenshotTimeframeVisible(false);
}

function showScreenshotPreview(file) {
    if (!file || !file.type.startsWith("image/")) return;
    if (file.size > 10 * 1024 * 1024) {
        alert(t("shot.fileLarge"));
        return;
    }

    screenshotFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
        const uploadArea = $("#uploadArea");
        const placeholder = $("#uploadPlaceholder");
        const actions = $("#screenshotActions");
        if (!uploadArea) return;

        let img = uploadArea.querySelector("img");
        if (!img) {
            img = document.createElement("img");
            img.alt = "Chart preview";
            uploadArea.appendChild(img);
        }
        img.src = e.target.result;
        uploadArea.classList.add("has-image");
        if (placeholder) placeholder.style.display = "none";
        if (actions) actions.hidden = false;
        $("#screenshotResult").innerHTML = "";
        setScreenshotHubVisible(false);
        setScreenshotUploadVisible(true);
        setScreenshotTimeframeVisible(true);
        renderScreenshotTimeframes();
    };
    reader.readAsDataURL(file);
}

function setupScreenshot() {
    screenshotInitialized = true;
    const uploadArea = $("#uploadArea");
    const fileInput = $("#fileInput");

    uploadArea?.addEventListener("click", (e) => {
        if (e.target.closest("#screenshotActions, #screenshotBackBtn, #screenshotTimeframeWrap")) return;
        fileInput?.click();
    });

    fileInput?.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) showScreenshotPreview(file);
    });

    uploadArea?.addEventListener("dragover", (e) => {
        e.preventDefault();
        uploadArea.classList.add("dragover");
    });

    uploadArea?.addEventListener("dragleave", () => {
        uploadArea.classList.remove("dragover");
    });

    uploadArea?.addEventListener("drop", (e) => {
        e.preventDefault();
        uploadArea.classList.remove("dragover");
        const file = e.dataTransfer.files[0];
        if (file) showScreenshotPreview(file);
    });

    $("#clearScreenshotBtn")?.addEventListener("click", (e) => {
        e.stopPropagation();
        resetScreenshotUI();
    });

    $("#analyzeScreenshotBtn")?.addEventListener("click", async (e) => {
        e.stopPropagation();
        if (!screenshotFile) return;
        showLoading(t("loading.chart"));
        await delay(1200);
        const signal = generateRandomSignal();
        const result = $("#screenshotResult");
        if (result) {
            result.innerHTML =
                buildSignalCardHtml(signal, { screenshot: true, timeframe: screenshotTimeframe }) +
                getScreenshotResultActionsHtml();
            setScreenshotUploadVisible(false);
            setScreenshotHubVisible(false);
            setScreenshotBackVisible(false);
        }
        hideLoading();
    });

    $("#screenshotBackBtn")?.addEventListener("click", () => {
        resetScreenshotUI();
        showHome();
    });

    $("#screenshotResult")?.addEventListener("click", (e) => {
        if (e.target.closest("[data-screenshot-back]")) {
            resetScreenshotUI();
            showHome();
            return;
        }
        if (e.target.closest("[data-screenshot-reset]")) resetScreenshotUI();
    });
}

function renderEducation(category) {
    const catKey = category === "all" ? "all" : category;
    const meta = {
        label: t("edu.meta." + catKey + ".label"),
        subtitle: t("edu.meta." + catKey + ".sub")
    };
    const allLessons = getEducationLessons();
    const lessons = category === "all" ? allLessons : allLessons.filter((l) => l.cat === category);
    const container = $("#educationList");
    if (!container) return;

    const head =
        '<div class="education-head">' +
        '<div><p class="education-head__label">' + t("edu.hub") + "</p>" +
        '<p class="education-head__title">' + meta.label + "</p>" +
        '<p class="education-head__subtitle">' + meta.subtitle + "</p></div>" +
        '<div class="education-head__stat">' + lessons.length + " " + (lessons.length === 1 ? t("edu.lesson") : t("edu.lessons")) + "</div></div>";

    const stack =
        lessons.length === 0
            ? '<p class="edu-empty">' + t("edu.empty") + "</p>"
            : '<div class="edu-stack">' +
              lessons
                  .map((lesson, index) => {
                      const num = String(index + 1).padStart(2, "0");
                      const tag = t("edu.cat." + lesson.cat) || lesson.cat;
                      return (
                          '<article class="edu-lesson edu-lesson--' + lesson.cat + '">' +
                          '<button type="button" class="edu-lesson__trigger" aria-expanded="false">' +
                          '<span class="edu-lesson__icon"><i class="fas ' + lesson.icon + '"></i></span>' +
                          '<span class="edu-lesson__body">' +
                          '<span class="edu-lesson__meta">' +
                          '<span class="edu-lesson__tag">' + tag + "</span>" +
                          "</span>" +
                          '<span class="edu-lesson__title">' + lesson.title + "</span>" +
                          "</span>" +
                          '<span class="edu-lesson__num">' + num + "</span>" +
                          '<span class="edu-lesson__chevron" aria-hidden="true"><i class="fas fa-chevron-down"></i></span>' +
                          "</button>" +
                          '<div class="edu-lesson__content">' +
                          '<div class="edu-lesson__content-inner"><p>' + lesson.desc + "</p></div>" +
                          "</div></article>"
                      );
                  })
                  .join("") +
              "</div>";

    container.innerHTML = head + stack;
}

function formatProfit(value) {
    return "+$" + Number(value).toFixed(2) + "k";
}

function paintLeaderboard(period, data) {
    const config = LEADERBOARD_PERIODS[period] || LEADERBOARD_PERIODS.today;
    const container = $("#leaderboardList");
    if (!container) return;

    const medals = ["1", "2", "3"];
    const topProfit = data[0]?.profit || 0;

    const head =
        '<div class="leaderboard-head">' +
        '<div><p class="leaderboard-head__label">' + t("lb.head") + "</p>" +
        '<p class="leaderboard-head__period">' + t(config.labelKey) + "</p></div>" +
        '<div class="leaderboard-head__badge">' + t("lb.active", { n: data.length }) + "</div></div>";

    const podiumOrder = [1, 0, 2];
    const podiumHtml = podiumOrder
        .map((idx) => {
            const trader = data[idx];
            if (!trader) return "";
            const place = idx + 1;
            const extra = place === 1 ? " leader-podium__item--first" : "";
            return (
                '<article class="leader-podium__item' + extra + " leader-podium__item--p" + place + '">' +
                '<span class="leader-podium__medal">' + medals[idx] + "</span>" +
                '<span class="leader-podium__id">' + trader.id + "</span>" +
                '<span class="leader-podium__profit">' + formatProfit(trader.profit) + "</span>" +
                '<span class="leader-podium__trades">' + trader.trades + " " + t("lb.trades") + "</span>" +
                "</article>"
            );
        })
        .join("");

    const podium = '<div class="leaderboard-podium">' + podiumHtml + "</div>";

    const list =
        '<div class="leaderboard-list">' +
        data
            .map((trader, idx) => {
                const rank = idx + 1;
                const isTop = idx < 3;
                const rankLabel = String(rank);
                const progress = topProfit > 0 ? Math.max(12, Math.round((trader.profit / topProfit) * 100)) : 0;
                return (
                    '<article class="leader-card' +
                    (isTop ? " leader-card--top leader-card--rank-" + rank : "") +
                    '">' +
                    '<div class="leader-card__rank">' + rankLabel + "</div>" +
                    '<div class="leader-card__main">' +
                    '<div class="leader-card__row">' +
                    '<span class="leader-card__id">' + trader.id + "</span>" +
                    '<span class="leader-card__profit">' + formatProfit(trader.profit) + "</span>" +
                    "</div>" +
                    '<div class="leader-card__meta">' +
                    "<span>" + trader.trades + " " + t("lb.trades") + "</span>" +
                    '<span class="leader-card__bar"><i style="width:' + progress + '%"></i></span>' +
                    "</div></div></article>"
                );
            })
            .join("") +
        "</div>";

    container.innerHTML = head + podium + list;
}

async function renderLeaderboard(period) {
    const key = period || "today";
    const container = $("#leaderboardList");
    if (!container) return;

    const reqId = ++leaderboardRequestId;
    const cached = leaderboardCache[key];
    if (!Array.isArray(cached) || !cached.length) {
        container.innerHTML =
            '<p class="leaderboard-status">' + t("lb.loading") + "</p>";
    }

    try {
        const data = await fetchLeaderboard(key);
        if (reqId !== leaderboardRequestId) return;
        paintLeaderboard(key, data);
    } catch (err) {
        if (reqId !== leaderboardRequestId) return;
        if (Array.isArray(cached) && cached.length) {
            paintLeaderboard(key, cached);
            return;
        }
        container.innerHTML =
            '<p class="leaderboard-status leaderboard-status--error">' +
            t("lb.loadFailed") +
            "</p>";
    }
}

function setAccordionPanelOpen(card, open, panelSel, triggerSel) {
    const panel = card.querySelector(panelSel);
    const trigger = card.querySelector(triggerSel);
    if (!panel || !trigger) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    card.classList.toggle("is-open", open);
    trigger.setAttribute("aria-expanded", open ? "true" : "false");

    if (reduceMotion) {
        panel.style.height = open ? "auto" : "0px";
        return;
    }

    if (open) {
        panel.style.height = "0px";
        void panel.offsetHeight;
        panel.style.height = panel.scrollHeight + "px";
        const onEnd = (e) => {
            if (e.propertyName !== "height") return;
            panel.style.height = "auto";
            panel.removeEventListener("transitionend", onEnd);
        };
        panel.addEventListener("transitionend", onEnd);
        return;
    }

    panel.style.height = panel.scrollHeight + "px";
    void panel.offsetHeight;
    panel.style.height = "0px";
}

function setFaqCardOpen(card, open) {
    setAccordionPanelOpen(card, open, ".faq-card__answer", ".faq-card__trigger");
}

function setEduLessonOpen(lesson, open) {
    setAccordionPanelOpen(lesson, open, ".edu-lesson__content", ".edu-lesson__trigger");
}

function renderFaq() {
    const container = $("#faqList");
    if (!container) return;

    container.innerHTML = getFaqContent()
        .map((item, index) => {
            const num = String(index + 1).padStart(2, "0");
            return (
                '<article class="faq-card">' +
                '<button type="button" class="faq-card__trigger" aria-expanded="false">' +
                '<span class="faq-card__num">' + num + "</span>" +
                '<span class="faq-card__question">' + item.q + "</span>" +
                '<span class="faq-card__toggle" aria-hidden="true">' +
                '<i class="fas fa-plus faq-card__icon faq-card__icon--plus"></i>' +
                '<i class="fas fa-xmark faq-card__icon faq-card__icon--close"></i>' +
                "</span>" +
                "</button>" +
                '<div class="faq-card__answer"><div class="faq-card__answer-inner"><p>' +
                item.a +
                "</p></div></div>" +
                "</article>"
            );
        })
        .join("");
}

function openSupportTelegram() {
    const url = getSupportUrl();
    const tg = window.Telegram?.WebApp;
    if (tg && typeof tg.openTelegramLink === "function" && /^https:\/\/t\.me\//i.test(url)) {
        tg.openTelegramLink(url);
        return;
    }
    if (tg && typeof tg.openLink === "function") {
        tg.openLink(url);
        return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
}

function bindEvents() {
    $$(".method-card").forEach((card) => {
        card.addEventListener("click", () => {
            currentMethod = card.dataset.method;
            if (currentMethod === "instrument") showAssetScreen();
            else if (currentMethod === "screenshot") showScreenshotScreen();
            else if (currentMethod === "support") openSupportTelegram();
        });
    });

    $$(".asset-card").forEach((card) => {
        card.addEventListener("click", () => {
            selectedAsset = card.dataset.asset;
            if (PAIR_MARKET_TOGGLE_ASSETS.includes(selectedAsset)) {
                syncSelectedPairWithCurrentList();
            } else {
                selectedPair = ASSET_META[selectedAsset].defaultPair;
            }
            ensureValidTimeframeForAsset();
            updateAssetCards();
        });
    });

    $("#marketKindToggle")?.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-market-kind]");
        if (!btn || !PAIR_MARKET_TOGGLE_ASSETS.includes(selectedAsset)) return;
        setPairMarketKind(btn.dataset.marketKind);
        ensureValidTimeframeForAsset();
        updateMarketToggleUI();
        syncSelectedPairWithCurrentList();
        updatePairsScreenHeader();
        renderPairsList();
        renderTimeframes();
    });

    $("#assetContinueBtn")?.addEventListener("click", showPairsScreen);

    $("#generateSignalBtn")?.addEventListener("click", () => {
        showSignalScreen();
    });

    $("#newSignalBtn")?.addEventListener("click", newSignal);

    document.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-flow-back]");
        if (!btn) return;
        handleFlowBack(btn.dataset.flowBack);
    });

    $("#searchPairsInput")?.addEventListener("input", renderPairsList);

    $$("#eduCategory .edu-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            $$("#eduCategory .edu-tab").forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            renderEducation(tab.dataset.cat);
        });
    });

    $$("#lbTabs .lb-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            $$("#lbTabs .lb-tab").forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            renderLeaderboard(tab.dataset.period);
        });
    });

    $$(".nav-item").forEach((item) => {
        item.addEventListener("click", () => {
            const nav = item.dataset.nav;
            if (nav === "signals") showHome();
            else if (nav === "education") showEducationScreen();
            else if (nav === "leaders") showLeadersScreen();
            else if (nav === "faq") showFaqScreen();
        });
    });

    $("#educationList")?.addEventListener("click", (e) => {
        const trigger = e.target.closest(".edu-lesson__trigger");
        if (!trigger) return;
        const lesson = trigger.closest(".edu-lesson");
        const list = $("#educationList");
        if (!lesson || !list) return;

        const willOpen = !lesson.classList.contains("is-open");
        const prevOpen = list.querySelector(".edu-lesson.is-open");
        if (prevOpen && prevOpen !== lesson) setEduLessonOpen(prevOpen, false);
        setEduLessonOpen(lesson, willOpen);
    });

    $("#faqList")?.addEventListener("click", (e) => {
        const trigger = e.target.closest(".faq-card__trigger");
        if (!trigger) return;
        const card = trigger.closest(".faq-card");
        const list = $("#faqList");
        if (!card || !list) return;

        const willOpen = !card.classList.contains("is-open");
        const prevOpen = list.querySelector(".faq-card.is-open");
        if (prevOpen && prevOpen !== card) setFaqCardOpen(prevOpen, false);
        setFaqCardOpen(card, willOpen);
    });

    $("#brandHomeBtn")?.addEventListener("click", showHome);

    $("#themeBtn")?.addEventListener("click", toggleTheme);

    $("#closeBtn")?.addEventListener("click", () => {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.close();
        } else if (confirm(t("close.confirm"))) {
            showHome();
        }
    });
}

const THEME_STORAGE_KEY = "kvsm-theme";
const THEME_COLORS = {
    dark: "#070b14",
    light: "#eef2f7"
};


function getTheme() {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
    try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored === "light" || stored === "dark") return stored;
    } catch (_) {
        /* ignore */
    }
    return "dark";
}

function applyTheme(theme) {
    const next = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch (_) {
        /* ignore */
    }

    const meta = document.getElementById("themeColorMeta");
    if (meta) meta.setAttribute("content", THEME_COLORS[next]);

    const btn = document.getElementById("themeBtn");
    if (btn) {
        const labelKey = next === "light" ? "theme.toDark" : "theme.toLight";
        btn.setAttribute("aria-label", typeof t === "function" ? t(labelKey) : labelKey);
        btn.dataset.i18nAria = labelKey;
    }

    syncTelegramThemeColors(next);
}

function toggleTheme() {
    applyTheme(getTheme() === "light" ? "dark" : "light");
}

function syncTelegramThemeColors(theme) {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;
    const color = THEME_COLORS[theme === "light" ? "light" : "dark"];
    if (typeof tg.setHeaderColor === "function") {
        try {
            tg.setHeaderColor(color);
        } catch (_) {
            /* ignore */
        }
    }
    if (typeof tg.setBackgroundColor === "function") {
        try {
            tg.setBackgroundColor(color);
        } catch (_) {
            /* ignore */
        }
    }
}

function initTheme() {
    applyTheme(getTheme());
}

function initTelegramWebApp() {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    tg.expand();

    if (typeof tg.requestFullscreen === "function") {
        try {
            tg.requestFullscreen();
        } catch (_) {
            /* older Telegram clients */
        }
    }

    if (typeof tg.disableVerticalSwipes === "function") {
        tg.disableVerticalSwipes();
    }

    syncTelegramThemeColors(getTheme());

    document.documentElement.classList.add("tg-webapp");

    const applyViewport = () => {
        const height = tg.viewportStableHeight || tg.viewportHeight;
        if (height) {
            document.documentElement.style.setProperty("--app-height", height + "px");
        }
    };

    const applySafeArea = () => {
        const inset = tg.safeAreaInset;
        const contentInset = tg.contentSafeAreaInset;
        let top = 0;
        let bottom = 0;

        if (inset) {
            top += inset.top || 0;
            bottom += inset.bottom || 0;
            document.documentElement.style.setProperty("--safe-left", (inset.left || 0) + "px");
            document.documentElement.style.setProperty("--safe-right", (inset.right || 0) + "px");
        }
        if (contentInset) {
            top += contentInset.top || 0;
            bottom += contentInset.bottom || 0;
        }

        const isFullscreen = tg.isFullscreen === true;
        const tgTopClearance = 56;
        const topExtra = isFullscreen ? Math.max(0, tgTopClearance - top) : 0;

        document.documentElement.style.setProperty("--safe-top", top + "px");
        document.documentElement.style.setProperty("--safe-bottom", bottom + "px");
        document.documentElement.style.setProperty("--tg-content-safe-top", "0px");
        document.documentElement.style.setProperty("--tg-chrome-top-extra", topExtra + "px");
    };

    applyViewport();
    applySafeArea();
    tg.onEvent("viewportChanged", applyViewport);
    if (typeof tg.onEvent === "function") {
        tg.onEvent("safeAreaChanged", applySafeArea);
        tg.onEvent("contentSafeAreaChanged", applySafeArea);
        tg.onEvent("fullscreenChanged", applySafeArea);
    }
}

function refreshAppLanguage() {
    updatePairsScreenHeader();
    renderPairsList();
    renderTimeframes();
    renderScreenshotTimeframes();
    updateSignalCooldownUI();
    if (currentSignal) renderSignal();
    const activeEdu = document.querySelector("#eduCategory .edu-tab.active");
    renderEducation(activeEdu?.dataset.cat || "all");
    const activeLb = document.querySelector("#lbTabs .lb-tab.active");
    renderLeaderboard(activeLb?.dataset.period || "today");
    renderFaq();
}

window.refreshAppLanguage = refreshAppLanguage;

function updateAccessTierBadge() {
    const el = document.getElementById("accessTierBadge");
    if (!el) return;
    const platinum = getAccessTier() === "platinum";
    el.dataset.tier = platinum ? "platinum" : "start";
    el.textContent = platinum ? "PLATINUM" : "START";
    el.setAttribute("aria-label", platinum ? "PLATINUM access" : "START access");
}

function init() {
    initTheme();
    initI18n();
    getAccessTier();
    getSupportUrl();
    loadSupportUrlFromApi();
    updateAccessTierBadge();
    initTelegramWebApp();
    bindEvents();
    renderPairsList();
    renderTimeframes();
    renderScreenshotTimeframes();
    renderEducation("all");
    const activeLb = document.querySelector("#lbTabs .lb-tab.active");
    renderLeaderboard(activeLb?.dataset.period || "today");
    renderFaq();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
