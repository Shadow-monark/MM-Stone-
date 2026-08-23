'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShieldCheck } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'About Studio', href: '#about' },
  { name: 'Works Gallery', href: '#craftsmanship' },
  { name: 'Stone Collection', href: '#collection' },
  { name: 'Finishes', href: '#finishes' },
  { name: 'Process', href: '#process' },
  { name: 'Calculator', href: '#calculator' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf9f5]/95 backdrop-blur-md border-b border-stone-300 py-4 shadow-sm'
          : 'bg-gradient-to-b from-[#1c1917]/90 via-[#1c1917]/40 to-transparent py-6'
      }`}
    >
      <div className="w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
        
        {/* Brand Logo & Mining License Tag */}
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <div className="w-10 h-10 rounded-sm bg-[#5c1818] border border-amber-500/40 flex items-center justify-center shadow-md group-hover:bg-[#7a1f1f] transition-colors shrink-0">
            <span className="font-bold text-xs tracking-widest text-amber-100">MM</span>
          </div>
          <div className="flex flex-col justify-center space-y-0.5">
            <span className={`text-base sm:text-xl font-bold tracking-[0.18em] transition-colors block leading-tight ${isScrolled ? 'text-[#1c1917]' : 'text-white'}`}>
              M.M. STONE INDUSTRIES
            </span>
            <span className={`text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-semibold block leading-tight whitespace-nowrap ${isScrolled ? 'text-[#705432]' : 'text-amber-300'}`}>
              MINES OWNER (ML No. 13/2022) • EXPORTER
            </span>
          </div>
        </Link>

        {/* Desktop Nav with Spacious Word Spacing */}
        <nav className="hidden xl:flex items-center gap-8 xl:gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors py-1.5 px-1 ${
                isScrolled
                  ? 'text-stone-700 hover:text-[#5c1818]'
                  : 'text-stone-200 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-semibold text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-sm transition-all shadow-md border border-amber-500/30"
          >
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Connect Direct</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`xl:hidden p-2 transition-colors ${isScrolled ? 'text-[#1c1917]' : 'text-white'}`}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#faf9f5] border-b border-[#dcd8cd] px-8 py-6 space-y-4 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-[0.2em] font-semibold text-stone-800 hover:text-[#5c1818] py-3 border-b border-stone-200"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-bold text-xs uppercase tracking-[0.2em] py-3.5 rounded-sm mt-4 border border-amber-500/30"
          >
            Connect With Directors
          </Link>
        </div>
      )}
    </header>
  );
}


