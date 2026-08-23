'use client';

import { Mountain, Maximize, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

const FEATURES = [
  {
    title: 'Direct Quarry Ownership',
    description: 'We own and operate our primary quarries, guaranteeing uniform batch color, continuous supply, and no broker markups.',
    icon: Mountain,
  },
  {
    title: 'Precision Sizing & CNC',
    description: 'Equipped with automated multi-axis bridge saws and diamond gang saws for exact architectural tolerances (±0.5mm).',
    icon: Maximize,
  },
  {
    title: 'Global Maritime Export',
    description: 'Climate-safe, heavy-duty reinforced wooden crating dispatched to over 40 countries across major international shipping hubs.',
    icon: Globe,
  },
  {
    title: 'ISO & ASTM Tested',
    description: 'Full laboratory certification for compressive strength, water absorption, flexural load, and freeze-thaw endurance.',
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 sm:py-36 bg-[#eae7e0] relative border-t border-[#dcd8cd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Animated Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500 block mb-3">
            Why MM STONES
          </span>
          <div className="flex justify-center">
            <AnimatedHeading
              text="Direct Reliability, Uncompromised Quality"
              italicWord="Quality"
              className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight mb-4 justify-center"
            />
          </div>
          <AnimatedParagraph delay={0.2} className="text-stone-600 text-sm sm:text-base font-light">
            We bridge heavy geological mining and refined architectural fabrication.
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
              className="bg-[#faf9f5] border border-[#dcd8cd] p-8 sm:p-9 rounded-sm hover:border-[#a8a29e] transition-colors duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-md"
            >
              <div>
                <div className="w-11 h-11 rounded-sm bg-[#f4f2ec] border border-[#dcd8cd] text-[#1c1917] flex items-center justify-center mb-6 group-hover:bg-[#1c1917] group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-[#9a7b4f] group-hover:text-white" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1c1917] mb-3 group-hover:text-[#9a7b4f] transition-colors leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[#57534e] text-xs leading-[1.75] font-light">
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
