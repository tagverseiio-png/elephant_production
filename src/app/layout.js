import './globals.css';

export const metadata = {
  title: 'The Elephant Production | An Action-First Creative Communications Agency',
  description: 'We increase brand visibility and awareness to attract new customers through thoughtful storytelling and distinct communications strategies.',
  keywords: 'PR, public relations, communications, brand strategy, influencer marketing, creative agency',
  openGraph: {
    title: 'The Elephant Production | Creative Communications Agency',
    description: 'An action-first creative communications agency infusing creative alchemy into today\'s brands.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
