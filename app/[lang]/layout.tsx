import SiteShell from '@/components/SiteShell';
import { locales } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export function generateStaticParams(){return locales.map(lang=>({lang}));}
export default async function LangLayout({children,params}:{children:React.ReactNode,params:Promise<{lang:string}>}){
  const {lang}=await params; if(!locales.includes(lang as any)) notFound();
  return <SiteShell lang={lang}>{children}</SiteShell>
}
