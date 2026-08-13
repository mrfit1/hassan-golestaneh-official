export default function PageHero({eyebrow,title,lead}:{eyebrow:string,title:string,lead:string}){
  return <section className="pageHero"><div className="kicker">{eyebrow}</div><h1>{title}</h1><p>{lead}</p></section>
}
