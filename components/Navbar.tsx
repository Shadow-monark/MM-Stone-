'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

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
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#5c1818] border border-amber-500/50 flex items-center justify-center shadow-lg group-hover:bg-[#7a1f1f] group-hover:scale-105 transition-all shrink-0">
            <span className="font-bold text-xs sm:text-sm tracking-widest text-amber-100">MM</span>
          </div>
          <span className={`text-base sm:text-lg font-bold tracking-[0.16em] transition-colors block leading-none whitespace-nowrap ${isScrolled ? 'text-[#1c1917]' : 'text-white'}`}>
            M.M STONE
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
          className={`lg:hidden relative p-2.5 transition-all rounded-xl flex items-center justify-center ${
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
                    <p className="text-[10px] text-amber-200/80">M.M STONE • Bayana Desk</p>
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
                <div className="p-3.5 bg-[#faf9f5] border border-stone-200 rounded-xl space-y-2.5 shadow-2xs">
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-amber-800 block">Managing Director • Operations</span>
                    <h4 className="font-bold text-stone-900 text-xs sm:text-sm">Vijay Kumar Agrawal</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/919001100731"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-sm flex items-center justify-center shrink-0 group/wa"
                      title="Chat on WhatsApp (+91 9001100731)"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current group-hover/wa:scale-110 transition-transform" />
                    </a>
                    <a
                      href="tel:+919414024097"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors shadow-sm border border-stone-800"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      <span>Call: 9414024097</span>
                    </a>
                  </div>
                </div>

                {/* Director 2 */}
                <div className="p-3.5 bg-[#faf9f5] border border-stone-200 rounded-xl space-y-2.5 shadow-2xs">
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-amber-800 block">Quarry & Export Management</span>
                    <h4 className="font-bold text-stone-900 text-xs sm:text-sm">Kapil Agrawal</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/919899063866"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-sm flex items-center justify-center shrink-0 group/wa"
                      title="Chat on WhatsApp (+91 9899063866)"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current group-hover/wa:scale-110 transition-transform" />
                    </a>
                    <a
                      href="tel:+919899063866"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors shadow-sm border border-stone-800"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      <span>Call: 9899063866</span>
                    </a>
                  </div>
                </div>

                {/* Director 3 */}
                <div className="p-3.5 bg-[#faf9f5] border border-stone-200 rounded-xl space-y-2.5 shadow-2xs">
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-amber-800 block">Architectural Specifications</span>
                    <h4 className="font-bold text-stone-900 text-xs sm:text-sm">Neeraj Sharma</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/917906123660"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-sm flex items-center justify-center shrink-0 group/wa"
                      title="Chat on WhatsApp (+91 7906123660)"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current group-hover/wa:scale-110 transition-transform" />
                    </a>
                    <a
                      href="tel:+917906123660"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors shadow-sm border border-stone-800"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      <span>Call: 7906123660</span>
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







