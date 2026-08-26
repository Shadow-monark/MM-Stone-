'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

interface FinishOption {
  id: string;
  name: string;
  sheen: string;
  description: string;
  recommendedFor: string;
  image: string;
  overlayClass: string;
}

const FINISH_OPTIONS: FinishOption[] = [
  {
    id: 'polished',
    name: 'Mirror Polished',
    sheen: '95% Specular Gloss',
    description: 'High-gloss diamond buffer reveals deep crystalline veins and intense color saturation.',
    recommendedFor: 'Kitchen islands, luxury bathroom vanities, statement wall slabs',
    image: '/craft/craft_03.jpeg',
    overlayClass: 'bg-gradient-to-tr from-stone-900/10 via-white/20 to-transparent mix-blend-color-dodge',
  },
  {
    id: 'leathered',
    name: 'Leathered Satin',
    sheen: '35% Soft Luster',
    description: 'Textured diamond-brush process creating a soft, undulating surface that conceals fingerprints.',
    recommendedFor: 'Executive conference tables, wet bars, spa flooring',
    image: '/craft/craft_08.jpeg',
    overlayClass: 'bg-stone-900/20 mix-blend-overlay',
  },
  {
    id: 'flamed',
    name: 'Thermal Flamed',
    sheen: '5% Matte Rough',
    description: 'High-temperature thermal torching fractures surface crystals for superior non-slip texture.',
    recommendedFor: 'Exterior plazas, pool decking, commercial building facades',
    image: '/craft/craft_02.jpeg',
    overlayClass: 'bg-stone-900/30 mix-blend-multiply',
  },
  {
    id: 'honed',
    name: 'Silk Honed',
    sheen: '20% Satin Glow',
    description: 'Smooth, non-reflective matte finish delivering a contemporary architectural aesthetic.',
    recommendedFor: 'Interior floor tiling, minimalist stairs, commercial lobbies',
    image: '/craft/craft_05.jpeg',
    overlayClass: 'bg-stone-800/15 mix-blend-soft-light',
  },
];

export default function FinishSelector() {
  const [selectedFinish, setSelectedFinish] = useState<FinishOption>(FINISH_OPTIONS[0]);

  return (
    <section id="finishes" className="py-12 sm:py-16 bg-[#f4f2ec] relative border-t border-[#dcd8cd] overflow-hidden">
      
      {/* Background Carving Relief Image Behind Text */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-15 pointer-events-none">
        <img
          src="/bg/om_temple.jpg"
          alt="Sacred OM & Deity Temple Facade Sandstone Relief"
          className="w-full h-full object-cover filter contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f4f2ec] via-transparent to-[#f4f2ec]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f2ec] via-transparent to-[#f4f2ec]" />
      </div>

      <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500 block mb-3">
            Surface Calibration
          </span>
          <div className="flex justify-center">
            <AnimatedHeading
              text="Architectural Surface Finishes"
              italicWord="Finishes"
              className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight mb-4 justify-center"
            />
          </div>
          <AnimatedParagraph delay={0.2} className="text-stone-600 text-sm sm:text-base font-light">
            Select a finish profile to explore how diamond and thermal treatments alter light reflectance and texture.
          </AnimatedParagraph>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Preview Canvas */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-sm overflow-hidden border border-stone-300 shadow-xl bg-stone-100 group">
              <AnimatePresence initial={false}>
                <motion.div
                  key={selectedFinish.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <img
                    src={selectedFinish.image}
                    alt={selectedFinish.name}
                    className="w-full h-full object-cover filter brightness-95"
                  />
                  {/* Texture Overlay */}
                  <div className={`absolute inset-0 ${selectedFinish.overlayClass}`} />
                </motion.div>
              </AnimatePresence>

              {/* Floating Spec Label */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-stone-200 p-4 rounded-sm flex items-center justify-between z-10 shadow-sm">
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-widest text-stone-500 block">
                    Surface Profile
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-stone-900">
                    {selectedFinish.name}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-600 font-medium block">
                    {selectedFinish.sheen}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {FINISH_OPTIONS.map((finish) => {
              const isSelected = selectedFinish.id === finish.id;
              return (
                <motion.button
                  key={finish.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedFinish(finish)}
                  onMouseEnter={() => setSelectedFinish(finish)}
                  className={`w-full text-left p-5 rounded-sm border transition-colors duration-200 flex items-start justify-between gap-4 relative overflow-hidden ${
                    isSelected
                      ? 'bg-white border-stone-900 shadow-md'
                      : 'bg-white/60 border-stone-200 hover:border-stone-400 hover:bg-white'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="finishActiveIndicatorLight"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-stone-900"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div>
                    <h4 className={`font-serif text-base font-semibold mb-1 ${isSelected ? 'text-stone-900' : 'text-stone-700'}`}>
                      {finish.name}
                    </h4>
                    <p className="text-stone-500 text-xs leading-relaxed mb-2 font-light">
                      {finish.description}
                    </p>
                    <span className="text-[11px] text-stone-400 font-medium block">
                      Recommended: {finish.recommendedFor}
                    </span>
                  </div>

                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                    isSelected ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-300'
                  }`}>
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </motion.button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
