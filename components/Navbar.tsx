'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCallMenu, setShowCallMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkModal = () => {
      const modalActive =
        document.body.getAttribute('data-modal-open') === 'true' ||
        document.body.classList.contains('modal-open') ||
        document.body.style.overflow === 'hidden';
      setIsModalOpen(modalActive);
    };

    checkModal();
    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-modal-open', 'class', 'style'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isModalOpen ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 translate-y-0'
      } ${
        isScrolled
          ? 'bg-[#faf9f5]/95 backdrop-blur-md border-b border-stone-300 py-3.5 shadow-md'
          : 'bg-gradient-to-b from-stone-950/85 via-stone-950/30 to-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Clean Brand Logo Without Subtitle */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#5c1818] border border-amber-500/40 flex items-center justify-center shadow-md group-hover:bg-[#7a1f1f] transition-colors shrink-0">
            <span className="font-bold text-xs tracking-widest text-amber-100">MM</span>
          </div>
          <span className={`text-base sm:text-lg font-bold tracking-[0.16em] transition-colors block leading-none whitespace-nowrap ${isScrolled ? 'text-[#1c1917]' : 'text-white'}`}>
            M.M. STONE INDUSTRIES
          </span>
        </Link>

        {/* Single-Line Compact Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2.5 lg:gap-4 xl:gap-5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-xs uppercase tracking-[0.18em] font-bold transition-all py-1.5 px-1 whitespace-nowrap ${
                isScrolled
                  ? 'text-stone-800 hover:text-[#5c1818]'
                  : 'text-white hover:text-amber-300 drop-shadow-md'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Direct Call Action Button - Triggers Animated Call List Modal */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => setShowCallMenu(!showCallMenu)}
            className="inline-flex items-center gap-2 bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-bold text-xs uppercase tracking-[0.18em] px-5 py-2.5 rounded-full transition-all shadow-md border border-amber-500/40 shrink-0 whitespace-nowrap cursor-pointer group"
          >
            <Phone className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
            <span>Call</span>
          </button>
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
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs uppercase tracking-[0.18em] font-bold text-stone-800 hover:text-[#5c1818] py-3 border-b border-stone-200"
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: NAV_ITEMS.length * 0.05 }}
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowCallMenu(true);
                }}
                className="w-full flex items-center justify-center gap-2 text-center bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-bold text-xs uppercase tracking-[0.18em] py-3.5 rounded-full mt-4 border border-amber-500/40 shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Directors & Desk</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Direct Call & WhatsApp Dropdown Popover (Top-Right under Navbar) */}
      <AnimatePresence>
        {showCallMenu && (
          <>
            {/* Click Outside Transparent Overlay */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowCallMenu(false)}
            />

            {/* Top-Right Positioned Popover Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full right-4 sm:right-8 mt-2 max-w-sm w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-xl shadow-2xl border border-stone-300 overflow-hidden text-stone-900 z-50"
            >
              {/* Popover Header */}
              <div className="bg-[#5c1818] text-white p-4 flex items-center justify-between border-b border-amber-500/30">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wider text-amber-100">
                      Direct Call & WhatsApp
                    </h3>
                    <p className="text-[10px] text-amber-200/80">M.M. STONE • Bayana Desk</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCallMenu(false)}
                  className="p-1 rounded-full bg-stone-900/40 hover:bg-stone-900 text-amber-200 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close call menu"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Directors Phone List */}
              <div className="p-4 space-y-3 max-h-[70vh] overflow-y-auto">
                
                {/* Director 1 */}
                <div className="p-3 bg-[#faf9f5] border border-stone-200 rounded-lg space-y-2 shadow-2xs">
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-amber-800 block">Managing Director • Operations</span>
                    <h4 className="font-bold text-stone-900 text-xs">Vijay Kumar Agrawal</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="tel:+919414024097"
                      className="flex items-center justify-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-[11px] py-1.5 px-2 rounded-md transition-colors shadow-2xs"
                    >
                      <Phone className="w-3 h-3 text-amber-300" />
                      <span>9414024097</span>
                    </a>
                    <a
                      href="https://wa.me/919001100731"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-[11px] py-1.5 px-2 rounded-md transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Director 2 */}
                <div className="p-3 bg-[#faf9f5] border border-stone-200 rounded-lg space-y-2 shadow-2xs">
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-amber-800 block">Quarry & Export Management</span>
                    <h4 className="font-bold text-stone-900 text-xs">Kapil Agrawal</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="tel:+919899063866"
                      className="flex items-center justify-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-[11px] py-1.5 px-2 rounded-md transition-colors shadow-2xs"
                    >
                      <Phone className="w-3 h-3 text-amber-300" />
                      <span>9899063866</span>
                    </a>
                    <a
                      href="https://wa.me/919899063866"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-[11px] py-1.5 px-2 rounded-md transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Director 3 */}
                <div className="p-3 bg-[#faf9f5] border border-stone-200 rounded-lg space-y-2 shadow-2xs">
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-amber-800 block">Architectural Specifications</span>
                    <h4 className="font-bold text-stone-900 text-xs">Neeraj Sharma</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="tel:+917906123660"
                      className="flex items-center justify-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-[11px] py-1.5 px-2 rounded-md transition-colors shadow-2xs"
                    >
                      <Phone className="w-3 h-3 text-amber-300" />
                      <span>7906123660</span>
                    </a>
                    <a
                      href="https://wa.me/917906123660"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-[11px] py-1.5 px-2 rounded-md transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Modal Footer Note */}
              <div className="bg-stone-100 p-2.5 text-center border-t border-stone-200">
                <p className="text-[10px] text-stone-600">
                  Email: <a href="mailto:mmstone@rediffmail.com" className="text-amber-900 font-bold hover:underline">mmstone@rediffmail.com</a>
                </p>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}







