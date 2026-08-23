'use client';

import { motion } from 'framer-motion';
import { Anchor } from 'lucide-react';

const SHIPMENTS = [
  { vessel: 'BAYANA QUARRY DESPATCH', dest: 'Ayodhya Mandir Complex', payload: 'Bansi Paharpur Red Stone Pillars & Domes', status: 'DELIVERED' },
  { vessel: 'MM EXPORT EXPRESS', dest: 'Dubai International Port', payload: 'Hand-Carved Sandstone Jali Screens', status: 'IN TRANSIT' },
  { vessel: 'RAJASTHAN CARGO', dest: 'Genoa Port, Italy', payload: '180T Dholpur Red Sandstone Slabs', status: 'CUSTOMS CLEARED' },
  { vessel: 'BHARATPUR FREIGHT', dest: 'Singapore Port', payload: '3D CNC Carved Temple Relief Panels', status: 'DISPATCHED' },
  { vessel: 'MONUMENTAL LOGISTICS', dest: 'London, UK', payload: 'Heritage Sandstone Gates & Columns', status: 'IN TRANSIT' },
];

export default function LiveTicker() {
  return (
    <div className="w-full bg-[#5c1818] border-y border-amber-500/30 py-3 overflow-hidden flex items-center select-none relative z-20 shadow-md text-amber-100">
      {/* Live Badge */}
      <div className="shrink-0 px-5 sm:px-8 flex items-center gap-2.5 border-r border-amber-500/30 bg-[#5c1818] z-10">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-amber-200">
          Direct Quarry Dispatches (ML 13/2022):
        </span>
      </div>

      {/* Infinite Marquee Motion */}
      <div className="flex shrink-0 overflow-hidden relative w-full">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
          className="flex shrink-0 gap-12 whitespace-nowrap text-xs font-mono items-center"
        >
          {SHIPMENTS.concat(SHIPMENTS).map((s, i) => (
            <div key={i} className="inline-flex items-center gap-3">
              <Anchor className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-white font-bold">{s.vessel}</span>
              <span className="text-amber-200/80">→ {s.dest}</span>
              <span className="text-amber-100 font-medium">[{s.payload}]</span>
              <span className="px-2 py-0.5 rounded-sm bg-stone-900 border border-amber-500/40 text-[9px] uppercase tracking-wider text-emerald-400 font-semibold shadow-sm">
                {s.status}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

