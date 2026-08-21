import type { MetadataRoute } from 'next';
import { SITE_URL, locales } from '@/lib/seo';

const pages = ['', 'about', 'career', 'achievements', 'media', 'gallery', 'contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap(lang => pages.map(page => {
    const suffix = page ? `/${page}` : '';
    return {
      url: `${SITE_URL}/${lang}${suffix}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' : page === 'media' || page === 'gallery' ? 'monthly' : 'yearly',
      priority: page === '' ? 1 : page === 'achievements' || page === 'media' ? 0.8 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map(l => [l, `${SITE_URL}/${l}${suffix}`])),
      },
    };
  }));
}
