'use client';

import { ShieldCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36 bg-[#faf9f5] relative overflow-hidden text-stone-900 border-t border-stone-200">
      
      {/* Light Warm Sandstone Background Photo Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-15 pointer-events-none">
        <img
          src="/bg/about_mandir.jpg"
          alt="Mahatma Phule & Savitribai Phule Red Sandstone Relief"
          className="w-full h-full object-cover filter contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f5] via-transparent to-[#faf9f5]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f5] via-transparent to-[#faf9f5]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Story & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: 4-Photo Raw Mining & Workshop Collage Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* 4-Image Collage Grid */}
            <div className="grid grid-cols-2 gap-3.5 relative rounded-sm overflow-hidden p-2.5 bg-stone-200/80 border border-stone-300 shadow-2xl">
              
              {/* Photo 1: Raw Quarry Mining Bed */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-stone-300 shadow-md group">
                <img
                  src="/row_photos/IMG-20260823-WA0007.jpg"
                  alt="Bayana Primary Mine Reserve"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-amber-200 tracking-wider bg-stone-900/90 px-2 py-0.5 rounded-sm border border-stone-700">
                  01. Primary Mining Bed
                </span>
              </div>

              {/* Photo 2: Gangsaw Slab Slicing */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-stone-300 shadow-md group">
                <img
                  src="/row_photos/IMG-20260823-WA0010.jpg"
                  alt="Gangsaw Slab Milling"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-amber-200 tracking-wider bg-stone-900/90 px-2 py-0.5 rounded-sm border border-stone-700">
                  02. Raw Block Slicing
                </span>
              </div>

              {/* Photo 3: Workshop Hand Carving */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-stone-300 shadow-md group">
                <img
                  src="/row_photos/IMG-20260823-WA0014.jpg"
                  alt="Artisan Workshop Carving"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-amber-200 tracking-wider bg-stone-900/90 px-2 py-0.5 rounded-sm border border-stone-700">
                  03. Hand Jali Carving
                </span>
              </div>

              {/* Photo 4: Finished 3D Sandstone Relief Monolith */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-stone-300 shadow-md group">
                <img
                  src="/row_photos/IMG-20260823-WA0041.jpg"
                  alt="Finished 3D Sandstone Relief Monolith"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-amber-200 tracking-wider bg-stone-900/90 px-2 py-0.5 rounded-sm border border-stone-700">
                  04. 3D Relief Monolith
                </span>
              </div>

            </div>

            {/* Floating License Stamp Badge Overlay */}
            <div className="absolute -bottom-5 -right-2 sm:-bottom-7 sm:right-4 bg-white border border-stone-300 p-5 sm:p-6 rounded-sm shadow-2xl max-w-[240px] z-20">
              <span className="text-[#5c1818] font-serif text-2xl sm:text-3xl font-bold block leading-none mb-1">
                ML 13/2022
              </span>
              <span className="text-[10px] uppercase tracking-wider text-stone-700 font-bold block leading-snug">
                Bayana Mines Owner & Master Fabricators
              </span>
            </div>
          </motion.div>

          {/* Right: Editorial Narrative Layered On Top */}
          <div className="lg:col-span-6 space-y-8 bg-white/90 p-7 sm:p-9 rounded-sm border border-stone-300 shadow-md backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#5c1818] text-amber-100 text-xs uppercase tracking-[0.25em] shadow-sm font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
              M.M. STONE INDUSTRIES • Bayana Quarries
            </motion.div>

            {/* Animated Headline */}
            <AnimatedHeading
              text="Mastery in Sandstone Reliefs & Heritage Stone Architecture"
              italicWord="Reliefs"
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-[1.25]"
            />

            <AnimatedParagraph delay={0.2} className="text-stone-800 text-base sm:text-lg leading-[1.8] font-light">
              M.M. STONE INDUSTRIES operates primary mine reserves in Bayana, District Bharatpur, Rajasthan under ML No. 13/2022. We specialize in Bansi Paharpur Red Sandstone, Dholpur Sandstone, and bespoke architectural carvings.
            </AnimatedParagraph>

            <AnimatedParagraph delay={0.3} className="text-stone-700 text-sm sm:text-base leading-[1.8] font-light">
              From monumental temple facades, 3D relief panels, and perforated Jali screens to turned pillars, domes, chhatris, and stone gates, our quarry craftsmen combine heritage hand-carving with high-precision 3D CNC carving.
            </AnimatedParagraph>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-stone-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-sm bg-white border border-stone-300 text-stone-900 shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#5c1818]" />
                </div>
                <div>
                  <h4 className="text-stone-900 text-sm font-bold mb-1">Direct Mines Ownership</h4>
                  <p className="text-stone-600 text-xs leading-relaxed font-light">Single-vein color consistency for large architectural contracts.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-sm bg-white border border-stone-300 text-stone-900 shrink-0 shadow-xs">
                  <Award className="w-5 h-5 text-[#5c1818]" />
                </div>
                <div>
                  <h4 className="text-stone-900 text-sm font-bold mb-1">Master Artisans & CNC</h4>
                  <p className="text-stone-600 text-xs leading-relaxed font-light">Deep-undercut carving and micro-calibrated slab tolerances.</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom Key Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-stone-300"
        >
          <div className="p-7 sm:p-8 bg-white border border-stone-300 rounded-sm shadow-sm space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#705432] block font-bold">Mine License</span>
            <span className="text-2xl sm:text-3xl text-stone-900 font-bold block leading-tight">ML 13/2022</span>
            <span className="text-xs text-stone-500 block font-light">Village Murrki, Bayana</span>
          </div>

          <div className="p-7 sm:p-8 bg-white border border-stone-300 rounded-sm shadow-sm space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#705432] block font-bold">Specialty Products</span>
            <span className="text-2xl sm:text-3xl text-stone-900 font-bold block leading-tight">Jali & CNC</span>
            <span className="text-xs text-stone-500 block font-light">Temple fittings, Domes & Pillars</span>
          </div>

          <div className="p-7 sm:p-8 bg-white border border-stone-300 rounded-sm shadow-sm space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#705432] block font-bold">Geological Grade</span>
            <span className="text-2xl sm:text-3xl text-stone-900 font-bold block leading-tight">Red Sandstone</span>
            <span className="text-xs text-stone-500 block font-light">Weather resistant & durable</span>
          </div>

          <div className="p-7 sm:p-8 bg-white border border-stone-300 rounded-sm shadow-sm space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#705432] block font-bold">Direct Desk</span>
            <span className="text-2xl sm:text-3xl text-stone-900 font-bold block leading-tight">3 Directors</span>
            <span className="text-xs text-stone-500 block font-light">Vijay, Kapil & Neeraj Agrawal</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}





