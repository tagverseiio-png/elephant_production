import './globals.css';
import CustomCursor from '@/components/CustomCursor/CustomCursor';

// TODO(owner): replace with the real canonical production domain.
// This placeholder base exists so Open Graph / canonical URLs resolve
// to absolute URLs without Next.js warnings. Do not ship with this value
// until the production domain is confirmed.
const SITE_URL = 'https://www.elephantmedia.com';

const SITE_TITLE = 'Elephant Media | Creative Communications Agency';
const SITE_DESCRIPTION =
  'Elephant Media is an action-first creative communications agency infusing creative alchemy into today\u2019s brands.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description:
    'We increase brand visibility and awareness to attract new customers through thoughtful storytelling and distinct communications strategies.',
  keywords: [
    'Elephant Media',
    'creative communications agency',
    'public relations',
    'PR',
    'communications',
    'brand strategy',
    'influencer marketing',
    'creative agency',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'Elephant Media',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
