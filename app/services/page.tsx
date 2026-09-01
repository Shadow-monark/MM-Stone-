'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Phone,
  CheckCircle2,
  Hammer,
  ArrowUpRight
} from 'lucide-react';
import Footer from '@/components/Footer';
import ServiceIcon from '@/components/ServiceIcon';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { SERVICES_LIST } from '@/data/servicesData';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1c1917] flex flex-col font-sans">
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#faf9f5]/95 backdrop-blur-md border-b border-stone-300 py-4 shadow-sm">
        <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 bg-white hover:bg-stone-900 text-stone-900 hover:text-white border border-stone-300 font-bold text-xs uppercase tracking-[0.16em] px-4 sm:px-5 py-2.5 rounded-full transition-all shadow-sm shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-amber-700 group-hover:text-amber-300 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Main Studio</span>
          </Link>

          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-[#5c1818] border border-amber-500/40 flex items-center justify-center shadow-xs">
              <span className="font-bold text-xs tracking-widest text-amber-100">MM</span>
            </div>
            <span className="text-sm sm:text-base font-bold tracking-[0.18em] text-stone-900 uppercase">
              M.M STONE SERVICES
            </span>
          </Link>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/about"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#5c1818] px-3 py-2"
            >
              <span>About Us</span>
            </Link>
            <Link
              href="/gallery"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#5c1818] px-3 py-2"
            >
              <span>Gallery</span>
            </Link>
            <a
              href="tel:+919414024097"
              className="inline-flex items-center gap-2 bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-bold text-xs uppercase tracking-[0.14em] px-4 py-2.5 rounded-full transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Call: +91 9414024097</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Page Hero Section */}
        <section className="py-16 sm:py-24 bg-[#faf9f5] border-b border-stone-300 relative overflow-hidden">
          <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5c1818] text-amber-200 text-xs uppercase tracking-[0.25em] font-semibold shadow-xs">
                <Hammer className="w-3.5 h-3.5 text-amber-300" />
                <span>Full-Spectrum Sandstone Engineering</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight">
                Architectural Sandstone Carving, Mining &amp; Turnkey Fabrication
              </h1>

              <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                From raw mine block slicing at our Bayana quarry (ML 13/2022) to multi-axis 3D CNC relief carving, hand Jali screens, and temple architecture - explore our specialized stone services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Showcase Cards */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
          <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {SERVICES_LIST.map((service, idx) => {
              const waText =
                'Hello M.M STONE, I am interested in your service: ' +
                service.title +
                '. Please share specifications & quotation details.';
              const waLink = 'https://wa.me/919001100731?text=' + encodeURIComponent(waText);

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#faf9f5] border border-stone-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Visual Image Box */}
                  <div className={`lg:col-span-6 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-stone-300 shadow-md group bg-stone-900">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#5c1818] text-amber-100 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm border border-amber-500/30">
                        SERVICE #{idx + 1}
                      </div>
                    </div>
                  </div>

                  {/* Service Text & Features */}
                  <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-[#5c1818]">
                          <ServiceIcon name={service.iconName} />
                        </div>
                        <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
                          {service.subtitle}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 pt-2 border-t border-stone-200">
                      <h4 className="text-xs uppercase font-bold tracking-wider text-stone-900">
                        Key Capabilities &amp; Standards:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 font-medium">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Material & Application Badges */}
                    <div className="flex flex-wrap gap-2 pt-2 text-[11px]">
                      <span className="bg-stone-200 text-stone-800 px-3 py-1 rounded-md font-semibold">
                        Material: {service.material}
                      </span>
                      <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-md font-semibold">
                        Use: {service.applications}
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-xs"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-current" />
                        <span>Inquire on WhatsApp</span>
                      </a>

                      <a
                        href="tel:+919414024097"
                        className="inline-flex items-center gap-2 bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-xs"
                      >
                        <Phone className="w-4 h-4 text-amber-300" />
                        <span>Call Studio</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Floating Bottom Return Button */}
      <div className="sticky bottom-6 left-0 right-0 z-40 flex justify-center pointer-events-none px-4">
        <Link
          href="/"
          className="pointer-events-auto group inline-flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full shadow-2xl transition-all border border-amber-500/40 hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 text-amber-300 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Main Website</span>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
