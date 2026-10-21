const LANG_STORAGE_KEY = "kvem_lang";

const LANGUAGES = [
    { code: "en", name: "English", native: "English", flag: "gb.svg" },
    { code: "ru", name: "Russian", native: "Русский", flag: "ru.svg" },
    { code: "hi", name: "Hindi", native: "हिन्दी", flag: "in.svg" }
];

const MESSAGES = {
    en: {
        "brand.tagline": "Trade Bot",
        "nav.signals": "Signals",
        "nav.education": "Education",
        "nav.leaders": "Leaders",
        "nav.faq": "FAQ",
        "home.label": "Trade signals",
        "home.title": "How do you want to trade?",
        "home.sub": "Pick a method — AI generates direction in seconds",
        "method.instrument.title": "Instrument",
        "method.instrument.desc": "Asset, pair and timeframe — instant signal",
        "method.screenshot.title": "Screenshot",
        "method.screenshot.desc": "Upload a chart — AI reads patterns",
        "method.support.title": "Support",
        "method.support.desc": "Chat with us in Telegram",
        "flow.step1": "Step 1 of 3",
        "flow.step2": "Step 2 of 3",
        "flow.step3": "Step 3 of 3",
        "asset.title": "Choose market",
        "asset.sub": "What are you trading today?",
        "asset.forex.title": "Forex",
        "asset.forex.sub": "Majors & minors",
        "asset.crypto.title": "Crypto",
        "asset.crypto.sub": "BTC, ETH & more",
        "asset.stocks.title": "Stocks",
        "asset.stocks.sub": "Global shares",
        "btn.continue": "Continue",
        "btn.back": "Back",
        "btn.backSignals": "Back to Signals",
        "btn.clear": "Clear",
        "btn.analyze": "Analyze",
        "pairs.forex.title": "Currency Pairs",
        "pairs.forex.sub": "Choose your forex pair",
        "pairs.forex.subOtc": "OTC pairs — after-hours & synthetic quotes",
        "pairs.forex.subStd": "Standard pairs — liquid FX majors & crosses",
        "pairs.crypto.title": "Cryptocurrency",
        "pairs.crypto.sub": "Choose your crypto pair",
        "pairs.crypto.subOtc": "OTC crypto — synthetic & extended-hours quotes",
        "pairs.crypto.subStd": "Spot crypto — major coins & alt pairs",
        "pairs.stocks.title": "Stocks",
        "pairs.stocks.sub": "Choose a company share",
        "pairs.search": "Search...",
        "pairs.available": "{n} available",
        "pairs.none": "No pairs found",
        "pairs.hot": "Hot",
        "market.stock": "Stock",
        "market.otc": "OTC",
        "tf.title": "Timeframe",
        "tf.sub": "{pair} · pick candle interval",
        "tf.seconds": "Seconds",
        "tf.minutes": "Minutes",
        "signal.generate": "Generate Signal",
        "signal.new": "New Signal",
        "signal.title": "Your signal",
        "signal.sub": "Live AI direction",
        "signal.wait": "Wait {time}",
        "signal.yourIs": "Your signal is",
        "signal.up": "UP",
        "signal.down": "DOWN",
        "signal.pair": "Pair:",
        "signal.pattern": "Pattern",
        "signal.timeframe": "Timeframe",
        "signal.confidence": "Confidence",
        "signal.bullish": "Bullish",
        "signal.bearish": "Bearish",
        "signal.trend": "Trend",
        "signal.momentum": "Momentum",
        "signal.indicators": "Indicators:",
        "signal.ind.rsi": "RSI",
        "signal.ind.macd": "MACD",
        "signal.ind.ema": "EMA",
        "signal.ind.bb": "BB",
        "signal.ind.stoch": "Stoch",
        "signal.ind.volume": "Vol",
        "signal.ind.atr": "ATR",
        "signal.ind.adx": "ADX",
        "signal.trend.bullish": "Bullish",
        "signal.trend.strongBull": "Strong uptrend",
        "signal.trend.moderateBull": "Moderate bullish",
        "signal.trend.bearish": "Bearish",
        "signal.trend.strongBear": "Strong downtrend",
        "signal.trend.moderateBear": "Moderate bearish",
        "signal.momentum.high": "High",
        "signal.momentum.building": "Building",
        "signal.momentum.steady": "Steady",
        "signal.momentum.fading": "Fading",
        "signal.momentum.weak": "Weak",
        "signal.detail":
            "AI cross-checked {indicators}. {trend} bias on this timeframe supports the {direction} read.",
        "signal.checkResult": "Check result",
        "signal.checking": "Checking...",
        "signal.checkWait": "Result in {time}",
        "signal.checkReady": "Checking result...",
        "signal.checkTooEarly": "Wait for the timeframe to finish",
        "signal.checkFailed": "Could not check result",
        "signal.win": "WIN",
        "signal.lose": "LOSE",
        "signal.entry": "Entry",
        "signal.exit": "Exit",
        "signal.otcMode": "OTC result",
        "loading.market": "Analyzing market...",
        "loading.chart": "Analyzing chart...",
        "loading.generating": "Generating signal...",
        "shot.label": "Screenshot",
        "shot.title": "Chart analysis",
        "shot.sub": "Upload your chart for an AI signal",
        "shot.upload": "Tap to upload or drag & drop",
        "shot.uploadHint": "PNG, JPG up to 10MB",
        "shot.tf": "Timeframe",
        "shot.new": "New screenshot",
        "shot.fileLarge": "File is too large. Maximum size is 10MB.",
        "edu.tab.all": "All",
        "edu.tab.basics": "Basics",
        "edu.tab.technical": "Technical",
        "edu.tab.risk": "Risk",
        "edu.hub": "Learning hub",
        "edu.meta.all.label": "All lessons",
        "edu.meta.all.sub": "Browse every topic",
        "edu.meta.basics.label": "Basics",
        "edu.meta.basics.sub": "Foundations of trading",
        "edu.meta.technical.label": "Technical",
        "edu.meta.technical.sub": "Charts and indicators",
        "edu.meta.risk.label": "Risk",
        "edu.meta.risk.sub": "Protect your capital",
        "edu.lessons": "lessons",
        "edu.lesson": "lesson",
        "edu.empty": "No lessons in this category yet.",
        "edu.cat.basics": "Basics",
        "edu.cat.technical": "Technical",
        "edu.cat.risk": "Risk",
        "lb.tab.today": "Today",
        "lb.tab.week": "Week",
        "lb.tab.month": "Month",
        "lb.head": "Top traders",
        "lb.today": "Today",
        "lb.week": "This week",
        "lb.month": "This month",
        "lb.active": "{n} active",
        "lb.trades": "trades",
        "lb.loading": "Loading leaders...",
        "lb.loadFailed": "Could not load leaders. Start the backend.",
        "lb.col.trader": "Trader",
        "lb.col.trades": "Trades",
        "lb.col.profit": "P/L",
        "lang.title": "Language",
        "lang.choose": "Choose your language",
        "lang.close": "Close",
        "lang.change": "Change language",
        "theme.toggle": "Toggle theme",
        "theme.toLight": "Switch to light theme",
        "theme.toDark": "Switch to dark theme",
        "close.confirm": "Close the app?"
    },
    ru: {
        "brand.tagline": "Торговый бот",
        "nav.signals": "Сигналы",
        "nav.education": "Обучение",
        "nav.leaders": "Лидеры",
        "nav.faq": "FAQ",
        "home.label": "Торговые сигналы",
        "home.title": "Как хотите торговать?",
        "home.sub": "Выберите способ — ИИ выдаст направление за секунды",
        "method.instrument.title": "Инструмент",
        "method.instrument.desc": "Актив, пара и таймфрейм — мгновенный сигнал",
        "method.screenshot.title": "Скриншот",
        "method.screenshot.desc": "Загрузите график — ИИ прочитает паттерны",
        "method.support.title": "Поддержка",
        "method.support.desc": "Напишите нам в Telegram",
        "flow.step1": "Шаг 1 из 3",
        "flow.step2": "Шаг 2 из 3",
        "flow.step3": "Шаг 3 из 3",
        "asset.title": "Выберите рынок",
        "asset.sub": "Чем торгуете сегодня?",
        "asset.forex.title": "Форекс",
        "asset.forex.sub": "Мажоры и кроссы",
        "asset.crypto.title": "Крипто",
        "asset.crypto.sub": "BTC, ETH и др.",
        "asset.stocks.title": "Акции",
        "asset.stocks.sub": "Мировые компании",
        "btn.continue": "Далее",
        "btn.back": "Назад",
        "btn.backSignals": "К сигналам",
        "btn.clear": "Очистить",
        "btn.analyze": "Анализ",
        "pairs.forex.title": "Валютные пары",
        "pairs.forex.sub": "Выберите валютную пару",
        "pairs.forex.subOtc": "OTC — внебиржевые и синтетические котировки",
        "pairs.forex.subStd": "Стандарт — ликвидные мажоры и кроссы",
        "pairs.crypto.title": "Криптовалюта",
        "pairs.crypto.sub": "Выберите криптопару",
        "pairs.crypto.subOtc": "OTC крипто — синтетика и расширенные часы",
        "pairs.crypto.subStd": "Спот крипто — основные монеты и альты",
        "pairs.stocks.title": "Акции",
        "pairs.stocks.sub": "Выберите акцию компании",
        "pairs.search": "Поиск...",
        "pairs.available": "{n} доступно",
        "pairs.none": "Пары не найдены",
        "pairs.hot": "Топ",
        "market.stock": "Биржа",
        "market.otc": "OTC",
        "tf.title": "Таймфрейм",
        "tf.sub": "{pair} · выберите интервал свечи",
        "tf.seconds": "Секунды",
        "tf.minutes": "Минуты",
        "signal.generate": "Сгенерировать сигнал",
        "signal.new": "Новый сигнал",
        "signal.title": "Ваш сигнал",
        "signal.sub": "Направление от ИИ",
        "signal.wait": "Подождите {time}",
        "signal.yourIs": "Ваш сигнал",
        "signal.up": "ВВЕРХ",
        "signal.down": "ВНИЗ",
        "signal.pair": "Пара:",
        "signal.pattern": "Паттерн",
        "signal.timeframe": "Таймфрейм",
        "signal.confidence": "Уверенность",
        "signal.bullish": "Бычий",
        "signal.bearish": "Медвежий",
        "signal.trend": "Тренд",
        "signal.momentum": "Импульс",
        "signal.indicators": "Индикаторы:",
        "signal.ind.rsi": "RSI",
        "signal.ind.macd": "MACD",
        "signal.ind.ema": "EMA",
        "signal.ind.bb": "BB",
        "signal.ind.stoch": "Stoch",
        "signal.ind.volume": "Vol",
        "signal.ind.atr": "ATR",
        "signal.ind.adx": "ADX",
        "signal.trend.bullish": "Бычий",
        "signal.trend.strongBull": "Сильный восходящий",
        "signal.trend.moderateBull": "Умеренно бычий",
        "signal.trend.bearish": "Медвежий",
        "signal.trend.strongBear": "Сильный нисходящий",
        "signal.trend.moderateBear": "Умеренно медвежий",
        "signal.momentum.high": "Высокий",
        "signal.momentum.building": "Нарастает",
        "signal.momentum.steady": "Стабильный",
        "signal.momentum.fading": "Ослабевает",
        "signal.momentum.weak": "Слабый",
        "signal.detail":
            "ИИ сверил {indicators}. {trend} на этом таймфрейме подтверждает сигнал {direction}.",
        "signal.checkResult": "Проверить результат",
        "signal.checking": "Проверка...",
        "signal.checkWait": "Результат через {time}",
        "signal.checkReady": "Проверка результата...",
        "signal.checkTooEarly": "Дождитесь окончания таймфрейма",
        "signal.checkFailed": "Не удалось проверить результат",
        "signal.win": "WIN",
        "signal.lose": "LOSE",
        "signal.entry": "Вход",
        "signal.exit": "Выход",
        "signal.otcMode": "Результат OTC",
        "loading.market": "Анализ рынка...",
        "loading.chart": "Анализ графика...",
        "loading.generating": "Генерация сигнала...",
        "shot.label": "Скриншот",
        "shot.title": "Анализ графика",
        "shot.sub": "Загрузите график для сигнала ИИ",
        "shot.upload": "Нажмите или перетащите файл",
        "shot.uploadHint": "PNG, JPG до 10 МБ",
        "shot.tf": "Таймфрейм",
        "shot.new": "Новый скриншот",
        "shot.fileLarge": "Файл слишком большой. Максимум 10 МБ.",
        "edu.tab.all": "Все",
        "edu.tab.basics": "Основы",
        "edu.tab.technical": "Техника",
        "edu.tab.risk": "Риск",
        "edu.hub": "Центр обучения",
        "edu.meta.all.label": "Все уроки",
        "edu.meta.all.sub": "Все темы",
        "edu.meta.basics.label": "Основы",
        "edu.meta.basics.sub": "База трейдинга",
        "edu.meta.technical.label": "Техника",
        "edu.meta.technical.sub": "Графики и индикаторы",
        "edu.meta.risk.label": "Риск",
        "edu.meta.risk.sub": "Защита капитала",
        "edu.lessons": "уроков",
        "edu.lesson": "урок",
        "edu.empty": "В этой категории пока нет уроков.",
        "edu.cat.basics": "Основы",
        "edu.cat.technical": "Техника",
        "edu.cat.risk": "Риск",
        "lb.tab.today": "Сегодня",
        "lb.tab.week": "Неделя",
        "lb.tab.month": "Месяц",
        "lb.head": "Топ трейдеры",
        "lb.today": "Сегодня",
        "lb.week": "Эта неделя",
        "lb.month": "Этот месяц",
        "lb.active": "{n} активных",
        "lb.trades": "сделок",
        "lb.loading": "Загрузка лидеров...",
        "lb.loadFailed": "Не удалось загрузить лидеров. Запустите backend.",
        "lb.col.trader": "Трейдер",
        "lb.col.trades": "Сделки",
        "lb.col.profit": "P/L",
        "lang.title": "Язык",
        "lang.choose": "Выберите язык",
        "lang.close": "Закрыть",
        "lang.change": "Сменить язык",
        "theme.toggle": "Сменить тему",
        "theme.toLight": "Включить светлую тему",
        "theme.toDark": "Включить тёмную тему",
        "close.confirm": "Закрыть приложение?"
    },
    hi: {
        "brand.tagline": "ट्रेड बॉट",
        "nav.signals": "सिग्नल",
        "nav.education": "शिक्षा",
        "nav.leaders": "लीडर",
        "nav.faq": "FAQ",
        "home.label": "ट्रेड सिग्नल",
        "home.title": "आप कैसे ट्रेड करना चाहते हैं?",
        "home.sub": "तरीका चुनें — AI सेकंडों में दिशा देता है",
        "method.instrument.title": "इंस्ट्रूमेंट",
        "method.instrument.desc": "एसेट, पेयर और टाइमफ्रेम — तुरंत सिग्नल",
        "method.screenshot.title": "स्क्रीनशॉट",
        "method.screenshot.desc": "चार्ट अपलोड करें — AI पैटर्न पढ़ता है",
        "method.support.title": "सपोर्ट",
        "method.support.desc": "Telegram पर हमसे चैट करें",
        "flow.step1": "चरण 1 / 3",
        "flow.step2": "चरण 2 / 3",
        "flow.step3": "चरण 3 / 3",
        "asset.title": "मार्केट चुनें",
        "asset.sub": "आज क्या ट्रेड कर रहे हैं?",
        "asset.forex.title": "फॉरेक्स",
        "asset.forex.sub": "मेजर और माइनर",
        "asset.crypto.title": "क्रिप्टो",
        "asset.crypto.sub": "BTC, ETH और अधिक",
        "asset.stocks.title": "स्टॉक",
        "asset.stocks.sub": "वैश्विक शेयर",
        "btn.continue": "जारी रखें",
        "btn.back": "वापस",
        "btn.backSignals": "सिग्नल पर वापस",
        "btn.clear": "साफ़ करें",
        "btn.analyze": "विश्लेषण",
        "pairs.forex.title": "करेंसी पेयर",
        "pairs.forex.sub": "अपना फॉरेक्स पेयर चुनें",
        "pairs.forex.subOtc": "OTC पेयर — आफ्टर-आवर्स और सिंथेटिक",
        "pairs.forex.subStd": "स्टैंडर्ड — लिक्विड FX मेजर और क्रॉस",
        "pairs.crypto.title": "क्रिप्टोकरेंसी",
        "pairs.crypto.sub": "अपना क्रिप्टो पेयर चुनें",
        "pairs.crypto.subOtc": "OTC क्रिप्टो — सिंथेटिक और विस्तारित घंटे",
        "pairs.crypto.subStd": "स्पॉट क्रिप्टो — प्रमुख सिक्के और ऑल्ट",
        "pairs.stocks.title": "स्टॉक",
        "pairs.stocks.sub": "कंपनी शेयर चुनें",
        "pairs.search": "खोजें...",
        "pairs.available": "{n} उपलब्ध",
        "pairs.none": "कोई पेयर नहीं मिला",
        "pairs.hot": "हॉट",
        "market.stock": "स्टॉक",
        "market.otc": "OTC",
        "tf.title": "टाइमफ्रेम",
        "tf.sub": "{pair} · कैंडल अंतराल चुनें",
        "tf.seconds": "सेकंड",
        "tf.minutes": "मिनट",
        "signal.generate": "सिग्नल बनाएं",
        "signal.new": "नया सिग्नल",
        "signal.title": "आपका सिग्नल",
        "signal.sub": "लाइव AI दिशा",
        "signal.wait": "प्रतीक्षा {time}",
        "signal.yourIs": "आपका सिग्नल",
        "signal.up": "ऊपर",
        "signal.down": "नीचे",
        "signal.pair": "पेयर:",
        "signal.pattern": "पैटर्न",
        "signal.timeframe": "टाइमफ्रेम",
        "signal.confidence": "विश्वास",
        "signal.bullish": "बुलिश",
        "signal.bearish": "बेयरिश",
        "signal.trend": "ट्रेंड",
        "signal.momentum": "गति",
        "signal.indicators": "संकेतक:",
        "signal.ind.rsi": "RSI",
        "signal.ind.macd": "MACD",
        "signal.ind.ema": "EMA",
        "signal.ind.bb": "BB",
        "signal.ind.stoch": "Stoch",
        "signal.ind.volume": "Vol",
        "signal.ind.atr": "ATR",
        "signal.ind.adx": "ADX",
        "signal.trend.bullish": "बुलिश",
        "signal.trend.strongBull": "मजबूत अपट्रेंड",
        "signal.trend.moderateBull": "हल्का बुलिश",
        "signal.trend.bearish": "बेयरिश",
        "signal.trend.strongBear": "मजबूत डाउनट्रेंड",
        "signal.trend.moderateBear": "हल्का बेयरिश",
        "signal.momentum.high": "उच्च",
        "signal.momentum.building": "बढ़ रही",
        "signal.momentum.steady": "स्थिर",
        "signal.momentum.fading": "कम हो रही",
        "signal.momentum.weak": "कमज़ोर",
        "signal.detail":
            "AI ने {indicators} जाँचे। इस टाइमफ्रेम पर {trend} {direction} संकेत का समर्थन करता है।",
        "signal.checkResult": "परिणाम जाँचें",
        "signal.checking": "जाँच हो रही है...",
        "signal.checkWait": "परिणाम {time} में",
        "signal.checkReady": "परिणाम जाँचा जा रहा है...",
        "signal.checkTooEarly": "टाइमफ्रेम खत्म होने का इंतज़ार करें",
        "signal.checkFailed": "परिणाम जाँच नहीं हो सका",
        "signal.win": "WIN",
        "signal.lose": "LOSE",
        "signal.entry": "एंट्री",
        "signal.exit": "एग्ज़िट",
        "signal.otcMode": "OTC परिणाम",
        "loading.market": "मार्केट विश्लेषण...",
        "loading.chart": "चार्ट विश्लेषण...",
        "loading.generating": "सिग्नल बन रहा है...",
        "shot.label": "स्क्रीनशॉट",
        "shot.title": "चार्ट विश्लेषण",
        "shot.sub": "AI सिग्नल के लिए चार्ट अपलोड करें",
        "shot.upload": "टैप करें या खींचें",
        "shot.uploadHint": "PNG, JPG अधिकतम 10MB",
        "shot.tf": "टाइमफ्रेम",
        "shot.new": "नया स्क्रीनशॉट",
        "shot.fileLarge": "फ़ाइल बहुत बड़ी है। अधिकतम 10MB।",
        "edu.tab.all": "सभी",
        "edu.tab.basics": "बुनियाद",
        "edu.tab.technical": "तकनीक",
        "edu.tab.risk": "जोखिम",
        "edu.hub": "लर्निंग हब",
        "edu.meta.all.label": "सभी पाठ",
        "edu.meta.all.sub": "हर विषय देखें",
        "edu.meta.basics.label": "बुनियाद",
        "edu.meta.basics.sub": "ट्रेडिंग की नींव",
        "edu.meta.technical.label": "तकनीक",
        "edu.meta.technical.sub": "चार्ट और संकेतक",
        "edu.meta.risk.label": "जोखिम",
        "edu.meta.risk.sub": "पूंजी की सुरक्षा",
        "edu.lessons": "पाठ",
        "edu.lesson": "पाठ",
        "edu.empty": "इस श्रेणी में अभी कोई पाठ नहीं।",
        "edu.cat.basics": "बुनियाद",
        "edu.cat.technical": "तकनीक",
        "edu.cat.risk": "जोखिम",
        "lb.tab.today": "आज",
        "lb.tab.week": "सप्ताह",
        "lb.tab.month": "महीना",
        "lb.head": "टॉप ट्रेडर",
        "lb.today": "आज",
        "lb.week": "इस सप्ताह",
        "lb.month": "इस महीने",
        "lb.active": "{n} सक्रिय",
        "lb.trades": "ट्रेड",
        "lb.loading": "लीडर लोड हो रहे हैं...",
        "lb.loadFailed": "लीडर लोड नहीं हो सके। Backend चालू करें।",
        "lb.col.trader": "ट्रेडर",
        "lb.col.trades": "ट्रेड",
        "lb.col.profit": "P/L",
        "lang.title": "भाषा",
        "lang.choose": "अपनी भाषा चुनें",
        "lang.close": "बंद करें",
        "lang.change": "भाषा बदलें",
        "theme.toggle": "थीम बदलें",
        "theme.toLight": "लाइट थीम पर स्विच करें",
        "theme.toDark": "डार्क थीम पर स्विच करें",
        "close.confirm": "ऐप बंद करें?"
    }
};

const EDU_LESSONS_I18N = {
    en: [
        { cat: "basics", icon: "fa-globe", title: "What is Forex Trading?", desc: "Forex is the global marketplace for exchanging national currencies. Prices move in pairs such as EUR/USD, and traders aim to buy low and sell high — or sell high and buy back lower." },
        { cat: "basics", icon: "fa-ruler", title: "What is a Pip?", desc: "A pip is the smallest standard price move in most currency pairs. For EUR/USD, one pip is typically 0.0001. Pip value depends on lot size and your account currency." },
        { cat: "basics", icon: "fa-layer-group", title: "Lot Sizes", desc: "A standard lot is 100,000 units, a mini lot is 10,000, and a micro lot is 1,000. Smaller lots reduce risk per trade while you are learning." },
        { cat: "technical", icon: "fa-chart-area", title: "Support and Resistance", desc: "Support is a zone where buying pressure often stops a decline. Resistance is where selling pressure often caps rallies. Breakouts and bounces around these levels are core to chart reading." },
        { cat: "technical", icon: "fa-wave-square", title: "RSI Indicator", desc: "The Relative Strength Index measures momentum on a 0–100 scale. Readings above 70 suggest overbought conditions; below 30 suggest oversold. Use it with trend and structure, not alone." },
        { cat: "technical", icon: "fa-chart-line", title: "Moving Averages", desc: "Moving averages smooth price to highlight direction. A price above a rising MA often signals bullish bias; crossovers between fast and slow MAs are popular entry filters." },
        { cat: "technical", icon: "fa-arrows-left-right", title: "MACD Strategy", desc: "MACD tracks the relationship between two moving averages. Signal-line crossovers and histogram shifts can hint at momentum changes — confirm with higher-timeframe trend." },
        { cat: "risk", icon: "fa-shield-halved", title: "Risk Management", desc: "Risk only 1–2% of your account per trade. Define stop-loss and take-profit before entry so emotions do not override your plan mid-trade." },
        { cat: "risk", icon: "fa-scale-balanced", title: "Position Sizing", desc: "Position size should follow your stop distance and risk percentage. Wider stops require smaller size; tighter stops allow slightly larger size for the same dollar risk." },
        { cat: "risk", icon: "fa-book-open", title: "Trading Journal", desc: "Log every trade: setup, entry, exit, and emotion. Review weekly to spot recurring mistakes and double down on strategies that actually work for you." }
    ],
    ru: [
        { cat: "basics", icon: "fa-globe", title: "Что такое форекс?", desc: "Форекс — мировой рынок обмена валют. Цены движутся в парах вроде EUR/USD; трейдеры покупают дёшево и продают дороже — или наоборот." },
        { cat: "basics", icon: "fa-ruler", title: "Что такое пункт (пип)?", desc: "Пип — минимальный стандартный шаг цены в большинстве пар. Для EUR/USD один пип обычно 0,0001. Стоимость пипа зависит от лота и валюты счёта." },
        { cat: "basics", icon: "fa-layer-group", title: "Размеры лотов", desc: "Стандартный лот — 100 000 единиц, мини — 10 000, микро — 1 000. Меньшие лоты снижают риск на сделку, пока вы учитесь." },
        { cat: "technical", icon: "fa-chart-area", title: "Поддержка и сопротивление", desc: "Поддержка — зона, где покупки часто останавливают падение. Сопротивление — где продажи ограничивают рост. Пробои и отскоки от уровней — основа чтения графика." },
        { cat: "technical", icon: "fa-wave-square", title: "Индикатор RSI", desc: "RSI измеряет импульс по шкале 0–100. Выше 70 — перекупленность, ниже 30 — перепроданность. Используйте вместе с трендом и структурой, не изолированно." },
        { cat: "technical", icon: "fa-chart-line", title: "Скользящие средние", desc: "MA сглаживают цену и показывают направление. Цена выше растущей MA часто бычья; пересечения быстрой и медленной MA — популярный фильтр входа." },
        { cat: "technical", icon: "fa-arrows-left-right", title: "Стратегия MACD", desc: "MACD отслеживает связь двух MA. Пересечения сигнальной линии и гистограммы намекают на смену импульса — подтверждайте старшим таймфреймом." },
        { cat: "risk", icon: "fa-shield-halved", title: "Управление риском", desc: "Рискуйте 1–2% счёта на сделку. Стоп и тейк задайте до входа, чтобы эмоции не ломали план в процессе." },
        { cat: "risk", icon: "fa-scale-balanced", title: "Размер позиции", desc: "Размер зависит от стопа и процента риска. Широкий стоп — меньший объём; узкий — чуть больший при том же долларовом риске." },
        { cat: "risk", icon: "fa-book-open", title: "Торговый дневник", desc: "Записывайте каждую сделку: сетап, вход, выход, эмоции. Раз в неделю разбирайте ошибки и усиливайте то, что реально работает." }
    ],
    hi: [
        { cat: "basics", icon: "fa-globe", title: "फॉरेक्स ट्रेडिंग क्या है?", desc: "फॉरेक्स राष्ट्रीय मुद्राओं का वैश्विक बाज़ार है। कीमतें EUR/USD जैसी जोड़ियों में चलती हैं; ट्रेडर सस्ते में खरीदकर महँगे में बेचते हैं या उलटा।" },
        { cat: "basics", icon: "fa-ruler", title: "पिप क्या है?", desc: "पिप अधिकांश जोड़ियों में सबसे छोटी मानक कीमत चाल है। EUR/USD में एक पिप आमतौर पर 0.0001। पिप मूल्य लॉट और खाता मुद्रा पर निर्भर करता है।" },
        { cat: "basics", icon: "fa-layer-group", title: "लॉट साइज़", desc: "स्टैंडर्ड लॉट 100,000 इकाई, मिनी 10,000, माइक्रो 1,000। छोटे लॉट सीखते समय प्रति ट्रेड जोखिम घटाते हैं।" },
        { cat: "technical", icon: "fa-chart-area", title: "सपोर्ट और रेज़िस्टेंस", desc: "सपोर्ट वह क्षेत्र जहाँ खरीद अक्सर गिरावट रोकती है। रेज़िस्टेंस जहाँ बिक्री रैली सीमित करती है। इन स्तरों के आसपास ब्रेकआउट और बाउंस मुख्य हैं।" },
        { cat: "technical", icon: "fa-wave-square", title: "RSI संकेतक", desc: "RSI 0–100 पर गति मापता है। 70 से ऊपर ओवरबॉट, 30 से नीचे ओवरसोल्ड। इसे अकेले नहीं, ट्रेंड और संरचना के साथ उपयोग करें।" },
        { cat: "technical", icon: "fa-chart-line", title: "मूविंग एवरेज", desc: "MA कीमत को सुचारु कर दिशा दिखाते हैं। बढ़ते MA के ऊपर कीमत अक्सर बुलिश; तेज़ और धीमी MA का क्रॉस लोकप्रिय प्रवेश फ़िल्टर है।" },
        { cat: "technical", icon: "fa-arrows-left-right", title: "MACD रणनीति", desc: "MACD दो MA के संबंध को ट्रैक करता है। सिग्नल लाइन क्रॉस और हिस्टोग्राम बदलाव संकेत दे सकते हैं — उच्च टाइमफ्रेम से पुष्टि करें।" },
        { cat: "risk", icon: "fa-shield-halved", title: "जोखिम प्रबंधन", desc: "प्रति ट्रेड खाते का केवल 1–2% जोखिम लें। प्रवेश से पहले स्टॉप और टेक-प्रॉफ़ तय करें ताकि भावनाएँ योजना न तोड़ें।" },
        { cat: "risk", icon: "fa-scale-balanced", title: "पोज़िशन साइज़िंग", desc: "आकार स्टॉप दूरी और जोखिम प्रतिशत पर आधारित हो। चौड़ा स्टॉप — छोटा आकार; तंग स्टॉप — समान डॉलर जोखिम पर थोड़ा बड़ा आकार।" },
        { cat: "risk", icon: "fa-book-open", title: "ट्रेडिंग जर्नल", desc: "हर ट्रेड लॉग करें: सेटअप, प्रवेश, निकास, भावना। साप्ताहिक समीक्षा से गलतियाँ और काम करने वाली रणनीतियाँ पहचानें।" }
    ]
};

const FAQ_I18N = {
    en: [
        { q: "How accurate are the signals?", a: "Our AI analyzes multiple indicators with 75-90% historical accuracy. Past performance does not guarantee future results." },
        { q: "Is this financial advice?", a: "No. All signals are for educational purposes only." },
        { q: "How often are signals updated?", a: "Signals refresh based on your timeframe, from 5 seconds to 15 minutes." },
        { q: "What is the minimum deposit?", a: "We do not handle deposits. Trade through your preferred broker." },
        { q: "Can I use signals for crypto?", a: "Yes. Choose Cryptocurrency in Instrument for BTC/USD, ETH/USD and more." }
    ],
    ru: [
        { q: "Насколько точны сигналы?", a: "ИИ анализирует несколько индикаторов с исторической точностью 75–90%. Прошлые результаты не гарантируют будущих." },
        { q: "Это финансовая рекомендация?", a: "Нет. Все сигналы только в образовательных целях." },
        { q: "Как часто обновляются сигналы?", a: "Обновление зависит от таймфрейма — от 5 секунд до 15 минут." },
        { q: "Какой минимальный депозит?", a: "Мы не принимаем депозиты. Торгуйте через своего брокера." },
        { q: "Можно ли для крипто?", a: "Да. Выберите «Криптовалюта» в Инструменте для BTC/USD, ETH/USD и др." }
    ],
    hi: [
        { q: "सिग्नल कितने सटीक हैं?", a: "हमारा AI कई संकेतकों का विश्लेषण करता है, ऐतिहासिक सटीकता 75–90%। पिछला प्रदर्शन भविष्य की गारंटी नहीं।" },
        { q: "क्या यह वित्तीय सलाह है?", a: "नहीं। सभी सिग्नल केवल शैक्षिक उद्देश्य के लिए हैं।" },
        { q: "सिग्नल कितनी बार अपडेट होते हैं?", a: "आपके टाइमफ्रेम पर — 5 सेकंड से 15 मिनट तक।" },
        { q: "न्यूनतम जमा कितनी है?", a: "हम जमा नहीं लेते। अपने ब्रोकर के माध्यम से ट्रेड करें।" },
        { q: "क्रिप्टो के लिए उपयोग कर सकते हैं?", a: "हाँ। इंस्ट्रूमेंट में Cryptocurrency चुनें — BTC/USD, ETH/USD और अधिक।" }
    ]
};

const SIGNAL_PATTERNS_I18N = {
    en: ["Piercing Line", "Bullish Engulfing", "Hammer", "Morning Star", "Dark Cloud Cover", "Doji"],
    ru: ["Просвет в облаках", "Бычье поглощение", "Молот", "Утренняя звезда", "Завеса тёмных облаков", "Доджи"],
    hi: ["पियर्सिंग लाइन", "बुलिश एन्गल्फ़िंग", "हैमर", "मॉर्निंग स्टार", "डार्क क्लाउड", "डोजी"]
};

const SIGNAL_REASONS_I18N = {
    en: [
        "Open interest rising with price",
        "Volume spike detected",
        "Support level bounce",
        "Breakout from consolidation",
        "RSI oversold territory"
    ],
    ru: [
        "Открытый интерес растёт с ценой",
        "Обнаружен всплеск объёма",
        "Отскок от поддержки",
        "Пробой консолидации",
        "RSI в зоне перепроданности"
    ],
    hi: [
        "ओपन इंटरेस्ट कीमत के साथ बढ़ रहा",
        "वॉल्यूम स्पाइक मिला",
        "सपोर्ट से बाउंस",
        "कंसोलिडेशन से ब्रेकआउट",
        "RSI ओवरसोल्ड क्षेत्र"
    ]
};

let currentLang = "en";

function t(key, params) {
    const dict = MESSAGES[currentLang] || MESSAGES.en;
    let str = dict[key] ?? MESSAGES.en[key] ?? key;
    if (params) {
        Object.keys(params).forEach((k) => {
            str = str.replace(new RegExp("\\{" + k + "\\}", "g"), String(params[k]));
        });
    }
    return str;
}

function getLangFlagSrc(code) {
    const lang = LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];
    return "img/" + lang.flag;
}

function getEducationLessons() {
    return EDU_LESSONS_I18N[currentLang] || EDU_LESSONS_I18N.en;
}

function getFaqContent() {
    return FAQ_I18N[currentLang] || FAQ_I18N.en;
}

function getSignalPatterns() {
    return SIGNAL_PATTERNS_I18N[currentLang] || SIGNAL_PATTERNS_I18N.en;
}

function getSignalReasons() {
    return SIGNAL_REASONS_I18N[currentLang] || SIGNAL_REASONS_I18N.en;
}

function getStoredLang() {
    try {
        const saved = localStorage.getItem(LANG_STORAGE_KEY);
        if (saved && MESSAGES[saved]) return saved;
    } catch (_) {
        /* private mode */
    }
    return "en";
}

function applyStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    document.documentElement.lang = currentLang === "hi" ? "hi" : currentLang === "ru" ? "ru" : "en";
}

function updateLangButton() {
    const img = document.getElementById("langBtnFlag");
    const btn = document.getElementById("langBtn");
    if (img) {
        img.src = getLangFlagSrc(currentLang);
        img.alt = "";
    }
    if (btn) btn.setAttribute("aria-label", t("lang.change"));
}

function renderLangModalList() {
    const list = document.getElementById("langModalList");
    if (!list) return;
    list.innerHTML = LANGUAGES.map((lang) => {
        const active = lang.code === currentLang;
        return (
            '<button type="button" role="option" class="lang-option' +
            (active ? " active" : "") +
            '" data-lang="' +
            lang.code +
            '" aria-selected="' +
            (active ? "true" : "false") +
            '">' +
            '<span class="lang-option-flag" aria-hidden="true"><img src="img/' +
            lang.flag +
            '" alt=""></span>' +
            '<span class="lang-option-copy"><strong>' +
            lang.native +
            "</strong><small>" +
            lang.name +
            "</small></span>" +
            (active
                ? '<span class="lang-option-check" aria-hidden="true"><i class="fas fa-check"></i></span>'
                : "") +
            "</button>"
        );
    }).join("");
}

function openLangModal() {
    const modal = document.getElementById("langModal");
    const btn = document.getElementById("langBtn");
    if (!modal) return;
    renderLangModalList();
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    btn?.classList.add("open");
    document.body.classList.add("lang-modal-open");
}

function closeLangModal() {
    const modal = document.getElementById("langModal");
    const btn = document.getElementById("langBtn");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    btn?.classList.remove("open");
    document.body.classList.remove("lang-modal-open");
}

function setLanguage(lang) {
    if (!MESSAGES[lang] || lang === currentLang) {
        closeLangModal();
        return;
    }
    currentLang = lang;
    try {
        localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (_) {
        /* ignore */
    }
    applyStaticTranslations();
    updateLangButton();
    renderLangModalList();
    closeLangModal();
    if (typeof window.refreshAppLanguage === "function") {
        window.refreshAppLanguage();
    }
}

function bindLangEvents() {
    document.getElementById("langBtn")?.addEventListener("click", openLangModal);
    document.getElementById("langModalClose")?.addEventListener("click", closeLangModal);
    document.getElementById("langModalBackdrop")?.addEventListener("click", closeLangModal);
    document.getElementById("langModalList")?.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-lang]");
        if (btn) setLanguage(btn.dataset.lang);
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && document.getElementById("langModal")?.classList.contains("is-open")) {
            closeLangModal();
        }
    });
}

function initI18n() {
    currentLang = getStoredLang();
    applyStaticTranslations();
    updateLangButton();
    renderLangModalList();
    bindLangEvents();
}

window.t = t;
window.setLanguage = setLanguage;
window.initI18n = initI18n;
window.getEducationLessons = getEducationLessons;
window.getFaqContent = getFaqContent;
window.getSignalPatterns = getSignalPatterns;
window.getSignalReasons = getSignalReasons;
