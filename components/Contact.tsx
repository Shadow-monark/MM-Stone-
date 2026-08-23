'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { AnimatedHeading, AnimatedParagraph } from './AnimatedText';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    stoneType: 'Ruby Red Granite',
    finish: 'Mirror Polished',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#faf9f6] relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500 block mb-3">
              Direct Inquiries
            </span>
            <AnimatedHeading
              text="Initiate a Commission"
              italicWord="Commission"
              className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 leading-tight mb-6"
            />
            <AnimatedParagraph delay={0.2} className="text-stone-600 text-sm leading-relaxed mb-8 font-light">
              Whether requesting full container loads of raw quarry blocks or custom-dimensioned architectural slabs, our technical sales team will assist your project.
            </AnimatedParagraph>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-stone-200 text-stone-900 rounded-sm shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-medium">Quarry & Yard Location</h4>
                  <p className="text-stone-500 text-xs mt-1 leading-relaxed">
                    Western Ridge Industrial Corridor, Sector 7, Quarry Gate 4
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-stone-200 text-stone-900 rounded-sm shrink-0 shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-medium">Direct Desk</h4>
                  <p className="text-stone-500 text-xs mt-1">+1 (800) 555-7866</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-stone-200 text-stone-900 rounded-sm shrink-0 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-medium">Export & Tenders</h4>
                  <p className="text-stone-500 text-xs mt-1">commissions@mmstones.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-stone-200 text-stone-900 rounded-sm shrink-0 shadow-xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-medium">Operational Hours</h4>
                  <p className="text-stone-500 text-xs mt-1">Mon – Fri: 08:00 – 18:00 | Sat: 09:00 – 14:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-200 p-8 sm:p-10 rounded-sm shadow-xl">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-stone-600 text-sm max-w-sm mx-auto mb-6 font-light">
                    Thank you. Our quarry dispatch engineer will review your specifications and contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-wider text-stone-900 hover:underline font-semibold"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full bg-[#faf9f6] border border-stone-300 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@architecture.com"
                        className="w-full bg-[#faf9f6] border border-stone-300 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-2">
                        Stone Variant
                      </label>
                      <select
                        value={formData.stoneType}
                        onChange={(e) => setFormData({ ...formData, stoneType: e.target.value })}
                        className="w-full bg-[#faf9f6] border border-stone-300 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-600 transition-colors"
                      >
                        <option value="Ruby Red Granite">Ruby Red Granite</option>
                        <option value="Titanium Quartzite">Titanium Quartzite</option>
                        <option value="Imperial Red Marble">Imperial Red Marble</option>
                        <option value="Desert Gold Sandstone">Desert Gold Sandstone</option>
                        <option value="Custom Quarry Monolith">Custom Quarry Monolith</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-2">
                        Required Finish
                      </label>
                      <select
                        value={formData.finish}
                        onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
                        className="w-full bg-[#faf9f6] border border-stone-300 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-600 transition-colors"
                      >
                        <option value="Mirror Polished">Mirror Polished</option>
                        <option value="Leathered Satin">Leathered Satin</option>
                        <option value="Thermal Flamed">Thermal Flamed</option>
                        <option value="Silk Honed">Silk Honed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-2">
                      Project Details & Surface Area (m² or sqft) *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify thickness, delivery destination port, and project timeline..."
                      className="w-full bg-[#faf9f6] border border-stone-300 rounded-sm px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-stone-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold uppercase tracking-wider text-xs py-4 px-6 rounded-sm transition-all shadow-md"
                  >
                    <span>Submit Specification</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
