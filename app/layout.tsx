import './globals.css';
import type { Metadata } from 'next';
import { PERSON_IMAGE, SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: '%s | Hassan Golestaneh' },
  description: 'Official website of Hassan Golestaneh — athlete, fitness medalist, coach, judge and international sports figure.',
  applicationName: SITE_NAME,
  authors: [{ name: 'Hassan Golestaneh', url: SITE_URL }],
  creator: 'Hassan Golestaneh',
  publisher: 'Hassan Golestaneh',
  category: 'sports',
  keywords: ['Hassan Golestaneh','حسن گلستانه','fitness','sports model','fitness coach','Arnold Amateur','WFF World Championships'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Hassan Golestaneh',
  alternateName: 'حسن گلستانه',
  url: SITE_URL,
  image: {
    '@type': 'ImageObject',
    url: `${SITE_URL}${PERSON_IMAGE}`,
    contentUrl: `${SITE_URL}${PERSON_IMAGE}`,
    width: 960,
    height: 1280,
  },
  sameAs: [
    'https://en.wikipedia.org/wiki/Hassan_Golestaneh',
    'https://www.imdb.com/name/nm13963676/',
    'https://www.instagram.com/mrsportmodel/',
    'https://contests.npcnewsonline.com/contests/2017/arnold_amateur/4j45/hassan_golestaneh',
    'https://fitnessacademyeurope.com/faepro/user/fae995279/',
  ],
  knowsAbout: ['Fitness','Sports Model','Athlete Development','Fitness Coaching','Fitness Judging'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: ['en','fa','fr','es'],
  publisher: { '@id': `${SITE_URL}/#person` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {children}
      </body>
    </html>
  );
}
