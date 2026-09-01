'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Phone,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  MapPin,
  FileText,
  Users,
  Compass,
  Hammer,
  X,
  MessageSquare,
  ArrowUpRight,
  Building2
} from 'lucide-react';
import Footer from '@/components/Footer';

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const DIRECTORS = [
  {
    name: 'Vijay Kumar Agrawal',
    role: 'Managing Director • Operations & Mine Reserve',
    phone: '9414024097',
    whatsapp: '919001100731',
    bio: 'Oversees primary quarry extraction, ML 13/2022 lease compliance, block slicing, and large-scale architectural supply contracts.',
  },
  {
    name: 'Kapil Agrawal',
    role: 'Quarry & Export Management',
    phone: '9899063866',
    whatsapp: '919899063866',
    bio: 'Manages client specifications, logistics dispatch, international export inquiries, and pan-India project site deliveries.',
  },
  {
    name: 'Neeraj Sharma',
    role: 'Architectural & CNC Specifications',
    phone: '7906123660',
    whatsapp: '917906123660',
    bio: 'Leads 3D CAD design translation, master artisan hand-carving supervision, and heritage temple architectural engineering.',
  },
];

const QUARRY_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Primary Mine Extraction (ML 13/2022)',
    description: 'Raw sandstone blocks are systematically quarried from our Bayana reserves in Village Murrki, Bharatpur, ensuring single-vein consistency.',
    image: '/row_photos/IMG-20260823-WA0007.jpg',
  },
  {
    step: '02',
    title: 'Precision Gangsaw Milling & Slab Slicing',
    description: 'High-power multi-blade gangsaw machinery mills raw sandstone monoliths into micro-calibrated slabs of specified thickness.',
    image: '/row_photos/IMG-20260823-WA0010.jpg',
  },
  {
    step: '03',
    title: 'Heritage Artisan Hand Carving & Jali Work',
    description: 'Generational quarry craftsmen hand-carve intricate filigree lattice screens (Jalis), turned pillars, and ornate cusped arches.',
    image: '/row_photos/IMG-20260823-WA0014.jpg',
  },
  {
    step: '04',
    title: '3D High-Precision CNC Relief Monoliths',
    description: 'State-of-the-art multi-axis CNC machines engrave intricate 3D relief wall murals, deity icons, and structural facade panels.',
    image: '/row_photos/IMG-20260823-WA0041.jpg',
  },
];

const GEOLOGICAL_ADVANTAGES = [
  {
    title: 'Single-Vein Color Uniformity',
    description: 'Because we own and operate our primary mining bed in Bayana, we guarantee uniform color tone across hundreds of thousands of square feet.',
    icon: ShieldCheck,
  },
  {
    title: 'High Compressive Strength',
    description: 'Bansi Paharpur red sandstone features exceptional density and structural integrity, resistant to weathering, frost, and erosion for centuries.',
    icon: Award,
  },
  {
    title: 'Non-Fading Natural Iron-Oxide Pigment',
    description: 'The rich terracota-red hue comes from natural iron oxide deposits formed millions of years ago, which deepens naturally over time.',
    icon: Sparkles,
  },
  {
    title: 'Micro-Calibrated Slab Tolerances',
    description: 'Our modern sawing and CNC tooling maintain strict slab thickness control, enabling seamless architectural cladding installation.',
    icon: CheckCircle2,
  },
];

export default function ElaborateAboutPage() {
  const [selectedDirector, setSelectedDirector] = useState<(typeof DIRECTORS)[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1c1917] flex flex-col font-sans">
      {/* Top Navigation Header */}
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
              M.M STONE INDUSTRIES
            </span>
          </Link>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/services"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#5c1818] px-3 py-2"
            >
              <span>Services</span>
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
        {/* Hero Section with Warm Sandstone Backdrop */}
        <section className="relative py-16 sm:py-24 bg-[#faf9f5] border-b border-stone-300 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <img
              src="/bg/about_mandir.jpg"
              alt="Sandstone Mining and Carving"
              className="w-full h-full object-cover filter contrast-125 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f5] via-transparent to-[#faf9f5]" />
          </div>

          <div className="relative z-10 w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5c1818] text-amber-200 text-xs uppercase tracking-[0.25em] font-semibold shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-amber-300" />
                <span>Primary Mine License ML No. 13/2022 • Bayana, Bharatpur</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 leading-tight">
                Pioneering Bansi Paharpur Red Sandstone & Heritage Architectural Carvings
              </h1>

              <p className="text-stone-700 text-base sm:text-lg font-light leading-relaxed max-w-3xl mx-auto">
                M.M STONE INDUSTRIES is a premier quarry owner, miner, and master architectural fabricator located in the historic stone belt of Bayana, Rajasthan. We bridge ancient quarry traditions with state-of-the-art 3D CNC carving technology.
              </p>

              {/* Quick Metrics Bar */}
              <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                <div className="bg-white p-5 rounded-xl border border-stone-300 shadow-xs space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800">Quarry License</span>
                  <span className="text-xl sm:text-2xl font-bold text-stone-900 block font-serif">ML 13/2022</span>
                  <span className="text-[11px] text-stone-500 block">Village Murrki, Bayana</span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-300 shadow-xs space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800">Primary Reserve</span>
                  <span className="text-xl sm:text-2xl font-bold text-stone-900 block font-serif">Red Sandstone</span>
                  <span className="text-[11px] text-stone-500 block">Bansi Paharpur Grade</span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-300 shadow-xs space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800">Technology</span>
                  <span className="text-xl sm:text-2xl font-bold text-stone-900 block font-serif">3D CNC & Hand</span>
                  <span className="text-[11px] text-stone-500 block">Micro-precision relief</span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-300 shadow-xs space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800">Logistics</span>
                  <span className="text-xl sm:text-2xl font-bold text-stone-900 block font-serif">Pan-India & Export</span>
                  <span className="text-[11px] text-stone-500 block">Direct crate shipping</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Detailed Story & Heritage Section */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
          <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Narrative */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5c1818]/10 border border-[#5c1818]/20 text-[#5c1818] text-xs uppercase tracking-[0.2em] font-semibold">
                  <Compass className="w-3.5 h-3.5 text-amber-800" />
                  <span>Quarry Heritage &amp; Mine Legacy</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-tight">
                  Direct From the Mines of Bayana to India&apos;s Most Sacred Monuments
                </h2>

                {/* Feature Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#faf9f5] border border-stone-300 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-[#5c1818] font-bold text-xs uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-amber-700" />
                      <span>Imperial Red Sandstone</span>
                    </div>
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-light">
                      Renowned worldwide for its rich terracotta tint, high compressive strength, and centuries-long resistance to weather degradation in Northern India&apos;s grandest temples and palaces.
                    </p>
                  </div>

                  <div className="p-4 bg-[#faf9f5] border border-stone-300 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-[#5c1818] font-bold text-xs uppercase tracking-wider">
                      <Award className="w-4 h-4 text-amber-700" />
                      <span>Direct Quarry Supply</span>
                    </div>
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-light">
                      Operating straight from our Bayana quarry bed (ML 13/2022), eliminating middlemen to guarantee single-vein color consistency, custom block slicing, and factory pricing.
                    </p>
                  </div>
                </div>

                {/* Official Mining Register Badge */}
                <div className="p-4 bg-stone-900 text-white rounded-xl border border-amber-500/30 space-y-2.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-amber-400">
                      Official Mining License Register
                    </span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded font-mono">
                      GOVT APPROVED
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-stone-400 text-[10px] block uppercase">License No.</span>
                      <span className="font-bold text-white">ML 13/2022</span>
                    </div>
                    <div>
                      <span className="text-stone-400 text-[10px] block uppercase">Mine Site</span>
                      <span className="font-bold text-white">Bayana, Bharatpur</span>
                    </div>
                    <div>
                      <span className="text-stone-400 text-[10px] block uppercase">Reserve Grade</span>
                      <span className="font-bold text-white">Bansi Paharpur Red</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Visual Collage */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 relative bg-[#faf9f5] border border-stone-300 rounded-2xl p-4 sm:p-6 shadow-md"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-stone-200 group">
                      <img
                        src="/row_photos/IMG-20260823-WA0007.jpg"
                        alt="Primary Mine Bed"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                      <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-amber-200 tracking-wider bg-stone-900/90 px-2 py-0.5 rounded">
                        Bayana Mine Reserve
                      </span>
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-stone-200 group">
                      <img
                        src="/row_photos/IMG-20260823-WA0014.jpg"
                        alt="Hand Jali Artisans"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                      <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-amber-200 tracking-wider bg-stone-900/90 px-2 py-0.5 rounded">
                        Artisan Hand Carving
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-stone-200 group">
                      <img
                        src="/row_photos/IMG-20260823-WA0010.jpg"
                        alt="Gangsaw Machine Slicing"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                      <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-amber-200 tracking-wider bg-stone-900/90 px-2 py-0.5 rounded">
                        Gangsaw Slab Slicing
                      </span>
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-stone-200 group">
                      <img
                        src="/row_photos/IMG-20260823-WA0041.jpg"
                        alt="3D Relief Panel Monolith"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                      <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-amber-200 tracking-wider bg-stone-900/90 px-2 py-0.5 rounded">
                        3D Relief Monolith
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Geological Advantages Grid */}
        <section className="py-16 sm:py-24 bg-[#faf9f5] border-b border-stone-300">
          <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#5c1818] font-bold block">
                Technical Superiority
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900">
                Why Architects Specify M.M STONE Sandstone
              </h2>
              <p className="text-stone-600 text-sm font-light">
                Direct mine extraction guarantees unmatched quality, structural longevity, and color perfection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {GEOLOGICAL_ADVANTAGES.map((adv, idx) => {
                const IconComp = adv.icon;
                return (
                  <motion.div
                    key={adv.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-white p-7 rounded-xl border border-stone-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#5c1818]">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-stone-900 text-base">{adv.title}</h3>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                        {adv.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4-Step Quarry Operations Workflow */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
          <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#5c1818] font-bold block">
                From Quarry to Craft
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
                Our 4-Stage Quarry-to-Site Execution Model
              </h2>
              <p className="text-stone-600 text-sm font-light">
                Complete quality control from raw mountain reserve slicing to final architectural installation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {QUARRY_PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#faf9f5] border border-stone-300 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between group hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#5c1818] text-amber-100 font-mono text-xs font-bold px-2.5 py-1 rounded">
                      STAGE {step.step}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-stone-900 text-sm sm:text-base">{step.title}</h3>
                    <p className="text-stone-600 text-xs leading-relaxed font-light">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Directors & Leadership Command Section */}
        <section className="py-16 sm:py-24 bg-[#faf9f5]">
          <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5c1818] text-amber-100 text-xs uppercase tracking-[0.2em] font-semibold">
                <Users className="w-3.5 h-3.5 text-amber-300" />
                <span>Executive Command & Directors</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
                Direct Contact With Quarry Leadership
              </h2>
              <p className="text-stone-600 text-sm font-light">
                Speak directly with our directors for project estimation, architectural specifications, or quarry block visits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {DIRECTORS.map((dir, idx) => (
                <motion.div
                  key={dir.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white p-7 rounded-2xl border border-stone-300 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-800 block">
                      {dir.role}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-stone-900">{dir.name}</h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                      {dir.bio}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-stone-200">
                    <a
                      href={`https://wa.me/${dir.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-xs"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      <span>WhatsApp Direct</span>
                    </a>

                    <a
                      href={`tel:+91${dir.phone}`}
                      className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-xs"
                    >
                      <Phone className="w-4 h-4 text-amber-300" />
                      <span>Call +91 {dir.phone}</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner: Explore Services & Gallery */}
        <section className="py-16 bg-[#5c1818] text-white">
          <div className="w-full max-w-[95%] xl:max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 max-w-2xl mx-auto">
              Ready to Order Custom Sandstone Facades & CNC Relief Panels?
            </h2>
            <p className="text-amber-200/90 text-sm sm:text-base font-light max-w-xl mx-auto">
              Explore our full service catalog or inspect our 70+ archived master architectural carving works.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-[0.18em] px-7 py-3.5 rounded-full transition-all shadow-md"
              >
                <span>View Our Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-900 text-white font-bold text-xs uppercase tracking-[0.18em] px-7 py-3.5 rounded-full border border-amber-500/40 transition-all shadow-md"
              >
                <span>Browse Works Gallery</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
