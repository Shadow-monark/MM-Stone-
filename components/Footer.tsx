'use client';

import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-stone-400 border-t border-stone-800/80 relative overflow-hidden">
      <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        {/* Top Header Row: Logo, Nav Links, Social Icons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-stone-800/60">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#5c1818] border border-amber-500/50 flex items-center justify-center shadow-lg group-hover:bg-[#7a1f1f] group-hover:scale-105 transition-all shrink-0">
              <span className="font-bold text-xs tracking-widest text-amber-100">MM</span>
            </div>
            <span className="text-lg font-bold tracking-[0.18em] text-white transition-colors">
              M.M STONE
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-semibold uppercase tracking-[0.18em]">
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#craftsmanship" className="hover:text-white transition-colors">Works Gallery</a>
            <a href="#collection" className="hover:text-white transition-colors">Stone Varieties</a>
            <a href="#finishes" className="hover:text-white transition-colors">Finishes</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Social Icons with Official Brand Colors */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919001100731"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-md hover:scale-110"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
            </a>
            <a
              href="mailto:mmstone@rediffmail.com"
              className="p-2.5 rounded-xl bg-[#EA4335] hover:bg-[#d93025] text-white transition-all shadow-md hover:scale-110"
              aria-label="Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white transition-all shadow-md hover:scale-110 hover:opacity-95"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-xl bg-[#1DA1F2] hover:bg-[#0c85d0] text-white transition-all shadow-md hover:scale-110"
              aria-label="Twitter"
              title="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white transition-all shadow-md hover:scale-110"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Watermark Background Text: Luminous Bright Cream Gradient Fill */}
        <div className="py-6 sm:py-10 flex items-center justify-center select-none overflow-hidden pointer-events-none w-full">
          <h2 className="text-[clamp(3.5rem,13vw,17.5rem)] font-black uppercase tracking-tighter font-serif bg-gradient-to-b from-white via-[#fef3c7] to-[#d97706]/70 bg-clip-text text-transparent leading-none whitespace-nowrap text-center w-full block drop-shadow-[0_4px_25px_rgba(251,191,36,0.12)] opacity-95">
            M.M STONE
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-mono">
          <p>© {new Date().getFullYear()} M.M STONE INDUSTRIES. All rights reserved.</p>
          <p className="text-stone-400">
            Made with 🔥 by{' '}
            <a
              href="https://labs.theangaarbatch.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-semibold hover:underline hover:text-amber-300 transition-colors"
            >
              The Angaar Labs
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}



