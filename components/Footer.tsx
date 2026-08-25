'use client';

import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Youtube, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-stone-400 border-t border-stone-800/80 relative overflow-hidden">
      <div className="w-full max-w-[90%] mx-auto px-0 pt-14 pb-10">
        
        {/* Top Header Row: Logo, Nav Links, Social Icons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-stone-800/60">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-sm bg-[#5c1818] border border-amber-500/40 flex items-center justify-center shadow-md group-hover:bg-[#7a1f1f] transition-colors">
              <span className="font-bold text-xs tracking-widest text-amber-100">MM</span>
            </div>
            <span className="text-lg font-bold tracking-[0.18em] text-white transition-colors">
              MM STONES
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-semibold uppercase tracking-[0.18em]">
            <Link href="#about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="#craftsmanship" className="hover:text-white transition-colors">Works Gallery</Link>
            <Link href="#collection" className="hover:text-white transition-colors">Stone Varieties</Link>
            <Link href="#finishes" className="hover:text-white transition-colors">Finishes</Link>
            <Link href="#process" className="hover:text-white transition-colors">Process</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/919001100731"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-600 transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="mailto:mmstone@rediffmail.com"
              className="p-2.5 rounded-md bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-600 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-md bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-600 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-md bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-600 transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-md bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-600 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Watermark Background Text: MM STONES */}
        <div className="py-8 sm:py-14 flex items-center justify-center select-none overflow-hidden pointer-events-none">
          <h2 className="text-[clamp(2rem,7vw,7.5rem)] font-black uppercase tracking-wider font-serif text-stone-800/80 leading-none whitespace-nowrap text-center drop-shadow-sm">
            MM STONES
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-mono">
          <p>© {new Date().getFullYear()} MM STONES – M.M. Stone Industries. All rights reserved.</p>
          <p className="text-stone-400">
            Made with 🔥 by The Angaar Labs
          </p>
        </div>

      </div>
    </footer>
  );
}



