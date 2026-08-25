'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle, ExternalLink, ShieldCheck, Image as ImageIcon, X } from 'lucide-react';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    stoneType: 'Bansi Paharpur Red Stone',
    finish: 'Hand Carved Jali / CNC Relief',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#faf9f6] relative border-t border-stone-200 overflow-hidden">
      
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

      <div className="w-full max-w-[90%] mx-auto px-0 relative z-10">

        
        {/* Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#5c1818] text-amber-200 text-xs uppercase tracking-[0.25em] font-semibold mb-3 shadow-sm">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Authentic Directors & Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Directors Contact Card */}
            <div className="bg-white border border-stone-300 p-6 sm:p-7 rounded-sm shadow-md space-y-5">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#705432] block">
                Executive Leadership & Technical Desk
              </span>

              <div className="space-y-4 text-xs">
                {/* Director 1 */}
                <div className="p-3.5 bg-[#f5f3eb] rounded-sm border border-stone-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Vijay Kumar Agrawal</h4>
                    <span className="text-stone-500 text-[11px]">Managing Director • Operations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/919001100731"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-sm bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
                      title="WhatsApp Vijay Agrawal (+91 9001100731)"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <a
                      href="tel:+919414024097"
                      className="p-2 rounded-sm bg-stone-900 hover:bg-stone-800 text-white transition-colors"
                      title="Call +91 9414024097"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Director 2 */}
                <div className="p-3.5 bg-[#f5f3eb] rounded-sm border border-stone-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Kapil Agrawal</h4>
                    <span className="text-stone-500 text-[11px]">Quarry & Export Management</span>
                  </div>
                  <a
                    href="https://wa.me/919899063866"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-sm bg-emerald-700 hover:bg-emerald-800 text-white transition-colors flex items-center gap-1 font-semibold text-[11px]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Director 3 */}
                <div className="p-3.5 bg-[#f5f3eb] rounded-sm border border-stone-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Neeraj Sharma</h4>
                    <span className="text-stone-500 text-[11px]">Architectural & Site Specifications</span>
                  </div>
                  <a
                    href="https://wa.me/917906123660"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-sm bg-emerald-700 hover:bg-emerald-800 text-white transition-colors flex items-center gap-1 font-semibold text-[11px]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Email Card */}
            <div className="bg-white border border-stone-300 p-6 sm:p-7 rounded-sm shadow-md space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#5c1818] text-white rounded-sm shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-semibold text-xs uppercase tracking-wider">Mines & Factory Address</h4>
                  <p className="text-stone-600 text-xs mt-1 leading-relaxed font-light">
                    Village Murrki, Bharatpur Road, Bayana,<br />
                    Distt. Bharatpur-321401, Rajasthan, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#5c1818] text-white rounded-sm shrink-0 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-semibold text-xs uppercase tracking-wider">Official Email</h4>
                  <a href="mailto:mmstone@rediffmail.com" className="text-amber-800 font-semibold text-xs mt-1 block hover:underline">
                    mmstone@rediffmail.com
                  </a>
                </div>
              </div>

              {/* View Official Business Card Button */}
              <button
                onClick={() => setShowCardModal(true)}
                className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-wider py-3 rounded-sm font-semibold transition-colors shadow-sm"
              >
                <ImageIcon className="w-4 h-4 text-amber-300" />
                <span>View Official Business Card & License</span>
              </button>
            </div>

          </div>

          {/* Right Column: Technical Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-300 p-8 sm:p-10 rounded-sm shadow-xl">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-stone-900 mb-2">
                    Inquiry Transmitted Directly
                  </h3>
                  <p className="text-stone-600 text-sm max-w-sm mx-auto mb-6 font-light">
                    Thank you. Vijay Agrawal and our dispatch engineers will review your blueprints and revert within 12 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-wider text-stone-900 hover:underline font-semibold"
                  >
                    Submit another architectural inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-2">
                        Full Name / Firm *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Architect Rajesh Agrawal"
                        className="w-full bg-[#faf9f6] border border-stone-300 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-2">
                        Email / Contact *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. studio@architecture.in"
                        className="w-full bg-[#faf9f6] border border-stone-300 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-2">
                        Stone & Article Category
                      </label>
                      <select
                        value={formData.stoneType}
                        onChange={(e) => setFormData({ ...formData, stoneType: e.target.value })}
                        className="w-full bg-[#faf9f6] border border-stone-300 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-600 transition-colors"
                      >
                        <option value="Bansi Paharpur Red Stone">Bansi Paharpur Red Stone</option>
                        <option value="Dholpur Pink Sandstone">Dholpur Pink Sandstone</option>
                        <option value="Jali Lattice & Window Screens">Jali Lattice & Window Screens</option>
                        <option value="Temple Fittings, Domes & Chhatris">Temple Fittings, Domes & Chhatris</option>
                        <option value="Monolithic Pillars & CNC Carvings">Monolithic Pillars & CNC Carvings</option>
                        <option value="Stone Cladding & Exterior Slabs">Stone Cladding & Exterior Slabs</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-2">
                        Required Processing / Finish
                      </label>
                      <select
                        value={formData.finish}
                        onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
                        className="w-full bg-[#faf9f6] border border-stone-300 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-600 transition-colors"
                      >
                        <option value="Hand Carved Jali / CNC Relief">Hand Carved Jali / CNC Relief</option>
                        <option value="Mirror Polished / Satin">Mirror Polished / Satin</option>
                        <option value="Thermal Flamed Non-Slip">Thermal Flamed Non-Slip</option>
                        <option value="Natural Cleft / Sawn Slabs">Natural Cleft / Sawn Slabs</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-2">
                      Project Blueprints & Dimension Specs *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify required dimensions, thickness (e.g. 50mm, 75mm), total quantity, and project location..."
                      className="w-full bg-[#faf9f6] border border-stone-300 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#5c1818] hover:bg-[#7a1f1f] text-white font-semibold uppercase tracking-wider text-xs py-4 px-6 rounded-sm transition-all shadow-md border border-amber-500/30"
                  >
                    <span>Transmit Specification to Directors</span>
                    <Send className="w-4 h-4 text-amber-300" />
                  </button>
                </form>
              )}
            </div>
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
              Official M.M. STONE INDUSTRIES Credentials & Card
            </h3>
            
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-stone-200 bg-stone-100">
              <img
                src="/images/mm_stone_card.png"
                alt="M.M. STONE INDUSTRIES Official Card"
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

