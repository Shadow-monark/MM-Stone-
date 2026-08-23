'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ArrowRight } from 'lucide-react';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

interface SpaceApplication {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  stoneName: string;
  recommendedThickness: string;
  finish: string;
  description: string;
  specs: { label: string; value: string }[];
}

const APPLICATIONS: SpaceApplication[] = [
  {
    id: 'island',
    name: 'Monolithic Kitchen Island & Reliefs',
    subtitle: 'High-Impact Residential',
    stoneName: 'Ruby Red Granite & Sandstone',
    recommendedThickness: '30mm (1 1/4")',
    finish: 'Mirror Polished',
    description: 'Heat-impervious crystalline granite and deeply carved reliefs, serving as the dramatic centerpiece of contemporary culinary spaces.',
    image: '/craft/craft_03.jpeg',
    specs: [
      { label: 'Thermal Resistance', value: 'Up to 300°C' },
      { label: 'Surface Porosity', value: '0.12% (Minimal)' },
      { label: 'Edge Profiling', value: 'Mitered / Bullnose / Eased' },
    ],
  },
  {
    id: 'facade',
    name: 'Architectural Exterior Facade & Jalis',
    subtitle: 'Commercial & Cultural',
    stoneName: 'Titanium Quartzite & Pink Jali',
    recommendedThickness: '20mm & 50mm Cladding',
    finish: 'Thermal Flamed / Honed',
    description: 'Hyper-dense volcanic stone with zero water absorption, engineered to withstand extreme freeze-thaw cycles and UV exposure.',
    image: '/craft/craft_06.jpeg',
    specs: [
      { label: 'Weather Endurance', value: '100% Freeze-Thaw Proof' },
      { label: 'Acid Resistance', value: 'ASTM C615 Grade A' },
      { label: 'Fixing System', value: 'Mechanical Undercut Anchors' },
    ],
  },
  {
    id: 'bathroom',
    name: 'Executive Spa & Temple Sanctums',
    subtitle: 'Luxury Hospitality',
    stoneName: 'Imperial White Marble Mandir',
    recommendedThickness: '20mm (3/4")',
    finish: 'Silk Honed / Satin',
    description: 'Bespoke hand-carved marble jharokhas with dynamic veins, delivering a serene sanctuary atmosphere for 5-star suites and homes.',
    image: '/craft/craft_13.jpeg',
    specs: [
      { label: 'Slip Resistance', value: 'R10 (Satin Finish)' },
      { label: 'Bookmatching', value: 'Sequential Vein Matching' },
      { label: 'Water Repellency', value: 'Hydrophobic Sealed' },
    ],
  },
  {
    id: 'lobby',
    name: 'Grand Commercial Pillars & Atrium',
    subtitle: 'Corporate Monoliths',
    stoneName: 'Bansi Paharpur Red Pillar Capital',
    recommendedThickness: '20mm Precision Slabs',
    finish: 'Leathered Satin',
    description: 'Hand-carved architectural stambha (pillar) caps engineered for heavy commercial foot traffic with natural heritage beauty.',
    image: '/craft/craft_04.jpeg',
    specs: [
      { label: 'Traffic Rating', value: 'Class 5 (Heavy Commercial)' },
      { label: 'Compressive Load', value: '98.5 MPa' },
      { label: 'Surface Texture', value: 'Fine Velvet Grain' },
    ],
  },
];

export default function SpatialStudio() {
  const [activeApp, setActiveApp] = useState<SpaceApplication>(APPLICATIONS[0]);
  const [isNightMood, setIsNightMood] = useState(false);

  return (
    <section id="applications" className="py-28 sm:py-36 bg-[#f4f2ec] relative overflow-hidden border-t border-[#dcd8cd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#78716c] block mb-3">
              Spatial Integration & Applications
            </span>
            <AnimatedHeading
              text="Architectural Integration"
              italicWord="Integration"
              className="font-serif text-3xl sm:text-5xl font-normal text-[#1c1917] leading-[1.25]"
            />
          </div>
          <AnimatedParagraph delay={0.2} className="text-[#57534e] text-sm sm:text-base max-w-lg leading-[1.75] font-light">
            Explore how our monolithic sandstone, granite, and marble slabs integrate into landmark interior and exterior environments across residential, corporate, and cultural heritage spaces.
          </AnimatedParagraph>
        </div>

        {/* Spatial Visualizer Card */}
        <div className="bg-[#faf9f5] border border-[#dcd8cd] rounded-sm overflow-hidden shadow-sm p-6 sm:p-10 lg:p-12">
          
          {/* Animated Space Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#e2ded4]">
            <div className="flex flex-wrap gap-2.5 relative">
              {APPLICATIONS.map((app) => {
                const isActive = activeApp.id === app.id;
                return (
                  <button
                    key={app.id}
                    onClick={() => setActiveApp(app)}
                    className={`relative px-4 py-2.5 rounded-sm text-xs uppercase tracking-[0.18em] font-semibold transition-colors duration-200 z-10 ${
                      isActive ? 'text-white' : 'text-[#57534e] hover:text-[#1c1917]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="spatialActivePillLight"
                        className="absolute inset-0 bg-[#1c1917] rounded-sm -z-10 shadow-sm"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    {app.name}
                  </button>
                );
              })}
            </div>

            {/* Day / Night Mood Toggle */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsNightMood(!isNightMood)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#f4f2ec] border border-[#dcd8cd] text-xs uppercase tracking-wider text-[#44403c] hover:text-[#1c1917] transition-colors shadow-2xs font-medium"
            >
              {isNightMood ? <Moon className="w-3.5 h-3.5 text-indigo-600" /> : <Sun className="w-3.5 h-3.5 text-amber-600" />}
              <span>{isNightMood ? 'Night Mood' : 'Daylight Mood'}</span>
            </motion.button>
          </div>

          {/* Main Visualizer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Preview Canvas */}
            <div className="lg:col-span-7 relative aspect-[16/10] rounded-sm overflow-hidden border border-[#dcd8cd] shadow-md bg-stone-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeApp.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeApp.image}
                    alt={activeApp.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Mood Overlay */}
                  <motion.div
                    animate={{ opacity: isNightMood ? 0.75 : 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Material Pill */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md border border-[#dcd8cd] px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm z-10 shadow-sm">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-[#78716c] block leading-none mb-0.5">
                  Material
                </span>
                <span className="font-serif text-xs sm:text-sm font-semibold text-[#1c1917] block leading-tight">
                  {activeApp.stoneName}
                </span>
              </div>

              {/* Bottom Details Pill */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md border border-[#dcd8cd] p-3 sm:p-4 rounded-sm flex items-center justify-between z-10 shadow-sm">
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#78716c] block font-medium leading-none mb-0.5">Finish</span>
                  <span className="text-xs font-semibold text-[#1c1917]">{activeApp.finish}</span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#78716c] block font-medium leading-none mb-0.5">Thickness</span>
                  <span className="text-xs font-semibold text-[#1c1917]">{activeApp.recommendedThickness}</span>
                </div>
              </div>
            </div>

            {/* Right: Architectural Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeApp.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7b4f] block mb-2">
                      {activeApp.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1c1917] leading-snug">
                      {activeApp.name}
                    </h3>
                  </div>

                  <p className="text-[#57534e] text-sm leading-[1.75] font-light">
                    {activeApp.description}
                  </p>

                  {/* Technical Architectural Specs Grid */}
                  <div className="space-y-2.5 pt-3">
                    {activeApp.specs.map((s, idx) => (
                      <div key={idx} className="p-3.5 bg-[#f4f2ec] border border-[#dcd8cd] rounded-sm flex items-center justify-between">
                        <span className="text-xs text-[#78716c] font-medium">{s.label}:</span>
                        <span className="text-xs font-semibold text-[#1c1917]">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#1c1917] hover:bg-[#292524] text-white font-semibold text-xs uppercase tracking-[0.2em] px-6 py-4 rounded-sm transition-all shadow-sm w-full justify-center group border border-stone-800"
              >
                <span>Technical Specifications Data</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
