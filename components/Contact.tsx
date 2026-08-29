'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ShieldCheck, Image as ImageIcon, X, ArrowUpRight } from 'lucide-react';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

export default function Contact() {
  const [showCardModal, setShowCardModal] = useState(false);

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#faf9f6] relative border-t border-stone-200 overflow-hidden">
      
      {/* Background Carving Relief Image Behind Text */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-15 pointer-events-none">
        <img
          src="/bg/about_mandir.jpg"
          alt="Mahatma Phule & Savitribai Phule Red Sandstone Relief Background"
          className="w-full h-full object-cover filter contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f6] via-transparent to-[#faf9f6]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f6] via-transparent to-[#faf9f6]" />
      </div>

      <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5c1818] text-amber-200 text-xs uppercase tracking-[0.25em] font-semibold mb-3 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Mines Owner (ML No. 13/2022) • Direct Studio Access</span>
          </div>
          <AnimatedHeading
            text="Connect Direct With Quarry Directors"
            italicWord="Directors"
            className="text-3xl sm:text-5xl font-normal text-stone-900 leading-tight mb-4 justify-center text-center"
          />
          <AnimatedParagraph delay={0.2} className="text-stone-600 text-sm sm:text-base font-light max-w-xl mx-auto">
            Direct quarry owners and master fabricators in Bayana, Rajasthan. We supply architectural red sandstone, Jali screens, temple pillars, CNC relief panels, and monumental cladding worldwide.
          </AnimatedParagraph>
        </div>

        {/* 3 Executive Directors Cards Row */}
        <div className="mb-12">
          <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-[#705432] block text-center mb-6">
            Executive Leadership & Technical Desk
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Director 1 */}
            <div className="bg-white border border-stone-300 p-6 rounded-sm shadow-md flex flex-col justify-between space-y-4 hover:border-stone-400 transition-all">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-amber-800 font-semibold block mb-1">Managing Director • Operations</span>
                <h4 className="font-bold text-stone-900 text-lg">Vijay Kumar Agrawal</h4>
                <p className="text-stone-500 text-xs mt-1 font-light">Quarry operations, direct mine licensing, and custom stone fabrication.</p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                <a
                  href="https://wa.me/919001100731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-2.5 rounded-sm bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition-colors shadow-sm"
                  title="WhatsApp Vijay Agrawal (+91 9001100731)"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+919414024097"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-sm bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-colors shadow-sm"
                  title="Call +91 9414024097"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Call: 9414024097</span>
                </a>
              </div>
            </div>

            {/* Director 2 */}
            <div className="bg-white border border-stone-300 p-6 rounded-sm shadow-md flex flex-col justify-between space-y-4 hover:border-stone-400 transition-all">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-amber-800 font-semibold block mb-1">Quarry & Export Management</span>
                <h4 className="font-bold text-stone-900 text-lg">Kapil Agrawal</h4>
                <p className="text-stone-500 text-xs mt-1 font-light">International exports, block logistics, and bulk slab dispatch.</p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                <a
                  href="https://wa.me/919899063866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-2.5 rounded-sm bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+919899063866"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-sm bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Call: 9899063866</span>
                </a>
              </div>
            </div>

            {/* Director 3 */}
            <div className="bg-white border border-stone-300 p-6 rounded-sm shadow-md flex flex-col justify-between space-y-4 hover:border-stone-400 transition-all">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-amber-800 font-semibold block mb-1">Architectural & Site Specifications</span>
                <h4 className="font-bold text-stone-900 text-lg">Neeraj Sharma</h4>
                <p className="text-stone-500 text-xs mt-1 font-light">Site blueprints, 3D CNC carving designs, and mandir architecture support.</p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                <a
                  href="https://wa.me/917906123660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-2.5 rounded-sm bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+917906123660"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-sm bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Call: 7906123660</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Address, Email & Official Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Address Card */}
          <div className="bg-white border border-stone-300 p-6 rounded-sm shadow-md space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#5c1818] text-white rounded-sm shrink-0 shadow-xs">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="text-stone-900 font-semibold text-xs uppercase tracking-wider">Mines & Factory Address</h4>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed font-light pl-11">
              Village Murrki, Bharatpur Road, Bayana,<br />
              Distt. Bharatpur-321401, Rajasthan, India
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white border border-stone-300 p-6 rounded-sm shadow-md space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#5c1818] text-white rounded-sm shrink-0 shadow-xs">
                <Mail className="w-4 h-4" />
              </div>
              <h4 className="text-stone-900 font-semibold text-xs uppercase tracking-wider">Official Email</h4>
            </div>
            <div className="pl-11">
              <a href="mailto:mmstone@rediffmail.com" className="text-amber-800 font-semibold text-sm hover:underline block">
                mmstone@rediffmail.com
              </a>
              <span className="text-stone-500 text-[11px] block mt-1">Direct response for architectural inquiries</span>
            </div>
          </div>

          {/* Business Card Button */}
          <div className="bg-white border border-stone-300 p-6 rounded-sm shadow-md flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-stone-900 text-white rounded-sm shrink-0 shadow-xs">
                <ImageIcon className="w-4 h-4 text-amber-300" />
              </div>
              <div>
                <h4 className="text-stone-900 font-semibold text-xs uppercase tracking-wider">Official Mine License</h4>
                <span className="text-stone-500 text-[11px]">ML No. 13/2022 • Bayana Quarries</span>
              </div>
            </div>
            
            <button
              onClick={() => setShowCardModal(true)}
              className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-wider py-3 rounded-sm font-semibold transition-colors shadow-sm"
            >
              <span>View Official Business Card & License</span>
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>

        {/* Full-Width Maroon Direct CTA Banner */}
        <div className="bg-[#5c1818] border border-amber-500/40 rounded-sm p-8 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-300 font-semibold block">Instant Quarry Support</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">Have Project Dimensions or Custom Carving Requirements?</h3>
            <p className="text-amber-100/90 text-sm font-light max-w-2xl">Connect directly with Vijay Kumar Agrawal for quarry pricing, block availability, and custom 3D relief consultations.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="tel:+919414024097"
              className="inline-flex items-center gap-2.5 bg-amber-100 hover:bg-white text-stone-950 font-bold text-xs uppercase tracking-[0.18em] px-6 py-3.5 rounded-full shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 text-[#5c1818]" />
              <span>Call +91 9414024097</span>
            </a>

            <a
              href="https://wa.me/919001100731"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.18em] px-6 py-3.5 rounded-full shadow-lg transition-all border border-emerald-400/40"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* Business Card Modal */}
      {showCardModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md"
          onClick={() => setShowCardModal(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-sm overflow-hidden shadow-2xl p-4 sm:p-6 border border-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCardModal(false)}
              className="absolute top-3 right-3 p-2 bg-stone-900 text-white rounded-sm hover:bg-stone-800 transition-colors z-10"
              aria-label="Close Business Card"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-sm uppercase font-bold tracking-wider text-stone-900 mb-3">
              Official M.M STONE INDUSTRIES Credentials & Card
            </h3>
            
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
              <img
                src="/images/mm_stone_card.png"
                alt="M.M STONE INDUSTRIES Official Card"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
              <span>ML No. 13/2022 • Bayana, Bharatpur (Raj.)</span>
              <a
                href="mailto:mmstone@rediffmail.com"
                className="text-amber-900 font-semibold hover:underline"
              >
                mmstone@rediffmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
