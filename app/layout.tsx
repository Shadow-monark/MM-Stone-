import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MM STONES — Architectural Stone Studio & Quarry Monographs',
  description:
    'MM STONES is an international architectural stone studio and quarrying corporation specializing in Red Sandstone, Ruby Red Granite, Heritage Jalis, and Architectural Monographs.',
  keywords: ['MM Stones', 'architectural stone', 'quarry', 'granite', 'marble', 'jali', 'sandstone', 'architectural monographs'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth font-sans">
      <body className="bg-[#f4f2ec] text-[#1c1917] min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

