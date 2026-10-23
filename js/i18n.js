const LANG_STORAGE_KEY = "kvem_lang";

const LANGUAGES = [
    { code: "en", name: "English", native: "English", flag: "gb.svg" },
    { code: "ru", name: "Russian", native: "Русский", flag: "ru.svg" },
    { code: "uk", name: "Ukrainian", native: "Українська", flag: "ua.svg" },
    { code: "es", name: "Spanish", native: "Español", flag: "es.svg" },
    { code: "pt", name: "Portuguese", native: "Português", flag: "pt.svg" },
    { code: "de", name: "German", native: "Deutsch", flag: "de.svg" },
    { code: "tr", name: "Turkish", native: "Türkçe", flag: "tr.svg" },
    { code: "zh", name: "Chinese", native: "中文", flag: "cn.svg" },
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
    uk: {
        "brand.tagline": "Торговий бот",
        "nav.signals": "Сигнали",
        "nav.education": "Навчання",
        "nav.leaders": "Лідери",
        "nav.faq": "FAQ",
        "home.label": "Торгові сигнали",
        "home.title": "Як хочете торгувати?",
        "home.sub": "Оберіть спосіб — ШІ дасть напрямок за секунди",
        "method.instrument.title": "Інструмент",
        "method.instrument.desc": "Актив, пара і таймфрейм — миттєвий сигнал",
        "method.screenshot.title": "Скріншот",
        "method.screenshot.desc": "Завантажте графік — ШІ прочитає патерни",
        "method.support.title": "Підтримка",
        "method.support.desc": "Напишіть нам у Telegram",
        "flow.step1": "Крок 1 з 3",
        "flow.step2": "Крок 2 з 3",
        "flow.step3": "Крок 3 з 3",
        "asset.title": "Оберіть ринок",
        "asset.sub": "Чим торгуєте сьогодні?",
        "asset.forex.title": "Форекс",
        "asset.forex.sub": "Мажори та кроси",
        "asset.crypto.title": "Крипто",
        "asset.crypto.sub": "BTC, ETH тощо",
        "asset.stocks.title": "Акції",
        "asset.stocks.sub": "Світові компанії",
        "btn.continue": "Далі",
        "btn.back": "Назад",
        "btn.backSignals": "До сигналів",
        "btn.clear": "Очистити",
        "btn.analyze": "Аналіз",
        "pairs.forex.title": "Валютні пари",
        "pairs.forex.sub": "Оберіть валютну пару",
        "pairs.forex.subOtc": "OTC — позабіржові та синтетичні котирування",
        "pairs.forex.subStd": "Стандарт — ліквідні мажори та кроси",
        "pairs.crypto.title": "Криптовалюта",
        "pairs.crypto.sub": "Оберіть криптопару",
        "pairs.crypto.subOtc": "OTC крипто — синтетика та розширені години",
        "pairs.crypto.subStd": "Спот крипто — основні монети та альти",
        "pairs.stocks.title": "Акції",
        "pairs.stocks.sub": "Оберіть акцію компанії",
        "pairs.search": "Пошук...",
        "pairs.available": "{n} доступно",
        "pairs.none": "Пари не знайдено",
        "pairs.hot": "Топ",
        "market.stock": "Біржа",
        "market.otc": "OTC",
        "tf.title": "Таймфрейм",
        "tf.sub": "{pair} · оберіть інтервал свічки",
        "tf.seconds": "Секунди",
        "tf.minutes": "Хвилини",
        "signal.generate": "Згенерувати сигнал",
        "signal.new": "Новий сигнал",
        "signal.title": "Ваш сигнал",
        "signal.sub": "Напрямок від ШІ",
        "signal.wait": "Зачекайте {time}",
        "signal.yourIs": "Ваш сигнал",
        "signal.up": "ВГОРУ",
        "signal.down": "ВНИЗ",
        "signal.pair": "Пара:",
        "signal.pattern": "Патерн",
        "signal.timeframe": "Таймфрейм",
        "signal.confidence": "Впевненість",
        "signal.bullish": "Бичачий",
        "signal.bearish": "Ведмежий",
        "signal.trend": "Тренд",
        "signal.momentum": "Імпульс",
        "signal.indicators": "Індикатори:",
        "signal.ind.rsi": "RSI",
        "signal.ind.macd": "MACD",
        "signal.ind.ema": "EMA",
        "signal.ind.bb": "BB",
        "signal.ind.stoch": "Stoch",
        "signal.ind.volume": "Vol",
        "signal.ind.atr": "ATR",
        "signal.ind.adx": "ADX",
        "signal.trend.bullish": "Бичачий",
        "signal.trend.strongBull": "Сильний висхідний",
        "signal.trend.moderateBull": "Помірно бичачий",
        "signal.trend.bearish": "Ведмежий",
        "signal.trend.strongBear": "Сильний низхідний",
        "signal.trend.moderateBear": "Помірно ведмежий",
        "signal.momentum.high": "Високий",
        "signal.momentum.building": "Наростає",
        "signal.momentum.steady": "Стабільний",
        "signal.momentum.fading": "Слабшає",
        "signal.momentum.weak": "Слабкий",
        "signal.detail": "ШІ звірив {indicators}. {trend} на цьому таймфреймі підтверджує сигнал {direction}.",
        "signal.checkResult": "Перевірити результат",
        "signal.checking": "Перевірка...",
        "signal.checkWait": "Результат через {time}",
        "signal.checkReady": "Перевірка результату...",
        "signal.checkTooEarly": "Дочекайтеся закінчення таймфрейму",
        "signal.checkFailed": "Не вдалося перевірити результат",
        "signal.win": "WIN",
        "signal.lose": "LOSE",
        "signal.entry": "Вхід",
        "signal.exit": "Вихід",
        "signal.otcMode": "Результат OTC",
        "loading.market": "Аналіз ринку...",
        "loading.chart": "Аналіз графіка...",
        "loading.generating": "Генерація сигналу...",
        "shot.label": "Скріншот",
        "shot.title": "Аналіз графіка",
        "shot.sub": "Завантажте графік для сигналу ШІ",
        "shot.upload": "Натисніть або перетягніть файл",
        "shot.uploadHint": "PNG, JPG до 10 МБ",
        "shot.tf": "Таймфрейм",
        "shot.new": "Новий скріншот",
        "shot.fileLarge": "Файл занадто великий. Максимум 10 МБ.",
        "edu.tab.all": "Усі",
        "edu.tab.basics": "Основи",
        "edu.tab.technical": "Техніка",
        "edu.tab.risk": "Ризик",
        "edu.hub": "Центр навчання",
        "edu.meta.all.label": "Усі уроки",
        "edu.meta.all.sub": "Усі теми",
        "edu.meta.basics.label": "Основи",
        "edu.meta.basics.sub": "База трейдингу",
        "edu.meta.technical.label": "Техніка",
        "edu.meta.technical.sub": "Графіки та індикатори",
        "edu.meta.risk.label": "Ризик",
        "edu.meta.risk.sub": "Захист капіталу",
        "edu.lessons": "уроків",
        "edu.lesson": "урок",
        "edu.empty": "У цій категорії ще немає уроків.",
        "edu.cat.basics": "Основи",
        "edu.cat.technical": "Техніка",
        "edu.cat.risk": "Ризик",
        "lb.tab.today": "Сьогодні",
        "lb.tab.week": "Тиждень",
        "lb.tab.month": "Місяць",
        "lb.head": "Топ трейдери",
        "lb.today": "Сьогодні",
        "lb.week": "Цей тиждень",
        "lb.month": "Цей місяць",
        "lb.active": "{n} активних",
        "lb.trades": "угод",
        "lb.loading": "Завантаження лідерів...",
        "lb.loadFailed": "Не вдалося завантажити лідерів. Запустіть backend.",
        "lb.col.trader": "Трейдер",
        "lb.col.trades": "Угоди",
        "lb.col.profit": "P/L",
        "lang.title": "Мова",
        "lang.choose": "Оберіть мову",
        "lang.close": "Закрити",
        "lang.change": "Змінити мову",
        "theme.toggle": "Змінити тему",
        "theme.toLight": "Увімкнути світлу тему",
        "theme.toDark": "Увімкнути темну тему",
        "close.confirm": "Закрити додаток?"
    },
    es: {
        "brand.tagline": "Bot de trading",
        "nav.signals": "Señales",
        "nav.education": "Educación",
        "nav.leaders": "Líderes",
        "nav.faq": "FAQ",
        "home.label": "Señales de trading",
        "home.title": "¿Cómo quieres operar?",
        "home.sub": "Elige un método — la IA da la dirección en segundos",
        "method.instrument.title": "Instrumento",
        "method.instrument.desc": "Activo, par y timeframe — señal al instante",
        "method.screenshot.title": "Captura",
        "method.screenshot.desc": "Sube un gráfico — la IA lee los patrones",
        "method.support.title": "Soporte",
        "method.support.desc": "Chatea con nosotros en Telegram",
        "flow.step1": "Paso 1 de 3",
        "flow.step2": "Paso 2 de 3",
        "flow.step3": "Paso 3 de 3",
        "asset.title": "Elige el mercado",
        "asset.sub": "¿Qué operas hoy?",
        "asset.forex.title": "Forex",
        "asset.forex.sub": "Mayores y cruces",
        "asset.crypto.title": "Cripto",
        "asset.crypto.sub": "BTC, ETH y más",
        "asset.stocks.title": "Acciones",
        "asset.stocks.sub": "Acciones globales",
        "btn.continue": "Continuar",
        "btn.back": "Atrás",
        "btn.backSignals": "Volver a señales",
        "btn.clear": "Borrar",
        "btn.analyze": "Analizar",
        "pairs.forex.title": "Pares de divisas",
        "pairs.forex.sub": "Elige tu par forex",
        "pairs.forex.subOtc": "OTC — cotizaciones fuera de horario y sintéticas",
        "pairs.forex.subStd": "Estándar — majors y cruces líquidos",
        "pairs.crypto.title": "Criptomonedas",
        "pairs.crypto.sub": "Elige tu par cripto",
        "pairs.crypto.subOtc": "OTC cripto — sintético y horario extendido",
        "pairs.crypto.subStd": "Spot cripto — monedas principales y alts",
        "pairs.stocks.title": "Acciones",
        "pairs.stocks.sub": "Elige una acción",
        "pairs.search": "Buscar...",
        "pairs.available": "{n} disponibles",
        "pairs.none": "No se encontraron pares",
        "pairs.hot": "Top",
        "market.stock": "Bolsa",
        "market.otc": "OTC",
        "tf.title": "Timeframe",
        "tf.sub": "{pair} · elige el intervalo",
        "tf.seconds": "Segundos",
        "tf.minutes": "Minutos",
        "signal.generate": "Generar señal",
        "signal.new": "Nueva señal",
        "signal.title": "Tu señal",
        "signal.sub": "Dirección de la IA",
        "signal.wait": "Espera {time}",
        "signal.yourIs": "Tu señal es",
        "signal.up": "ARRIBA",
        "signal.down": "ABAJO",
        "signal.pair": "Par:",
        "signal.pattern": "Patrón",
        "signal.timeframe": "Timeframe",
        "signal.confidence": "Confianza",
        "signal.bullish": "Alcista",
        "signal.bearish": "Bajista",
        "signal.trend": "Tendencia",
        "signal.momentum": "Momentum",
        "signal.indicators": "Indicadores:",
        "signal.ind.rsi": "RSI",
        "signal.ind.macd": "MACD",
        "signal.ind.ema": "EMA",
        "signal.ind.bb": "BB",
        "signal.ind.stoch": "Stoch",
        "signal.ind.volume": "Vol",
        "signal.ind.atr": "ATR",
        "signal.ind.adx": "ADX",
        "signal.trend.bullish": "Alcista",
        "signal.trend.strongBull": "Tendencia alcista fuerte",
        "signal.trend.moderateBull": "Alcista moderado",
        "signal.trend.bearish": "Bajista",
        "signal.trend.strongBear": "Tendencia bajista fuerte",
        "signal.trend.moderateBear": "Bajista moderado",
        "signal.momentum.high": "Alto",
        "signal.momentum.building": "Creciendo",
        "signal.momentum.steady": "Estable",
        "signal.momentum.fading": "Debilitándose",
        "signal.momentum.weak": "Débil",
        "signal.detail": "La IA cruzó {indicators}. El sesgo {trend} en este timeframe respalda la lectura {direction}.",
        "signal.checkResult": "Comprobar resultado",
        "signal.checking": "Comprobando...",
        "signal.checkWait": "Resultado en {time}",
        "signal.checkReady": "Comprobando resultado...",
        "signal.checkTooEarly": "Espera a que termine el timeframe",
        "signal.checkFailed": "No se pudo comprobar el resultado",
        "signal.win": "WIN",
        "signal.lose": "LOSE",
        "signal.entry": "Entrada",
        "signal.exit": "Salida",
        "signal.otcMode": "Resultado OTC",
        "loading.market": "Analizando mercado...",
        "loading.chart": "Analizando gráfico...",
        "loading.generating": "Generando señal...",
        "shot.label": "Captura",
        "shot.title": "Análisis del gráfico",
        "shot.sub": "Sube tu gráfico para una señal de IA",
        "shot.upload": "Toca para subir o arrastra",
        "shot.uploadHint": "PNG, JPG hasta 10 MB",
        "shot.tf": "Timeframe",
        "shot.new": "Nueva captura",
        "shot.fileLarge": "El archivo es demasiado grande. Máximo 10 MB.",
        "edu.tab.all": "Todos",
        "edu.tab.basics": "Básicos",
        "edu.tab.technical": "Técnico",
        "edu.tab.risk": "Riesgo",
        "edu.hub": "Centro de aprendizaje",
        "edu.meta.all.label": "Todas las lecciones",
        "edu.meta.all.sub": "Explora todos los temas",
        "edu.meta.basics.label": "Básicos",
        "edu.meta.basics.sub": "Fundamentos del trading",
        "edu.meta.technical.label": "Técnico",
        "edu.meta.technical.sub": "Gráficos e indicadores",
        "edu.meta.risk.label": "Riesgo",
        "edu.meta.risk.sub": "Protege tu capital",
        "edu.lessons": "lecciones",
        "edu.lesson": "lección",
        "edu.empty": "Aún no hay lecciones en esta categoría.",
        "edu.cat.basics": "Básicos",
        "edu.cat.technical": "Técnico",
        "edu.cat.risk": "Riesgo",
        "lb.tab.today": "Hoy",
        "lb.tab.week": "Semana",
        "lb.tab.month": "Mes",
        "lb.head": "Mejores traders",
        "lb.today": "Hoy",
        "lb.week": "Esta semana",
        "lb.month": "Este mes",
        "lb.active": "{n} activos",
        "lb.trades": "operaciones",
        "lb.loading": "Cargando líderes...",
        "lb.loadFailed": "No se pudieron cargar los líderes. Inicia el backend.",
        "lb.col.trader": "Trader",
        "lb.col.trades": "Ops",
        "lb.col.profit": "P/L",
        "lang.title": "Idioma",
        "lang.choose": "Elige tu idioma",
        "lang.close": "Cerrar",
        "lang.change": "Cambiar idioma",
        "theme.toggle": "Cambiar tema",
        "theme.toLight": "Cambiar a tema claro",
        "theme.toDark": "Cambiar a tema oscuro",
        "close.confirm": "¿Cerrar la app?"
    },
    pt: {
        "brand.tagline": "Bot de trading",
        "nav.signals": "Sinais",
        "nav.education": "Educação",
        "nav.leaders": "Líderes",
        "nav.faq": "FAQ",
        "home.label": "Sinais de trading",
        "home.title": "Como quer negociar?",
        "home.sub": "Escolha um método — a IA gera a direção em segundos",
        "method.instrument.title": "Instrumento",
        "method.instrument.desc": "Ativo, par e timeframe — sinal instantâneo",
        "method.screenshot.title": "Captura",
        "method.screenshot.desc": "Envie um gráfico — a IA lê os padrões",
        "method.support.title": "Suporte",
        "method.support.desc": "Fale connosco no Telegram",
        "flow.step1": "Passo 1 de 3",
        "flow.step2": "Passo 2 de 3",
        "flow.step3": "Passo 3 de 3",
        "asset.title": "Escolha o mercado",
        "asset.sub": "O que está a negociar hoje?",
        "asset.forex.title": "Forex",
        "asset.forex.sub": "Majors e crosses",
        "asset.crypto.title": "Cripto",
        "asset.crypto.sub": "BTC, ETH e mais",
        "asset.stocks.title": "Ações",
        "asset.stocks.sub": "Ações globais",
        "btn.continue": "Continuar",
        "btn.back": "Voltar",
        "btn.backSignals": "Voltar aos sinais",
        "btn.clear": "Limpar",
        "btn.analyze": "Analisar",
        "pairs.forex.title": "Pares de moedas",
        "pairs.forex.sub": "Escolha o seu par forex",
        "pairs.forex.subOtc": "OTC — cotações fora de horário e sintéticas",
        "pairs.forex.subStd": "Padrão — majors e crosses líquidos",
        "pairs.crypto.title": "Criptomoedas",
        "pairs.crypto.sub": "Escolha o seu par cripto",
        "pairs.crypto.subOtc": "OTC cripto — sintético e horário alargado",
        "pairs.crypto.subStd": "Spot cripto — moedas principais e alts",
        "pairs.stocks.title": "Ações",
        "pairs.stocks.sub": "Escolha uma ação",
        "pairs.search": "Pesquisar...",
        "pairs.available": "{n} disponíveis",
        "pairs.none": "Nenhum par encontrado",
        "pairs.hot": "Top",
        "market.stock": "Bolsa",
        "market.otc": "OTC",
        "tf.title": "Timeframe",
        "tf.sub": "{pair} · escolha o intervalo",
        "tf.seconds": "Segundos",
        "tf.minutes": "Minutos",
        "signal.generate": "Gerar sinal",
        "signal.new": "Novo sinal",
        "signal.title": "O seu sinal",
        "signal.sub": "Direção da IA",
        "signal.wait": "Aguarde {time}",
        "signal.yourIs": "O seu sinal é",
        "signal.up": "ALTA",
        "signal.down": "BAIXA",
        "signal.pair": "Par:",
        "signal.pattern": "Padrão",
        "signal.timeframe": "Timeframe",
        "signal.confidence": "Confiança",
        "signal.bullish": "Alta",
        "signal.bearish": "Baixa",
        "signal.trend": "Tendência",
        "signal.momentum": "Momentum",
        "signal.indicators": "Indicadores:",
        "signal.ind.rsi": "RSI",
        "signal.ind.macd": "MACD",
        "signal.ind.ema": "EMA",
        "signal.ind.bb": "BB",
        "signal.ind.stoch": "Stoch",
        "signal.ind.volume": "Vol",
        "signal.ind.atr": "ATR",
        "signal.ind.adx": "ADX",
        "signal.trend.bullish": "Alta",
        "signal.trend.strongBull": "Tendência de alta forte",
        "signal.trend.moderateBull": "Alta moderada",
        "signal.trend.bearish": "Baixa",
        "signal.trend.strongBear": "Tendência de baixa forte",
        "signal.trend.moderateBear": "Baixa moderada",
        "signal.momentum.high": "Alto",
        "signal.momentum.building": "A crescer",
        "signal.momentum.steady": "Estável",
        "signal.momentum.fading": "A enfraquecer",
        "signal.momentum.weak": "Fraco",
        "signal.detail": "A IA cruzou {indicators}. O viés {trend} neste timeframe apoia a leitura {direction}.",
        "signal.checkResult": "Verificar resultado",
        "signal.checking": "A verificar...",
        "signal.checkWait": "Resultado em {time}",
        "signal.checkReady": "A verificar resultado...",
        "signal.checkTooEarly": "Aguarde o fim do timeframe",
        "signal.checkFailed": "Não foi possível verificar o resultado",
        "signal.win": "WIN",
        "signal.lose": "LOSE",
        "signal.entry": "Entrada",
        "signal.exit": "Saída",
        "signal.otcMode": "Resultado OTC",
        "loading.market": "A analisar o mercado...",
        "loading.chart": "A analisar o gráfico...",
        "loading.generating": "A gerar sinal...",
        "shot.label": "Captura",
        "shot.title": "Análise do gráfico",
        "shot.sub": "Envie o gráfico para um sinal de IA",
        "shot.upload": "Toque para enviar ou arraste",
        "shot.uploadHint": "PNG, JPG até 10 MB",
        "shot.tf": "Timeframe",
        "shot.new": "Nova captura",
        "shot.fileLarge": "Ficheiro demasiado grande. Máximo 10 MB.",
        "edu.tab.all": "Todos",
        "edu.tab.basics": "Básicos",
        "edu.tab.technical": "Técnico",
        "edu.tab.risk": "Risco",
        "edu.hub": "Centro de aprendizagem",
        "edu.meta.all.label": "Todas as lições",
        "edu.meta.all.sub": "Explore todos os temas",
        "edu.meta.basics.label": "Básicos",
        "edu.meta.basics.sub": "Fundamentos do trading",
        "edu.meta.technical.label": "Técnico",
        "edu.meta.technical.sub": "Gráficos e indicadores",
        "edu.meta.risk.label": "Risco",
        "edu.meta.risk.sub": "Proteja o seu capital",
        "edu.lessons": "lições",
        "edu.lesson": "lição",
        "edu.empty": "Ainda não há lições nesta categoria.",
        "edu.cat.basics": "Básicos",
        "edu.cat.technical": "Técnico",
        "edu.cat.risk": "Risco",
        "lb.tab.today": "Hoje",
        "lb.tab.week": "Semana",
        "lb.tab.month": "Mês",
        "lb.head": "Melhores traders",
        "lb.today": "Hoje",
        "lb.week": "Esta semana",
        "lb.month": "Este mês",
        "lb.active": "{n} ativos",
        "lb.trades": "operações",
        "lb.loading": "A carregar líderes...",
        "lb.loadFailed": "Não foi possível carregar os líderes. Inicie o backend.",
        "lb.col.trader": "Trader",
        "lb.col.trades": "Ops",
        "lb.col.profit": "P/L",
        "lang.title": "Idioma",
        "lang.choose": "Escolha o seu idioma",
        "lang.close": "Fechar",
        "lang.change": "Mudar idioma",
        "theme.toggle": "Alternar tema",
        "theme.toLight": "Mudar para tema claro",
        "theme.toDark": "Mudar para tema escuro",
        "close.confirm": "Fechar a aplicação?"
    },
    de: {
        "brand.tagline": "Trade-Bot",
        "nav.signals": "Signale",
        "nav.education": "Lernen",
        "nav.leaders": "Leaderboard",
        "nav.faq": "FAQ",
        "home.label": "Handelssignale",
        "home.title": "Wie möchten Sie handeln?",
        "home.sub": "Methode wählen — KI liefert die Richtung in Sekunden",
        "method.instrument.title": "Instrument",
        "method.instrument.desc": "Asset, Paar und Timeframe — sofortiges Signal",
        "method.screenshot.title": "Screenshot",
        "method.screenshot.desc": "Chart hochladen — KI liest Muster",
        "method.support.title": "Support",
        "method.support.desc": "Chatte mit uns in Telegram",
        "flow.step1": "Schritt 1 von 3",
        "flow.step2": "Schritt 2 von 3",
        "flow.step3": "Schritt 3 von 3",
        "asset.title": "Markt wählen",
        "asset.sub": "Womit handeln Sie heute?",
        "asset.forex.title": "Forex",
        "asset.forex.sub": "Majors & Kreuze",
        "asset.crypto.title": "Krypto",
        "asset.crypto.sub": "BTC, ETH & mehr",
        "asset.stocks.title": "Aktien",
        "asset.stocks.sub": "Globale Aktien",
        "btn.continue": "Weiter",
        "btn.back": "Zurück",
        "btn.backSignals": "Zu Signalen",
        "btn.clear": "Löschen",
        "btn.analyze": "Analysieren",
        "pairs.forex.title": "Währungspaare",
        "pairs.forex.sub": "Wählen Sie Ihr Forex-Paar",
        "pairs.forex.subOtc": "OTC — nachbörslich & synthetisch",
        "pairs.forex.subStd": "Standard — liquide Majors & Kreuze",
        "pairs.crypto.title": "Kryptowährung",
        "pairs.crypto.sub": "Wählen Sie Ihr Krypto-Paar",
        "pairs.crypto.subOtc": "OTC-Krypto — synthetisch & verlängerte Zeiten",
        "pairs.crypto.subStd": "Spot-Krypto — Top-Coins & Alts",
        "pairs.stocks.title": "Aktien",
        "pairs.stocks.sub": "Wählen Sie eine Aktie",
        "pairs.search": "Suchen...",
        "pairs.available": "{n} verfügbar",
        "pairs.none": "Keine Paare gefunden",
        "pairs.hot": "Top",
        "market.stock": "Börse",
        "market.otc": "OTC",
        "tf.title": "Timeframe",
        "tf.sub": "{pair} · Kerzenintervall wählen",
        "tf.seconds": "Sekunden",
        "tf.minutes": "Minuten",
        "signal.generate": "Signal generieren",
        "signal.new": "Neues Signal",
        "signal.title": "Ihr Signal",
        "signal.sub": "KI-Richtung",
        "signal.wait": "Warten {time}",
        "signal.yourIs": "Ihr Signal ist",
        "signal.up": "AUF",
        "signal.down": "AB",
        "signal.pair": "Paar:",
        "signal.pattern": "Muster",
        "signal.timeframe": "Timeframe",
        "signal.confidence": "Konfidenz",
        "signal.bullish": "Bullisch",
        "signal.bearish": "Bearisch",
        "signal.trend": "Trend",
        "signal.momentum": "Momentum",
        "signal.indicators": "Indikatoren:",
        "signal.ind.rsi": "RSI",
        "signal.ind.macd": "MACD",
        "signal.ind.ema": "EMA",
        "signal.ind.bb": "BB",
        "signal.ind.stoch": "Stoch",
        "signal.ind.volume": "Vol",
        "signal.ind.atr": "ATR",
        "signal.ind.adx": "ADX",
        "signal.trend.bullish": "Bullisch",
        "signal.trend.strongBull": "Starker Aufwärtstrend",
        "signal.trend.moderateBull": "Moderat bullisch",
        "signal.trend.bearish": "Bearisch",
        "signal.trend.strongBear": "Starker Abwärtstrend",
        "signal.trend.moderateBear": "Moderat bearisch",
        "signal.momentum.high": "Hoch",
        "signal.momentum.building": "Aufbauend",
        "signal.momentum.steady": "Stabil",
        "signal.momentum.fading": "Nachlassend",
        "signal.momentum.weak": "Schwach",
        "signal.detail": "KI hat {indicators} geprüft. {trend}-Bias auf diesem Timeframe stützt die {direction}-Lesart.",
        "signal.checkResult": "Ergebnis prüfen",
        "signal.checking": "Prüfen...",
        "signal.checkWait": "Ergebnis in {time}",
        "signal.checkReady": "Ergebnis wird geprüft...",
        "signal.checkTooEarly": "Warten Sie bis zum Ende des Timeframes",
        "signal.checkFailed": "Ergebnis konnte nicht geprüft werden",
        "signal.win": "WIN",
        "signal.lose": "LOSE",
        "signal.entry": "Einstieg",
        "signal.exit": "Ausstieg",
        "signal.otcMode": "OTC-Ergebnis",
        "loading.market": "Markt wird analysiert...",
        "loading.chart": "Chart wird analysiert...",
        "loading.generating": "Signal wird erzeugt...",
        "shot.label": "Screenshot",
        "shot.title": "Chart-Analyse",
        "shot.sub": "Chart hochladen für ein KI-Signal",
        "shot.upload": "Tippen oder Datei ziehen",
        "shot.uploadHint": "PNG, JPG bis 10 MB",
        "shot.tf": "Timeframe",
        "shot.new": "Neuer Screenshot",
        "shot.fileLarge": "Datei zu groß. Maximum 10 MB.",
        "edu.tab.all": "Alle",
        "edu.tab.basics": "Basics",
        "edu.tab.technical": "Technik",
        "edu.tab.risk": "Risiko",
        "edu.hub": "Lernzentrum",
        "edu.meta.all.label": "Alle Lektionen",
        "edu.meta.all.sub": "Alle Themen durchsuchen",
        "edu.meta.basics.label": "Basics",
        "edu.meta.basics.sub": "Grundlagen des Tradings",
        "edu.meta.technical.label": "Technik",
        "edu.meta.technical.sub": "Charts und Indikatoren",
        "edu.meta.risk.label": "Risiko",
        "edu.meta.risk.sub": "Kapital schützen",
        "edu.lessons": "Lektionen",
        "edu.lesson": "Lektion",
        "edu.empty": "In dieser Kategorie gibt es noch keine Lektionen.",
        "edu.cat.basics": "Basics",
        "edu.cat.technical": "Technik",
        "edu.cat.risk": "Risiko",
        "lb.tab.today": "Heute",
        "lb.tab.week": "Woche",
        "lb.tab.month": "Monat",
        "lb.head": "Top-Trader",
        "lb.today": "Heute",
        "lb.week": "Diese Woche",
        "lb.month": "Dieser Monat",
        "lb.active": "{n} aktiv",
        "lb.trades": "Trades",
        "lb.loading": "Leaderboard wird geladen...",
        "lb.loadFailed": "Leaderboard konnte nicht geladen werden. Backend starten.",
        "lb.col.trader": "Trader",
        "lb.col.trades": "Trades",
        "lb.col.profit": "P/L",
        "lang.title": "Sprache",
        "lang.choose": "Sprache wählen",
        "lang.close": "Schließen",
        "lang.change": "Sprache ändern",
        "theme.toggle": "Theme wechseln",
        "theme.toLight": "Zum hellen Theme",
        "theme.toDark": "Zum dunklen Theme",
        "close.confirm": "App schließen?"
    },
    tr: {
        "brand.tagline": "İşlem botu",
        "nav.signals": "Sinyaller",
        "nav.education": "Eğitim",
        "nav.leaders": "Liderler",
        "nav.faq": "SSS",
        "home.label": "İşlem sinyalleri",
        "home.title": "Nasıl işlem yapmak istersiniz?",
        "home.sub": "Yöntem seçin — YZ saniyeler içinde yön verir",
        "method.instrument.title": "Enstrüman",
        "method.instrument.desc": "Varlık, parite ve zaman dilimi — anında sinyal",
        "method.screenshot.title": "Ekran görüntüsü",
        "method.screenshot.desc": "Grafik yükleyin — YZ kalıpları okur",
        "method.support.title": "Destek",
        "method.support.desc": "Telegram'da bizimle sohbet edin",
        "flow.step1": "Adım 1 / 3",
        "flow.step2": "Adım 2 / 3",
        "flow.step3": "Adım 3 / 3",
        "asset.title": "Piyasa seçin",
        "asset.sub": "Bugün ne işlem yapıyorsunuz?",
        "asset.forex.title": "Forex",
        "asset.forex.sub": "Majörler ve çaprazlar",
        "asset.crypto.title": "Kripto",
        "asset.crypto.sub": "BTC, ETH ve daha fazlası",
        "asset.stocks.title": "Hisse",
        "asset.stocks.sub": "Küresel hisseler",
        "btn.continue": "Devam",
        "btn.back": "Geri",
        "btn.backSignals": "Sinyallere dön",
        "btn.clear": "Temizle",
        "btn.analyze": "Analiz",
        "pairs.forex.title": "Döviz çiftleri",
        "pairs.forex.sub": "Forex çiftinizi seçin",
        "pairs.forex.subOtc": "OTC — mesai dışı ve sentetik kotasyonlar",
        "pairs.forex.subStd": "Standart — likit majörler ve çaprazlar",
        "pairs.crypto.title": "Kripto para",
        "pairs.crypto.sub": "Kripto çiftinizi seçin",
        "pairs.crypto.subOtc": "OTC kripto — sentetik ve uzatılmış saatler",
        "pairs.crypto.subStd": "Spot kripto — ana coinler ve altlar",
        "pairs.stocks.title": "Hisseler",
        "pairs.stocks.sub": "Bir hisse seçin",
        "pairs.search": "Ara...",
        "pairs.available": "{n} mevcut",
        "pairs.none": "Çift bulunamadı",
        "pairs.hot": "Popüler",
        "market.stock": "Borsa",
        "market.otc": "OTC",
        "tf.title": "Zaman dilimi",
        "tf.sub": "{pair} · mum aralığını seçin",
        "tf.seconds": "Saniye",
        "tf.minutes": "Dakika",
        "signal.generate": "Sinyal oluştur",
        "signal.new": "Yeni sinyal",
        "signal.title": "Sinyaliniz",
        "signal.sub": "YZ yönü",
        "signal.wait": "{time} bekleyin",
        "signal.yourIs": "Sinyaliniz",
        "signal.up": "YUKARI",
        "signal.down": "AŞAĞI",
        "signal.pair": "Çift:",
        "signal.pattern": "Formasyon",
        "signal.timeframe": "Zaman dilimi",
        "signal.confidence": "Güven",
        "signal.bullish": "Yükseliş",
        "signal.bearish": "Düşüş",
        "signal.trend": "Trend",
        "signal.momentum": "Momentum",
        "signal.indicators": "Göstergeler:",
        "signal.ind.rsi": "RSI",
        "signal.ind.macd": "MACD",
        "signal.ind.ema": "EMA",
        "signal.ind.bb": "BB",
        "signal.ind.stoch": "Stoch",
        "signal.ind.volume": "Vol",
        "signal.ind.atr": "ATR",
        "signal.ind.adx": "ADX",
        "signal.trend.bullish": "Yükseliş",
        "signal.trend.strongBull": "Güçlü yükseliş trendi",
        "signal.trend.moderateBull": "Orta düzey yükseliş",
        "signal.trend.bearish": "Düşüş",
        "signal.trend.strongBear": "Güçlü düşüş trendi",
        "signal.trend.moderateBear": "Orta düzey düşüş",
        "signal.momentum.high": "Yüksek",
        "signal.momentum.building": "Artıyor",
        "signal.momentum.steady": "Stabil",
        "signal.momentum.fading": "Zayıflıyor",
        "signal.momentum.weak": "Zayıf",
        "signal.detail": "YZ {indicators} kontrol etti. Bu zaman diliminde {trend} eğilim {direction} okumasını destekliyor.",
        "signal.checkResult": "Sonucu kontrol et",
        "signal.checking": "Kontrol ediliyor...",
        "signal.checkWait": "Sonuç {time} içinde",
        "signal.checkReady": "Sonuç kontrol ediliyor...",
        "signal.checkTooEarly": "Zaman diliminin bitmesini bekleyin",
        "signal.checkFailed": "Sonuç kontrol edilemedi",
        "signal.win": "WIN",
        "signal.lose": "LOSE",
        "signal.entry": "Giriş",
        "signal.exit": "Çıkış",
        "signal.otcMode": "OTC sonucu",
        "loading.market": "Piyasa analiz ediliyor...",
        "loading.chart": "Grafik analiz ediliyor...",
        "loading.generating": "Sinyal oluşturuluyor...",
        "shot.label": "Ekran görüntüsü",
        "shot.title": "Grafik analizi",
        "shot.sub": "YZ sinyali için grafiğinizi yükleyin",
        "shot.upload": "Dokunun veya sürükleyin",
        "shot.uploadHint": "PNG, JPG en fazla 10 MB",
        "shot.tf": "Zaman dilimi",
        "shot.new": "Yeni ekran görüntüsü",
        "shot.fileLarge": "Dosya çok büyük. Maksimum 10 MB.",
        "edu.tab.all": "Tümü",
        "edu.tab.basics": "Temeller",
        "edu.tab.technical": "Teknik",
        "edu.tab.risk": "Risk",
        "edu.hub": "Öğrenme merkezi",
        "edu.meta.all.label": "Tüm dersler",
        "edu.meta.all.sub": "Tüm konuları gezinin",
        "edu.meta.basics.label": "Temeller",
        "edu.meta.basics.sub": "Trading temelleri",
        "edu.meta.technical.label": "Teknik",
        "edu.meta.technical.sub": "Grafikler ve göstergeler",
        "edu.meta.risk.label": "Risk",
        "edu.meta.risk.sub": "Sermayenizi koruyun",
        "edu.lessons": "ders",
        "edu.lesson": "ders",
        "edu.empty": "Bu kategoride henüz ders yok.",
        "edu.cat.basics": "Temeller",
        "edu.cat.technical": "Teknik",
        "edu.cat.risk": "Risk",
        "lb.tab.today": "Bugün",
        "lb.tab.week": "Hafta",
        "lb.tab.month": "Ay",
        "lb.head": "En iyi traderlar",
        "lb.today": "Bugün",
        "lb.week": "Bu hafta",
        "lb.month": "Bu ay",
        "lb.active": "{n} aktif",
        "lb.trades": "işlem",
        "lb.loading": "Liderler yükleniyor...",
        "lb.loadFailed": "Liderler yüklenemedi. Backend'i başlatın.",
        "lb.col.trader": "Trader",
        "lb.col.trades": "İşlem",
        "lb.col.profit": "P/L",
        "lang.title": "Dil",
        "lang.choose": "Dilinizi seçin",
        "lang.close": "Kapat",
        "lang.change": "Dili değiştir",
        "theme.toggle": "Temayı değiştir",
        "theme.toLight": "Açık temaya geç",
        "theme.toDark": "Koyu temaya geç",
        "close.confirm": "Uygulama kapatılsın mı?"
    },
    zh: {
        "brand.tagline": "交易机器人",
        "nav.signals": "信号",
        "nav.education": "学习",
        "nav.leaders": "排行榜",
        "nav.faq": "常见问题",
        "home.label": "交易信号",
        "home.title": "你想如何交易？",
        "home.sub": "选择方式 — AI 几秒给出方向",
        "method.instrument.title": "品种",
        "method.instrument.desc": "资产、货币对与周期 — 即时信号",
        "method.screenshot.title": "截图",
        "method.screenshot.desc": "上传图表 — AI 识别形态",
        "method.support.title": "客服",
        "method.support.desc": "在 Telegram 与我们联系",
        "flow.step1": "第 1 / 3 步",
        "flow.step2": "第 2 / 3 步",
        "flow.step3": "第 3 / 3 步",
        "asset.title": "选择市场",
        "asset.sub": "今天交易什么？",
        "asset.forex.title": "外汇",
        "asset.forex.sub": "主要货币对与交叉盘",
        "asset.crypto.title": "加密",
        "asset.crypto.sub": "BTC、ETH 等",
        "asset.stocks.title": "股票",
        "asset.stocks.sub": "全球股票",
        "btn.continue": "继续",
        "btn.back": "返回",
        "btn.backSignals": "返回信号",
        "btn.clear": "清除",
        "btn.analyze": "分析",
        "pairs.forex.title": "货币对",
        "pairs.forex.sub": "选择外汇货币对",
        "pairs.forex.subOtc": "OTC — 盘后与合成报价",
        "pairs.forex.subStd": "标准 — 流动性强的主要与交叉盘",
        "pairs.crypto.title": "加密货币",
        "pairs.crypto.sub": "选择加密货币对",
        "pairs.crypto.subOtc": "OTC 加密 — 合成与延长时段",
        "pairs.crypto.subStd": "现货加密 — 主流币与山寨",
        "pairs.stocks.title": "股票",
        "pairs.stocks.sub": "选择公司股票",
        "pairs.search": "搜索...",
        "pairs.available": "共 {n} 个",
        "pairs.none": "未找到货币对",
        "pairs.hot": "热门",
        "market.stock": "交易所",
        "market.otc": "OTC",
        "tf.title": "时间周期",
        "tf.sub": "{pair} · 选择K线周期",
        "tf.seconds": "秒",
        "tf.minutes": "分钟",
        "signal.generate": "生成信号",
        "signal.new": "新信号",
        "signal.title": "你的信号",
        "signal.sub": "AI 方向",
        "signal.wait": "请等待 {time}",
        "signal.yourIs": "你的信号是",
        "signal.up": "上涨",
        "signal.down": "下跌",
        "signal.pair": "货币对：",
        "signal.pattern": "形态",
        "signal.timeframe": "周期",
        "signal.confidence": "信心度",
        "signal.bullish": "看涨",
        "signal.bearish": "看跌",
        "signal.trend": "趋势",
        "signal.momentum": "动能",
        "signal.indicators": "指标：",
        "signal.ind.rsi": "RSI",
        "signal.ind.macd": "MACD",
        "signal.ind.ema": "EMA",
        "signal.ind.bb": "BB",
        "signal.ind.stoch": "Stoch",
        "signal.ind.volume": "Vol",
        "signal.ind.atr": "ATR",
        "signal.ind.adx": "ADX",
        "signal.trend.bullish": "看涨",
        "signal.trend.strongBull": "强劲上升趋势",
        "signal.trend.moderateBull": "温和看涨",
        "signal.trend.bearish": "看跌",
        "signal.trend.strongBear": "强劲下降趋势",
        "signal.trend.moderateBear": "温和看跌",
        "signal.momentum.high": "高",
        "signal.momentum.building": "增强",
        "signal.momentum.steady": "稳定",
        "signal.momentum.fading": "减弱",
        "signal.momentum.weak": "弱",
        "signal.detail": "AI 核对了 {indicators}。本周期的 {trend} 偏向支持 {direction} 判断。",
        "signal.checkResult": "查看结果",
        "signal.checking": "检查中...",
        "signal.checkWait": "{time} 后出结果",
        "signal.checkReady": "正在检查结果...",
        "signal.checkTooEarly": "请等待周期结束",
        "signal.checkFailed": "无法检查结果",
        "signal.win": "WIN",
        "signal.lose": "LOSE",
        "signal.entry": "入场",
        "signal.exit": "出场",
        "signal.otcMode": "OTC 结果",
        "loading.market": "正在分析市场...",
        "loading.chart": "正在分析图表...",
        "loading.generating": "正在生成信号...",
        "shot.label": "截图",
        "shot.title": "图表分析",
        "shot.sub": "上传图表获取 AI 信号",
        "shot.upload": "点击上传或拖放",
        "shot.uploadHint": "PNG、JPG，最大 10MB",
        "shot.tf": "时间周期",
        "shot.new": "新截图",
        "shot.fileLarge": "文件过大。最大 10MB。",
        "edu.tab.all": "全部",
        "edu.tab.basics": "基础",
        "edu.tab.technical": "技术",
        "edu.tab.risk": "风险",
        "edu.hub": "学习中心",
        "edu.meta.all.label": "全部课程",
        "edu.meta.all.sub": "浏览所有主题",
        "edu.meta.basics.label": "基础",
        "edu.meta.basics.sub": "交易基础",
        "edu.meta.technical.label": "技术",
        "edu.meta.technical.sub": "图表与指标",
        "edu.meta.risk.label": "风险",
        "edu.meta.risk.sub": "保护资金",
        "edu.lessons": "课",
        "edu.lesson": "课",
        "edu.empty": "该分类暂无课程。",
        "edu.cat.basics": "基础",
        "edu.cat.technical": "技术",
        "edu.cat.risk": "风险",
        "lb.tab.today": "今日",
        "lb.tab.week": "本周",
        "lb.tab.month": "本月",
        "lb.head": "顶尖交易者",
        "lb.today": "今日",
        "lb.week": "本周",
        "lb.month": "本月",
        "lb.active": "{n} 位活跃",
        "lb.trades": "笔交易",
        "lb.loading": "正在加载排行榜...",
        "lb.loadFailed": "无法加载排行榜。请启动后端。",
        "lb.col.trader": "交易者",
        "lb.col.trades": "交易",
        "lb.col.profit": "盈亏",
        "lang.title": "语言",
        "lang.choose": "选择语言",
        "lang.close": "关闭",
        "lang.change": "更改语言",
        "theme.toggle": "切换主题",
        "theme.toLight": "切换到浅色主题",
        "theme.toDark": "切换到深色主题",
        "close.confirm": "关闭应用？"
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
    uk: [
        {
            "cat": "basics",
            "icon": "fa-globe",
            "title": "Що таке форекс?",
            "desc": "Форекс — світовий ринок обміну валют. Ціни рухаються в парах на кшталт EUR/USD; трейдери купують дешевше і продають дорожче — або навпаки."
        },
        {
            "cat": "basics",
            "icon": "fa-ruler",
            "title": "Що таке пункт (піп)?",
            "desc": "Піп — мінімальний стандартний крок ціни в більшості пар. Для EUR/USD один піп зазвичай 0,0001. Вартість піпа залежить від лота і валюти рахунку."
        },
        {
            "cat": "basics",
            "icon": "fa-layer-group",
            "title": "Розміри лотів",
            "desc": "Стандартний лот — 100 000 одиниць, міні — 10 000, мікро — 1 000. Менші лоти знижують ризик на угоду, поки ви вчитеся."
        },
        {
            "cat": "technical",
            "icon": "fa-chart-area",
            "title": "Підтримка і опір",
            "desc": "Підтримка — зона, де покупки часто зупиняють падіння. Опір — де продажі обмежують зростання. Пробої та відскоки від рівнів — основа читання графіка."
        },
        {
            "cat": "technical",
            "icon": "fa-wave-square",
            "title": "Індикатор RSI",
            "desc": "RSI вимірює імпульс за шкалою 0–100. Вище 70 — перекупленість, нижче 30 — перепроданість. Використовуйте разом із трендом і структурою."
        },
        {
            "cat": "technical",
            "icon": "fa-chart-line",
            "title": "Ковзні середні",
            "desc": "MA згладжують ціну і показують напрямок. Ціна вище зростаючої MA часто бичача; перетини швидкої і повільної MA — популярний фільтр входу."
        },
        {
            "cat": "technical",
            "icon": "fa-arrows-left-right",
            "title": "Стратегія MACD",
            "desc": "MACD відстежує зв’язок двох MA. Перетини сигнальної лінії і гістограми натякають на зміну імпульсу — підтверджуйте старшим таймфреймом."
        },
        {
            "cat": "risk",
            "icon": "fa-shield-halved",
            "title": "Управління ризиком",
            "desc": "Ризикуйте 1–2% рахунку на угоду. Стоп і тейк задайте до входу, щоб емоції не ламали план."
        },
        {
            "cat": "risk",
            "icon": "fa-scale-balanced",
            "title": "Розмір позиції",
            "desc": "Розмір залежить від стопа і відсотка ризику. Широкий стоп — менший обсяг; вузький — трохи більший при тому ж доларовому ризику."
        },
        {
            "cat": "risk",
            "icon": "fa-book-open",
            "title": "Торговий щоденник",
            "desc": "Записуйте кожну угоду: сетап, вхід, вихід, емоції. Раз на тиждень розбирайте помилки і підсилюйте те, що реально працює."
        }
    ],
    es: [
        {
            "cat": "basics",
            "icon": "fa-globe",
            "title": "¿Qué es el trading de Forex?",
            "desc": "Forex es el mercado global de intercambio de divisas. Los precios se mueven en pares como EUR/USD; los traders buscan comprar barato y vender caro — o al revés."
        },
        {
            "cat": "basics",
            "icon": "fa-ruler",
            "title": "¿Qué es un pip?",
            "desc": "Un pip es el movimiento mínimo estándar en la mayoría de pares. En EUR/USD suele ser 0,0001. Su valor depende del lote y de la divisa de la cuenta."
        },
        {
            "cat": "basics",
            "icon": "fa-layer-group",
            "title": "Tamaños de lote",
            "desc": "Un lote estándar son 100.000 unidades, un mini 10.000 y un micro 1.000. Lotes más pequeños reducen el riesgo mientras aprendes."
        },
        {
            "cat": "technical",
            "icon": "fa-chart-area",
            "title": "Soporte y resistencia",
            "desc": "El soporte es una zona donde las compras suelen frenar la caída. La resistencia donde las ventas limitan las subidas. Rupturas y rebotes son clave."
        },
        {
            "cat": "technical",
            "icon": "fa-wave-square",
            "title": "Indicador RSI",
            "desc": "El RSI mide el momentum de 0 a 100. Por encima de 70 sugiere sobrecompra; por debajo de 30, sobreventa. Úsalo con tendencia y estructura."
        },
        {
            "cat": "technical",
            "icon": "fa-chart-line",
            "title": "Medias móviles",
            "desc": "Las medias suavizan el precio y marcan dirección. Precio por encima de una MA alcista suele ser sesgo alcista; cruces de MA rápidas y lentas filtran entradas."
        },
        {
            "cat": "technical",
            "icon": "fa-arrows-left-right",
            "title": "Estrategia MACD",
            "desc": "El MACD relaciona dos medias. Cruces de la señal e histograma pueden indicar cambios de momentum — confirma con timeframe superior."
        },
        {
            "cat": "risk",
            "icon": "fa-shield-halved",
            "title": "Gestión del riesgo",
            "desc": "Arriesga solo el 1–2% de la cuenta por operación. Define stop y take-profit antes de entrar."
        },
        {
            "cat": "risk",
            "icon": "fa-scale-balanced",
            "title": "Tamaño de posición",
            "desc": "El tamaño sigue la distancia del stop y el % de riesgo. Stops más amplios = tamaño menor."
        },
        {
            "cat": "risk",
            "icon": "fa-book-open",
            "title": "Diario de trading",
            "desc": "Registra cada trade: setup, entrada, salida y emoción. Revísalo semanalmente para corregir errores."
        }
    ],
    pt: [
        {
            "cat": "basics",
            "icon": "fa-globe",
            "title": "O que é trading de Forex?",
            "desc": "Forex é o mercado global de câmbio. Os preços movem-se em pares como EUR/USD; os traders compram barato e vendem caro — ou o inverso."
        },
        {
            "cat": "basics",
            "icon": "fa-ruler",
            "title": "O que é um pip?",
            "desc": "Um pip é o movimento mínimo padrão na maioria dos pares. Em EUR/USD costuma ser 0,0001. O valor depende do lote e da moeda da conta."
        },
        {
            "cat": "basics",
            "icon": "fa-layer-group",
            "title": "Tamanhos de lote",
            "desc": "Um lote standard tem 100.000 unidades, mini 10.000 e micro 1.000. Lotes menores reduzem o risco enquanto aprende."
        },
        {
            "cat": "technical",
            "icon": "fa-chart-area",
            "title": "Suporte e resistência",
            "desc": "Suporte é a zona onde as compras costumam travar a queda. Resistência onde as vendas limitam as subidas. Roturas e rebotes são essenciais."
        },
        {
            "cat": "technical",
            "icon": "fa-wave-square",
            "title": "Indicador RSI",
            "desc": "O RSI mede o momentum de 0 a 100. Acima de 70 sugere sobrecompra; abaixo de 30, sobrevenda. Use com tendência e estrutura."
        },
        {
            "cat": "technical",
            "icon": "fa-chart-line",
            "title": "Médias móveis",
            "desc": "As médias suavizam o preço e mostram direção. Preço acima de uma MA a subir costuma ser viés de alta; cruzamentos filtram entradas."
        },
        {
            "cat": "technical",
            "icon": "fa-arrows-left-right",
            "title": "Estratégia MACD",
            "desc": "O MACD relaciona duas médias. Cruzamentos da linha de sinal e histograma podem indicar mudanças de momentum — confirme no timeframe superior."
        },
        {
            "cat": "risk",
            "icon": "fa-shield-halved",
            "title": "Gestão de risco",
            "desc": "Arrisque apenas 1–2% da conta por operação. Defina stop e take-profit antes da entrada."
        },
        {
            "cat": "risk",
            "icon": "fa-scale-balanced",
            "title": "Dimensionamento da posição",
            "desc": "O tamanho segue a distância do stop e a % de risco. Stops mais largos exigem tamanho menor."
        },
        {
            "cat": "risk",
            "icon": "fa-book-open",
            "title": "Diário de trading",
            "desc": "Registe cada trade: setup, entrada, saída e emoção. Reveja semanalmente para corrigir erros."
        }
    ],
    de: [
        {
            "cat": "basics",
            "icon": "fa-globe",
            "title": "Was ist Forex-Trading?",
            "desc": "Forex ist der globale Markt für Währungstausch. Preise bewegen sich in Paaren wie EUR/USD; Trader kaufen günstig und verkaufen teurer — oder umgekehrt."
        },
        {
            "cat": "basics",
            "icon": "fa-ruler",
            "title": "Was ist ein Pip?",
            "desc": "Ein Pip ist die kleinste Standardbewegung in den meisten Paaren. Bei EUR/USD meist 0,0001. Der Pip-Wert hängt von Lotgröße und Kontowährung ab."
        },
        {
            "cat": "basics",
            "icon": "fa-layer-group",
            "title": "Lotgrößen",
            "desc": "Ein Standard-Lot sind 100.000 Einheiten, Mini 10.000, Micro 1.000. Kleinere Lots senken das Risiko beim Lernen."
        },
        {
            "cat": "technical",
            "icon": "fa-chart-area",
            "title": "Support und Resistance",
            "desc": "Support ist eine Zone, in der Käufe oft den Rückgang stoppen. Resistance begrenzt Rallyes. Breakouts und Bounces sind zentral."
        },
        {
            "cat": "technical",
            "icon": "fa-wave-square",
            "title": "RSI-Indikator",
            "desc": "Der RSI misst Momentum von 0–100. Über 70 deutet auf Überkauf hin, unter 30 auf Überverkauf. Mit Trend und Struktur nutzen."
        },
        {
            "cat": "technical",
            "icon": "fa-chart-line",
            "title": "Gleitende Durchschnitte",
            "desc": "MAs glätten den Preis und zeigen Richtung. Preis über steigender MA oft bullisch; Kreuzungen filtern Einstiege."
        },
        {
            "cat": "technical",
            "icon": "fa-arrows-left-right",
            "title": "MACD-Strategie",
            "desc": "MACD verknüpft zwei MAs. Signallinien-Kreuzungen und Histogramm können Momentumwechsel andeuten — mit höherem TF bestätigen."
        },
        {
            "cat": "risk",
            "icon": "fa-shield-halved",
            "title": "Risikomanagement",
            "desc": "Riskieren Sie nur 1–2% des Kontos pro Trade. Stop und Take-Profit vor dem Einstieg festlegen."
        },
        {
            "cat": "risk",
            "icon": "fa-scale-balanced",
            "title": "Positionsgröße",
            "desc": "Die Größe folgt Stop-Abstand und Risikoprozentsatz. Weitere Stops = kleinere Größe."
        },
        {
            "cat": "risk",
            "icon": "fa-book-open",
            "title": "Trading-Journal",
            "desc": "Protokollieren Sie jeden Trade: Setup, Entry, Exit und Emotion. Wöchentlich prüfen, um Fehler zu finden."
        }
    ],
    tr: [
        {
            "cat": "basics",
            "icon": "fa-globe",
            "title": "Forex ticareti nedir?",
            "desc": "Forex, ulusal para birimlerinin küresel piyasasıdır. Fiyatlar EUR/USD gibi çiftlerde hareket eder; traderlar ucuza alıp pahalıya satar — veya tersi."
        },
        {
            "cat": "basics",
            "icon": "fa-ruler",
            "title": "Pip nedir?",
            "desc": "Pip çoğu çiftte en küçük standart fiyat hareketidir. EUR/USD'de genelde 0,0001. Pip değeri lot ve hesap para birimine bağlıdır."
        },
        {
            "cat": "basics",
            "icon": "fa-layer-group",
            "title": "Lot boyutları",
            "desc": "Standart lot 100.000 birim, mini 10.000, mikro 1.000. Küçük lotlar öğrenirken riski azaltır."
        },
        {
            "cat": "technical",
            "icon": "fa-chart-area",
            "title": "Destek ve direnç",
            "desc": "Destek, alışların düşüşü sıkça durdurduğu bölgedir. Direnç rallileri sınırlar. Kırılımlar ve sıçramalar grafik okumanın temelidir."
        },
        {
            "cat": "technical",
            "icon": "fa-wave-square",
            "title": "RSI göstergesi",
            "desc": "RSI momentumu 0–100 ölçer. 70 üzeri aşırı alım, 30 altı aşırı satım. Trend ve yapı ile kullanın."
        },
        {
            "cat": "technical",
            "icon": "fa-chart-line",
            "title": "Hareketli ortalamalar",
            "desc": "MA fiyatı yumuşatır ve yön gösterir. Yükselen MA üstü fiyat çoğu zaman yükseliş eğilimidir; kesişimler giriş filtresidir."
        },
        {
            "cat": "technical",
            "icon": "fa-arrows-left-right",
            "title": "MACD stratejisi",
            "desc": "MACD iki MA ilişkisini izler. Sinyal çizgisi kesişimleri ve histogram momentum değişimine işaret edebilir — üst zaman dilimiyle doğrulayın."
        },
        {
            "cat": "risk",
            "icon": "fa-shield-halved",
            "title": "Risk yönetimi",
            "desc": "İşlem başına hesabın yalnızca %1–2'sini riske atın. Stop ve take-profit'i girişten önce belirleyin."
        },
        {
            "cat": "risk",
            "icon": "fa-scale-balanced",
            "title": "Pozisyon boyutu",
            "desc": "Boyut stop mesafesi ve risk yüzdesine göre olmalıdır. Geniş stop = daha küçük boyut."
        },
        {
            "cat": "risk",
            "icon": "fa-book-open",
            "title": "İşlem günlüğü",
            "desc": "Her işlemi kaydedin: kurulum, giriş, çıkış ve duygu. Haftalık gözden geçirerek hataları bulun."
        }
    ],
    zh: [
        {
            "cat": "basics",
            "icon": "fa-globe",
            "title": "什么是外汇交易？",
            "desc": "外汇是全球货币兑换市场。价格以 EUR/USD 等货币对波动；交易者低买高卖——或相反。"
        },
        {
            "cat": "basics",
            "icon": "fa-ruler",
            "title": "什么是点（Pip）？",
            "desc": "Pip 是大多数货币对的最小标准价格变动。EUR/USD 通常为 0.0001。点值取决于手数与账户货币。"
        },
        {
            "cat": "basics",
            "icon": "fa-layer-group",
            "title": "手数大小",
            "desc": "标准手为 100,000 单位，迷你手 10,000，微型手 1,000。学习阶段用更小手数降低风险。"
        },
        {
            "cat": "technical",
            "icon": "fa-chart-area",
            "title": "支撑与阻力",
            "desc": "支撑是买盘常阻止下跌的区域。阻力是卖盘常限制上涨的区域。突破与反弹是读图核心。"
        },
        {
            "cat": "technical",
            "icon": "fa-wave-square",
            "title": "RSI 指标",
            "desc": "RSI 以 0–100 衡量动能。高于 70 偏超买，低于 30 偏超卖。需结合趋势与结构使用。"
        },
        {
            "cat": "technical",
            "icon": "fa-chart-line",
            "title": "移动平均线",
            "desc": "均线平滑价格并显示方向。价格在上升均线上方常偏多；快慢均线交叉是常用入场过滤。"
        },
        {
            "cat": "technical",
            "icon": "fa-arrows-left-right",
            "title": "MACD 策略",
            "desc": "MACD 跟踪两条均线关系。信号线交叉与柱状图变化可提示动能转变——用更高周期确认。"
        },
        {
            "cat": "risk",
            "icon": "fa-shield-halved",
            "title": "风险管理",
            "desc": "每笔交易仅风险账户的 1–2%。入场前设定止损与止盈。"
        },
        {
            "cat": "risk",
            "icon": "fa-scale-balanced",
            "title": "仓位规模",
            "desc": "仓位应服从止损距离与风险百分比。更宽止损需要更小仓位。"
        },
        {
            "cat": "risk",
            "icon": "fa-book-open",
            "title": "交易日志",
            "desc": "记录每笔交易：设置、入场、出场与情绪。每周复盘以发现错误并强化有效策略。"
        }
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
    uk: [
        {
            "q": "Наскільки точні сигнали?",
            "a": "ШІ аналізує кілька індикаторів з історичною точністю 75–90%. Минулі результати не гарантують майбутніх."
        },
        {
            "q": "Це фінансова порада?",
            "a": "Ні. Усі сигнали лише з освітньою метою."
        },
        {
            "q": "Як часто оновлюються сигнали?",
            "a": "Оновлення залежить від таймфрейму — від 5 секунд до 15 хвилин."
        },
        {
            "q": "Який мінімальний депозит?",
            "a": "Ми не приймаємо депозити. Торгуйте через свого брокера."
        },
        {
            "q": "Чи можна для крипто?",
            "a": "Так. Оберіть «Криптовалюта» в Інструменті для BTC/USD, ETH/USD тощо."
        }
    ],
    es: [
        {
            "q": "¿Qué tan precisas son las señales?",
            "a": "Nuestra IA analiza varios indicadores con precisión histórica del 75–90%. El rendimiento pasado no garantiza resultados futuros."
        },
        {
            "q": "¿Es consejo financiero?",
            "a": "No. Todas las señales son solo con fines educativos."
        },
        {
            "q": "¿Con qué frecuencia se actualizan?",
            "a": "Según el timeframe, de 5 segundos a 15 minutos."
        },
        {
            "q": "¿Cuál es el depósito mínimo?",
            "a": "No gestionamos depósitos. Opera con tu bróker preferido."
        },
        {
            "q": "¿Sirven para cripto?",
            "a": "Sí. Elige Criptomonedas en Instrumento para BTC/USD, ETH/USD y más."
        }
    ],
    pt: [
        {
            "q": "Quão precisos são os sinais?",
            "a": "A nossa IA analisa vários indicadores com precisão histórica de 75–90%. Desempenho passado não garante resultados futuros."
        },
        {
            "q": "Isto é aconselhamento financeiro?",
            "a": "Não. Todos os sinais são apenas para fins educativos."
        },
        {
            "q": "Com que frequência são atualizados?",
            "a": "Conforme o timeframe, de 5 segundos a 15 minutos."
        },
        {
            "q": "Qual é o depósito mínimo?",
            "a": "Não gerimos depósitos. Negocie através do seu corretor."
        },
        {
            "q": "Posso usar para cripto?",
            "a": "Sim. Escolha Criptomoedas em Instrumento para BTC/USD, ETH/USD e mais."
        }
    ],
    de: [
        {
            "q": "Wie genau sind die Signale?",
            "a": "Unsere KI analysiert mehrere Indikatoren mit historischer Genauigkeit von 75–90%. Vergangene Ergebnisse garantieren keine zukünftigen."
        },
        {
            "q": "Ist das Finanzberatung?",
            "a": "Nein. Alle Signale dienen nur zu Bildungszwecken."
        },
        {
            "q": "Wie oft werden Signale aktualisiert?",
            "a": "Je nach Timeframe alle 5 Sekunden bis 15 Minuten."
        },
        {
            "q": "Wie hoch ist die Mindesteinzahlung?",
            "a": "Wir nehmen keine Einzahlungen entgegen. Handeln Sie über Ihren Broker."
        },
        {
            "q": "Kann ich Signale für Krypto nutzen?",
            "a": "Ja. Wählen Sie Kryptowährung unter Instrument für BTC/USD, ETH/USD und mehr."
        }
    ],
    tr: [
        {
            "q": "Sinyaller ne kadar doğru?",
            "a": "YZ'miz birden fazla göstergeyi %75–90 tarihsel doğrulukla analiz eder. Geçmiş performans geleceği garanti etmez."
        },
        {
            "q": "Bu finansal tavsiye mi?",
            "a": "Hayır. Tüm sinyaller yalnızca eğitim amaçlıdır."
        },
        {
            "q": "Sinyaller ne sıklıkla güncellenir?",
            "a": "Zaman diliminize göre 5 saniyeden 15 dakikaya kadar."
        },
        {
            "q": "Minimum yatırma nedir?",
            "a": "Yatırma kabul etmiyoruz. Tercih ettiğiniz broker üzerinden işlem yapın."
        },
        {
            "q": "Kripto için kullanabilir miyim?",
            "a": "Evet. Enstrüman'da Kripto para seçin — BTC/USD, ETH/USD ve daha fazlası."
        }
    ],
    zh: [
        {
            "q": "信号有多准确？",
            "a": "我们的 AI 分析多项指标，历史准确率约 75–90%。过往表现不保证未来结果。"
        },
        {
            "q": "这是投资建议吗？",
            "a": "不是。所有信号仅供教育用途。"
        },
        {
            "q": "信号多久更新一次？",
            "a": "取决于您的周期，从 5 秒到 15 分钟。"
        },
        {
            "q": "最低入金是多少？",
            "a": "我们不处理入金。请通过您的经纪商交易。"
        },
        {
            "q": "可以用于加密货币吗？",
            "a": "可以。在品种中选择加密货币，支持 BTC/USD、ETH/USD 等。"
        }
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
    uk: [
        "Просвіт в хмарах",
        "Бичаче поглинання",
        "Молот",
        "Ранкова зірка",
        "Завіса темних хмар",
        "Доджі"
    ],
    es: [
        "Línea perforante",
        "Envolvente alcista",
        "Martillo",
        "Estrella de la mañana",
        "Nube oscura",
        "Doji"
    ],
    pt: [
        "Linha perfurante",
        "Engolfo de alta",
        "Martelo",
        "Estrela da manhã",
        "Nuvem negra",
        "Doji"
    ],
    de: [
        "Piercing Line",
        "Bullish Engulfing",
        "Hammer",
        "Morning Star",
        "Dark Cloud Cover",
        "Doji"
    ],
    tr: [
        "Piercing Line",
        "Boğa Yutan",
        "Çekiç",
        "Sabah Yıldızı",
        "Kara Bulut",
        "Doji"
    ],
    zh: [
        "刺透形态",
        "看涨吞没",
        "锤子线",
        "晨星",
        "乌云盖顶",
        "十字星"
    ],
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
    uk: [
        "Відкритий інтерес зростає з ціною",
        "Виявлено сплеск обсягу",
        "Відскок від підтримки",
        "Пробій консолідації",
        "RSI у зоні перепроданості"
    ],
    es: [
        "Interés abierto sube con el precio",
        "Pico de volumen detectado",
        "Rebote desde soporte",
        "Ruptura de consolidación",
        "RSI en zona de sobreventa"
    ],
    pt: [
        "Open interest sobe com o preço",
        "Pico de volume detetado",
        "Ressalto no suporte",
        "Rutura da consolidação",
        "RSI em zona de sobrevenda"
    ],
    de: [
        "Open Interest steigt mit dem Preis",
        "Volumenspitze erkannt",
        "Abprall vom Support",
        "Ausbruch aus der Konsolidierung",
        "RSI im überverkauften Bereich"
    ],
    tr: [
        "Açık faiz fiyatla yükseliyor",
        "Hacim artışı tespit edildi",
        "Destekten sıçrama",
        "Konsolidasyondan kırılım",
        "RSI aşırı satım bölgesinde"
    ],
    zh: [
        "持仓量随价格上升",
        "检测到成交量激增",
        "支撑位反弹",
        "突破盘整",
        "RSI 处于超卖区"
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
    document.documentElement.lang = currentLang || "en";
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
