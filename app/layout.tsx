import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MM STONES — Premium Natural Stone Mining & Architectural Slabs',
  description:
    'MM STONES is an international quarrying and stone processing corporation specializing in Ruby Red Granite, Titanium Quartzite, Marble, and Architectural Slabs.',
  keywords: ['MM Stones', 'natural stone', 'quarry', 'granite', 'marble', 'quartzite', 'architectural slabs'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#f4f2ec] text-[#1c1917] min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
