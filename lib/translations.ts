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
