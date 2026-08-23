'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Applications', href: '#applications' },
  { name: 'Collection', href: '#collection' },
  { name: 'Finishes', href: '#finishes' },
  { name: 'Process', href: '#process' },
  { name: 'Calculator', href: '#calculator' },
  { name: 'Contact', href: '#contact' },
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
          ? 'bg-[#f4f2ec]/90 backdrop-blur-md border-b border-[#e2ded4] py-4 shadow-sm'
          : 'bg-gradient-to-b from-[#1c1917]/70 via-[#1c1917]/30 to-transparent py-6'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group shrink-0">
          <div className="w-8 h-8 rounded-sm bg-[#1c1917] border border-stone-700 flex items-center justify-center shadow-sm group-hover:bg-[#292524] transition-colors shrink-0">
            <span className="font-serif text-sm font-bold text-white">MM</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className={`font-serif text-lg sm:text-xl font-bold tracking-[0.15em] transition-colors block leading-tight ${isScrolled ? 'text-[#1c1917]' : 'text-white'}`}>
              MM STONES
            </span>
            <span className={`text-[9px] sm:text-[10px] uppercase tracking-[0.16em] font-semibold block leading-tight mt-0.5 whitespace-nowrap ${isScrolled ? 'text-[#78716c]' : 'text-[#d6d3d1]'}`}>
              Quarry & Architectural Slabs
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs uppercase tracking-[0.18em] font-semibold transition-colors py-1 ${
                isScrolled
                  ? 'text-[#57534e] hover:text-[#1c1917]'
                  : 'text-[#e7e5e4] hover:text-white'
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
            className="inline-flex items-center gap-2 bg-[#1c1917] hover:bg-[#292524] text-white font-semibold text-xs uppercase tracking-[0.18em] px-5 py-2.5 rounded-sm transition-all shadow-sm border border-stone-800"
          >
            <span>Documentation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-[#1c1917]' : 'text-white'}`}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf9f5] border-b border-[#dcd8cd] px-6 py-6 space-y-3 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#44403c] hover:text-[#1c1917] py-2.5 border-b border-[#e2ded4]"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-[#1c1917] hover:bg-[#292524] text-white font-bold text-xs uppercase tracking-[0.18em] py-3 rounded-sm mt-4 border border-stone-800"
          >
            Documentation & Specifications
          </Link>
        </div>
      )}
    </header>
  );
}
