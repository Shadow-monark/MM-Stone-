'use client';

import { Mountain, Maximize, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

const FEATURES = [
  {
    title: 'Direct Mines Ownership (ML 13/2022)',
    description: 'We own and operate our primary quarries in Bayana, guaranteeing uniform batch color, continuous stone supply, and zero intermediary markups.',
    icon: Mountain,
  },
  {
    title: 'Precision Sizing & 3D CNC',
    description: 'Equipped with automated multi-axis bridge saws, diamond gang saws, and 3D CNC carving mills for exact architectural tolerances (±0.5mm).',
    icon: Maximize,
  },
  {
    title: 'Heritage Carving Artisans',
    description: 'Generational stone craftsmen executing deep-undercut relief panels, Jali screens, temple pillars, domes, chhatris, and sacred statues.',
    icon: Globe,
  },
  {
    title: 'Global Export & Heavy Crating',
    description: 'Climate-safe, heavy-duty reinforced wooden crating dispatched worldwide to international architectural and temple construction sites.',
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 sm:py-36 bg-stone-950 relative overflow-hidden text-white border-t border-stone-800">
      
      {/* 100% VISIBLE Background Carving Relief Image Behind Text */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-65 pointer-events-none">
        <img
          src="/bg/om_temple.jpg"
          alt="Sacred OM & Deity Temple Facade Sandstone Relief"
          className="w-full h-full object-cover filter brightness-90 contrast-115 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Animated Text */}
        <div className="text-center max-w-3xl mx-auto mb-16 bg-stone-900/85 p-6 sm:p-8 rounded-sm border border-stone-800 backdrop-blur-md shadow-xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400 block mb-3">
            Why Choose M.M. STONE INDUSTRIES
          </span>
          <div className="flex justify-center">
            <AnimatedHeading
              text="Direct Mine Ownership, Heritage Master Carvings"
              italicWord="Carvings"
              className="text-3xl sm:text-5xl font-normal text-white leading-tight mb-4 justify-center text-center"
            />
          </div>
          <AnimatedParagraph delay={0.2} className="text-stone-300 text-sm sm:text-base font-light">
            Bridging heavy quarry extraction and master 3D relief craftsmanship for landmark architectural and temple projects.
          </AnimatedParagraph>
        </div>

        {/* Feature Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -5 }}
              className="bg-stone-900/90 border border-stone-800 p-8 sm:p-9 rounded-sm hover:border-amber-500/50 transition-colors duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl backdrop-blur-md"
            >
              <div>
                <div className="w-11 h-11 rounded-sm bg-stone-950 border border-amber-500/30 text-amber-300 flex items-center justify-center mb-6 group-hover:bg-[#5c1818] group-hover:text-amber-100 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-amber-400 group-hover:text-amber-200" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors leading-snug">
                  {feature.title}
                </h3>
                <p className="text-stone-300 text-xs leading-[1.75] font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}




