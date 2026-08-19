import PageHero from '@/components/PageHero'; import {getT} from '@/lib/i18n';
export default async function About({params}:{params:Promise<{lang:string}>}){const {lang}=await params;const tr=getT(lang);return <><PageHero eyebrow="PROFILE" title={tr.aboutTitle} lead={tr.aboutLead}/><section className="content twoCol"><div className="bigNumber">01</div><div><p className="leadText">{tr.aboutP1}</p>
<p>{tr.aboutP2}</p>
<p>{tr.aboutP3}</p>
<p>{tr.aboutP4}</p>
<p>{tr.aboutP5}</p>
<p>{tr.aboutP6}</p></div></section>
<section className="content bioSources"><div className="bigNumber">02</div><div>
<h2>Public records & press</h2>
<p><a href="https://gmvimbb.com/2017-arnold-usa-results-amateur-men/" target="_blank" rel="noreferrer">2017 Arnold Amateur — official results archive</a></p>
<p><a href="https://www.elitefts.com/wp/wp-content/uploads/2017/03/2017-Arnold-Amateur-Scorecard-1.pdf" target="_blank" rel="noreferrer">2017 Arnold Amateur — IFBB scorecard</a></p>
<p><a href="https://fitnessacademyeurope.com/faepro/user/fae995279/" target="_blank" rel="noreferrer">Fitness Academy Europe — professional profile</a></p>
</div></section>
<section className="facts"><div><span>1995—</span><b>SPORT</b></div><div><span>2017</span><b>ARNOLD AMATEUR</b></div><div><span>4</span><b>LANGUAGES</b></div></section></>}
