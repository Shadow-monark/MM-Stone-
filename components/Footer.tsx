import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f5f4f0] border-t border-stone-200 text-stone-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#5c1818] border border-amber-500/40 flex items-center justify-center">
                <span className="font-bold text-xs text-amber-100">MM</span>
              </div>
              <span className="text-base font-bold tracking-wider text-stone-900">
                M.M. STONE INDUSTRIES
              </span>
            </Link>
            <p className="text-stone-500 text-xs leading-relaxed max-w-sm font-light">
              Mines Owner (ML No. 13/2022). Exporter of Red Sandstone blocks, slabs, tiles, Jali screens, temple fittings, pillars, CNC carvings, domes, chhatris & cladding.
            </p>
            <div className="pt-1 text-[11px] text-[#705432] font-semibold uppercase tracking-wider">
              Quality • Trust • Heritage Craftsmanship
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-stone-900 font-semibold uppercase tracking-wider text-xs mb-4">Navigation</h4>
            <ul className="space-y-2 text-stone-600">
              <li><Link href="#about" className="hover:text-stone-900 transition-colors">About Studio</Link></li>
              <li><Link href="#craftsmanship" className="hover:text-stone-900 transition-colors">Works Gallery</Link></li>
              <li><Link href="#collection" className="hover:text-stone-900 transition-colors">Stone Varieties</Link></li>
              <li><Link href="#finishes" className="hover:text-stone-900 transition-colors">Surface Calibration</Link></li>
              <li><Link href="#calculator" className="hover:text-stone-900 transition-colors">Calculator</Link></li>
            </ul>
          </div>

          {/* Directors */}
          <div>
            <h4 className="text-stone-900 font-semibold uppercase tracking-wider text-xs mb-4">Leadership</h4>
            <ul className="space-y-2 text-stone-600 text-xs font-medium">
              <li>Vijay Kumar Agrawal</li>
              <li>Kapil Agrawal</li>
              <li>Neeraj Sharma</li>
            </ul>
          </div>

          {/* Quarry & Contact */}
          <div>
            <h4 className="text-stone-900 font-semibold uppercase tracking-wider text-xs mb-4">Factory & Mines</h4>
            <div className="space-y-2 text-stone-600 text-xs font-light">
              <p className="text-stone-900 font-semibold">Bayana, Bharatpur (Raj.)</p>
              <p className="text-stone-500">Village Murrki, Bharatpur Road</p>
              <a href="mailto:mmstone@rediffmail.com" className="text-amber-900 font-semibold block hover:underline pt-1">
                mmstone@rediffmail.com
              </a>
              <p className="text-stone-700 font-medium pt-1">+91 9001100731 / +91 9899063866</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <p>© {new Date().getFullYear()} M.M. STONE INDUSTRIES (ML No. 13/2022). ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#contact" className="hover:text-stone-800 transition-colors">Submit Specification</a>
            <a href="#contact" className="hover:text-stone-800 transition-colors">Quarry Inspection</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

