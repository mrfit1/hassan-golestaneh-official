import PageHero from '@/components/PageHero'; import {getT} from '@/lib/i18n'; import {ExternalLink} from 'lucide-react';
const links=[
 ['Instagram','@mrsportmodel','https://www.instagram.com/mrsportmodel/'],
 ['Wikipedia','Hassan Golestaneh','https://en.wikipedia.org/wiki/Hassan_Golestaneh'],
 ['IMDb','Hassan Golestaneh','https://www.imdb.com/name/nm13963676/'],
 ['NPC News Online','2017 Arnold Amateur','https://contests.npcnewsonline.com/contests/2017/arnold_amateur/4j45/hassan_golestaneh'],
 ['Fitness Academy Europe','Fitness Nutrition Specialist','https://fitnessacademyeurope.com/faepro/user/fae995279/'],
 ['National Olympic Committee','2024 sports appointment','https://www.olympic.ir/Components/News/View/NewsPDF2.aspx?id=40557&lcid=1033']
];
export default async function Media({params}:{params:Promise<{lang:string}>}){const {lang}=await params;const tr=getT(lang);return <><PageHero eyebrow="PRESS / LINKS" title={tr.mediaTitle} lead={tr.mediaLead}/><section className="mediaList">{links.map(x=><a key={x[0]} href={x[2]} target="_blank"><div><small>{x[0]}</small><h2>{x[1]}</h2></div><ExternalLink/></a>)}</section></>}
