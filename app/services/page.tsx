'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Phone,
  Sparkles,
  CheckCircle2,
  Hammer,
  ArrowUpRight
} from 'lucide-react';
import Footer from '@/components/Footer';
import ServiceIcon from '@/components/ServiceIcon';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { SERVICES_LIST, STONE_MATERIALS, ServiceItem } from '@/data/servicesData';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState('quarry-slicing');
  const [selectedMaterial, setSelectedMaterial] = useState('Bansi Paharpur Red Sandstone');
  const [inquiryText, setInquiryText] = useState('');

  let activeServiceObj: ServiceItem = SERVICES_LIST[0];
  for (let i = 0; i < SERVICES_LIST.length; i++) {
    if (SERVICES_LIST[i].id === selectedService) {
      activeServiceObj = SERVICES_LIST[i];
      break;
    }
  }

  const waMessageText =
    'Hello M.M STONE, I am interested in your service: ' +
    activeServiceObj.title +
    '. Preferred Material: ' +
    selectedMaterial +
    '. Note: ' +
    (inquiryText || 'Please provide quotation.');

  const waHref = 'https://wa.me/919001100731?text=' + encodeURIComponent(waMessageText);

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
            {SERVICES_LIST.map((service, idx) => (
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

                  {/* Action button */}
                  <div className="pt-3">
                    <button
                      onClick={() => {
                        setSelectedService(service.id);
                        const element = document.getElementById('interactive-calculator');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Custom Quote / Service Estimator */}
        <section id="interactive-calculator" className="py-16 sm:py-24 bg-[#faf9f5]">
          <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white border border-stone-300 rounded-2xl shadow-xl overflow-hidden">
              {/* Card Header */}
              <div className="bg-[#5c1818] text-white p-6 sm:p-8 space-y-2 border-b border-amber-500/30">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 text-[10px] uppercase tracking-widest font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  Instant Direct Inquiry Generator
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  Request Custom Service Specification &amp; Quote
                </h3>
                <p className="text-amber-100/80 text-xs sm:text-sm font-light">
                  Select your required service and sandstone grade to generate a detailed WhatsApp query directly for our directors.
                </p>
              </div>

              {/* Form Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                    1. Select Service Required:
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-stone-300 bg-[#faf9f5] text-stone-900 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#5c1818]"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Material Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                    2. Preferred Sandstone / Marble Variety:
                  </label>
                  <select
                    value={selectedMaterial}
                    onChange={(e) => setSelectedMaterial(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-stone-300 bg-[#faf9f5] text-stone-900 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#5c1818]"
                  >
                    {STONE_MATERIALS.map((mat) => (
                      <option key={mat} value={mat}>
                        {mat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Details */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                    3. Project Dimensions &amp; Details (Optional):
                  </label>
                  <textarea
                    rows={3}
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    placeholder="E.g., Need 500 sq.ft Jali screens (3ft x 5ft panels) for a temple in Ahmedabad, or 80mm calibrated facade slabs..."
                    className="w-full p-3.5 rounded-xl border border-stone-300 bg-[#faf9f5] text-stone-900 text-xs sm:text-sm font-light focus:outline-none focus:border-[#5c1818]"
                  />
                </div>

                {/* Summary Box */}
                <div className="p-4 bg-[#faf9f5] border border-stone-200 rounded-xl space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800 block">
                    Selected Summary:
                  </span>
                  <div className="text-xs text-stone-800 font-semibold">
                    {activeServiceObj.title} • {selectedMaterial}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Send Inquiry on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919414024097"
                    className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4 text-amber-300" />
                    <span>Direct Call: 9414024097</span>
                  </a>
                </div>
              </div>
            </div>
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
