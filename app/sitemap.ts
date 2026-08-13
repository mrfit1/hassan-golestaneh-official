import type { MetadataRoute } from 'next';
const langs=['en','fa','fr','es'];
const pages=['','about','career','achievements','media','gallery','contact'];
const base=process.env.NEXT_PUBLIC_SITE_URL || 'https://hassan-golestaneh-official.vercel.app';
export default function sitemap():MetadataRoute.Sitemap{
  return langs.flatMap(l=>pages.map(p=>({url:`${base}/${l}${p?`/${p}`:''}`,lastModified:new Date(),changeFrequency:p?'monthly':'weekly',priority:p?0.8:1})));
}
