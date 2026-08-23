'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShieldCheck } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#craftsmanship' },
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
          ? 'bg-[#faf9f5]/95 backdrop-blur-md border-b border-stone-300 py-3.5 shadow-md'
          : 'bg-[#faf9f5]/90 backdrop-blur-md border-b border-stone-200/80 py-4 shadow-sm'
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Clean Brand Logo Without Subtitle */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#5c1818] border border-amber-500/40 flex items-center justify-center shadow-md group-hover:bg-[#7a1f1f] transition-colors shrink-0">
            <span className="font-bold text-xs tracking-widest text-amber-100">MM</span>
          </div>
          <span className="text-base sm:text-lg font-bold tracking-[0.16em] text-[#1c1917] transition-colors block leading-none whitespace-nowrap">
            M.M. STONE INDUSTRIES
          </span>
        </Link>

        {/* Single-Line Spacious Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8 xl:gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs uppercase tracking-[0.18em] font-bold text-stone-800 hover:text-[#5c1818] transition-all py-1.5 px-1 whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Direct Connect Action Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-bold text-xs uppercase tracking-[0.18em] px-5 py-2.5 rounded-sm transition-all shadow-md border border-amber-500/40 shrink-0 whitespace-nowrap"
          >
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Connect Direct</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-stone-900 bg-stone-200/80 rounded-sm border border-stone-300 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf9f5] border-b border-stone-300 px-6 py-6 space-y-3 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-[0.18em] font-bold text-stone-800 hover:text-[#5c1818] py-3 border-b border-stone-200"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-bold text-xs uppercase tracking-[0.18em] py-3.5 rounded-sm mt-4 border border-amber-500/40 shadow-md"
          >
            Connect With Directors Direct
          </Link>
        </div>
      )}
    </header>
  );
}





