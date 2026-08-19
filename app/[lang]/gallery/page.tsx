import PageHero from '@/components/PageHero';
import { getT } from '@/lib/i18n';
import GalleryReveal from '@/components/GalleryReveal';

const copy:Record<string,any>={
  en:{
    archive:'ARCHIVE',
    ireland:'WFF World Championships · Ireland 2016',
    huntington:'Huntington Beach · California 2017',
    arnold:'Arnold Amateur · Columbus 2017',
    irelandNote:'World championship stage, medal ceremony and competition archive.',
    huntingtonNote:'Fitness Sport and Physique competition archive from Huntington Beach.',
    arnoldNote:'Competition, backstage and event archive from Arnold Amateur 2017.'
  },
  fa:{
    archive:'آرشیو',
    ireland:'قهرمانی جهان WFF · ایرلند ۲۰۱۶',
    huntington:'هنتینگتون بیچ · کالیفرنیا ۲۰۱۷',
    arnold:'Arnold Amateur · کلمبوس ۲۰۱۷',
    irelandNote:'آرشیو مسابقه، صحنه قهرمانی و مراسم دریافت مدال.',
    huntingtonNote:'آرشیو مسابقات Fitness Sport و Physique در هنتینگتون بیچ.',
    arnoldNote:'آرشیو مسابقه، پشت صحنه و رویداد Arnold Amateur ۲۰۱۷.'
  },
  fr:{
    archive:'ARCHIVES',
    ireland:'WFF World Championships · Irlande 2016',
    huntington:'Huntington Beach · Californie 2017',
    arnold:'Arnold Amateur · Columbus 2017',
    irelandNote:'Archives de la compétition, de la scène et de la cérémonie de médaille.',
    huntingtonNote:'Archives Fitness Sport et Physique à Huntington Beach.',
    arnoldNote:'Archives de compétition, coulisses et événement Arnold Amateur 2017.'
  },
  es:{
    archive:'ARCHIVO',
    ireland:'WFF World Championships · Irlanda 2016',
    huntington:'Huntington Beach · California 2017',
    arnold:'Arnold Amateur · Columbus 2017',
    irelandNote:'Archivo del campeonato, escenario y ceremonia de medalla.',
    huntingtonNote:'Archivo de Fitness Sport y Physique en Huntington Beach.',
    arnoldNote:'Archivo de competición, backstage y Arnold Amateur 2017.'
  }
};

type EventKey='ireland'|'huntington'|'arnold';
const groups:{key:EventKey;photos:string[]}[]=[
  {key:'ireland',photos:[
    '/images/ireland-2016/registration-collage.jpg',
    '/images/ireland-2016/event-collage.jpg',
    '/images/ireland-2016/awards-stage.jpg',
    '/images/ireland-2016/trophy-medal.jpg',
    '/images/ireland-2016/wristband.jpg',
    '/images/ireland-2016/trophy.jpg',
    '/images/ireland-2016/stage.jpg',
    '/images/ireland-2016/registration.jpg'
  ]},
  {key:'huntington',photos:[
    '/images/huntington-2017/medal-stage.jpg',
    '/images/huntington-2017/back-pose.jpg',
    '/images/huntington-2017/pro-qualified-stage.jpg',
    '/images/huntington-2017/pro-qualified.jpg',
    '/images/huntington-2017/medal.jpg'
  ]},
  {key:'arnold',photos:[
    '/images/arnold-2017/credentials-collage.jpg',
    '/images/arnold-2017/stage-solo.jpg',
    '/images/arnold-2017/stage-lineup.jpg',
    '/images/arnold-2017/backstage-portrait-01.jpg',
    '/images/arnold-2017/expo-portrait-01.jpg',
    '/images/arnold-2017/backstage-portrait-02.jpg',
    '/images/arnold-2017/airport-portrait.jpg',
    '/images/arnold-2017/expo-portrait-02.jpg',
    '/images/arnold-2017/athlete-backstage-01.jpg',
    '/images/arnold-2017/athlete-backstage-02.jpg',
    '/images/arnold-2017/guest-backstage-01.jpg',
    '/images/arnold-2017/guest-expo-01.jpg',
    '/images/arnold-2017/guest-expo-02.jpg',
    '/images/arnold-2017/expo-portrait-03.jpg',
    '/images/arnold-2017/expo-portrait-04.jpg',
    '/images/arnold-2017/la-fitness.jpg',
    '/images/arnold-2017/arnold-selfie.jpg',
    '/images/arnold-2017/event-group.jpg'
  ]}
];

export default async function Gallery({params}:{params:Promise<{lang:string}>}){
  const {lang}=await params;
  const tr=getT(lang);
  const c=copy[lang]??copy.en;
  let globalIndex=0;
  return <>
    <PageHero eyebrow={c.archive} title={tr.galleryTitle} lead={tr.galleryLead}/>
    <GalleryReveal><main className="galleryExperience">
      {groups.map((group,eventIndex)=><section className={`galleryEvent galleryEvent-${group.key}`} key={group.key}>
        <header className="galleryEventHead">
          <div>
            <span>{String(eventIndex+1).padStart(2,'0')}</span>
            <h2>{c[group.key]}</h2>
          </div>
          <p>{c[`${group.key}Note`]}</p>
        </header>
        <div className="galleryMasonry">
          {group.photos.map((src,i)=>{
            globalIndex+=1;
            const n=globalIndex;
            return <figure className={`galleryPhoto galleryPhoto${n} galleryShape${i%6}`} key={src} style={{transitionDelay:`${Math.min(i,8)*55}ms`}}>
              <div className="galleryImageFrame"><img loading="lazy" src={src} alt={c[group.key]}/></div>
              <figcaption><span>{String(n).padStart(2,'0')}</span><b>{c[group.key]}</b></figcaption>
            </figure>
          })}
        </div>
      </section>)}
    </main></GalleryReveal>
  </>
}
