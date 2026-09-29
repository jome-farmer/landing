export type Locale = "en" | "fa";

export const translations = {
  en: {
    common: {
      begin: "Begin",
      getStarted: "Get started",
      requestQuote: "Request a quote",
      live: "Live",
    },
    nav: {
      tech: "Technology",
      aiAgent: "AI Agronomist",
      nutrients: "Nutrients",
      hardware: "Hardware",
      menu: "Menu",
      close: "Close",
    },
    home: {
      status: "System online · Autonomous irrigation",
      title: "Precision agriculture,",
      titleEm: "powered by AI.",
      subtitle:
        "Cultivate smarter with JoME — the autonomous irrigation system that listens to your soil and maximizes your yield.",
      watchDemo: "Watch demo",
      imageAlt: "Aerial view of farmland with irrigation zones mapped by JoME sensors at sunset",
      caption: "Fields mapped by JoME sensors",
      captionEnd: "Live telemetry",
      stats: [
        { label: "Water saved", desc: "Less water used, with irrigation timed to what the soil actually needs." },
        { label: "Yield increase", desc: "Higher yield from nutrients delivered where and when crops need them." },
        { label: "Farms connected", desc: "Farms connected and managed from a single system." },
      ],
      capabilities: {
        label: "01 — Our capabilities",
        title: "Advanced technology, from soil to decision.",
        subtitle:
          "Modular IoT and AI solutions designed for the modern farm. Monitor, analyze, and automate your entire operation.",
        items: [
          {
            title: "AI Plant Doctor",
            desc: "Detect diseases before they spread with computer vision. Our AI scans leaf patterns to identify early signs of stress.",
          },
          {
            title: "Smart Injection",
            desc: "Deliver minerals and nutrients precisely when needed, based on real-time soil composition analysis.",
          },
          {
            title: "IoT Connectivity",
            desc: "Control your irrigation systems from anywhere via the cloud. Full redundancy even in low-connectivity zones.",
          },
        ],
      },
      philosophy: {
        label: "02 — Philosophy",
        imageAlt: "The JoME Hub installed in a cultivated field at sunset",
        quote: "We build tools that feel as rugged as the hardware you deploy —",
        quoteEm: "intelligent precision, without the fragility.",
        link: "Meet your digital agronomist",
      },
      cta: "Ready for intelligent stewardship?",
    },
    agent: {
      label: "Intelligence layer",
      title: "Meet your digital",
      titleEm: "agronomist.",
      subtitle:
        "JoME is an AI-powered copilot for modern farming, bridging the critical gap between raw field sensor data and expert, timely decisions. High-reliability technology for the field.",
      startConversation: "Start a conversation",
      seeDemo: "See demo",
      status: {
        label: "System status",
        value: "All nodes active",
        metric: "Soil moisture target",
        quote: "“Current moisture levels are optimal. I recommend holding irrigation until tomorrow evening.”",
        by: "— JoME AI",
      },
      philosophy: {
        label: "01 — Dirt to data",
        title: "Intelligent precision, without the fragility.",
        subtitle: "We build tools that feel as rugged and reliable as the hardware you deploy in the field.",
      },
      doctor: {
        label: "Plant Doctor",
        title: "Diagnose crop disease directly from the field.",
        description:
          "Advanced computer vision gives probabilistic confidence scores and recommended immediate actions before issues spread.",
        reasoning: "Reasoning",
        finding: "High probability of Early Blight detected on lower canopy leaves.",
      },
      whatIf: {
        label: "What-if simulations",
        title: "See the cost of waiting.",
        description:
          "Simulate irrigation impacts before spending resources. See the projected ROI of delaying a cycle based on hyper-local forecasts.",
        delay: "Delay cycle",
        delayValue: "+24 hrs",
        waterSaved: "Water saved",
        waterValue: "1.2M gal",
      },
      advice: {
        label: "24/7 expert advice",
        title: "Ask in plain language. Get field-ready answers.",
        description:
          "JoME understands complex soil chemistry, historical weather impacts, and specific crop needs to provide actionable, context-aware advice at any hour.",
        tags: ["Soil chem", "Weather", "Crop needs"],
        you: "Y",
        question: "Given the forecasted rain on Thursday, should I apply nitrogen today?",
        answer:
          "I recommend waiting. With an 85% chance of heavy rain Thursday, applying nitrogen today risks significant runoff, wasting resources and potentially impacting local water systems.",
        placeholder: "Ask JoME a question…",
      },
      cta: {
        title: "Ready for intelligent stewardship?",
        subtitle: "Stop guessing and start optimizing. JoME is ready to help you manage your land with precision and confidence.",
      },
    },
    chat: {
      back: "AI Agronomist",
      title: "Agronomist",
      titleEm: "Copilot",
      status: "System online. All sensors nominal.",
      alert: {
        meta: "System alert · 08:15 AM",
        title: "Low phosphorus detected in Zone 3.",
        body: "Variance: −14% below baseline. Root development at risk.",
        viewMap: "View zone map",
        acknowledge: "Acknowledge",
      },
      insight: {
        meta: "Actionable insight · 09:30 AM",
        title: "Optimal harvest window: 3 days",
        body: "Block C grapes reaching target Brix levels.",
      },
      userScan: "Can you analyze this leaf scan from Block C?",
      scanAlt: "Leaf scan from Block C",
      diagnosis: {
        label: "Diagnostic result",
        badge: "Pathogen detected",
        title: "Early leaf rust",
        confidence: "AI confidence",
        protocol: "Protocol",
        protocolBody:
          "Apply copper-based fungicide spray during the next dry window. Isolate affected vines if possible to prevent spore drift.",
      },
      morning:
        "Good morning. Soil moisture in Sector Alpha has dropped to 22%. Based on the current heat index forecast, I recommend initiating a supplemental drip cycle before 14:00.",
      userSimulation: "Run a simulation if we delay that cycle by 24 hours.",
      simulation: {
        label: "Irrigation intelligence · What-if simulator",
        heading: "Delay Sector Alpha schedule by",
        unit: "hours",
        min: "0h",
        max: "72h",
        impactLabel: "Projected impact",
        impact: "yield risk",
        impactBody: "Evapotranspiration rate exceeds soil retention capacity over this duration.",
        cancel: "Cancel",
        apply: "Apply delay",
      },
      placeholder: "Ask your agronomist…",
    },
    nutrients: {
      label: "JoME Smart Injector",
      title: "Precision nutrition for",
      titleEm: "every crop.",
      subtitle:
        "An automated delivery system that injects liquid minerals precisely where and when they are needed. Cultivate healthier plants, optimize resource usage, and elevate your yield with intelligent stewardship.",
      imageAlt: "The JoME Smart Injector releasing a drop of liquid nutrient onto soil",
      optimize: "Optimize your soil",
      learnMore: "Learn more",
      output: {
        label: "Current output",
        value: "Optimal",
        nitrogen: "Nitrogen (N)",
        phosphorus: "Phosphorus (P)",
        potassium: "Potassium (K)",
      },
      section: {
        label: "01 — Intelligent nutrient delivery",
        title: "Stop blanket fertilizing.",
        subtitle: "Start feeding your soil with surgical precision based on real-time data.",
      },
      targeting: {
        label: "Crop-specific targeting",
        title: "Different crops, one irrigation cycle.",
        description:
          "The Smart Injector routes specific blends to distinct zones — giving tomatoes heavy potassium while providing cucumbers balanced nitrogen simultaneously.",
      },
      monitoring: {
        label: "Real-time mineral monitoring",
        title: "Your soil, read continuously.",
        description:
          "Embedded soil sensors track nitrogen, phosphorus, and potassium levels, with high-contrast visualization of your soil's health.",
      },
      engine: {
        label: "Smart recommendation engine",
        title: "The right mix, suggested for you.",
        description:
          "AI-driven insights analyze soil state, weather patterns, and specific crop growth stages to autonomously suggest the optimal nutrient mix.",
        confidence: "AI confidence",
        blend: "Optimal blend calculated",
      },
      pure: {
        badge: "Proprietary blend",
        title: "JoME Pure Nutrients",
        imageAlt: "A container of JoME Pure Nutrients",
        description:
          "Maximize the hardware's potential with our exclusive line of high-performance, sediment-free liquid mineral blends designed for seamless injection and rapid root absorption.",
      },
      cta: { title: "Feed your soil with", titleEm: "precision.", link: "See the hardware" },
    },
    hardware: {
      label: "Hardware & infrastructure",
      title: "The backbone of",
      titleEm: "intelligent stewardship.",
      subtitle: "Rugged, field-proven hardware engineered to bridge the gap between soil and silicon.",
      explore: "Explore the ecosystem",
      specs: "View technical specs",
      imageAlt: "The JoME Hub on cultivated soil at sunset",
      caption: "The JoME Hub",
      captionEnd: "Weatherproof field controller",
      ecosystem: { label: "01 — The ecosystem", title: "Three systems. One field intelligence." },
      hub: {
        label: "01 · Central intelligence",
        title: "The JoME Hub",
        imageAlt: "The JoME Hub mounted on a pole at the edge of a field",
        caption: "Hub · Mounted field unit",
        description:
          "A weatherproof white-box controller that serves as the brain of your farm. It features a dedicated terminal connection for nutrient injection, calculating precise water flow and mineral dosing in real time via our professional mobile app.",
        dosing: "Closed-loop dosing",
        dosingBody: "Real-time EC and pH monitoring ensures precise chemical equilibrium within the main line.",
        flow: "Proportional flow control",
        flowBody: "Injection rates dynamically adjust based on millisecond-latency flow meter telemetry.",
      },
      injection: {
        label: "02 · Nutrient injection",
        title: "Integrated nutrient injection",
        imageAlt: "JoME nutrient tank and injection pump installed in a pump room",
        caption: "Injection · Tank & pump system",
        description:
          "Our rugged barrel and tank system features a high-precision pump designed for industrial agricultural environments. Automated dosing logic delivers the exact mineral balance required for your specific crop profile.",
        dosing: "Automated mineral dosing logic",
        pump: "Rugged industrial pump hardware",
      },
      subsurface: {
        label: "03 · Water efficiency",
        title: "Subsurface irrigation",
        imageAlt: "Technical schematic of subsurface drip irrigation with JoME sensors",
        caption: "Subsurface · Technical schematic",
        description:
          "Underground piping delivers moisture directly to the root zone. Integrated JoME sensors provide smart sensing at the root level, eliminating evaporation loss and optimizing plant health.",
        sensing: "Root-level smart sensing",
        delivery: "Zero-evaporation delivery",
      },
      cta: { title: "Built for the field.", titleEm: "Ready for yours." },
    },
    footer: {
      description: "Empowering farmers with AI-driven insights and autonomous control systems for a sustainable future.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      links: {
        features: "Features",
        techSpecs: "Tech specs",
        aiAgent: "AI Agent",
        aboutUs: "About us",
        careers: "Careers",
        privacyPolicy: "Privacy policy",
        termsOfService: "Terms of service",
      },
      copyright: "© 2024 JoME Autonomous Irrigation. All rights reserved.",
      like: "Like",
      share: "Share",
    },
  },
  fa: {
    common: {
      begin: "شروع",
      getStarted: "شروع کنید",
      requestQuote: "استعلام قیمت",
      live: "زنده",
    },
    nav: {
      tech: "فناوری",
      aiAgent: "کشاورز دیجیتال",
      nutrients: "مواد مغذی",
      hardware: "سخت‌افزار",
      menu: "منو",
      close: "بستن",
    },
    home: {
      status: "سیستم آنلاین · آبیاری خودکار",
      title: "کشاورزی دقیق،",
      titleEm: "با قدرت هوش مصنوعی.",
      subtitle: "با جمعه هوشمندانه بکارید؛ سیستم آبیاری خودکاری که به خاک شما گوش می‌دهد و بازدهی شما را به حداکثر می‌رساند.",
      watchDemo: "مشاهده دمو",
      imageAlt: "نمای هوایی مزرعه با ناحیه‌های آبیاری که حسگرهای جمعه در غروب نقشه‌برداری کرده‌اند",
      caption: "مزارع نقشه‌برداری‌شده با حسگرهای جمعه",
      captionEnd: "داده‌های زنده",
      stats: [
        { label: "صرفه‌جویی در آب", desc: "مصرف آب کمتر، با آبیاری‌ای که دقیقاً با نیاز واقعی خاک تنظیم می‌شود." },
        { label: "افزایش محصول", desc: "بازدهی بیشتر با رساندن مواد مغذی در جا و زمانی که محصول نیاز دارد." },
        { label: "مزارع متصل", desc: "مزارعی که از یک سیستم واحد متصل و مدیریت می‌شوند." },
      ],
      capabilities: {
        label: "۰۱ — قابلیت‌های ما",
        title: "فناوری پیشرفته، از خاک تا تصمیم.",
        subtitle: "راه‌حل‌های مدولار اینترنت اشیاء و هوش مصنوعی برای مزارع مدرن. نظارت، تحلیل و خودکارسازی کل عملیات شما.",
        items: [
          {
            title: "پزشک گیاه هوشمند",
            desc: "تشخیص بیماری‌ها پیش از شیوع با بینایی ماشین. هوش مصنوعی ما الگوهای برگ را برای شناسایی علائم اولیه تنش اسکن می‌کند.",
          },
          {
            title: "تزریق هوشمند",
            desc: "تحویل دقیق مواد معدنی و مغذی در زمان نیاز، بر اساس تحلیل لحظه‌ای ترکیب خاک.",
          },
          {
            title: "اتصال اینترنت اشیاء",
            desc: "کنترل سیستم‌های آبیاری از هر کجا از طریق ابر، با افزونگی کامل حتی در مناطق با اتصال ضعیف.",
          },
        ],
      },
      philosophy: {
        label: "۰۲ — فلسفه ما",
        imageAlt: "هاب جمعه نصب‌شده در مزرعه‌ای کشت‌شده هنگام غروب",
        quote: "ابزارهایی می‌سازیم که به اندازه سخت‌افزارهای مزرعه شما مقاوم باشند —",
        quoteEm: "دقت هوشمند، بدون شکنندگی.",
        link: "با کشاورز دیجیتال خود آشنا شوید",
      },
      cta: "آماده مدیریت هوشمند زمین هستید؟",
    },
    agent: {
      label: "لایه هوشمند",
      title: "با کشاورز",
      titleEm: "دیجیتال خود آشنا شوید.",
      subtitle:
        "جمعه یک دستیار هوشمند برای کشاورزی مدرن است که فاصله میان داده‌های خام حسگرهای مزرعه و تصمیم‌های کارشناسانه و به‌موقع را پر می‌کند. فناوری قابل‌اعتماد برای مزرعه.",
      startConversation: "شروع گفتگو",
      seeDemo: "مشاهده دمو",
      status: {
        label: "وضعیت سیستم",
        value: "همه گره‌ها فعال",
        metric: "هدف رطوبت خاک",
        quote: "«سطح رطوبت فعلی مطلوب است. پیشنهاد می‌کنم آبیاری را تا عصر فردا متوقف کنید.»",
        by: "— هوش مصنوعی جمعه",
      },
      philosophy: {
        label: "۰۱ — از خاک تا داده",
        title: "دقت هوشمند، بدون شکنندگی.",
        subtitle: "ابزارهایی می‌سازیم که به اندازه سخت‌افزارهای مزرعه شما مقاوم و قابل‌اعتماد باشند.",
      },
      doctor: {
        label: "پزشک گیاه",
        title: "تشخیص بیماری محصول، مستقیماً در مزرعه.",
        description: "بینایی ماشین پیشرفته امتیاز اطمینان و اقدامات فوری پیشنهادی را پیش از گسترش مشکل ارائه می‌دهد.",
        reasoning: "استدلال",
        finding: "احتمال بالای بلایت زودرس در برگ‌های پایینی سایه‌انداز.",
      },
      whatIf: {
        label: "شبیه‌سازی سناریو",
        title: "هزینه صبر کردن را ببینید.",
        description:
          "پیش از مصرف منابع، اثر آبیاری را شبیه‌سازی کنید و بازده پیش‌بینی‌شده تأخیر در یک چرخه را بر اساس پیش‌بینی‌های محلی ببینید.",
        delay: "تأخیر چرخه",
        delayValue: "+۲۴ ساعت",
        waterSaved: "آب ذخیره‌شده",
        waterValue: "۱٫۲ میلیون گالن",
      },
      advice: {
        label: "مشاوره تخصصی شبانه‌روزی",
        title: "به زبان ساده بپرسید، پاسخ کاربردی بگیرید.",
        description:
          "جمعه شیمی پیچیده خاک، اثرات تاریخی آب‌وهوا و نیازهای خاص هر محصول را می‌شناسد و در هر ساعت توصیه‌های کاربردی ارائه می‌دهد.",
        tags: ["شیمی خاک", "آب‌وهوا", "نیاز محصول"],
        you: "ش",
        question: "با توجه به بارش پیش‌بینی‌شده در پنجشنبه، امروز نیتروژن بدهم؟",
        answer:
          "پیشنهاد می‌کنم صبر کنید. با ۸۵٪ احتمال بارش شدید در پنجشنبه، دادن نیتروژن امروز خطر آب‌شویی قابل‌توجهی دارد، منابع را هدر می‌دهد و ممکن است به منابع آب محلی آسیب بزند.",
        placeholder: "از جمعه بپرسید…",
      },
      cta: {
        title: "آماده مدیریت هوشمند زمین هستید؟",
        subtitle: "حدس زدن را کنار بگذارید و بهینه‌سازی را شروع کنید. جمعه آماده است تا با دقت و اطمینان در مدیریت زمین به شما کمک کند.",
      },
    },
    chat: {
      back: "کشاورز دیجیتال",
      title: "دستیار",
      titleEm: "کشاورز",
      status: "سیستم آنلاین. همه حسگرها عادی.",
      alert: {
        meta: "هشدار سیستم · ۰۸:۱۵",
        title: "کمبود فسفر در ناحیه ۳ شناسایی شد.",
        body: "انحراف: ۱۴٪ کمتر از مبنا. رشد ریشه در خطر است.",
        viewMap: "مشاهده نقشه ناحیه",
        acknowledge: "تأیید",
      },
      insight: {
        meta: "بینش کاربردی · ۰۹:۳۰",
        title: "بهترین زمان برداشت: ۳ روز",
        body: "انگورهای بلوک C به سطح بریکس هدف می‌رسند.",
      },
      userScan: "می‌توانی این اسکن برگ از بلوک C را تحلیل کنی؟",
      scanAlt: "اسکن برگ از بلوک C",
      diagnosis: {
        label: "نتیجه تشخیص",
        badge: "عامل بیماری‌زا شناسایی شد",
        title: "زنگ زودرس برگ",
        confidence: "اطمینان هوش مصنوعی",
        protocol: "دستورالعمل",
        protocolBody: "در دوره خشک بعدی قارچ‌کش مسی اسپری کنید. در صورت امکان تاک‌های آلوده را جدا کنید تا از پخش هاگ جلوگیری شود.",
      },
      morning:
        "صبح بخیر. رطوبت خاک در بخش آلفا به ۲۲٪ رسیده است. بر اساس پیش‌بینی شاخص گرما، پیشنهاد می‌کنم یک چرخه آبیاری قطره‌ای تکمیلی را پیش از ساعت ۱۴:۰۰ آغاز کنید.",
      userSimulation: "اگر آن چرخه را ۲۴ ساعت عقب بیندازیم، شبیه‌سازی کن.",
      simulation: {
        label: "هوش آبیاری · شبیه‌ساز سناریو",
        heading: "تأخیر برنامه بخش آلفا به مدت",
        unit: "ساعت",
        min: "۰ ساعت",
        max: "۷۲ ساعت",
        impactLabel: "اثر پیش‌بینی‌شده",
        impact: "خطر کاهش محصول",
        impactBody: "در این مدت، نرخ تبخیر و تعرق از ظرفیت نگهداری آب خاک بیشتر است.",
        cancel: "لغو",
        apply: "اعمال تأخیر",
      },
      placeholder: "از کشاورز دیجیتال خود بپرسید…",
    },
    nutrients: {
      label: "تزریق‌کننده هوشمند جمعه",
      title: "تغذیه دقیق",
      titleEm: "برای هر محصول.",
      subtitle:
        "یک سیستم خودکار که مواد معدنی مایع را دقیقاً در جا و زمان مورد نیاز تزریق می‌کند. گیاهان سالم‌تر پرورش دهید، مصرف منابع را بهینه کنید و با مدیریت هوشمند بازدهی خود را افزایش دهید.",
      imageAlt: "تزریق‌کننده هوشمند جمعه در حال رها کردن قطره‌ای از مواد مغذی مایع روی خاک",
      optimize: "بهینه‌سازی خاک",
      learnMore: "بیشتر بدانید",
      output: {
        label: "خروجی فعلی",
        value: "مطلوب",
        nitrogen: "نیتروژن (N)",
        phosphorus: "فسفر (P)",
        potassium: "پتاسیم (K)",
      },
      section: {
        label: "۰۱ — تحویل هوشمند مواد مغذی",
        title: "کوددهی یکسان را کنار بگذارید.",
        subtitle: "بر اساس داده‌های لحظه‌ای، خاک خود را با دقت کامل تغذیه کنید.",
      },
      targeting: {
        label: "هدف‌گیری بر اساس محصول",
        title: "محصولات مختلف، یک چرخه آبیاری.",
        description:
          "تزریق‌کننده هوشمند ترکیب‌های مخصوص را به ناحیه‌های جداگانه می‌فرستد؛ هم‌زمان به گوجه‌فرنگی پتاسیم بیشتر و به خیار نیتروژن متعادل می‌دهد.",
      },
      monitoring: {
        label: "پایش لحظه‌ای مواد معدنی",
        title: "خاک شما، پیوسته زیر نظر.",
        description: "حسگرهای خاک به‌طور مداوم سطح نیتروژن، فسفر و پتاسیم را ردیابی می‌کنند و سلامت خاک را با نمایشی واضح نشان می‌دهند.",
      },
      engine: {
        label: "موتور پیشنهاد هوشمند",
        title: "ترکیب درست، پیشنهادشده برای شما.",
        description:
          "هوش مصنوعی وضعیت خاک، الگوهای آب‌وهوا و مرحله رشد هر محصول را تحلیل می‌کند و به‌طور خودکار بهترین ترکیب مواد مغذی را پیشنهاد می‌دهد.",
        confidence: "اطمینان هوش مصنوعی",
        blend: "ترکیب بهینه محاسبه شد",
      },
      pure: {
        badge: "ترکیب اختصاصی",
        title: "مواد مغذی خالص جمعه",
        imageAlt: "ظرف مواد مغذی خالص جمعه",
        description:
          "بیشترین بهره را از سخت‌افزار ببرید با خط اختصاصی ترکیب‌های معدنی مایع، پربازده و بدون رسوب که برای تزریق روان و جذب سریع ریشه طراحی شده‌اند.",
      },
      cta: { title: "خاک خود را", titleEm: "با دقت تغذیه کنید.", link: "مشاهده سخت‌افزار" },
    },
    hardware: {
      label: "سخت‌افزار و زیرساخت",
      title: "ستون فقرات",
      titleEm: "مدیریت هوشمند.",
      subtitle: "سخت‌افزاری مقاوم و آزموده در مزرعه که پلی میان خاک و فناوری می‌سازد.",
      explore: "آشنایی با اکوسیستم",
      specs: "مشاهده مشخصات فنی",
      imageAlt: "هاب جمعه روی خاک کشت‌شده هنگام غروب",
      caption: "هاب جمعه",
      captionEnd: "کنترلر ضدآب مزرعه",
      ecosystem: { label: "۰۱ — اکوسیستم", title: "سه سیستم، یک هوش مزرعه." },
      hub: {
        label: "۰۱ · مرکز هوشمند",
        title: "هاب جمعه",
        imageAlt: "هاب جمعه نصب‌شده روی تیر در لبه مزرعه",
        caption: "هاب · واحد نصب‌شده در مزرعه",
        description:
          "یک کنترلر ضدآب که مغز مزرعه شماست. این دستگاه اتصال اختصاصی برای تزریق مواد مغذی دارد و جریان آب و دوز مواد معدنی را به‌صورت لحظه‌ای از طریق اپلیکیشن حرفه‌ای ما محاسبه می‌کند.",
        dosing: "دوزدهی حلقه‌بسته",
        dosingBody: "پایش لحظه‌ای EC و pH تعادل شیمیایی دقیق را در خط اصلی تضمین می‌کند.",
        flow: "کنترل جریان تناسبی",
        flowBody: "نرخ تزریق بر اساس داده‌های کنتور جریان با تأخیر میلی‌ثانیه‌ای به‌طور پویا تنظیم می‌شود.",
      },
      injection: {
        label: "۰۲ · تزریق مواد مغذی",
        title: "تزریق یکپارچه مواد مغذی",
        imageAlt: "مخزن مواد مغذی و پمپ تزریق جمعه نصب‌شده در موتورخانه",
        caption: "تزریق · سیستم مخزن و پمپ",
        description:
          "سیستم مخزن مقاوم ما یک پمپ پردقت دارد که برای محیط‌های کشاورزی صنعتی طراحی شده است. منطق دوزدهی خودکار، تعادل دقیق مواد معدنی مورد نیاز محصول شما را فراهم می‌کند.",
        dosing: "منطق دوزدهی خودکار مواد معدنی",
        pump: "پمپ صنعتی مقاوم",
      },
      subsurface: {
        label: "۰۳ · بهره‌وری آب",
        title: "آبیاری زیرسطحی",
        imageAlt: "نقشه فنی آبیاری قطره‌ای زیرسطحی با حسگرهای جمعه",
        caption: "زیرسطحی · نقشه فنی",
        description:
          "لوله‌کشی زیرزمینی رطوبت را مستقیماً به ناحیه ریشه می‌رساند. حسگرهای یکپارچه جمعه در سطح ریشه پایش هوشمند انجام می‌دهند، هدررفت تبخیری را حذف و سلامت گیاه را بهینه می‌کنند.",
        sensing: "پایش هوشمند در سطح ریشه",
        delivery: "آبرسانی بدون تبخیر",
      },
      cta: { title: "ساخته‌شده برای مزرعه.", titleEm: "آماده برای مزرعه شما." },
    },
    footer: {
      description: "توانمندسازی کشاورزان با بینش‌های مبتنی بر هوش مصنوعی و سیستم‌های کنترل خودکار برای آینده‌ای پایدار.",
      product: "محصول",
      company: "شرکت",
      legal: "حقوقی",
      links: {
        features: "ویژگی‌ها",
        techSpecs: "مشخصات فنی",
        aiAgent: "کشاورز دیجیتال",
        aboutUs: "درباره ما",
        careers: "فرصت‌های شغلی",
        privacyPolicy: "سیاست حفظ حریم خصوصی",
        termsOfService: "شرایط خدمات",
      },
      copyright: "© ۲۰۲۴ آبیاری خودکار جمعه. تمامی حقوق محفوظ است.",
      like: "پسندیدن",
      share: "اشتراک‌گذاری",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
