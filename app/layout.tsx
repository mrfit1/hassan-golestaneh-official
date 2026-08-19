import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://hassangolestaneh.com'),
  title: { default: 'Hassan Golestaneh | Official Website', template: '%s | Hassan Golestaneh' },
  description: 'Official website of Hassan Golestaneh — athlete, fitness medalist, coach and sports figure.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
