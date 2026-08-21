import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHero from '@/components/PageHero'; import {getT} from '@/lib/i18n';

export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{ const {lang}=await params; return pageMetadata(lang,'about','about'); }
export default async function About({params}:{params:Promise<{lang:string}>}){const {lang}=await params;const tr=getT(lang);return <><PageHero eyebrow="PROFILE" title={tr.aboutTitle} lead={tr.aboutLead}/><section className="content twoCol"><div className="bigNumber">01</div><div><p className="leadText">{tr.aboutP1}</p><p>{tr.aboutP2}</p></div></section><section className="facts"><div><span>1995—</span><b>SPORT</b></div><div><span>2017</span><b>ARNOLD AMATEUR</b></div><div><span>4</span><b>LANGUAGES</b></div></section></>}
