import PageHero from '@/components/PageHero';
import { getT } from '@/lib/i18n';

const copy: Record<string, any> = {
  en: {
    eyebrow:'RECORD / COMPETITION',
    lead:'Selected competition milestones, documented through results, photographs and original event footage.',
    ireland:{year:'2016',title:'WFF World Championships',place:'Dublin, Ireland',headline:'Silver Medal · Men’s Sports Model Tall',body:'A defining international result: second place at the 2016 WFF World Championships in Dublin, Ireland.',video:'Medal ceremony & competition footage'},
    huntington:{year:'2017',title:'Fitness Sport · Huntington Beach',place:'California, USA',headline:'Gold Medal · Fitness Sport Pro Card · 2nd Place Physique · Physique Pro Card',body:'A landmark competition in California: Fitness Sport gold, the first Fitness Sport Pro Card earned by an Iranian, second place in Physique and a Physique Pro Card.'},
    arnold:{year:'2017',title:'Arnold Amateur',place:'Columbus, Ohio, USA',headline:'International Arnold Amateur appearance',body:'Competed at the Arnold Amateur 2017 in Columbus, Ohio, with an official competitor record in the event archive.'},
    footage:'Competition film', photos:'Event archive'
  },
  fa: {
    eyebrow:'افتخارات / مسابقات',
    lead:'منتخبی از نقاط مهم مسابقات، همراه با نتایج، تصاویر و ویدیوهای اصلی رویدادها.',
    ireland:{year:'۲۰۱۶',title:'قهرمانی جهان WFF',place:'دوبلین، ایرلند',headline:'مدال نقره · Men’s Sports Model Tall',body:'یکی از مهم‌ترین نتایج بین‌المللی؛ مقام دوم مسابقات قهرمانی جهان WFF سال ۲۰۱۶ در دوبلین ایرلند.',video:'مراسم مدال و تصاویر مسابقه'},
    huntington:{year:'۲۰۱۷',title:'Fitness Sport · Huntington Beach',place:'کالیفرنیا، آمریکا',headline:'طلای فیتنس اسپرت · کارت حرفه‌ای فیتنس اسپرت · مقام دوم فیزیک · کارت حرفه‌ای فیزیک',body:'یک مسابقه مهم در کالیفرنیا؛ مدال طلای Fitness Sport، نخستین Fitness Sport Pro Card برای یک ورزشکار ایرانی، مقام دوم Physique و دریافت Physique Pro Card.'},
    arnold:{year:'۲۰۱۷',title:'Arnold Amateur',place:'کلمبوس، اوهایو، آمریکا',headline:'حضور بین‌المللی در Arnold Amateur',body:'حضور در مسابقات Arnold Amateur 2017 در کلمبوس اوهایو، با رکورد رسمی شرکت‌کننده در آرشیو مسابقه.'},
    footage:'ویدیوی مسابقه', photos:'آرشیو رویداد'
  },
  fr: {
    eyebrow:'PALMARÈS / COMPÉTITION',
    lead:'Une sélection d’étapes majeures, documentées par les résultats, les photos et les images originales des compétitions.',
    ireland:{year:'2016',title:'WFF World Championships',place:'Dublin, Irlande',headline:'Médaille d’argent · Men’s Sports Model Tall',body:'Un résultat international majeur : deuxième place aux Championnats du monde WFF 2016 à Dublin.'},
    huntington:{year:'2017',title:'Fitness Sport · Huntington Beach',place:'Californie, États-Unis',headline:'Or Fitness Sport · Pro Card Fitness Sport · 2e Physique · Pro Card Physique',body:'Une compétition marquante en Californie : médaille d’or Fitness Sport, première Pro Card Fitness Sport obtenue par un Iranien, deuxième place en Physique et Pro Card Physique.'},
    arnold:{year:'2017',title:'Arnold Amateur',place:'Columbus, Ohio, États-Unis',headline:'Participation internationale à l’Arnold Amateur',body:'Participation à l’Arnold Amateur 2017 à Columbus, Ohio, avec une fiche officielle dans les archives de la compétition.'},
    footage:'Film de compétition', photos:'Archives de l’événement'
  },
  es: {
    eyebrow:'LOGROS / COMPETICIÓN',
    lead:'Una selección de hitos competitivos documentados con resultados, fotografías y material original de los eventos.',
    ireland:{year:'2016',title:'WFF World Championships',place:'Dublín, Irlanda',headline:'Medalla de plata · Men’s Sports Model Tall',body:'Un resultado internacional decisivo: segundo lugar en el WFF World Championships 2016 en Dublín, Irlanda.'},
    huntington:{year:'2017',title:'Fitness Sport · Huntington Beach',place:'California, EE. UU.',headline:'Oro Fitness Sport · Pro Card Fitness Sport · 2.º Physique · Pro Card Physique',body:'Una competición histórica en California: oro en Fitness Sport, primera Fitness Sport Pro Card obtenida por un iraní, segundo lugar en Physique y Physique Pro Card.'},
    arnold:{year:'2017',title:'Arnold Amateur',place:'Columbus, Ohio, EE. UU.',headline:'Participación internacional en Arnold Amateur',body:'Participación en Arnold Amateur 2017 en Columbus, Ohio, con registro oficial de competidor en el archivo del evento.'},
    footage:'Video de competición', photos:'Archivo del evento'
  }
};

const EventVideo=({src,label}:{src:string;label:string})=><figure className="eventVideo"><video autoPlay muted loop playsInline preload="metadata"><source src={src} type="video/mp4"/></video><figcaption>{label}</figcaption></figure>;

export default async function Achievements({params}:{params:Promise<{lang:string}>}){
  const {lang}=await params; const tr=getT(lang); const c=copy[lang]??copy.en;
  return <>
    <PageHero eyebrow={c.eyebrow} title={tr.achievementsTitle} lead={c.lead}/>
    <section className="achievementStories">
      <article className="achievementStory featuredAchievement">
        <div className="achievementMeta"><span>{c.ireland.year}</span><small>{c.ireland.place}</small><h2>{c.ireland.title}</h2><h3>{c.ireland.headline}</h3><p>{c.ireland.body}</p></div>
        <div className="achievementMedia"><img src="/images/ireland-2016/trophy.jpg" alt="2016 WFF World Championships medal and trophy"/></div>
        <div className="eventVideos threeVideos"><EventVideo src="/videos/events/ireland-2016-medal.mp4" label={c.ireland.video??c.footage}/><EventVideo src="/videos/events/ireland-2016-stage-1.mp4" label={c.footage}/><EventVideo src="/videos/events/ireland-2016-stage-2.mp4" label={c.footage}/></div>
        <div className="achievementPhotoStrip"><img src="/images/ireland-2016/stage.jpg" alt="2016 WFF World Championships stage"/><img src="/images/ireland-2016/registration.jpg" alt="2016 WFF World Championships event archive"/></div>
      </article>
      <article className="achievementStory">
        <div className="achievementMeta"><span>{c.huntington.year}</span><small>{c.huntington.place}</small><h2>{c.huntington.title}</h2><h3>{c.huntington.headline}</h3><p>{c.huntington.body}</p></div>
        <div className="achievementMedia"><img src="/images/huntington-2017/pro-qualified.jpg" alt="2017 Huntington Beach Pro Qualified moment"/></div>
        <div className="achievementPhotoStrip three"><img src="/images/huntington-2017/medal.jpg" alt="2017 Huntington Beach medal moment"/><img src="/images/huntington-2017/stage.jpg" alt="2017 Huntington Beach competition"/><EventVideo src="/videos/events/huntington-2017.mp4" label={c.footage}/></div>
      </article>
      <article className="achievementStory">
        <div className="achievementMeta"><span>{c.arnold.year}</span><small>{c.arnold.place}</small><h2>{c.arnold.title}</h2><h3>{c.arnold.headline}</h3><p>{c.arnold.body}</p></div>
        <div className="achievementMedia"><img src="/images/arnold-2017/stage.jpg" alt="Arnold Amateur 2017 competition stage"/></div>
        <div className="achievementPhotoStrip three"><img src="/images/arnold-2017/credentials.jpg" alt="Arnold Amateur 2017 event credentials"/><img src="/images/arnold-2017/event-selfie.jpg" alt="Arnold Amateur 2017 event archive"/><EventVideo src="/videos/events/arnold-2017.mp4" label={c.footage}/></div>
      </article>
    </section>
  </>;
}
