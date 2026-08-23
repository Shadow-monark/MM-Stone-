'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const MASTER_BANNERS = [
  {
    id: 1,
    title: 'Shri Ram & Kevat Samvad Relief Panel',
    subtitle: 'Warm Red Sandstone • Backlit High-Relief Carving',
    description: 'Sculptural masterpiece depicting Shri Ram, Sita, Lakshman, and Kevat in a carved wooden boat over lotus waters with illuminated halo accents.',
    location: 'Bansi Paharpur Quarry Monolith • Bayana (ML No. 13/2022)',
    image: '/bg/hero_carving.jpg',
  },
  {
    id: 2,
    title: 'Mahatma Jyotirao Phule & Savitribai Phule Relief',
    subtitle: '3D High-Relief Monolithic Sandstone Carving',
    description: 'Bespoke high-relief wall panel depicting Mahatma Phule & Savitribai Phule holding books, framed in an ornate deep-carved floral border.',
    location: 'Custom Architectural Monograph • Bayana Workshop',
    image: '/bg/about_mandir.jpg',
  },
  {
    id: 3,
    title: 'Sacred OM & Deity Temple Facade Screen',
    subtitle: 'Perforated Sandstone Lattice & Carved Relief Frieze',
    description: 'Monumental temple entrance portal with central radial OM medallion, micro-perforated Jali backdrop, carved elephants, and hanging bell friezes.',
    location: 'Pracheen Hanuman Mandir Facade • Red Sandstone',
    image: '/bg/om_temple.jpg',
  },
  {
    id: 4,
    title: 'Imperial Sanctum Mandir Architecture',
    subtitle: 'Makrana Marble & Sandstone Cusped Arches',
    description: 'Complete Devotional Sanctum featuring illuminated cusped jharokha arches, turned fluted columns, hanging brass lamps, and lotus floor rosettes.',
    location: 'Luxury Private Villa Sanctum Installation',
    image: '/bg/sanctum_interior.jpg',
  },
  {
    id: 5,
    title: 'Lord Murugan (Kartikeya) Monolithic Statue Relief',
    subtitle: 'Deep-Undercut Red Sandstone Iconography',
    description: 'Iconographic relief carving of Lord Murugan holding Vel spear in an arched moulding frame, sculpted down to fine crown details.',
    location: 'Devotional Niche & Pillar Portal • Bansi Paharpur Red Stone',
    image: '/bg/deity_relief.jpg',
  },
];

export default function MasterCarvingsBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MASTER_BANNERS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MASTER_BANNERS.length) % MASTER_BANNERS.length);
  };

  const current = MASTER_BANNERS[currentIndex];

  return (
    <section className="relative w-full min-h-[75vh] sm:min-h-[85vh] bg-stone-950 text-white overflow-hidden flex items-center justify-center border-y border-stone-800">
      
      {/* 100% VISIBLE FULL-SCREEN PHOTO BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover filter brightness-90 contrast-110 scale-105"
          />

          {/* Vignette Gradients for Crisp White Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/30 to-stone-950/85" />
          <div className="absolute inset-0 bg-[#5c1818]/20 mix-blend-color-burn" />
        </motion.div>
      </AnimatePresence>

      {/* TEXT LAYERED DIRECTLY ON TOP OF PHOTO */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex flex-col justify-between min-h-[75vh] sm:min-h-[85vh]">
        
        {/* Top Header Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-sm bg-stone-900/90 border border-amber-500/40 text-amber-200 text-xs uppercase tracking-[0.25em] font-semibold backdrop-blur-md shadow-xl">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>M.M. STONE Master Carvings & Reliefs</span>
          </div>

          {/* Slide Indicator Counter */}
          <div className="px-4 py-1.5 rounded-sm bg-stone-900/80 border border-stone-700 text-stone-300 font-mono text-xs tracking-wider backdrop-blur-md shadow-md">
            MASTERPIECE {currentIndex + 1} OF {MASTER_BANNERS.length}
          </div>
        </div>

        {/* Center Main Text Overlay */}
        <div className="my-auto py-12 max-w-3xl">
          <motion.div
            key={`title-${current.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300 block drop-shadow-md">
              {current.subtitle}
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight drop-shadow-2xl">
              {current.title}
            </h2>

            <p className="text-stone-200 text-base sm:text-lg leading-relaxed font-light drop-shadow-md">
              {current.description}
            </p>

            <div className="pt-2 text-xs font-semibold text-amber-200/90 uppercase tracking-wider flex items-center gap-2 drop-shadow-sm">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{current.location}</span>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link
                href="#craftsmanship"
                className="inline-flex items-center gap-2 bg-amber-100 hover:bg-white text-stone-950 font-bold px-7 py-3 text-xs uppercase tracking-[0.2em] rounded-sm shadow-2xl transition-all"
              >
                <span>Inspect in Works Gallery</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-stone-900/90 hover:bg-stone-900 text-white font-semibold px-6 py-3 text-xs uppercase tracking-[0.2em] rounded-sm border border-stone-700 backdrop-blur-md transition-all shadow-lg"
              >
                Commission Similar Work
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner Navigation Controls & Slide Preview Dots */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/20">
          
          {/* Thumbnails / Dots */}
          <div className="flex items-center gap-3">
            {MASTER_BANNERS.map((banner, idx) => (
              <button
                key={banner.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-10 bg-amber-400 shadow-md' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
                title={banner.title}
              />
            ))}
          </div>

          {/* Left / Right Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-sm bg-stone-900/80 hover:bg-stone-900 text-white border border-stone-700 transition-colors backdrop-blur-md shadow-lg"
              aria-label="Previous Master Carving"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-sm bg-stone-900/80 hover:bg-stone-900 text-white border border-stone-700 transition-colors backdrop-blur-md shadow-lg"
              aria-label="Next Master Carving"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
