'use client';

import { motion } from 'framer-motion';
import { Anchor } from 'lucide-react';

const SHIPMENTS = [
  { vessel: 'RUBICUND CARRIER V', dest: 'Port of Jebel Ali, Dubai', payload: '420T Ruby Red Granite Slabs', status: 'IN TRANSIT' },
  { vessel: 'PACIFIC MONOLITH', dest: 'Port of Genoa, Italy', payload: '180T Imperial Red Blocks', status: 'CUSTOMS CLEARED' },
  { vessel: 'NORDIC STRATUM', dest: 'Port of Rotterdam, Netherlands', payload: '310T Honed Quartzite Tiles', status: 'DISPATCHED' },
  { vessel: 'ATLANTIC VEIN', dest: 'Port of Newark, New York', payload: '520T Raw Quarry Monoliths', status: 'UNLOADING' },
  { vessel: 'ORIENT TITANIUM', dest: 'Port of Yokohama, Japan', payload: '150T Thermal Flamed Pavers', status: 'IN TRANSIT' },
];

export default function LiveTicker() {
  return (
    <div className="w-full bg-[#f5f4f0] border-y border-stone-200 py-3.5 overflow-hidden flex items-center select-none relative z-20 shadow-inner">
      {/* Live Badge */}
      <div className="shrink-0 px-5 sm:px-8 flex items-center gap-2.5 border-r border-stone-300 bg-[#f5f4f0] z-10 text-stone-700">
        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
        <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-semibold text-stone-800">
          Live Quarry Dispatches:
        </span>
      </div>

      {/* Infinite Marquee Motion */}
      <div className="flex shrink-0 overflow-hidden relative w-full">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
          className="flex shrink-0 gap-12 whitespace-nowrap text-xs text-stone-600 font-mono items-center"
        >
          {SHIPMENTS.concat(SHIPMENTS).map((s, i) => (
            <div key={i} className="inline-flex items-center gap-3">
              <Anchor className="w-3.5 h-3.5 text-stone-400" />
              <span className="text-stone-900 font-semibold">{s.vessel}</span>
              <span className="text-stone-500">→ {s.dest}</span>
              <span className="text-stone-700 font-medium">[{s.payload}]</span>
              <span className="px-2 py-0.5 rounded-sm bg-white border border-stone-300 text-[9px] uppercase tracking-wider text-emerald-700 font-semibold shadow-xs">
                {s.status}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
