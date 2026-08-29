'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowUpRight, X, Sparkles, MessageSquare, CheckCircle2, Layers, ChevronDown, ChevronUp, Grid } from 'lucide-react';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';
import { CRAFT_ITEMS, CRAFT_CATEGORIES, CraftItem } from '@/data/craftData';

const INITIAL_LIMIT = 6;

export default function CraftGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All Works');
  const [selectedItem, setSelectedItem] = useState<CraftItem | null>(null);
  const [visibleLimit, setVisibleLimit] = useState<number>(6);

  useEffect(() => {
    if (selectedItem) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleLimit(6);
  };

  const filteredItems = activeCategory === 'All Works'
    ? CRAFT_ITEMS
    : CRAFT_ITEMS.filter((item) => item.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleLimit);
  const remainingCount = filteredItems.length - visibleLimit;

  return (
    <section id="craftsmanship" className="py-12 sm:py-16 bg-[#eae7e0] relative border-t border-[#dcd8cd] overflow-hidden">
      
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-stone-200/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-stone-200 text-stone-700 text-xs uppercase tracking-[0.25em] shadow-xs mb-3 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Rajasthan Master Artisans</span>
            </div>
            <AnimatedHeading
              text="Architectural Carvings & Heritage Jalis"
              italicWord="Heritage"
              className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight max-w-2xl"
            />
          </div>

          <AnimatedParagraph delay={0.2} className="text-stone-600 text-sm sm:text-base max-w-md leading-relaxed font-light">
            Curated commissions direct from our quarries in Rajasthan — handcrafted temple reliefs, perforated lattice screens, monolithic pillars, and ambient landscape stone lanterns.
          </AnimatedParagraph>
        </div>

        {/* Category Navigation Tabs & Counter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-stone-200 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {CRAFT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`relative px-4 py-2.5 rounded-sm text-xs uppercase tracking-wider font-semibold transition-all duration-200 z-10 ${
                    isActive
                      ? 'text-white'
                      : 'text-stone-600 hover:text-stone-900 bg-white/70 hover:bg-white border border-stone-200/80 shadow-2xs'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="craftCategoryActivePill"
                      className="absolute inset-0 bg-stone-900 rounded-sm -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Counter Indicator */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium shrink-0 bg-white/60 px-3 py-1.5 rounded-sm border border-stone-200">
            <Grid className="w-3.5 h-3.5 text-stone-400" />
            <span>Showing {visibleItems.length} of {filteredItems.length} Works</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.2) }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer bg-white border border-stone-200 hover:border-stone-400 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Image Container with Luxury Overlay */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.98] group-hover:brightness-100"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="inline-flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider bg-stone-900/80 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Specifications</span>
                    </div>
                  </div>

                  {/* Material / Category Tag */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-sm text-[10px] uppercase font-bold tracking-widest text-stone-800 border border-stone-200 shadow-2xs">
                    {item.category}
                  </div>

                  {item.featured && (
                    <div className="absolute top-3 left-3 bg-amber-700 text-white px-2.5 py-0.5 rounded-sm text-[9px] uppercase font-bold tracking-widest shadow-xs">
                      Masterpiece
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-amber-800 block mb-1">
                      {item.material}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-stone-900 leading-snug group-hover:text-amber-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-stone-500 text-xs leading-relaxed font-light mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-700 group-hover:text-stone-900">
                    <span className="text-[11px] text-stone-400 font-medium truncate max-w-[200px]">
                      {item.application}
                    </span>
                    <div className="flex items-center gap-1 font-semibold shrink-0">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dedicated Full Gallery Route Redirect Section */}
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <Link
            href="/gallery"
            className="group relative inline-flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 border border-stone-800"
          >
            <span>Explore Full Dedicated Gallery ({CRAFT_ITEMS.length}+ Works)</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <p className="text-stone-500 text-xs font-light mt-3">
            Open full-screen animated gallery page with 140+ architectural works, search filters, and high-res inspection.
          </p>
        </div>

        {/* Bottom Banner for Custom Architectural Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 sm:p-10 rounded-sm bg-stone-900 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl">
            <span className="text-amber-400 text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
              Bespoke Architectural Engineering
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-semibold mb-2">
              Have a Custom Jali, Mandir, or Pillar Blueprint?
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              We execute customized 2D CAD and 3D reliefs in red sandstone, Dholpur pink stone, and Makrana marble. Custom dimensioning, mechanical fixing slots, and global crating available.
            </p>
          </div>

          <a
            href="#contact"
            className="relative z-10 inline-flex items-center gap-2 bg-[#faf9f6] hover:bg-white text-stone-950 font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all shadow-md shrink-0 border border-stone-200"
          >
            <span>Submit Blueprints for Technical Review</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Subtle Background Pattern Accent */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-stone-800/30 to-transparent pointer-events-none" />
        </motion.div>

      </div>

      {/* Lightbox / Deep Inspection Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-stone-950/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#faf9f5] border border-[#dcd8cd] rounded-sm overflow-hidden shadow-2xl my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-sm bg-white/95 hover:bg-white text-[#1c1917] border border-[#dcd8cd] shadow-md transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Left: High-Res Image Inspection */}
                <div className="md:col-span-7 relative bg-stone-900 flex items-center justify-center min-h-[360px] sm:min-h-[480px]">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain max-h-[70vh]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-sm text-stone-300 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm border border-stone-800">
                    Authentic Workshop Photograph
                  </div>
                </div>

                {/* Right: Technical Spec Sheet */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#faf9f6]">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-amber-700 block mb-1">
                        {selectedItem.category}
                      </span>
                      <h3 className="font-serif text-2xl font-semibold text-stone-900 leading-tight">
                        {selectedItem.title}
                      </h3>
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                      {selectedItem.description}
                    </p>

                    {/* Specifications List */}
                    <div className="space-y-2.5 pt-2 border-t border-stone-200 text-xs">
                      <div className="p-3 bg-white border border-stone-200 rounded-sm">
                        <span className="text-stone-400 block text-[10px] uppercase font-medium">Stone & Quarry Source</span>
                        <span className="font-semibold text-stone-900">{selectedItem.material}</span>
                      </div>

                      {selectedItem.dimensions && (
                        <div className="p-3 bg-white border border-stone-200 rounded-sm">
                          <span className="text-stone-400 block text-[10px] uppercase font-medium">Available Dimensions</span>
                          <span className="font-semibold text-stone-900">{selectedItem.dimensions}</span>
                        </div>
                      )}

                      <div className="p-3 bg-white border border-stone-200 rounded-sm">
                        <span className="text-stone-400 block text-[10px] uppercase font-medium">Recommended Architectural Use</span>
                        <span className="font-semibold text-stone-900">{selectedItem.application}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-stone-700 bg-stone-100 border border-stone-200 p-2.5 rounded-sm">
                      <CheckCircle2 className="w-4 h-4 text-stone-600 shrink-0" />
                      <span>Single-source color matching & custom thickness calibration available.</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-4 border-t border-stone-200">
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(`Hello M.M STONE, I am interested in technical specs for "${selectedItem.title}" (${selectedItem.material}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center inline-flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-900 text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire for Technical Details</span>
                    </a>

                    <a
                      href="#contact"
                      onClick={() => setSelectedItem(null)}
                      className="w-full text-center inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-sm transition-colors shadow-sm"
                    >
                      <Layers className="w-4 h-4" />
                      <span>Request Architectural CAD & Data</span>
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

