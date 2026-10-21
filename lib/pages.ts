import type { Locale } from './translations';

// Text for the company and legal pages (About, Careers, Privacy, Terms), kept apart from the
// product copy in translations.ts. Legal pages: plain-language drafts, to be reviewed by a lawyer.

export type DocSection = { title: string; body: readonly string[] };

const UPDATED = { en: 'Last updated: 21 October 2026', fa: 'آخرین به‌روزرسانی: ۲۹ مهر ۱۴۰۵' };

const pages = {
  en: {
    about: {
      label: 'About us',
      title: 'We farm',
      titleEm: 'too.',
      lead: 'Jome is built by Persian farmers and engineers who grow crops themselves. We make smart irrigation and nutrient systems for the problems we face in our own fields.',
      story: {
        label: 'Our story',
        title: 'It started in',
        titleEm: 'our own garden.',
        body: [
          'Jome began at Derake Garden in Pariz, Kerman, our own farm. Like most farms in Iran, it lives with scarce water, hard and salty wells, rising costs and too few hands at harvest time.',
          'We tried the tools on the market and found them fragile, expensive, or built for somewhere else. So we started building our own: a rugged hub, soil sensors, subsurface irrigation, and an agronomist that tells you what to do in plain language.',
          'Everything we ship is tested on our farm first. If it doesn\'t survive a summer in Pariz, it doesn\'t leave the garden.',
        ],
      },
      values: {
        label: 'What we believe',
        title: 'Built for the field,',
        titleEm: 'not the showroom.',
        items: [
          ['Every drop counts', 'Water and nutrients belong at the roots. Saving water comes first in every decision we make.'],
          ['Rugged over fancy', 'Hardware that survives sun, dust, salt and power cuts, and keeps working offline.'],
          ['Farmers decide', 'The system recommends, you approve. You stay in control of your land.'],
          ['Repairable here', 'Built to be serviced with parts and skills available in Iran.'],
        ],
      },
      what: {
        label: 'What we build',
        title: 'One system,',
        titleEm: 'three parts.',
      },
      cta: { title: 'Want to see it on your farm?', button: 'Get in touch' },
    },
    careers: {
      label: 'Careers',
      title: 'Grow more',
      titleEm: 'with less water.',
      lead: 'We are a small team of farmers and engineers. If you want your work to end up in real fields, helping real farmers, we would like to hear from you.',
      areas: {
        label: 'Where we need help',
        title: 'Skills we',
        titleEm: 'look for.',
        items: [
          ['Field engineering', 'Installing and maintaining irrigation, sensors and hubs on working farms.'],
          ['Electronics & embedded', 'Low-power hardware, sensors, LoRa and 4G, built to survive outdoors.'],
          ['Software & AI', 'The dashboard, the farm map and the AI agronomist.'],
          ['Agronomy', 'Crop, soil and water knowledge that turns data into good advice.'],
        ],
      },
      how: {
        label: 'How we work',
        title: 'Close to',
        titleEm: 'the soil.',
        items: [
          ['Time in the field', 'Everyone spends time on the farm. You will see your work being used.'],
          ['Small team, real ownership', 'You own what you build, from the first sketch to the field.'],
          ['Practical over perfect', 'We ship what helps farmers now, then improve it every season.'],
        ],
      },
      open: {
        title: 'No open roles are listed right now.',
        body: 'We still read every message. Send us a short note about yourself, what you would like to work on, and any links to your work.',
        button: 'Send an open application',
        subject: 'Open application: Jome',
      },
    },
    privacy: {
      label: 'Legal',
      title: 'Privacy policy',
      updated: UPDATED.en,
      intro: 'This policy explains what information this website collects and how we use it. In short: we collect very little, and we never sell it.',
      sections: [
        { title: 'What this site does not do', body: [
          'This website does not use cookies, analytics, advertising trackers or browser storage. You do not need an account to use it.',
        ] },
        { title: 'Information you send us', body: [
          'The contact and proposal forms do not send anything from this website. They open your own email app with your message filled in, and nothing is sent until you press send there.',
          'When you email us, we receive what you choose to include, such as your name, phone or email, farm size and message. We use it only to reply to you and to prepare a system plan or quote.',
        ] },
        { title: 'The Ask JoME demo', body: [
          'The Ask JoME chat on this website is a demo that runs entirely in your browser. What you type is not sent to us or to anyone else.',
        ] },
        { title: 'Third-party services', body: [
          'The site is hosted on GitHub Pages. Like any web host, GitHub may record technical data such as your IP address when your browser requests a page.',
          'The live farm map loads satellite imagery from Esri\'s map servers, so your browser connects to them directly when the map is shown.',
          'Fonts, images and video are served from our own site.',
        ] },
        { title: 'How long we keep it', body: [
          'We keep emails for as long as we are in contact with you about your farm or proposal, and delete them when they are no longer needed.',
        ] },
        { title: 'Your choices', body: [
          'You can ask us at any time to see, correct or delete the information you have sent us. Email us and we will reply within a week.',
        ] },
        { title: 'Changes', body: [
          'If we change this policy, we will update it on this page and change the date at the top.',
        ] },
      ] as DocSection[],
      contact: 'Questions about privacy? Email us at',
    },
    terms: {
      label: 'Legal',
      title: 'Terms of service',
      updated: UPDATED.en,
      intro: 'These terms apply to your use of the Jome website. By using the site you agree to them.',
      sections: [
        { title: 'Information on this site', body: [
          'The content on this website is general information about Jome and its products. It is not professional agronomic, engineering or financial advice for your farm.',
          'Dashboards, live readings, the demo farm and the Ask JoME chat are simulations for demonstration. They do not show live data from your farm.',
        ] },
        { title: 'Products and concepts', body: [
          'Some products are described as concepts, such as the Jome nutrient blends. Concepts are not yet available for sale, and their final form may differ from what is shown.',
          'Specifications, features and availability may change without notice.',
        ] },
        { title: 'Quotes and orders', body: [
          'Prices, system plans and quotes we send you are estimates until we agree on them in a separate written agreement. Any purchase, installation or service is governed by that agreement.',
        ] },
        { title: 'Proposals and partnerships', body: [
          'Sending a proposal in response to our request for proposals does not create a partnership or any obligation for either side. Any collaboration is set out in a separate written agreement.',
        ] },
        { title: 'Intellectual property', body: [
          'The Jome name, logo, text, images, video and design of this website belong to Jome. You may share links to the site, but please do not copy or reuse its content without our permission.',
        ] },
        { title: 'Use of the site', body: [
          'Please do not misuse the site, for example by trying to disrupt it or gain unauthorised access to it.',
        ] },
        { title: 'Liability', body: [
          'We work hard to keep this website accurate and available, but it is provided as is. To the extent the law allows, Jome is not liable for losses that come from using the information on this site.',
        ] },
        { title: 'Governing law', body: [
          'These terms are governed by the laws of the Islamic Republic of Iran.',
        ] },
        { title: 'Changes', body: [
          'We may update these terms. The date at the top shows when they last changed.',
        ] },
      ] as DocSection[],
      contact: 'Questions about these terms? Email us at',
    },
  },
  fa: {
    about: {
      label: 'درباره ما',
      title: 'ما هم',
      titleEm: 'کشاورزیم.',
      lead: 'جمعه را کشاورزان و مهندسان ایرانی می‌سازند که خودشان کشت می‌کنند. ما سیستم‌های هوشمند آبیاری و تغذیه را برای مشکلاتی می‌سازیم که در مزرعه خودمان با آن‌ها روبه‌رو هستیم.',
      story: {
        label: 'داستان ما',
        title: 'همه‌چیز از',
        titleEm: 'باغ خودمان شروع شد.',
        body: [
          'جمعه در باغ دراق، در پاریز کرمان، باغ خودمان شروع شد. مثل بیشتر مزارع ایران، این باغ هم با کم‌آبی، چاه‌های سخت و شور، هزینه‌های رو به افزایش و کمبود نیروی کار در فصل برداشت دست‌وپنجه نرم می‌کند.',
          'ابزارهای موجود در بازار را امتحان کردیم و دیدیم یا شکننده‌اند، یا گران، یا برای جای دیگری ساخته شده‌اند. پس شروع کردیم خودمان بسازیم: یک هاب مقاوم، حسگرهای خاک، آبیاری زیرسطحی و یک کشاورز دیجیتال که به زبان ساده می‌گوید چه کار کنید.',
          'هر چیزی که عرضه می‌کنیم اول در باغ خودمان آزمایش می‌شود. اگر یک تابستان پاریز را تاب نیاورد، از باغ بیرون نمی‌رود.',
        ],
      },
      values: {
        label: 'به چه باور داریم',
        title: 'ساخته‌شده برای مزرعه،',
        titleEm: 'نه ویترین.',
        items: [
          ['هر قطره ارزشمند است', 'آب و مواد مغذی باید به ریشه برسند. صرفه‌جویی در آب در هر تصمیم ما اولویت اول است.'],
          ['مقاوم، نه پرزرق‌وبرق', 'سخت‌افزاری که آفتاب، گردوغبار، شوری و قطعی برق را تاب می‌آورد و بدون اینترنت هم کار می‌کند.'],
          ['تصمیم با کشاورز است', 'سیستم پیشنهاد می‌دهد و شما تأیید می‌کنید. کنترل زمین‌تان دست خودتان است.'],
          ['قابل تعمیر در ایران', 'ساخته‌شده برای تعمیر با قطعات و مهارت‌هایی که در ایران در دسترس است.'],
        ],
      },
      what: {
        label: 'چه می‌سازیم',
        title: 'یک سیستم،',
        titleEm: 'سه بخش.',
      },
      cta: { title: 'می‌خواهید آن را در مزرعه خودتان ببینید؟', button: 'با ما در تماس باشید' },
    },
    careers: {
      label: 'فرصت‌های شغلی',
      title: 'با آب کمتر،',
      titleEm: 'بیشتر برداشت کنیم.',
      lead: 'ما تیم کوچکی از کشاورزان و مهندسان هستیم. اگر می‌خواهید کارتان به مزرعه واقعی برسد و به کشاورزان واقعی کمک کند، خوشحال می‌شویم از شما بشنویم.',
      areas: {
        label: 'کجا به کمک نیاز داریم',
        title: 'مهارت‌هایی که',
        titleEm: 'به دنبالشان هستیم.',
        items: [
          ['مهندسی میدانی', 'نصب و نگهداری آبیاری، حسگرها و هاب‌ها در مزارع فعال.'],
          ['الکترونیک و سیستم‌های نهفته', 'سخت‌افزار کم‌مصرف، حسگرها، LoRa و 4G، ساخته‌شده برای محیط باز.'],
          ['نرم‌افزار و هوش مصنوعی', 'داشبورد، نقشه مزرعه و کشاورز دیجیتال.'],
          ['زراعت', 'دانش محصول، خاک و آب که داده را به توصیه درست تبدیل می‌کند.'],
        ],
      },
      how: {
        label: 'چطور کار می‌کنیم',
        title: 'نزدیک',
        titleEm: 'به خاک.',
        items: [
          ['زمان در مزرعه', 'همه در مزرعه وقت می‌گذرانند. استفاده از کارتان را با چشم خودتان می‌بینید.'],
          ['تیم کوچک، مسئولیت واقعی', 'آنچه می‌سازید متعلق به شماست، از اولین طرح تا مزرعه.'],
          ['کاربردی، نه بی‌نقص', 'آنچه امروز به کشاورز کمک می‌کند را عرضه می‌کنیم و هر فصل بهترش می‌کنیم.'],
        ],
      },
      open: {
        title: 'در حال حاضر موقعیت شغلی بازی اعلام نشده است.',
        body: 'با این حال همه پیام‌ها را می‌خوانیم. یک یادداشت کوتاه درباره خودتان، کاری که دوست دارید انجام دهید و پیوند نمونه‌کارهایتان برایمان بفرستید.',
        button: 'ارسال درخواست همکاری',
        subject: 'درخواست همکاری با جمعه',
      },
    },
    privacy: {
      label: 'حقوقی',
      title: 'سیاست حفظ حریم خصوصی',
      updated: UPDATED.fa,
      intro: 'این سیاست توضیح می‌دهد این وب‌سایت چه اطلاعاتی جمع می‌کند و چگونه از آن استفاده می‌کنیم. به‌طور خلاصه: اطلاعات بسیار کمی جمع می‌کنیم و هرگز آن را نمی‌فروشیم.',
      sections: [
        { title: 'آنچه این سایت انجام نمی‌دهد', body: [
          'این وب‌سایت از کوکی، ابزارهای تحلیل آماری، ردیاب‌های تبلیغاتی یا حافظه مرورگر استفاده نمی‌کند. برای استفاده از آن به حساب کاربری نیاز ندارید.',
        ] },
        { title: 'اطلاعاتی که برای ما می‌فرستید', body: [
          'فرم‌های تماس و ارسال پیشنهاد چیزی را از این وب‌سایت ارسال نمی‌کنند. آن‌ها اپلیکیشن ایمیل خودتان را با پیام آماده باز می‌کنند و تا وقتی آنجا دکمه ارسال را نزنید چیزی فرستاده نمی‌شود.',
          'وقتی به ما ایمیل می‌زنید، آنچه خودتان انتخاب می‌کنید را دریافت می‌کنیم؛ مانند نام، تلفن یا ایمیل، مساحت مزرعه و پیام. از آن فقط برای پاسخ به شما و تهیه طرح سیستم یا پیش‌فاکتور استفاده می‌کنیم.',
        ] },
        { title: 'نسخه نمایشی «از جمعه بپرسید»', body: [
          'گفت‌وگوی «از جمعه بپرسید» در این وب‌سایت یک نسخه نمایشی است که کاملاً در مرورگر شما اجرا می‌شود. آنچه می‌نویسید برای ما یا هیچ‌کس دیگری ارسال نمی‌شود.',
        ] },
        { title: 'خدمات شخص ثالث', body: [
          'این سایت روی GitHub Pages میزبانی می‌شود. مانند هر میزبان وب، GitHub ممکن است داده‌های فنی مانند نشانی IP شما را هنگام درخواست صفحه ثبت کند.',
          'نقشه زنده مزرعه تصاویر ماهواره‌ای را از سرورهای نقشه Esri بارگذاری می‌کند؛ بنابراین هنگام نمایش نقشه، مرورگر شما مستقیماً به آن‌ها متصل می‌شود.',
          'فونت‌ها، تصاویر و ویدیو از سایت خودمان ارائه می‌شوند.',
        ] },
        { title: 'مدت نگهداری', body: [
          'ایمیل‌ها را تا زمانی که درباره مزرعه یا پیشنهاد شما در ارتباط هستیم نگه می‌داریم و وقتی دیگر لازم نباشند حذفشان می‌کنیم.',
        ] },
        { title: 'حق انتخاب شما', body: [
          'هر زمان می‌توانید از ما بخواهید اطلاعاتی را که فرستاده‌اید ببینید، اصلاح یا حذف کنیم. به ما ایمیل بزنید؛ ظرف یک هفته پاسخ می‌دهیم.',
        ] },
        { title: 'تغییرات', body: [
          'اگر این سیاست را تغییر دهیم، آن را در همین صفحه به‌روز می‌کنیم و تاریخ بالای صفحه را تغییر می‌دهیم.',
        ] },
      ] as DocSection[],
      contact: 'پرسشی درباره حریم خصوصی دارید؟ به ما ایمیل بزنید:',
    },
    terms: {
      label: 'حقوقی',
      title: 'شرایط خدمات',
      updated: UPDATED.fa,
      intro: 'این شرایط بر استفاده شما از وب‌سایت جمعه حاکم است. با استفاده از سایت، این شرایط را می‌پذیرید.',
      sections: [
        { title: 'اطلاعات این سایت', body: [
          'محتوای این وب‌سایت اطلاعات عمومی درباره جمعه و محصولات آن است و توصیه تخصصی زراعی، مهندسی یا مالی برای مزرعه شما نیست.',
          'داشبوردها، داده‌های زنده، مزرعه نمایشی و گفت‌وگوی «از جمعه بپرسید» شبیه‌سازی‌هایی برای نمایش هستند و داده زنده مزرعه شما را نشان نمی‌دهند.',
        ] },
        { title: 'محصولات و طرح‌های مفهومی', body: [
          'برخی محصولات، مانند ترکیبات مواد مغذی جمعه، به‌عنوان طرح مفهومی معرفی شده‌اند. طرح‌های مفهومی هنوز برای فروش عرضه نشده‌اند و شکل نهایی آن‌ها ممکن است با آنچه نمایش داده شده متفاوت باشد.',
          'مشخصات، ویژگی‌ها و موجودی ممکن است بدون اطلاع قبلی تغییر کند.',
        ] },
        { title: 'پیش‌فاکتور و سفارش', body: [
          'قیمت‌ها، طرح‌های سیستم و پیش‌فاکتورهایی که برایتان می‌فرستیم تا زمان توافق در یک قرارداد کتبی جداگانه، برآورد هستند. هرگونه خرید، نصب یا خدمات تابع همان قرارداد است.',
        ] },
        { title: 'پیشنهادها و همکاری', body: [
          'ارسال پیشنهاد در پاسخ به فراخوان ما، رابطه همکاری یا تعهدی برای هیچ‌یک از طرفین ایجاد نمی‌کند. هرگونه همکاری در یک قرارداد کتبی جداگانه تعیین می‌شود.',
        ] },
        { title: 'مالکیت فکری', body: [
          'نام، لوگو، متن‌ها، تصاویر، ویدیو و طراحی این وب‌سایت متعلق به جمعه است. می‌توانید پیوند سایت را به اشتراک بگذارید، اما لطفاً بدون اجازه ما محتوای آن را کپی یا استفاده نکنید.',
        ] },
        { title: 'استفاده از سایت', body: [
          'لطفاً از سایت سوءاستفاده نکنید؛ برای مثال با تلاش برای مختل کردن آن یا دسترسی غیرمجاز به آن.',
        ] },
        { title: 'مسئولیت', body: [
          'تلاش می‌کنیم این وب‌سایت دقیق و در دسترس باشد، اما سایت «همان‌گونه که هست» ارائه می‌شود. تا جایی که قانون اجازه می‌دهد، جمعه مسئول زیان‌های ناشی از استفاده از اطلاعات این سایت نیست.',
        ] },
        { title: 'قانون حاکم', body: [
          'این شرایط تابع قوانین جمهوری اسلامی ایران است.',
        ] },
        { title: 'تغییرات', body: [
          'ممکن است این شرایط را به‌روز کنیم. تاریخ بالای صفحه زمان آخرین تغییر را نشان می‌دهد.',
        ] },
      ] as DocSection[],
      contact: 'پرسشی درباره این شرایط دارید؟ به ما ایمیل بزنید:',
    },
  },
} as const;

export const getPages = (locale: Locale) => pages[locale];
