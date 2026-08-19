import type { MetadataRoute } from 'next';
const langs=['en','fa','fr','es']; const pages=['','about','career','achievements','media','gallery','contact'];
export default function sitemap():MetadataRoute.Sitemap{ return langs.flatMap(l=>pages.map(p=>({url:`https://hassangolestaneh.com/${l}${p?`/${p}`:''}`,lastModified:new Date()}))); }
