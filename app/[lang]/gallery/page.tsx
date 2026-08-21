import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHero from '@/components/PageHero';
import { getT } from '@/lib/i18n';

const copy:Record<string,any>={
 en:{ireland:'WFF World Championships · Ireland 2016',huntington:'Huntington Beach · California 2017',arnold:'Arnold Amateur · Columbus 2017',videoArchive:'Competition video archive'},
 fa:{ireland:'قهرمانی جهان WFF · ایرلند ۲۰۱۶',huntington:'هنتینگتون بیچ · کالیفرنیا ۲۰۱۷',arnold:'Arnold Amateur · کلمبوس ۲۰۱۷',videoArchive:'آرشیو ویدیوهای مسابقات'},
 fr:{ireland:'WFF World Championships · Irlande 2016',huntington:'Huntington Beach · Californie 2017',arnold:'Arnold Amateur · Columbus 2017',videoArchive:'Archives vidéo des compétitions'},
 es:{ireland:'WFF World Championships · Irlanda 2016',huntington:'Huntington Beach · California 2017',arnold:'Arnold Amateur · Columbus 2017',videoArchive:'Archivo de videos de competición'}
};
const photos=[
  ['/images/ireland-2016/registration-collage.jpg','ireland'],
  ['/images/ireland-2016/event-collage.jpg','ireland'],
  ['/images/ireland-2016/awards-stage.jpg','ireland'],
  ['/images/ireland-2016/trophy-medal.jpg','ireland'],
  ['/images/ireland-2016/wristband.jpg','ireland'],
  ['/images/huntington-2017/medal-stage.jpg','huntington'],
  ['/images/huntington-2017/back-pose.jpg','huntington'],
  ['/images/huntington-2017/pro-qualified-stage.jpg','huntington'],
  ['/images/arnold-2017/credentials-collage.jpg','arnold'],
  ['/images/arnold-2017/backstage-portrait-01.jpg','arnold'],
  ['/images/arnold-2017/expo-portrait-01.jpg','arnold'],
  ['/images/arnold-2017/stage-solo.jpg','arnold'],
  ['/images/arnold-2017/stage-lineup-hassan-focus.jpg','arnold'],
  ['/images/arnold-2017/backstage-portrait-02.jpg','arnold'],
  ['/images/arnold-2017/airport-portrait.jpg','arnold'],
  ['/images/arnold-2017/arnold-amateur-columbus-ohio-2017.jpg','arnold'],
  ['/images/arnold-2017/expo-portrait-02.jpg','arnold'],
  ['/images/arnold-2017/athlete-backstage-01.jpg','arnold'],
  ['/images/arnold-2017/athlete-backstage-02.jpg','arnold'],
  ['/images/arnold-2017/guest-backstage-01.jpg','arnold'],
  ['/images/arnold-2017/arnold-selfie.jpg','arnold'],
  ['/images/arnold-2017/guest-expo-01.jpg','arnold'],
  ['/images/arnold-2017/guest-expo-02.jpg','arnold'],
  ['/images/arnold-2017/expo-portrait-03.jpg','arnold'],
  ['/images/arnold-2017/expo-portrait-04.jpg','arnold'],
  ['/images/arnold-2017/la-fitness.jpg','arnold'],
  ['/images/ireland-2016/trophy.jpg','ireland'],
  ['/images/ireland-2016/stage.jpg','ireland'],
  ['/images/ireland-2016/registration.jpg','ireland'],
  ['/images/huntington-2017/pro-qualified.jpg','huntington'],
  ['/images/huntington-2017/medal.jpg','huntington'],
  ['/images/huntington-2017/stage.jpg','huntington'],
  ['/images/arnold-2017/event-group.jpg','arnold']
] as const;

const videos=[
  ['/videos/events/ireland-2016-medal.mp4','ireland'],
  ['/videos/events/ireland-2016-stage-1.mp4','ireland'],
  ['/videos/events/ireland-2016-stage-2.mp4','ireland'],
  ['/videos/events/huntington-2017.mp4','huntington'],
  ['/videos/events/arnold-2017.mp4','arnold']
] as const;

export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{ const {lang}=await params; return pageMetadata(lang,'gallery','gallery'); }
export default async function Gallery({params}:{params:Promise<{lang:string}>}){const {lang}=await params;const tr=getT(lang);const c=copy[lang]??copy.en;return <><PageHero eyebrow="ARCHIVE" title={tr.galleryTitle} lead={tr.galleryLead}/><section className="realGallery">{photos.map(([src,key],i)=><figure className={`galleryPhoto galleryPhoto${i+1}`} key={src}><img loading="lazy" src={src} alt={c[key]}/><figcaption><span>{String(i+1).padStart(2,'0')}</span>{c[key]}</figcaption></figure>)}</section><section className="galleryVideos"><div className="galleryVideoHead"><span>VIDEO</span><h2>{c.videoArchive}</h2></div><div className="galleryVideoGrid">{videos.map(([src,key],i)=><figure className="galleryVideo" key={src}><video controls playsInline preload="metadata"><source src={src} type="video/mp4"/></video><figcaption><span>{String(i+1).padStart(2,'0')}</span>{c[key]}</figcaption></figure>)}</div></section></>}
