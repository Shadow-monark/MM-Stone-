'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { AnimatedHeading } from './AnimatedText';

interface StoneProduct {
  id: string;
  name: string;
  category: string;
  depth: string;
  hardness: string;
  finish: string;
  density: string;
  waterAbsorption: string;
  compressiveStrength: string;
  description: string;
  image: string;
  idealFor: string;
}

const PRODUCTS: StoneProduct[] = [
  {
    id: 'ruby-red-granite',
    name: 'Ruby Red Sandstone & Granite',
    category: 'Granite',
    depth: '420m',
    hardness: '7.6 Mohs',
    density: '2.75 g/cm³',
    waterAbsorption: '0.12%',
    compressiveStrength: '168.4 MPa',
    finish: 'Polished / Flamed / Honed',
    description: 'Deep crimson matrix interlaced with quartz crystals. Engineered under intense subterranean pressures for minimal porosity and exceptional durability.',
    image: '/craft/craft_21.jpeg',
    idealFor: 'Monumental Facades, Luxury Islands, Commercial Lobbies',
  },
  {
    id: 'titanium-quartzite',
    name: 'Bansi Paharpur Red Stone',
    category: 'Quartzite',
    depth: '500m',
    hardness: '8.0 Mohs',
    density: '2.92 g/cm³',
    waterAbsorption: '0.08%',
    compressiveStrength: '194.2 MPa',
    finish: 'Leathered / Ultra-Polished',
    description: 'Auspicious Purna-Kalash (sacred urn) base with ascending vertical stem of lotus medallions carved in high relief.',
    image: '/craft/craft_07.jpeg',
    idealFor: 'Executive Boardroom Walls, Countertops, Spa Suites',
  },
  {
    id: 'imperial-marble',
    name: 'Imperial White & Pink Marble',
    category: 'Marble',
    depth: '220m',
    hardness: '6.8 Mohs',
    density: '2.68 g/cm³',
    waterAbsorption: '0.18%',
    compressiveStrength: '142.1 MPa',
    finish: 'High-Gloss / Satin Matte',
    description: 'Masterpiece 3D high-relief sculptural panel of Lord Krishna playing flute with Radha, detailed down to crown jewels.',
    image: '/craft/craft_30.jpeg',
    idealFor: 'Luxury Bathrooms, Hotel Foyers, Statement Stairs',
  },
  {
    id: 'desert-sandstone',
    name: 'Dholpur Pink Sandstone',
    category: 'Sandstone',
    depth: '80m',
    hardness: '6.5 Mohs',
    density: '2.45 g/cm³',
    waterAbsorption: '1.20%',
    compressiveStrength: '98.5 MPa',
    finish: 'Natural Cleft / Sawn',
    description: 'Warm amber and ochre striations offering natural slip resistance for external paving and heritage railings.',
    image: '/craft/craft_01.jpeg',
    idealFor: 'Pool Coping, Exterior Cladding, Landscape Plazas',
  },
];

const CATEGORIES = ['All', 'Granite', 'Quartzite', 'Marble', 'Sandstone'];

export default function StoneCollection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<StoneProduct | null>(null);

  const filtered = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="collection" className="py-28 sm:py-36 bg-[#eae7e0] relative border-t border-[#dcd8cd] overflow-hidden">
      
      {/* Background Carving Relief Image Behind Text */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-15 pointer-events-none">
        <img
          src="/bg/sanctum_interior.jpg"
          alt="Imperial Sanctum Mandir Architecture Background"
          className="w-full h-full object-cover filter contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#eae7e0] via-transparent to-[#eae7e0]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#eae7e0] via-transparent to-[#eae7e0]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500 block mb-3">
              The Material Collection
            </span>
            <AnimatedHeading
              text="Curated Stone Varieties"
              italicWord="Varieties"
              className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight"
            />
          </div>

          {/* Animated Filter Tabs */}
          <div className="flex flex-wrap gap-2 relative">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-semibold transition-colors duration-200 z-10 ${
                    isActive ? 'text-white' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="categoryActivePillLight"
                      className="absolute inset-0 bg-stone-900 rounded-sm -z-10 shadow-xs"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filtered.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer bg-[#faf9f5] border border-[#dcd8cd] hover:border-[#a8a29e] rounded-sm overflow-hidden transition-colors duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-md"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-sm text-[10px] uppercase font-semibold tracking-wider text-[#1c1917] border border-[#dcd8cd] shadow-2xs">
                    {product.category}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-sm text-[10px] uppercase font-medium text-[#57534e] border border-[#dcd8cd] shadow-2xs">
                    Depth: {product.depth}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#1c1917] mb-2 group-hover:text-[#9a7b4f] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-[#57534e] text-xs leading-[1.7] font-light mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="space-y-2 py-3 border-t border-[#e2ded4] text-[11px]">
                      <div className="flex justify-between text-[#78716c]">
                        <span>Hardness:</span>
                        <span className="text-[#1c1917] font-semibold">{product.hardness}</span>
                      </div>
                      <div className="flex justify-between text-[#78716c]">
                        <span>Compressive:</span>
                        <span className="text-[#1c1917] font-semibold">{product.compressiveStrength}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#e2ded4] flex items-center justify-between text-xs font-semibold text-[#1c1917] group-hover:text-[#9a7b4f]">
                    <span>View Geological Data</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Light Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 sm:pt-20 sm:pb-10 bg-stone-950/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#faf9f5] border border-[#dcd8cd] rounded-sm overflow-hidden shadow-2xl p-6 sm:p-8 my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-sm bg-white/95 hover:bg-white text-[#1c1917] border border-[#dcd8cd] shadow-md transition-colors"
                aria-label="Close Details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Left: Image */}
                <div className="md:col-span-5 relative aspect-square rounded-sm overflow-hidden border border-stone-200">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right: Lab Specs */}
                <div className="md:col-span-7 space-y-5">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#9a7b4f] font-semibold block mb-1">
                      {selectedProduct.category} — {selectedProduct.depth} Stratum Depth
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-[#1c1917]">
                      {selectedProduct.name}
                    </h3>
                  </div>

                  <p className="text-[#57534e] text-xs sm:text-sm leading-[1.75] font-light">
                    {selectedProduct.description}
                  </p>

                  {/* Laboratory Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3.5 rounded-sm bg-[#f4f2ec] border border-[#dcd8cd]">
                      <span className="text-[#78716c] block text-[10px] uppercase font-semibold">Compressive Strength</span>
                      <span className="font-semibold text-[#1c1917]">{selectedProduct.compressiveStrength}</span>
                    </div>
                    <div className="p-3.5 rounded-sm bg-[#f4f2ec] border border-[#dcd8cd]">
                      <span className="text-[#78716c] block text-[10px] uppercase font-semibold">Water Absorption</span>
                      <span className="font-semibold text-[#1c1917]">{selectedProduct.waterAbsorption}</span>
                    </div>
                    <div className="p-3.5 rounded-sm bg-[#f4f2ec] border border-[#dcd8cd]">
                      <span className="text-[#78716c] block text-[10px] uppercase font-semibold">Bulk Density</span>
                      <span className="font-semibold text-[#1c1917]">{selectedProduct.density}</span>
                    </div>
                    <div className="p-3.5 rounded-sm bg-[#f4f2ec] border border-[#dcd8cd]">
                      <span className="text-[#78716c] block text-[10px] uppercase font-semibold">Mohs Hardness</span>
                      <span className="font-semibold text-[#1c1917]">{selectedProduct.hardness}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <a
                      href="#contact"
                      onClick={() => setSelectedProduct(null)}
                      className="flex-1 text-center bg-[#1c1917] hover:bg-[#292524] text-white font-semibold text-xs uppercase tracking-[0.2em] py-3.5 rounded-sm transition-colors shadow-sm border border-stone-800"
                    >
                      Request Physical Sample Kit
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
