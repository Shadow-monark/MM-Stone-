'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn('Hero video autoplay deferred:', err);
      });
    }
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 bg-stone-950">
      
      {/* Background Video — Fully Visible with Refined Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-100 contrast-105"
          autoPlay
          muted
          loop
          playsInline
          poster="/craft/craft_09.jpeg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Minimal Vignette Overlay for High Legibility & Crisp Video */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/35 to-stone-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 via-stone-950/20 to-stone-950/60" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-28 sm:pb-16 flex flex-col items-center text-center">
        
        {/* Active Quarry Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-sm bg-stone-900/80 border border-stone-700/60 text-stone-300 text-xs uppercase tracking-[0.25em] mb-5 backdrop-blur-md shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Rajasthan Extraction Operations • 420m Stratum</span>
        </motion.div>

        {/* Staggered Animated Headline */}
        <div className="flex justify-center w-full max-w-5xl">
          <AnimatedHeading
            text="Natural Stone for Timeless Architecture"
            italicWord="Architecture"
            className="text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.12] mb-5 tracking-tight drop-shadow-md justify-center text-center"
          />
        </div>

        {/* Animated Subtitle */}
        <AnimatedParagraph
          delay={0.3}
          className="text-stone-200 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 font-light drop-shadow-sm text-center"
        >
          Geological extraction, diamond gangsaw milling, and heritage hand-carving of Red Sandstone, Ruby Red Granite, and Architectural Slabs for landmark global projects.
        </AnimatedParagraph>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-4"
        >
          <Link
            href="#craftsmanship"
            className="inline-flex items-center justify-center gap-3 bg-stone-100 hover:bg-white text-stone-950 font-bold px-8 py-3.5 text-xs uppercase tracking-[0.2em] rounded-sm shadow-xl transition-all group"
          >
            <span>Heritage Carvings & Works</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#collection"
            className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-stone-200 hover:text-white bg-stone-900/80 hover:bg-stone-900 border border-stone-700 rounded-sm backdrop-blur-md transition-all shadow-md"
          >
            Geological Collection
          </Link>
        </motion.div>

        {/* Technical Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 sm:mt-12 pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full max-w-4xl text-center"
        >
          <div>
            <span className="text-2xl sm:text-3xl font-semibold text-white block">35+</span>
            <span className="text-xs uppercase tracking-wider text-stone-400">Years Established</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-semibold text-white block">40+</span>
            <span className="text-xs uppercase tracking-wider text-stone-400">Global Export Ports</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-semibold text-white block">420m</span>
            <span className="text-xs uppercase tracking-wider text-stone-400">Quarry Extraction</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-semibold text-white block">ISO 9001</span>
            <span className="text-xs uppercase tracking-wider text-stone-400">Lab Certified</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


