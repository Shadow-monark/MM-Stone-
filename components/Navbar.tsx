'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#craftsmanship' },
  { name: 'Collection', href: '#collection' },
  { name: 'Finishes', href: '#finishes' },
  { name: 'Process', href: '#process' },
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
          : 'bg-gradient-to-b from-stone-950/85 via-stone-950/30 to-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Clean Brand Logo Without Subtitle */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#5c1818] border border-amber-500/40 flex items-center justify-center shadow-md group-hover:bg-[#7a1f1f] transition-colors shrink-0">
            <span className="font-bold text-xs tracking-widest text-amber-100">MM</span>
          </div>
          <span className={`text-base sm:text-lg font-bold tracking-[0.16em] transition-colors block leading-none whitespace-nowrap ${isScrolled ? 'text-[#1c1917]' : 'text-white'}`}>
            M.M. STONE INDUSTRIES
          </span>
        </Link>

        {/* Single-Line Spacious Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8 xl:gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs uppercase tracking-[0.18em] font-bold transition-all py-1.5 px-1 whitespace-nowrap ${
                isScrolled
                  ? 'text-stone-800 hover:text-[#5c1818]'
                  : 'text-white hover:text-amber-300 drop-shadow-md'
              }`}
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

        {/* Animated Hamburger-to-Cross Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden relative p-2.5 transition-all rounded-sm flex items-center justify-center ${
            isScrolled ? 'bg-stone-200/80 border border-stone-300' : 'bg-stone-900/80 border border-stone-700'
          }`}
          aria-label="Toggle Navigation Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between items-center">
            {/* Top Bar */}
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`w-6 h-0.5 rounded-full block origin-center ${isScrolled ? 'bg-stone-900' : 'bg-white'}`}
            />
            {/* Middle Bar */}
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className={`w-6 h-0.5 rounded-full block ${isScrolled ? 'bg-stone-900' : 'bg-white'}`}
            />
            {/* Bottom Bar */}
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`w-6 h-0.5 rounded-full block origin-center ${isScrolled ? 'bg-stone-900' : 'bg-white'}`}
            />
          </div>
        </button>
      </div>

      {/* Animated Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#faf9f5] border-b border-stone-300 px-6 py-6 space-y-3 shadow-2xl overflow-hidden"
          >
            {NAV_ITEMS.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs uppercase tracking-[0.18em] font-bold text-stone-800 hover:text-[#5c1818] py-3 border-b border-stone-200"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: NAV_ITEMS.length * 0.05 }}
            >
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-bold text-xs uppercase tracking-[0.18em] py-3.5 rounded-sm mt-4 border border-amber-500/40 shadow-md"
              >
                Connect With Directors Direct
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}







