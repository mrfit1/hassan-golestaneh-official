import type { Metadata } from 'next';

export const SITE_URL = 'https://hassangolestaneh.com';
export const SITE_NAME = 'Hassan Golestaneh | Official Website';
export const PERSON_IMAGE = '/images/arnold-2017/stage-solo.jpg';
export const locales = ['en', 'fa', 'fr', 'es'] as const;

const localeMap: Record<string, string> = {
  en: 'en_US',
  fa: 'fa_IR',
  fr: 'fr_FR',
  es: 'es_ES',
};

const titles: Record<string, Record<string, string>> = {
  en: { home:'Hassan Golestaneh | Official Website', about:'About Hassan Golestaneh', career:'Career', achievements:'Achievements', media:'Media & Press', gallery:'Gallery', contact:'Contact' },
  fa: { home:'حسن گلستانه | وب‌سایت رسمی', about:'درباره حسن گلستانه', career:'مسیر حرفه‌ای', achievements:'افتخارات', media:'رسانه و خبر', gallery:'گالری', contact:'تماس' },
  fr: { home:'Hassan Golestaneh | Site officiel', about:'À propos de Hassan Golestaneh', career:'Carrière', achievements:'Palmarès', media:'Médias & presse', gallery:'Galerie', contact:'Contact' },
  es: { home:'Hassan Golestaneh | Sitio oficial', about:'Sobre Hassan Golestaneh', career:'Carrera', achievements:'Logros', media:'Medios y prensa', gallery:'Galería', contact:'Contacto' },
};

const descriptions: Record<string, Record<string, string>> = {
  en: {
    home:'Official website of Hassan Golestaneh — athlete, fitness medalist, coach, judge and international sports figure.',
    about:'Official biography and profile of Hassan Golestaneh, athlete, fitness medalist, coach and international sports figure.',
    career:'Professional career of Hassan Golestaneh across fitness, international competition, coaching, judging and sports development.',
    achievements:'Competition achievements of Hassan Golestaneh, including WFF World Championships, Huntington Beach and Arnold Amateur 2017.',
    media:'Media coverage, official profiles and international competition records for Hassan Golestaneh.',
    gallery:'Official competition and event photo archive of Hassan Golestaneh, including Ireland 2016, Huntington Beach 2017 and Arnold Amateur Columbus 2017.',
    contact:'Official contact page for Hassan Golestaneh.',
  },
  fa: {
    home:'وب‌سایت رسمی حسن گلستانه؛ ورزشکار، مدال‌آور فیتنس، مربی، داور و چهره بین‌المللی ورزش.',
    about:'زندگینامه و معرفی رسمی حسن گلستانه؛ ورزشکار، مدال‌آور فیتنس، مربی و چهره بین‌المللی ورزش.',
    career:'مسیر حرفه‌ای حسن گلستانه در فیتنس، مسابقات بین‌المللی، مربی‌گری، داوری و توسعه ورزش.',
    achievements:'افتخارات مسابقاتی حسن گلستانه از جمله WFF، هنتینگتون بیچ و Arnold Amateur 2017.',
    media:'پوشش رسانه‌ای، پروفایل‌های رسمی و سوابق مسابقات بین‌المللی حسن گلستانه.',
    gallery:'آرشیو رسمی تصاویر مسابقات و رویدادهای حسن گلستانه؛ ایرلند ۲۰۱۶، کالیفرنیا ۲۰۱۷ و Arnold Amateur کلمبوس ۲۰۱۷.',
    contact:'صفحه تماس رسمی حسن گلستانه.',
  },
  fr: {},
  es: {},
};

function localizedDescription(lang:string,page:string){
  return descriptions[lang]?.[page] || descriptions.en[page] || descriptions.en.home;
}

export function pageMetadata(lang:string, page:string, path = ''): Metadata {
  const safeLang = locales.includes(lang as any) ? lang : 'en';
  const route = path ? `/${safeLang}/${path}` : `/${safeLang}`;
  const canonical = `${SITE_URL}${route}`;
  const languages = Object.fromEntries(locales.map(l => [l, `${SITE_URL}/${l}${path ? `/${path}` : ''}`]));
  return {
    title: titles[safeLang]?.[page] || titles.en[page] || SITE_NAME,
    description: localizedDescription(safeLang,page),
    alternates: { canonical, languages: { ...languages, 'x-default': `${SITE_URL}/en${path ? `/${path}` : ''}` } },
    openGraph: {
      title: titles[safeLang]?.[page] || SITE_NAME,
      description: localizedDescription(safeLang,page),
      url: canonical,
      siteName: SITE_NAME,
      locale: localeMap[safeLang] || 'en_US',
      type: 'website',
      images: [{ url: PERSON_IMAGE, width: 960, height: 1280, alt: 'Official sports archive image' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[safeLang]?.[page] || SITE_NAME,
      description: localizedDescription(safeLang,page),
      images: [PERSON_IMAGE],
    },
  };
}
