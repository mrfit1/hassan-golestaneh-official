import PageHero from '@/components/PageHero';
import { getT } from '@/lib/i18n';

const copy:Record<string,any>={
 en:{ireland:'WFF World Championships · Ireland 2016',huntington:'Huntington Beach · California 2017',arnold:'Arnold Amateur · Columbus 2017'},
 fa:{ireland:'قهرمانی جهان WFF · ایرلند ۲۰۱۶',huntington:'هنتینگتون بیچ · کالیفرنیا ۲۰۱۷',arnold:'Arnold Amateur · کلمبوس ۲۰۱۷'},
 fr:{ireland:'WFF World Championships · Irlande 2016',huntington:'Huntington Beach · Californie 2017',arnold:'Arnold Amateur · Columbus 2017'},
 es:{ireland:'WFF World Championships · Irlanda 2016',huntington:'Huntington Beach · California 2017',arnold:'Arnold Amateur · Columbus 2017'}
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
  ['/images/arnold-2017/stage-lineup.jpg','arnold'],
  ['/images/arnold-2017/backstage-portrait-02.jpg','arnold'],
  ['/images/arnold-2017/airport-portrait.jpg','arnold'],
  ['/images/arnold-2017/expo-portrait-02.jpg','arnold'],
  ['/images/arnold-2017/athlete-backstage-01.jpg','arnold'],
  ['/images/arnold-2017/athlete-backstage-02.jpg','arnold'],
  ['/images/arnold-2017/guest-backstage-01.jpg','arnold'],
  ['/images/arnold-2017/media-backstage.jpg','arnold'],
  ['/images/arnold-2017/guest-expo-01.jpg','arnold'],
  ['/images/arnold-2017/guest-expo-02.jpg','arnold'],
  ['/images/arnold-2017/expo-portrait-03.jpg','arnold'],
  ['/images/arnold-2017/expo-portrait-04.jpg','arnold'],
  ['/images/arnold-2017/la-fitness.jpg','arnold'],
  ['/images/arnold-2017/arnold-selfie.jpg','arnold'],
  ['/images/ireland-2016/trophy.jpg','ireland'],
  ['/images/ireland-2016/stage.jpg','ireland'],
  ['/images/ireland-2016/registration.jpg','ireland'],
  ['/images/huntington-2017/pro-qualified.jpg','huntington'],
  ['/images/huntington-2017/medal.jpg','huntington'],
  ['/images/huntington-2017/stage.jpg','huntington'],
  ['/images/arnold-2017/stage.jpg','arnold'],
  ['/images/arnold-2017/event-group.jpg','arnold']
] as const;
export default async function Gallery({params}:{params:Promise<{lang:string}>}){const {lang}=await params;const tr=getT(lang);const c=copy[lang]??copy.en;return <><PageHero eyebrow="ARCHIVE" title={tr.galleryTitle} lead={tr.galleryLead}/><section className="realGallery">{photos.map(([src,key],i)=><figure className={`galleryPhoto galleryPhoto${i+1}`} key={src}><img loading="lazy" src={src} alt={c[key]}/><figcaption><span>{String(i+1).padStart(2,'0')}</span>{c[key]}</figcaption></figure>)}</section></>}
