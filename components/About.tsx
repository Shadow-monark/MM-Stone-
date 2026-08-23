'use client';

import { ShieldCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36 bg-[#f7f5ed] relative overflow-hidden text-stone-900 border-t border-stone-300">
      
      {/* Authentic Master Relief Background Photo Behind Text — Rich & Highly Visible */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-45 pointer-events-none">
        <img
          src="/bg/about_mandir.jpg"
          alt="Mahatma Phule & Savitribai Phule Red Sandstone Relief"
          className="w-full h-full object-cover filter contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f5ed] via-[#f7f5ed]/40 to-[#f7f5ed]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5ed] via-transparent to-[#f7f5ed]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Story & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: Image with Layered Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-sm overflow-hidden border border-stone-300 shadow-2xl aspect-[4/3] sm:aspect-[16/11] bg-stone-100">
              <img
                src="/bg/about_mandir.jpg"
                alt="Mahatma Phule & Savitribai Phule Red Sandstone Relief"
                className="w-full h-full object-cover filter brightness-100 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white font-semibold uppercase tracking-wider bg-stone-900/85 p-3 rounded-sm border border-stone-700 backdrop-blur-md">
                3D High-Relief Red Sandstone Carving • Monolithic Monograph
              </div>
            </div>

            {/* Floating Legacy Card */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-6 bg-white/95 border border-stone-300 p-6 sm:p-7 rounded-sm shadow-2xl max-w-[250px] backdrop-blur-md">
              <span className="text-[#5c1818] font-serif text-3xl sm:text-4xl font-bold block leading-none mb-1.5">
                ML 13/2022
              </span>
              <span className="text-[11px] uppercase tracking-wider text-stone-700 font-bold block leading-relaxed">
                Mines Owner & Master Architectural Fabricators
              </span>
            </div>
          </motion.div>

          {/* Right: Editorial Narrative Layered On Top of Photo */}
          <div className="lg:col-span-6 space-y-8 bg-white/85 p-7 sm:p-9 rounded-sm border border-stone-300 shadow-lg backdrop-blur-md">
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

        {/* Bottom Key Metrics Cards Layered On Top of Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-stone-300"
        >
          <div className="p-7 sm:p-8 bg-white/95 border border-stone-300 rounded-sm shadow-md space-y-2 backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#705432] block font-bold">Mine License</span>
            <span className="text-2xl sm:text-3xl text-stone-900 font-bold block leading-tight">ML 13/2022</span>
            <span className="text-xs text-stone-500 block font-light">Village Murrki, Bayana</span>
          </div>

          <div className="p-7 sm:p-8 bg-white/95 border border-stone-300 rounded-sm shadow-md space-y-2 backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#705432] block font-bold">Specialty Products</span>
            <span className="text-2xl sm:text-3xl text-stone-900 font-bold block leading-tight">Jali & CNC</span>
            <span className="text-xs text-stone-500 block font-light">Temple fittings, Domes & Pillars</span>
          </div>

          <div className="p-7 sm:p-8 bg-white/95 border border-stone-300 rounded-sm shadow-md space-y-2 backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#705432] block font-bold">Geological Grade</span>
            <span className="text-2xl sm:text-3xl text-stone-900 font-bold block leading-tight">Red Sandstone</span>
            <span className="text-xs text-stone-500 block font-light">Weather resistant & durable</span>
          </div>

          <div className="p-7 sm:p-8 bg-white/95 border border-stone-300 rounded-sm shadow-md space-y-2 backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#705432] block font-bold">Direct Desk</span>
            <span className="text-2xl sm:text-3xl text-stone-900 font-bold block leading-tight">3 Directors</span>
            <span className="text-xs text-stone-500 block font-light">Vijay, Kapil & Neeraj Agrawal</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}



