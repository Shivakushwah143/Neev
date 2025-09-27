import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LensArt Photography - Professional Photography Services',
  description: 'Capturing life\'s most precious moments with artistic vision and technical excellence. Professional wedding, event, portrait, and commercial photography services.',
  keywords: 'photography, wedding photographer, event photography, portraits, commercial photography, professional photographer',
  authors: [{ name: 'LensArt Photography' }],
  openGraph: {
    title: 'LensArt Photography - Professional Photography Services',
    description: 'Capturing life\'s most precious moments with artistic vision and technical excellence.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}