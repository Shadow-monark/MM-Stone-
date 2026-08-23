'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

const STONE_OPTIONS = [
  { name: 'Ruby Red Granite', density: 2750 },
  { name: 'Titanium Quartzite', density: 2900 },
  { name: 'Imperial Red Marble', density: 2680 },
  { name: 'Desert Gold Sandstone', density: 2450 },
];

export default function ProjectCalculator() {
  const [area, setArea] = useState<number>(200);
  const [unit, setUnit] = useState<'m2' | 'sqft'>('m2');
  const [stoneIndex, setStoneIndex] = useState<number>(0);
  const [thickness, setThickness] = useState<number>(20); // 20mm or 30mm

  const calculated = useMemo(() => {
    const areaM2 = unit === 'sqft' ? area * 0.092903 : area;
    const volumeM3 = areaM2 * (thickness / 1000);
    const weightKg = volumeM3 * STONE_OPTIONS[stoneIndex].density;
    const weightTonnes = (weightKg / 1000).toFixed(2);
    const standardSlabs = Math.ceil(areaM2 / 4.5);
    const crates = Math.ceil(Number(weightTonnes) / 2.2);

    return {
      areaM2: Math.round(areaM2),
      weightTonnes,
      weightKg: Math.round(weightKg).toLocaleString(),
      standardSlabs,
      crates,
    };
  }, [area, unit, stoneIndex, thickness]);

  return (
    <section id="calculator" className="py-28 sm:py-36 bg-[#f4f2ec] relative border-t border-[#dcd8cd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Animated Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500 block mb-3">
            Project Estimator
          </span>
          <div className="flex justify-center">
            <AnimatedHeading
              text="Slab Tonnage & Volume Calculator"
              italicWord="Calculator"
              className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight mb-4 justify-center"
            />
          </div>
          <AnimatedParagraph delay={0.2} className="text-stone-600 text-sm sm:text-base font-light">
            Quickly estimate required jumbo slabs, metric tonnage, and shipping crates for your blueprints.
          </AnimatedParagraph>
        </div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-[#faf9f5] border border-[#dcd8cd] rounded-sm p-8 sm:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Inputs */}
            <div className="md:col-span-7 space-y-7">
              
              {/* Stone Type */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#1c1917] font-semibold mb-2.5">
                  1. Stone Variety & Density
                </label>
                <select
                  value={stoneIndex}
                  onChange={(e) => setStoneIndex(Number(e.target.value))}
                  className="w-full bg-[#f4f2ec] border border-[#dcd8cd] rounded-sm px-4 py-3.5 text-[#1c1917] text-sm focus:border-[#1c1917] focus:outline-none transition-colors"
                >
                  {STONE_OPTIONS.map((s, idx) => (
                    <option key={s.name} value={idx}>
                      {s.name} ({s.density} kg/m³)
                    </option>
                  ))}
                </select>
              </div>

              {/* Area & Unit with Motion Pill */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-xs uppercase tracking-[0.2em] text-[#1c1917] font-semibold">
                    2. Surface Coverage Area
                  </label>
                  <div className="flex gap-2 relative">
                    <button
                      onClick={() => setUnit('m2')}
                      className={`relative px-3 py-1 rounded-sm text-xs font-semibold z-10 transition-colors ${unit === 'm2' ? 'text-white' : 'text-[#57534e] hover:text-[#1c1917]'}`}
                    >
                      {unit === 'm2' && (
                        <motion.div
                          layoutId="calcUnitPillLight"
                          className="absolute inset-0 bg-[#1c1917] rounded-sm -z-10 shadow-xs"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      M²
                    </button>
                    <button
                      onClick={() => setUnit('sqft')}
                      className={`relative px-3 py-1 rounded-sm text-xs font-semibold z-10 transition-colors ${unit === 'sqft' ? 'text-white' : 'text-[#57534e] hover:text-[#1c1917]'}`}
                    >
                      {unit === 'sqft' && (
                        <motion.div
                          layoutId="calcUnitPillLight"
                          className="absolute inset-0 bg-[#1c1917] rounded-sm -z-10 shadow-xs"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      SQFT
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    value={area}
                    onChange={(e) => setArea(Math.max(1, Number(e.target.value) || 0))}
                    className="w-full bg-[#f4f2ec] border border-[#dcd8cd] rounded-sm px-4 py-3.5 text-[#1c1917] font-semibold text-base focus:border-[#1c1917] focus:outline-none transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold uppercase text-[#78716c]">
                    {unit.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Thickness */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#1c1917] font-semibold mb-2.5">
                  3. Calibrated Thickness Profile
                </label>
                <div className="grid grid-cols-2 gap-3.5 relative">
                  <button
                    onClick={() => setThickness(20)}
                    className={`py-3.5 px-4 rounded-sm text-center border text-xs uppercase tracking-wider font-semibold transition-all relative ${
                      thickness === 20
                        ? 'bg-[#1c1917] border-[#1c1917] text-white shadow-sm'
                        : 'bg-[#f4f2ec] border-[#dcd8cd] text-[#57534e] hover:border-[#a8a29e]'
                    }`}
                  >
                    20mm (3/4") — Facades & Floors
                  </button>
                  <button
                    onClick={() => setThickness(30)}
                    className={`py-3.5 px-4 rounded-sm text-center border text-xs uppercase tracking-wider font-semibold transition-all relative ${
                      thickness === 30
                        ? 'bg-[#1c1917] border-[#1c1917] text-white shadow-sm'
                        : 'bg-[#f4f2ec] border-[#dcd8cd] text-[#57534e] hover:border-[#a8a29e]'
                    }`}
                  >
                    30mm (1 1/4") — Countertops
                  </button>
                </div>
              </div>

            </div>

            {/* Results Output with Animated Numbers */}
            <div className="md:col-span-5 bg-[#f4f2ec] rounded-sm border border-[#dcd8cd] p-7 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#78716c] block mb-3">
                  Calculated Output
                </span>
                
                <div className="mb-6 space-y-1">
                  <span className="text-xs text-[#78716c] block font-medium">Total Metric Mass</span>
                  <motion.span
                    key={calculated.weightTonnes}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-4xl font-semibold text-[#1c1917] block leading-tight"
                  >
                    {calculated.weightTonnes} <span className="text-lg text-[#57534e] font-normal">Tonnes</span>
                  </motion.span>
                  <span className="text-[11px] text-[#78716c] block mt-1">
                    ({calculated.weightKg} kg net weight)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-t border-[#e2ded4]">
                  <div>
                    <span className="text-[11px] text-[#78716c] block font-medium">Jumbo Slabs</span>
                    <span className="font-serif text-xl font-semibold text-[#1c1917]">~{calculated.standardSlabs}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#78716c] block font-medium">Maritime Crates</span>
                    <span className="font-serif text-xl font-semibold text-[#1c1917]">{calculated.crates}</span>
                  </div>
                </div>
              </div>

              <Link
                href="#contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#1c1917] hover:bg-[#292524] text-white font-semibold text-xs uppercase tracking-[0.2em] py-4 rounded-sm transition-all shadow-sm group border border-stone-800"
              >
                <span>Request Technical Specifications Sheet</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
