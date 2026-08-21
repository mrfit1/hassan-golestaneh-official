import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getT } from '@/lib/i18n';

export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{ const {lang}=await params; return pageMetadata(lang,'home',''); }
export default async function Home({params}:{params:Promise<{lang:string}>}){
 const {lang}=await params; const tr=getT(lang);
 return <>
  <section className="hero">
    <video autoPlay muted loop playsInline preload="metadata" className="heroVideo"><source src="/videos/hero.mp4" type="video/mp4"/></video>
    <div className="heroShade"/><div className="heroContent"><div className="kicker light">{tr.heroEyebrow}</div><h1>{tr.heroTitle}</h1><p>{tr.heroSub}</p><Link href={`/${lang}/about`} className="cta">{tr.heroCta}<ArrowRight size={18}/></Link></div>
  </section>
  <section className="intro split"><div><div className="kicker">PROFILE</div><h2>{tr.introTitle}</h2></div><div><p>{tr.introBody}</p><div className="pillars">{tr.pillars.map((p:string,i:number)=><span key={p}>0{i+1} · {p}</span>)}</div></div></section>
  <section className="darkSection"><div className="sectionHead"><div className="kicker light">MILESTONES</div><h2>{tr.featuredTitle}</h2></div><div className="milestoneGrid">{tr.featured.map((x:any)=><article key={x[0]+x[1]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
  <section className="statement"><blockquote>{tr.quote}</blockquote><div className="signature">HASSAN GOLESTANEH</div></section>
  <section className="linkGrid"><Link href={`/${lang}/career`}><span>01</span><h3>{tr.career}</h3><ArrowRight/></Link><Link href={`/${lang}/achievements`}><span>02</span><h3>{tr.achievements}</h3><ArrowRight/></Link><Link href={`/${lang}/media`}><span>03</span><h3>{tr.media}</h3><ArrowRight/></Link></section>
 </>
}
