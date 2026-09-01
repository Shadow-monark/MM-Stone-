'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, ArrowUpRight, Building2 } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-[#faf9f5] relative overflow-hidden text-stone-900 border-t border-stone-300">
      <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-stone-300 rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Subtle background photo tint */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none hidden lg:block">
            <img
              src="/row_photos/IMG-20260823-WA0007.jpg"
              alt="Bayana Quarry Mine"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5c1818] text-amber-100 text-xs uppercase tracking-[0.2em] font-semibold shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-amber-300" />
                <span>Primary Mine Reserve • ML No. 13/2022</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-tight">
                Mastery in Sandstone Reliefs & Heritage Stone Architecture
              </h2>

              <p className="text-stone-700 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                M.M STONE INDUSTRIES operates primary mine reserves in Bayana, District Bharatpur, Rajasthan under ML No. 13/2022. We specialize in Bansi Paharpur Red Sandstone, Dholpur Sandstone, 3D CNC relief panels, and hand-carved Jali screens.
              </p>

              {/* Key Quick Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-stone-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#5c1818]" />
                  <span>Direct Mines Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#5c1818]" />
                  <span>Single-Vein Color Uniformity</span>
                </div>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3 border-t lg:border-t-0 lg:border-l border-stone-200 pt-6 lg:pt-0 lg:pl-8">
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-bold text-xs uppercase tracking-[0.18em] px-6 py-3.5 rounded-xl transition-all shadow-md group"
              >
                <span>Read Full Quarry Story</span>
                <ArrowUpRight className="w-4 h-4 text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.18em] px-6 py-3.5 rounded-xl transition-all shadow-md"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4 text-amber-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
