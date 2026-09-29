export type Locale = "en" | "fa";

export const translations = {
  en: {
    nav: {
      tech: "Tech",
      aiAgent: "AI Agent",
      nutrients: "Nutrients",
      hardware: "Hardware",
      requestQuote: "Request Quote",
      getStarted: "Get Started",
    },
    hero: {
      systemOnline: "System Online",
      title: "Precision Agriculture,",
      titleHighlight: "Powered by AI.",
      subtitle:
        "Cultivate Smarter with JoME. The autonomous irrigation system that listens to your soil and maximizes your yield.",
      getStarted: "Get Started",
      watchDemo: "Watch Demo",
    },
    stats: {
      waterSaved: "Water Saved",
      yieldIncrease: "Yield Increase",
      farmsConnected: "Farms Connected",
    },
    features: {
      title: "Our Capabilities",
      heading: "Advanced Technology",
      description:
        "Modular IoT and AI solutions designed for the modern farm. Monitor, analyze, and automate your entire operation.",
      aiPlantDoctor: {
        title: "AI Plant Doctor",
        description:
          "Detect diseases before they spread with computer vision. Our AI scans leaf patterns to identify early signs of stress.",
      },
      smartInjection: {
        title: "Smart Injection",
        description:
          "Deliver minerals and nutrients precisely when needed based on real-time soil data composition analysis.",
      },
      iotConnectivity: {
        title: "IoT Connectivity",
        description:
          "Control your irrigation systems from anywhere via the cloud. Full redundancy even in low-connectivity zones.",
      },
    },
    aiAgentPage: {
      badge: "Intelligence Layer",
      title: "Meet Your Digital Agronomist",
      subtitle:
        "JoME is an AI-powered copilot for modern farming, bridging the critical gap between raw field sensor data and expert, timely decisions. High-reliability technology for the field.",
      startConversation: "Start a Conversation",
      seeDemo: "See Demo",
      status: {
        label: "System Status",
        value: "All Nodes Active",
        metric: "Soil Moisture Target",
        quote: "\"Current moisture levels are optimal. I recommend holding irrigation until tomorrow evening.\" - JoME AI",
      },
      philosophy: {
        title: "Dirt to Data Philosophy",
        subtitle:
          "We build tools that feel as rugged and reliable as the hardware you deploy in the field. Intelligent precision without the fragility.",
      },
      doctor: {
        title: "Plant Doctor",
        description:
          "Utilize advanced computer vision to diagnose crop diseases directly from the field. Get probabilistic confidence scores and recommended immediate actions before issues spread.",
        reasoning: "Reasoning",
        finding: "High probability of Early Blight detected on lower canopy leaves.",
      },
      whatIf: {
        title: "What-If Simulations",
        description:
          "Simulate irrigation impacts before spending resources. See the projected ROI of delaying a cycle based on hyper-local forecasts.",
        delay: "Delay Cycle",
        delayValue: "+24 hrs",
        waterSaved: "Water Saved",
        waterValue: "1.2M Gal",
      },
      advice: {
        title: "24/7 Expert Advice",
        description:
          "Interact with JoME using natural language. It understands complex soil chemistry, historical weather impacts, and specific crop needs to provide actionable, context-aware advice at any hour.",
        tags: ["Soil Chem", "Weather", "Crop Needs"],
        question: "Given the forecasted rain on Thursday, should I apply nitrogen today?",
        answer:
          "I recommend waiting. With a 85% chance of heavy rain Thursday, applying nitrogen today risks significant runoff, wasting resources and potentially impacting local water systems.",
        placeholder: "Ask JoME a question...",
      },
      cta: {
        title: "Ready for Intelligent Stewardship?",
        subtitle:
          "Stop guessing and start optimizing. JoME is ready to help you manage your land with precision and confidence.",
      },
    },
    chatPage: {
      title: "Agronomist Copilot",
      status: "System Online. All sensors nominal.",
      alert: {
        meta: "System Alert • 08:15 AM",
        title: "Low Phosphorus detected in Zone 3.",
        body: "Variance: -14% below baseline. Root development at risk.",
        viewMap: "View Zone Map",
        acknowledge: "Acknowledge",
      },
      insight: {
        meta: "Actionable Insight • 09:30 AM",
        title: "Optimal Harvest Window: 3 Days",
        body: "Block C grapes reaching target Brix levels.",
      },
      userScan: "Can you analyze this leaf scan from Block C?",
      diagnosis: {
        label: "Diagnostic Result",
        badge: "Pathogen Detected",
        title: "Early Leaf Rust",
        confidence: "AI Confidence",
        protocol: "Protocol",
        protocolBody:
          "Apply copper-based fungicide spray during the next dry window. Isolate affected vines if possible to prevent spore drift.",
      },
      morning:
        "Good morning. Soil moisture in Sector Alpha has dropped to 22%. Based on the current heat index forecast, I recommend initiating a supplemental drip cycle before 14:00.",
      userSimulation: "Run a simulation if we delay that cycle by 24 hours.",
      simulation: {
        label: "Irrigation Intelligence • What-If Simulator",
        heading: "Delay Sector Alpha schedule by",
        unit: "hours",
        min: "0h",
        max: "72h",
        impactLabel: "Projected Impact",
        impact: "Yield Risk",
        impactBody: "Evapotranspiration rate exceeds soil retention capacity over this duration.",
        cancel: "Cancel",
        apply: "Apply Delay",
      },
      placeholder: "Ask your agronomist...",
    },
    nutrientsPage: {
      badge: "JoME Smart Injector",
      title: "Precision Nutrition for Every Crop.",
      subtitle:
        "An automated delivery system that injects liquid minerals precisely where and when they are needed. Cultivate healthier plants, optimize resource usage, and elevate your yield with intelligent stewardship.",
      optimize: "Optimize Your Soil",
      learnMore: "Learn More",
      output: {
        label: "Current Output",
        value: "Optimal",
        nitrogen: "Nitrogen (N)",
        phosphorus: "Phosphorus (P)",
        potassium: "Potassium (K)",
      },
      section: {
        title: "Intelligent Nutrient Delivery",
        subtitle: "Stop blanket fertilizing. Start feeding your soil with surgical precision based on real-time data.",
      },
      targeting: {
        title: "Crop-Specific Targeting",
        description:
          "Differentiate between crops in the same irrigation cycle. The Smart Injector routes specific blends to distinct zones—giving tomatoes heavy potassium while providing cucumbers balanced nitrogen simultaneously.",
      },
      monitoring: {
        title: "Real-Time Mineral Monitoring",
        description:
          "Embedded soil sensors continuously track Nitrogen, Phosphorus, and Potassium levels, providing high-contrast data visualization of your soil's health.",
      },
      engine: {
        title: "Smart Recommendation Engine",
        description:
          "AI-driven insights analyze soil state, weather patterns, and specific crop growth stages to autonomously suggest the optimal nutrient mix.",
        confidence: "AI Confidence",
        blend: "Optimal blend calculated",
      },
      pure: {
        badge: "Proprietary Blend",
        title: "JoME Pure Nutrients",
        description:
          "Maximize the hardware's potential with our exclusive line of high-performance, sediment-free liquid mineral blends designed specifically for seamless injection and rapid root absorption.",
      },
    },
    hardwarePage: {
      title: "The Backbone of Intelligent Stewardship",
      subtitle: "Rugged, field-proven hardware engineered to bridge the gap between soil and silicon.",
      explore: "Explore the Ecosystem",
      specs: "View Technical Specs",
      hub: {
        title: "The JoME Hub: Central Intelligence",
        description:
          "A weatherproof white-box controller that serves as the brain of your farm. It features a dedicated terminal connection for nutrient injection, calculating precise water flow and mineral dosing in real-time via our professional mobile app.",
        dosing: "Closed-Loop Dosing",
        dosingBody: "Real-time EC and pH monitoring ensures precise chemical equilibrium within the main line.",
        flow: "Proportional Flow Control",
        flowBody: "Injection rates dynamically adjust based on millisecond-latency flow meter telemetry.",
      },
      injection: {
        title: "Integrated Nutrient Injection",
        description:
          "Our rugged barrel and tank system features a high-precision pump designed for industrial agricultural environments. The system utilizes automated dosing logic to deliver the exact mineral balance required for your specific crop profile.",
        dosing: "Automated mineral dosing logic",
        pump: "Rugged industrial pump hardware",
      },
      subsurface: {
        title: "Subsurface Irrigation",
        description:
          "Maximize water efficiency with underground piping that delivers moisture directly to the root zone. Integrated JoME sensors provide smart sensing at the root level, eliminating evaporation loss and optimizing plant health.",
        sensing: "Root-level smart sensing",
        delivery: "Zero-evaporation delivery",
      },
    },
    footer: {
      description:
        "Empowering farmers with AI-driven insights and autonomous control systems for a sustainable future.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      links: {
        features: "Features",
        techSpecs: "Tech Specs",
        aiAgent: "AI Agent",
        aboutUs: "About Us",
        careers: "Careers",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
      },
      copyright: "© 2024 JoME Autonomous Irrigation. All rights reserved.",
    },
  },
  fa: {
    nav: {
      tech: "فناوری",
      aiAgent: "دستیار هوشمند",
      nutrients: "مواد مغذی",
      hardware: "سخت‌افزار",
      requestQuote: "استعلام قیمت",
      getStarted: "شروع کنید",
    },
    hero: {
      systemOnline: "سیستم آنلاین",
      title: "کشاورزی دقیق،",
      titleHighlight: "با قدرت هوش مصنوعی.",
      subtitle:
        "با جمعه هوشمندانه بکارید. سیستم آبیاری خودکاری که به خاک شما گوش می‌دهد و بازدهی شما را به حداکثر می‌رساند.",
      getStarted: "شروع کنید",
      watchDemo: "مشاهده دمو",
    },
    stats: {
      waterSaved: "صرفه‌جویی در آب",
      yieldIncrease: "افزایش محصول",
      farmsConnected: "مزارع متصل",
    },
    features: {
      title: "قابلیت‌های ما",
      heading: "فناوری پیشرفته",
      description:
        "راه‌حل‌های مدولار اینترنت اشیاء و هوش مصنوعی برای مزارع مدرن. نظارت، تحلیل و خودکارسازی کل عملیات شما.",
      aiPlantDoctor: {
        title: "پزشک گیاه هوشمند",
        description:
          "تشخیص بیماری‌ها پیش از شیوع با بینایی ماشین. هوش مصنوعی ما الگوهای برگ را برای شناسایی علائم اولیه تنش اسکن می‌کند.",
      },
      smartInjection: {
        title: "تزریق هوشمند",
        description:
          "تحویل دقیق مواد معدنی و مغذی در زمان نیاز بر اساس تحلیل آنی ترکیب خاک.",
      },
      iotConnectivity: {
        title: "اتصال اینترنت اشیاء",
        description:
          "کنترل سیستم‌های آبیاری از هر کجا از طریق ابرا. افزونگی کامل حتی در مناطق با اتصال ضعیف.",
      },
    },
    aiAgentPage: {
      badge: "لایه هوشمند",
      title: "با کشاورز دیجیتال خود آشنا شوید",
      subtitle:
        "جمعه یک دستیار هوشمند برای کشاورزی مدرن است که فاصله میان داده‌های خام حسگرهای مزرعه و تصمیم‌های کارشناسانه و به‌موقع را پر می‌کند. فناوری قابل‌اعتماد برای مزرعه.",
      startConversation: "شروع گفتگو",
      seeDemo: "مشاهده دمو",
      status: {
        label: "وضعیت سیستم",
        value: "همه گره‌ها فعال",
        metric: "هدف رطوبت خاک",
        quote: "«سطح رطوبت فعلی مطلوب است. پیشنهاد می‌کنم آبیاری را تا عصر فردا متوقف کنید.» - هوش مصنوعی جمعه",
      },
      philosophy: {
        title: "از خاک تا داده",
        subtitle:
          "ابزارهایی می‌سازیم که به اندازه سخت‌افزارهای مزرعه شما مقاوم و قابل‌اعتماد باشند. دقت هوشمند، بدون شکنندگی.",
      },
      doctor: {
        title: "پزشک گیاه",
        description:
          "با بینایی ماشین پیشرفته، بیماری‌های محصول را مستقیماً در مزرعه تشخیص دهید. امتیاز اطمینان و اقدامات فوری پیشنهادی را پیش از گسترش مشکل دریافت کنید.",
        reasoning: "استدلال",
        finding: "احتمال بالای بلایت زودرس در برگ‌های پایینی سایه‌انداز.",
      },
      whatIf: {
        title: "شبیه‌سازی سناریو",
        description:
          "پیش از مصرف منابع، اثر آبیاری را شبیه‌سازی کنید. بازده پیش‌بینی‌شده تأخیر در یک چرخه را بر اساس پیش‌بینی‌های محلی ببینید.",
        delay: "تأخیر چرخه",
        delayValue: "+۲۴ ساعت",
        waterSaved: "آب ذخیره‌شده",
        waterValue: "۱٫۲ میلیون گالن",
      },
      advice: {
        title: "مشاوره تخصصی شبانه‌روزی",
        description:
          "با زبان طبیعی با جمعه گفتگو کنید. جمعه شیمی پیچیده خاک، اثرات تاریخی آب‌وهوا و نیازهای خاص هر محصول را می‌شناسد و در هر ساعت توصیه‌های کاربردی ارائه می‌دهد.",
        tags: ["شیمی خاک", "آب‌وهوا", "نیاز محصول"],
        question: "با توجه به بارش پیش‌بینی‌شده در پنجشنبه، امروز نیتروژن بدهم؟",
        answer:
          "پیشنهاد می‌کنم صبر کنید. با ۸۵٪ احتمال بارش شدید در پنجشنبه، دادن نیتروژن امروز خطر آب‌شویی قابل‌توجهی دارد، منابع را هدر می‌دهد و ممکن است به منابع آب محلی آسیب بزند.",
        placeholder: "از جمعه بپرسید...",
      },
      cta: {
        title: "آماده مدیریت هوشمند زمین هستید؟",
        subtitle:
          "حدس زدن را کنار بگذارید و بهینه‌سازی را شروع کنید. جمعه آماده است تا با دقت و اطمینان در مدیریت زمین به شما کمک کند.",
      },
    },
    chatPage: {
      title: "دستیار کشاورز",
      status: "سیستم آنلاین. همه حسگرها عادی.",
      alert: {
        meta: "هشدار سیستم • ۰۸:۱۵",
        title: "کمبود فسفر در ناحیه ۳ شناسایی شد.",
        body: "انحراف: ۱۴٪ کمتر از مبنا. رشد ریشه در خطر است.",
        viewMap: "مشاهده نقشه ناحیه",
        acknowledge: "تأیید",
      },
      insight: {
        meta: "بینش کاربردی • ۰۹:۳۰",
        title: "بهترین زمان برداشت: ۳ روز",
        body: "انگورهای بلوک C به سطح بریکس هدف می‌رسند.",
      },
      userScan: "می‌توانی این اسکن برگ از بلوک C را تحلیل کنی؟",
      diagnosis: {
        label: "نتیجه تشخیص",
        badge: "عامل بیماری‌زا شناسایی شد",
        title: "زنگ زودرس برگ",
        confidence: "اطمینان هوش مصنوعی",
        protocol: "دستورالعمل",
        protocolBody:
          "در دوره خشک بعدی قارچ‌کش مسی اسپری کنید. در صورت امکان تاک‌های آلوده را جدا کنید تا از پخش هاگ جلوگیری شود.",
      },
      morning:
        "صبح بخیر. رطوبت خاک در بخش آلفا به ۲۲٪ رسیده است. بر اساس پیش‌بینی شاخص گرما، پیشنهاد می‌کنم یک چرخه آبیاری قطره‌ای تکمیلی را پیش از ساعت ۱۴:۰۰ آغاز کنید.",
      userSimulation: "اگر آن چرخه را ۲۴ ساعت عقب بیندازیم، شبیه‌سازی کن.",
      simulation: {
        label: "هوش آبیاری • شبیه‌ساز سناریو",
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
      placeholder: "از کشاورز دیجیتال خود بپرسید...",
    },
    nutrientsPage: {
      badge: "تزریق‌کننده هوشمند جمعه",
      title: "تغذیه دقیق برای هر محصول.",
      subtitle:
        "یک سیستم خودکار که مواد معدنی مایع را دقیقاً در جا و زمان مورد نیاز تزریق می‌کند. گیاهان سالم‌تر پرورش دهید، مصرف منابع را بهینه کنید و با مدیریت هوشمند بازدهی خود را افزایش دهید.",
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
        title: "تحویل هوشمند مواد مغذی",
        subtitle: "کوددهی یکسان را کنار بگذارید. بر اساس داده‌های لحظه‌ای، خاک خود را با دقت کامل تغذیه کنید.",
      },
      targeting: {
        title: "هدف‌گیری بر اساس محصول",
        description:
          "محصولات مختلف را در یک چرخه آبیاری از هم تفکیک کنید. تزریق‌کننده هوشمند ترکیب‌های مخصوص را به ناحیه‌های جداگانه می‌فرستد؛ هم‌زمان به گوجه‌فرنگی پتاسیم بیشتر و به خیار نیتروژن متعادل می‌دهد.",
      },
      monitoring: {
        title: "پایش لحظه‌ای مواد معدنی",
        description:
          "حسگرهای خاک به‌طور مداوم سطح نیتروژن، فسفر و پتاسیم را ردیابی می‌کنند و سلامت خاک شما را با نمایش داده‌ای واضح نشان می‌دهند.",
      },
      engine: {
        title: "موتور پیشنهاد هوشمند",
        description:
          "هوش مصنوعی وضعیت خاک، الگوهای آب‌وهوا و مرحله رشد هر محصول را تحلیل می‌کند و به‌طور خودکار بهترین ترکیب مواد مغذی را پیشنهاد می‌دهد.",
        confidence: "اطمینان هوش مصنوعی",
        blend: "ترکیب بهینه محاسبه شد",
      },
      pure: {
        badge: "ترکیب اختصاصی",
        title: "مواد مغذی خالص جمعه",
        description:
          "بیشترین بهره را از سخت‌افزار ببرید با خط اختصاصی ترکیب‌های معدنی مایع، پربازده و بدون رسوب که برای تزریق روان و جذب سریع ریشه طراحی شده‌اند.",
      },
    },
    hardwarePage: {
      title: "ستون فقرات مدیریت هوشمند",
      subtitle: "سخت‌افزاری مقاوم و آزموده در مزرعه که پلی میان خاک و فناوری می‌سازد.",
      explore: "آشنایی با اکوسیستم",
      specs: "مشاهده مشخصات فنی",
      hub: {
        title: "هاب جمعه: مرکز هوشمند",
        description:
          "یک کنترلر ضدآب که مغز مزرعه شماست. این دستگاه اتصال اختصاصی برای تزریق مواد مغذی دارد و جریان آب و دوز مواد معدنی را به‌صورت لحظه‌ای از طریق اپلیکیشن حرفه‌ای ما محاسبه می‌کند.",
        dosing: "دوزدهی حلقه‌بسته",
        dosingBody: "پایش لحظه‌ای EC و pH تعادل شیمیایی دقیق را در خط اصلی تضمین می‌کند.",
        flow: "کنترل جریان تناسبی",
        flowBody: "نرخ تزریق بر اساس داده‌های کنتور جریان با تأخیر میلی‌ثانیه‌ای به‌طور پویا تنظیم می‌شود.",
      },
      injection: {
        title: "تزریق یکپارچه مواد مغذی",
        description:
          "سیستم مخزن مقاوم ما یک پمپ پردقت دارد که برای محیط‌های کشاورزی صنعتی طراحی شده است. این سیستم با منطق دوزدهی خودکار، تعادل دقیق مواد معدنی مورد نیاز محصول شما را فراهم می‌کند.",
        dosing: "منطق دوزدهی خودکار مواد معدنی",
        pump: "پمپ صنعتی مقاوم",
      },
      subsurface: {
        title: "آبیاری زیرسطحی",
        description:
          "با لوله‌کشی زیرزمینی که رطوبت را مستقیماً به ناحیه ریشه می‌رساند، بهره‌وری آب را به حداکثر برسانید. حسگرهای یکپارچه جمعه در سطح ریشه پایش هوشمند انجام می‌دهند، هدررفت تبخیری را حذف و سلامت گیاه را بهینه می‌کنند.",
        sensing: "پایش هوشمند در سطح ریشه",
        delivery: "آبرسانی بدون تبخیر",
      },
    },
    footer: {
      description:
        "توانمندسازی کشاورزان با بینش‌های مبتنی بر هوش مصنوعی و سیستم‌های کنترل خودکار برای آینده‌ای پایدار.",
      product: "محصول",
      company: "شرکت",
      legal: "حقوقی",
      links: {
        features: "ویژگی‌ها",
        techSpecs: "مشخصات فنی",
        aiAgent: "دستیار هوشمند",
        aboutUs: "درباره ما",
        careers: "فرصت‌های شغلی",
        privacyPolicy: "سیاست حفظ حریم خصوصی",
        termsOfService: "شرایط خدمات",
      },
      copyright: "© ۲۰۲۴ آبیاری خودکار جمعه. تمامی حقوق محفوظ است.",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
