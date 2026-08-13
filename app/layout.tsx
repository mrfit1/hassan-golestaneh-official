import './globals.css';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hassan-golestaneh-official.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Hassan Golestaneh | Official Website', template: '%s | Hassan Golestaneh' },
  description: 'Official website of Hassan Golestaneh — biography, career, achievements, media and official links.',
  applicationName: 'Hassan Golestaneh Official Website',
  authors: [{ name: 'Hassan Golestaneh' }],
  creator: 'Hassan Golestaneh',
  publisher: 'Hassan Golestaneh',
  alternates: { languages: { en: '/en', fa: '/fa', fr: '/fr', es: '/es' } },
  openGraph: {
    type: 'website',
    siteName: 'Hassan Golestaneh Official Website',
    title: 'Hassan Golestaneh | Official Website',
    description: 'Official website of Hassan Golestaneh — biography, career, achievements, media and official links.',
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'Hassan Golestaneh' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hassan Golestaneh | Official Website',
    description: 'Official website of Hassan Golestaneh — biography, career, achievements, media and official links.',
    images: ['/opengraph-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
