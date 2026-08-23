'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pickaxe, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Primary Mining & Quarry Extraction',
    subtitle: 'Selective Bayana Ore Extraction',
    description: 'Diamond wire saws and heavy excavators extract monolithic red sandstone boulders from 420m stratum beds in Bayana, Rajasthan (ML No. 13/2022).',
    images: [
      '/gallery/IMG-20260823-WA0149.jpg',
      '/craft/craft_09.jpeg',
      '/gallery/IMG-20260823-WA0064.jpg',
      '/gallery/IMG-20260823-WA0177.jpg',
    ],
  },
  {
    step: '02',
    title: 'Gangsaw & Dimensional Slicing',
    subtitle: 'High-Precision Slab Milling',
    description: 'Automated multi-blade diamond gang saws slice massive quarry monoliths into uniform 20mm to 150mm architectural slabs with zero micro-cracks.',
    images: [
      '/craft/craft_22.jpeg',
      '/gallery/IMG-20260823-WA0079.jpg',
      '/gallery/IMG-20260823-WA0223.jpg',
      '/gallery/IMG-20260823-WA0109.jpg',
    ],
  },
  {
    step: '03',
    title: '3D CNC & Artisan Hand Carving',
    subtitle: 'Jali, Relief & Temple Sculpting',
    description: 'Master craftsmen combine generational hand chiseling with high-speed multi-axis 3D CNC routers to carve delicate Jalis, idols, and friezes.',
    images: [
      '/bg/hero_carving.jpg',
      '/bg/about_mandir.jpg',
      '/bg/om_temple.jpg',
      '/bg/deity_relief.jpg',
    ],
  },
  {
    step: '04',
    title: 'Heavy Crating & Global Export',
    subtitle: 'Maritime Logistics & Safety',
    description: 'Finished slabs and intricate carvings are packed into climate-sealed, heavy-duty ISPM-15 wooden crates for damage-free ocean delivery.',
    images: [
      '/craft/craft_27.jpeg',
      '/gallery/IMG-20260823-WA0252.jpg',
      '/gallery/IMG-20260823-WA0225.jpg',
      '/gallery/IMG-20260823-WA0111.jpg',
    ],
  },
];

export default function Process() {
  const [activeImageIndices, setActiveImageIndices] = useState<number[]>([0, 0, 0, 0]);

  // Auto-advance photos every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndices((prev) =>
        prev.map((curr, idx) => (curr + 1) % PROCESS_STEPS[idx].images.length)
      );
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = (stepIdx: number) => {
    setActiveImageIndices((prev) => {
      const next = [...prev];
      next[stepIdx] = (next[stepIdx] + 1) % PROCESS_STEPS[stepIdx].images.length;
      return next;
    });
  };

  const handlePrev = (stepIdx: number) => {
    setActiveImageIndices((prev) => {
      const next = [...prev];
      next[stepIdx] = (next[stepIdx] - 1 + PROCESS_STEPS[stepIdx].images.length) % PROCESS_STEPS[stepIdx].images.length;
      return next;
    });
  };

  return (
    <section id="process" className="py-28 sm:py-36 bg-[#faf9f5] relative border-t border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Animated Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#5c1818] text-amber-200 text-xs uppercase tracking-[0.25em] font-semibold mb-3 shadow-sm">
            <Pickaxe className="w-4 h-4 text-amber-300" />
            <span>Mines Operations & Milling Sequence</span>
          </div>
          <div className="flex justify-center">
            <AnimatedHeading
              text="How Our Quarries & Craft Workshops Operate"
              italicWord="Operate"
              className="text-3xl sm:text-5xl font-normal text-stone-900 leading-tight mb-4 justify-center text-center"
            />
          </div>
          <AnimatedParagraph delay={0.2} className="text-stone-600 text-sm sm:text-base font-light">
            Watch our step-by-step mining lifecycle — from deep quarry bed extraction to high-precision 3D carving and seaworthy export packing.
          </AnimatedParagraph>
        </div>

        {/* 4 Steps Grid with Live Photo Carousel Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const currentImgIdx = activeImageIndices[idx] || 0;
            const currentImage = step.images[currentImgIdx];

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-sm overflow-hidden border border-stone-300 hover:border-amber-700/50 transition-all duration-300 flex flex-col group shadow-md hover:shadow-xl relative"
              >
                {/* Image Stack with Dynamic Carousel */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={currentImage}
                      alt={`${step.title} Photo ${currentImgIdx + 1}`}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover filter brightness-95"
                    />
                  </AnimatePresence>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-stone-950/90 text-amber-200 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-wider border border-amber-500/30 backdrop-blur-md shadow-md">
                    STAGE {step.step}
                  </div>

                  {/* Live Photo Counter Indicator */}
                  <div className="absolute top-3 right-3 bg-stone-950/80 text-white px-2 py-0.5 rounded-sm text-[10px] font-mono tracking-wider backdrop-blur-md flex items-center gap-1 border border-stone-700">
                    <Layers className="w-3 h-3 text-amber-400" />
                    <span>{currentImgIdx + 1}/{step.images.length}</span>
                  </div>

                  {/* Manual Carousel Controls */}
                  <div className="absolute inset-y-0 inset-x-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handlePrev(idx)}
                      className="p-1.5 rounded-full bg-stone-950/80 text-white hover:bg-stone-900 transition-colors border border-stone-700"
                      aria-label="Previous Mining Photo"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleNext(idx)}
                      className="p-1.5 rounded-full bg-stone-950/80 text-white hover:bg-stone-900 transition-colors border border-stone-700"
                      aria-label="Next Mining Photo"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom Dot Bar */}
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                    {step.images.map((_, imgIdx) => (
                      <span
                        key={imgIdx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          imgIdx === currentImgIdx ? 'w-5 bg-amber-400' : 'w-1.5 bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-3 bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#705432] block mb-1.5">
                      {step.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-stone-900 mb-2 leading-snug group-hover:text-amber-900 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-stone-600 text-xs leading-[1.75] font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

