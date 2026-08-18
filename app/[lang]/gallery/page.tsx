import PageHero from '@/components/PageHero';
import { getT } from '@/lib/i18n';

const copy:Record<string,any>={
 en:{ireland:'WFF World Championships · Ireland 2016',huntington:'Huntington Beach · California 2017',arnold:'Arnold Amateur · Columbus 2017'},
 fa:{ireland:'قهرمانی جهان WFF · ایرلند ۲۰۱۶',huntington:'هنتینگتون بیچ · کالیفرنیا ۲۰۱۷',arnold:'Arnold Amateur · کلمبوس ۲۰۱۷'},
 fr:{ireland:'WFF World Championships · Irlande 2016',huntington:'Huntington Beach · Californie 2017',arnold:'Arnold Amateur · Columbus 2017'},
 es:{ireland:'WFF World Championships · Irlanda 2016',huntington:'Huntington Beach · California 2017',arnold:'Arnold Amateur · Columbus 2017'}};
const photos=[
['/images/ireland-2016/trophy.jpg','ireland'],['/images/ireland-2016/stage.jpg','ireland'],['/images/ireland-2016/registration.jpg','ireland'],
['/images/huntington-2017/pro-qualified.jpg','huntington'],['/images/huntington-2017/medal.jpg','huntington'],['/images/huntington-2017/stage.jpg','huntington'],
['/images/arnold-2017/stage.jpg','arnold'],['/images/arnold-2017/credentials.jpg','arnold'],['/images/arnold-2017/event-selfie.jpg','arnold'],['/images/arnold-2017/event-group.jpg','arnold']
] as const;
export default async function Gallery({params}:{params:Promise<{lang:string}>}){const {lang}=await params;const tr=getT(lang);const c=copy[lang]??copy.en;return <><PageHero eyebrow="ARCHIVE" title={tr.galleryTitle} lead={tr.galleryLead}/><section className="realGallery">{photos.map(([src,key],i)=><figure className={`galleryPhoto galleryPhoto${i+1}`} key={src}><img src={src} alt={c[key]}/><figcaption><span>0{String(i+1).padStart(2,'0')}</span>{c[key]}</figcaption></figure>)}</section></>}
