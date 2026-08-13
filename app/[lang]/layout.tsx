import SiteShell from '@/components/SiteShell';
import { locales } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const descriptions:Record<string,string>={
  en:'Official website of Hassan Golestaneh — biography, career, achievements, media and official links.',
  fa:'وب‌سایت رسمی حسن گلستانه؛ زندگینامه، مسیر حرفه‌ای، افتخارات، رسانه‌ها و لینک‌های رسمی.',
  fr:'Site officiel de Hassan Golestaneh — biographie, carrière, palmarès, médias et liens officiels.',
  es:'Sitio oficial de Hassan Golestaneh — biografía, carrera, logros, medios y enlaces oficiales.'
};

export function generateStaticParams(){return locales.map(lang=>({lang}));}
export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{
  const {lang}=await params;
  const title=lang==='fa'?'حسن گلستانه | وب‌سایت رسمی':'Hassan Golestaneh | Official Website';
  return {title,description:descriptions[lang]||descriptions.en,alternates:{canonical:`/${lang}`,languages:{en:'/en',fa:'/fa',fr:'/fr',es:'/es'}}};
}
export default async function LangLayout({children,params}:{children:React.ReactNode,params:Promise<{lang:string}>}){
  const {lang}=await params; if(!locales.includes(lang as any)) notFound();
  const base=process.env.NEXT_PUBLIC_SITE_URL || 'https://hassan-golestaneh-official.vercel.app';
  const schema={
    '@context':'https://schema.org','@type':'Person',name:'Hassan Golestaneh',url:`${base}/${lang}`,
    sameAs:['https://www.instagram.com/mrsportmodel/','https://en.wikipedia.org/wiki/Hassan_Golestaneh','https://www.imdb.com/name/nm13963676/']
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><SiteShell lang={lang}>{children}</SiteShell></>;
}
