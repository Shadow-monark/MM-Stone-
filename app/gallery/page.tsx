'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Filter, Sparkles, X, CheckCircle2, MessageSquare, Layers, Phone, Grid, ArrowUpRight } from 'lucide-react';
import { CRAFT_ITEMS, CRAFT_CATEGORIES, CraftItem } from '@/data/craftData';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All Works');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<CraftItem | null>(null);

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return CRAFT_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'All Works' || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.application.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1c1917] flex flex-col font-sans">
      
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#faf9f5]/95 backdrop-blur-md border-b border-stone-300 py-4 shadow-sm">
        <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Stylish Animated Return Button */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 bg-white hover:bg-stone-900 text-stone-900 hover:text-white border border-stone-300 font-bold text-xs uppercase tracking-[0.16em] px-4 sm:px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-amber-700 group-hover:text-amber-300 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Main Studio</span>
          </Link>

          {/* Center Brand Title */}
          <Link href="/" className="hidden sm:flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-sm bg-[#5c1818] border border-amber-500/40 flex items-center justify-center shadow-xs">
              <span className="font-bold text-xs tracking-widest text-amber-100">MM</span>
            </div>
            <span className="text-sm font-bold tracking-[0.16em] text-stone-900 uppercase">
              M.M. STONE GALLERY
            </span>
          </Link>

          {/* Quick Call Action */}
          <a
            href="tel:+919414024097"
            className="inline-flex items-center gap-2 bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-bold text-xs uppercase tracking-[0.14em] px-4 py-2.5 rounded-full transition-all shadow-sm shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Call: +91 9414024097</span>
            <span className="sm:hidden">Call</span>
          </a>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 py-10 sm:py-16">
        <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5c1818] text-amber-200 text-xs uppercase tracking-[0.25em] font-semibold mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Full Portfolio Archive ({CRAFT_ITEMS.length}+ Works)</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight mb-4">
              Architectural Carvings & Master Gallery
            </h1>
            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              Complete catalog of authentic Bansi Paharpur Red Stone carvings, 3D CNC relief panels, perforated lattice Jali screens, temple pillars, and monumental chhatris direct from Bayana quarries.
            </p>
          </motion.div>

          {/* Controls Bar: Search & Category Filter */}
          <div className="mb-10 space-y-6">
            
            {/* Search Input */}
            <div className="max-w-xl mx-auto relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, stone material, or application (e.g. Jali, Mandir, Pillar)..."
                className="w-full bg-white border border-stone-300 rounded-full pl-11 pr-10 py-3 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-stone-600 shadow-sm transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center flex-wrap gap-2">
              {CRAFT_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all shadow-2xs ${
                      isActive
                        ? 'bg-stone-900 text-white shadow-sm'
                        : 'bg-white text-stone-700 hover:text-stone-900 border border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Status Indicator */}
            <div className="flex items-center justify-between text-xs text-stone-500 font-medium pt-2 border-t border-stone-200">
              <div className="flex items-center gap-2">
                <Grid className="w-4 h-4 text-amber-800" />
                <span>Showing {filteredItems.length} of {CRAFT_ITEMS.length} Architectural Works</span>
              </div>
              {searchQuery && (
                <span className="text-amber-900 font-semibold">
                  Filtered by: &ldquo;{searchQuery}&rdquo;
                </span>
              )}
            </div>

          </div>

          {/* Gallery Items Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-white border border-stone-200 rounded-lg shadow-sm">
              <Filter className="w-10 h-10 text-stone-300 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-stone-900 mb-1">No matching works found</h3>
              <p className="text-stone-500 text-xs font-light max-w-sm mx-auto mb-4">
                Try searching for a different stone term or select another category filter above.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All Works');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-2 bg-stone-900 text-white font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full"
              >
                <span>Reset Filters</span>
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {filteredItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.3) }}
                    onClick={() => setSelectedItem(item)}
                    className="group bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:border-stone-400 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-sm text-stone-200 text-[10px] uppercase font-medium tracking-wider px-2.5 py-1 rounded-sm border border-stone-800">
                          {item.category}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-4 space-y-2">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800 block">
                          {item.material}
                        </span>
                        <h3 className="font-serif text-base font-semibold text-stone-900 leading-snug group-hover:text-amber-900 transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-stone-500 text-xs leading-relaxed font-light line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-700">
                      <span className="text-[11px] text-stone-400 font-medium truncate max-w-[180px]">
                        {item.application}
                      </span>
                      <div className="inline-flex items-center gap-1 font-semibold text-stone-900 group-hover:text-amber-900 shrink-0">
                        <span>Inspect</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </main>

      {/* Floating Bottom Return Button */}
      <div className="sticky bottom-6 left-0 right-0 z-40 flex justify-center pointer-events-none px-4">
        <Link
          href="/"
          className="pointer-events-auto group inline-flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full shadow-2xl transition-all border border-amber-500/40 hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 text-amber-300 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Main Website</span>
        </Link>
      </div>

      {/* High-Res Inspection Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-stone-950/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#faf9f5] border border-stone-300 rounded-xl overflow-hidden shadow-2xl my-auto text-stone-900"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/95 hover:bg-white text-stone-900 border border-stone-300 shadow-md transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Left Image View */}
                <div className="md:col-span-7 relative bg-stone-900 flex items-center justify-center min-h-[340px] sm:min-h-[460px]">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain max-h-[70vh]"
                  />
                  <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-sm text-stone-300 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm border border-stone-800">
                    Quarry Workshop Photograph
                  </div>
                </div>

                {/* Right Specification Panel */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#faf9f6]">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-amber-800 block mb-1">
                        {selectedItem.category}
                      </span>
                      <h3 className="font-serif text-2xl font-semibold text-stone-900 leading-tight">
                        {selectedItem.title}
                      </h3>
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                      {selectedItem.description}
                    </p>

                    {/* Specs Details */}
                    <div className="space-y-2.5 pt-2 border-t border-stone-200 text-xs">
                      <div className="p-3 bg-white border border-stone-200 rounded-md">
                        <span className="text-stone-400 block text-[10px] uppercase font-medium">Stone & Quarry Source</span>
                        <span className="font-semibold text-stone-900">{selectedItem.material}</span>
                      </div>

                      {selectedItem.dimensions && (
                        <div className="p-3 bg-white border border-stone-200 rounded-md">
                          <span className="text-stone-400 block text-[10px] uppercase font-medium">Available Dimensions</span>
                          <span className="font-semibold text-stone-900">{selectedItem.dimensions}</span>
                        </div>
                      )}

                      <div className="p-3 bg-white border border-stone-200 rounded-md">
                        <span className="text-stone-400 block text-[10px] uppercase font-medium">Recommended Use</span>
                        <span className="font-semibold text-stone-900">{selectedItem.application}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-stone-700 bg-stone-100 border border-stone-200 p-2.5 rounded-md">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Single-source color matching & custom thickness calibration available.</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-4 border-t border-stone-200">
                    <a
                      href={`https://wa.me/919001100731?text=${encodeURIComponent(`Hello M.M. STONE, I am interested in technical specs for "${selectedItem.title}" (${selectedItem.material}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-md transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Inquiry</span>
                    </a>

                    <a
                      href="tel:+919414024097"
                      className="w-full text-center inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-md transition-colors shadow-sm"
                    >
                      <Phone className="w-4 h-4 text-amber-300" />
                      <span>Call Director +91 9414024097</span>
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
