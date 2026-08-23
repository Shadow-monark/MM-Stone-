'use client';

import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Primary Quarrying',
    subtitle: 'Selective Extraction',
    description: 'Diamond wire sawing extracts monolithic blocks at 420m depth while preventing internal micro-fractures.',
    image: '/craft/craft_09.jpeg',
  },
  {
    step: '02',
    title: 'Artisan & Gangsaw Slicing',
    subtitle: 'Dimensional Sizing',
    description: 'Master artisans and automated multi-blade gang saws slice raw boulders into uniform architectural slabs.',
    image: '/craft/craft_22.jpeg',
  },
  {
    step: '03',
    title: 'Hand Carving & Finishing',
    subtitle: 'Surface & Jali Carving',
    description: 'Multi-stage hand chiseling and abrasive polishing lines treat slabs to Jali, Relief, or Mirror finishes.',
    image: '/craft/craft_26.jpeg',
  },
  {
    step: '04',
    title: 'Export Logistics',
    subtitle: 'Global Maritime Dispatch',
    description: 'Finished stone products are custom-crated in reinforced wooden frames and dispatched via international shipping routes.',
    image: '/craft/craft_27.jpeg',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 sm:py-36 bg-[#eae7e0] relative border-t border-[#dcd8cd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Animated Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500 block mb-3">
            The Journey
          </span>
          <div className="flex justify-center">
            <AnimatedHeading
              text="From Deep Earth to Master Slabs"
              italicWord="Slabs"
              className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight mb-4 justify-center"
            />
          </div>
          <AnimatedParagraph delay={0.2} className="text-stone-600 text-sm sm:text-base font-light">
            A calibrated 4-stage lifecycle ensuring structural durability, dimensional precision, and export safety.
          </AnimatedParagraph>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -5 }}
              className="bg-[#faf9f5] rounded-sm overflow-hidden border border-[#dcd8cd] hover:border-[#a8a29e] transition-colors duration-300 flex flex-col group shadow-2xs hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-sm text-[#1c1917] font-serif font-semibold text-xs border border-[#dcd8cd] shadow-2xs">
                  STAGE {step.step}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7b4f] block mb-2">
                    {step.subtitle}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#1c1917] mb-2 group-hover:text-[#9a7b4f] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[#57534e] text-xs leading-[1.75] font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
