'use client';

import { useState, useEffect } from 'react';
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
    image: '/extra_gallery/IMG-20260823-WA0018.jpg',
    idealFor: 'Monumental Facades, Luxury Islands, Commercial Lobbies',
  },
  {
    id: 'bansi-paharpur-red',
    name: 'Bansi Paharpur Red Stone',
    category: 'Sandstone',
    depth: '500m',
    hardness: '6.8 Mohs',
    density: '2.52 g/cm³',
    waterAbsorption: '0.45%',
    compressiveStrength: '124.2 MPa',
    finish: 'Hand Carved / Leathered / Honed',
    description: 'Auspicious Purna-Kalash (sacred urn) base with ascending vertical stem of lotus medallions carved in high relief.',
    image: '/craft/craft_07.jpeg',
    idealFor: 'Temple Facades, Monumental Pillars, Carved Reliefs',
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
    id: 'dholpur-pink-sandstone',
    name: 'Dholpur Pink Sandstone',
    category: 'Sandstone',
    depth: '80m',
    hardness: '6.5 Mohs',
    density: '2.45 g/cm³',
    waterAbsorption: '1.20%',
    compressiveStrength: '98.5 MPa',
    finish: 'Natural Cleft / Sawn',
    description: 'Warm amber and ochre striations offering natural slip resistance for external paving and heritage railings.',
    image: '/craft/craft_41.jpeg',
    idealFor: 'Pool Coping, Exterior Cladding, Landscape Plazas',
  },
  {
    id: 'titanium-red-quartzite',
    name: 'Titanium Red Quartzite',
    category: 'Quartzite',
    depth: '540m',
    hardness: '8.1 Mohs',
    density: '2.94 g/cm³',
    waterAbsorption: '0.06%',
    compressiveStrength: '210.5 MPa',
    finish: 'Mirror Polished / Flamed',
    description: 'Ultra-dense crystalline quartzite with exceptional acid and heat resistance, ideal for heavy traffic architectural spaces.',
    image: '/row_photos/IMG-20260823-WA0017.jpg',
    idealFor: 'High-Traffic Public Plazas, Executive Wall Slabs',
  },
  {
    id: 'heritage-jali-screen',
    name: 'Perforated Heritage Jali Screen',
    category: 'Sandstone',
    depth: '150m',
    hardness: '6.7 Mohs',
    density: '2.48 g/cm³',
    waterAbsorption: '0.55%',
    compressiveStrength: '115.0 MPa',
    finish: 'CNC Carved / Hand Chiseled',
    description: 'Bespoke geometric and floral lattice screens designed for natural ventilation and dramatic sunlight interplay.',
    image: '/craft/craft_06.jpeg',
    idealFor: 'Window Facades, Courtyard Screens, Room Dividers',
  },
  {
    id: 'monolithic-pillar-capital',
    name: 'Monolithic Turned Pillar Capital',
    category: 'Sandstone',
    depth: '300m',
    hardness: '7.0 Mohs',
    density: '2.55 g/cm³',
    waterAbsorption: '0.40%',
    compressiveStrength: '130.8 MPa',
    finish: 'Lathe Turned / Hand Carved',
    description: 'Classical Rajasthani architectural stambha caps with intricate bracket carvings and kalash motifs.',
    image: '/craft/craft_04.jpeg',
    idealFor: 'Temple Porticos, Palace Entrance Columns, Grand Verandahs',
  },
  {
    id: 'statuary-pink-marble',
    name: 'Statuary Pink Heritage Marble',
    category: 'Marble',
    depth: '180m',
    hardness: '6.5 Mohs',
    density: '2.65 g/cm³',
    waterAbsorption: '0.22%',
    compressiveStrength: '138.0 MPa',
    finish: 'Silk Honed / Polished',
    description: 'Translucent pink vein structure carved into deity idols, mythological friezes, and luxury sanctuary walls.',
    image: '/craft/craft_03.jpeg',
    idealFor: 'Temple Sanctums, Sculptural Statues, Luxury Foyers',
  },
  {
    id: 'black-galaxy-granite',
    name: 'Rajasthan Black Granite',
    category: 'Granite',
    depth: '480m',
    hardness: '7.8 Mohs',
    density: '2.85 g/cm³',
    waterAbsorption: '0.09%',
    compressiveStrength: '185.0 MPa',
    finish: 'Mirror Gloss / Leathered',
    description: 'Deep obsidian black matrix peppered with golden bronze mica flakes, providing unmatched structural strength.',
    image: '/row_photos/IMG-20260823-WA0011.jpg',
    idealFor: 'Kitchen Islands, Executive Desks, Heavy Flooring',
  },
  {
    id: 'bansi-paharpur-pink',
    name: 'Bansi Paharpur Light Pink Stone',
    category: 'Sandstone',
    depth: '380m',
    hardness: '6.6 Mohs',
    density: '2.46 g/cm³',
    waterAbsorption: '0.50%',
    compressiveStrength: '118.4 MPa',
    finish: 'Sawn / Bush Hammered',
    description: 'Renowned historic sandstone used in iconic Indian monuments, featuring subtle rose gold hues.',
    image: '/extra_gallery/IMG-20260823-WA0149.jpg',
    idealFor: 'Monumental Walls, Exterior Elevation, Heritage Restoration',
  },
  {
    id: 'crystalline-white-quartzite',
    name: 'Crystalline White Quartzite',
    category: 'Quartzite',
    depth: '600m',
    hardness: '8.2 Mohs',
    density: '2.96 g/cm³',
    waterAbsorption: '0.04%',
    compressiveStrength: '225.0 MPa',
    finish: 'Polished Satin',
    description: 'Sparkling quartzite with near-zero porosity and intense structural rigidity, resembling natural ice crystals.',
    image: '/craft/craft_31.jpeg',
    idealFor: 'Countertops, Feature Walls, Spa Interiors',
  },
  {
    id: 'carved-temple-chhatri',
    name: 'Carved Temple Chhatri & Dome',
    category: 'Sandstone',
    depth: '250m',
    hardness: '6.9 Mohs',
    density: '2.50 g/cm³',
    waterAbsorption: '0.42%',
    compressiveStrength: '128.0 MPa',
    finish: 'Hand Sculpted / Fitted',
    description: 'Ornate umbrella pavilions and cusped arch domes engineered with interlocking dry-stack stone joinery.',
    image: '/extra_gallery/IMG-20260823-WA0111.jpg',
    idealFor: 'Rooftop Pavilions, Garden Chhatris, Temple Spires',
  },
];

const CATEGORIES = ['All', 'Granite', 'Quartzite', 'Marble', 'Sandstone'];

export default function StoneCollection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedProduct, setSelectedProduct] = useState<StoneProduct | null>(null);

  useEffect(() => {
    if (selectedProduct) {
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
  }, [selectedProduct]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(4);
  };

  const filtered = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const displayedProducts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section id="collection" className="py-12 sm:py-16 bg-[#eae7e0] relative border-t border-[#dcd8cd] overflow-hidden">
      
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

      <div className="w-full max-w-[90%] mx-auto px-0 relative z-10">

        
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
                  onClick={() => handleCategoryChange(cat)}
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
            {displayedProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer bg-[#faf9f5] border border-[#dcd8cd] hover:border-[#a8a29e] rounded-2xl overflow-hidden transition-colors duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-md"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider text-[#1c1917] border border-[#dcd8cd] shadow-2xs">
                    {product.category}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase font-medium text-[#57534e] border border-[#dcd8cd] shadow-2xs">
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

        {/* Load More Action Button */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="inline-flex items-center gap-2 bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-sm transition-all shadow-md border border-amber-500/30"
            >
              <span>Load More Stone Varieties (+{filtered.length - visibleCount} More)</span>
            </button>
          </div>
        )}

      </div>

      {/* Light Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-stone-950/90 backdrop-blur-md overflow-y-auto"
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
