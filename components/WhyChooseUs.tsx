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
    <section className="py-28 sm:py-36 bg-[#eae7e0] relative overflow-hidden text-stone-900 border-t border-stone-300">
      
      {/* Background Carving Relief Image Behind Text (Subtle Light Warm Overlay) */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-15 pointer-events-none">
        <img
          src="/bg/om_temple.jpg"
          alt="Sacred OM & Deity Temple Facade Sandstone Relief"
          className="w-full h-full object-cover filter contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#eae7e0] via-transparent to-[#eae7e0]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#eae7e0] via-transparent to-[#eae7e0]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Animated Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#705432] block mb-3">
            Why Choose M.M. STONE INDUSTRIES
          </span>
          <div className="flex justify-center">
            <AnimatedHeading
              text="Direct Mine Ownership, Heritage Master Carvings"
              italicWord="Carvings"
              className="text-3xl sm:text-5xl font-normal text-stone-900 leading-tight mb-4 justify-center text-center"
            />
          </div>
          <AnimatedParagraph delay={0.2} className="text-stone-700 text-sm sm:text-base font-light">
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
              className="bg-[#faf9f5] border border-stone-300 p-8 sm:p-9 rounded-sm hover:border-[#5c1818] transition-colors duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="w-11 h-11 rounded-sm bg-white border border-stone-300 text-stone-900 flex items-center justify-center mb-6 group-hover:bg-[#5c1818] group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-[#5c1818] group-hover:text-amber-200" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-3 group-hover:text-[#5c1818] transition-colors leading-snug">
                  {feature.title}
                </h3>
                <p className="text-stone-600 text-xs leading-[1.75] font-light">
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





