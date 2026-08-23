'use client';

import { ShieldCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36 bg-[#f4f2ec] relative border-t border-[#dcd8cd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            <div className="relative rounded-sm overflow-hidden border border-stone-300 shadow-xl aspect-[4/3] sm:aspect-[16/11] bg-stone-100">
              <img
                src="/craft/craft_09.jpeg"
                alt="Rajasthan Quarry Extraction & Gantry Yard"
                className="w-full h-full object-cover filter brightness-95"
              />
            </div>

            {/* Floating Legacy Card */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-6 bg-white border border-stone-200 p-6 sm:p-7 rounded-sm shadow-xl max-w-[240px]">
              <span className="text-stone-900 font-serif text-3xl sm:text-4xl font-semibold block leading-none mb-1.5">
                1988
              </span>
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium block leading-relaxed">
                Pioneering Geological Extraction & Master Processing
              </span>
            </div>
          </motion.div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#faf9f5] border border-[#dcd8cd] text-[#57534e] text-xs uppercase tracking-[0.25em] shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#9a7b4f]" />
              Company Heritage & Extraction
            </motion.div>

            {/* Animated Headline */}
            <AnimatedHeading
              text="Mastery in Stone, Grounded in Geological Precision"
              italicWord="Precision"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1c1917] leading-[1.25]"
            />

            <AnimatedParagraph delay={0.2} className="text-[#44403c] text-base sm:text-lg leading-[1.8] font-light">
              Founded over three decades ago, MM STONES has established itself as an international benchmark in natural stone mining and dimensional fabrication. We operate primary quarry reserves across Rajasthan, extracting monolithic boulders at 420m depth.
            </AnimatedParagraph>

            <AnimatedParagraph delay={0.3} className="text-[#57534e] text-sm sm:text-base leading-[1.8] font-light">
              Whether supplying monumental slabs for commercial architectural facades or bespoke hand-carved Jalis for heritage sanctums, every piece of stone undergoes rigorous ASTM lab testing for compressive strength and density.
            </AnimatedParagraph>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#dcd8cd]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-sm bg-[#faf9f5] border border-[#dcd8cd] text-[#1c1917] shrink-0 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-[#9a7b4f]" />
                </div>
                <div>
                  <h4 className="text-[#1c1917] text-sm font-semibold mb-1">Direct Quarry Operations</h4>
                  <p className="text-[#78716c] text-xs leading-relaxed font-light">Single-source vein matching and uniform batch coloration.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-sm bg-[#faf9f5] border border-[#dcd8cd] text-[#1c1917] shrink-0 shadow-2xs">
                  <Award className="w-5 h-5 text-[#9a7b4f]" />
                </div>
                <div>
                  <h4 className="text-[#1c1917] text-sm font-semibold mb-1">ISO 9001 Lab Certified</h4>
                  <p className="text-[#78716c] text-xs leading-relaxed font-light">Calibrated thickness tolerance (±0.5mm) and density assurance.</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom Key Quarry Telemetry Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t border-[#dcd8cd]"
        >
          <div className="p-7 sm:p-8 bg-[#faf9f5] border border-[#dcd8cd] rounded-sm shadow-2xs space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#78716c] block font-semibold">Extraction Depth</span>
            <span className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-semibold block leading-tight">420 Meters</span>
            <span className="text-xs text-[#57534e] block font-light">Deep-stratum crystalline vein</span>
          </div>

          <div className="p-7 sm:p-8 bg-[#faf9f5] border border-[#dcd8cd] rounded-sm shadow-2xs space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#78716c] block font-semibold">Annual Capacity</span>
            <span className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-semibold block leading-tight">120,000 m²</span>
            <span className="text-xs text-[#57534e] block font-light">Diamond gangsaw processing</span>
          </div>

          <div className="p-7 sm:p-8 bg-[#faf9f5] border border-[#dcd8cd] rounded-sm shadow-2xs space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#78716c] block font-semibold">Compressive Strength</span>
            <span className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-semibold block leading-tight">168.4 MPa</span>
            <span className="text-xs text-[#57534e] block font-light">ASTM C170 laboratory certified</span>
          </div>

          <div className="p-7 sm:p-8 bg-[#faf9f5] border border-[#dcd8cd] rounded-sm shadow-2xs space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#78716c] block font-semibold">Export Network</span>
            <span className="font-serif text-3xl sm:text-4xl text-[#1c1917] font-semibold block leading-tight">40+ Countries</span>
            <span className="text-xs text-[#57534e] block font-light">Climate-controlled maritime crating</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
