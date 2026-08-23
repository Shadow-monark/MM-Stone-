import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f5f4f0] border-t border-stone-200 text-stone-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-stone-900 border border-stone-800 flex items-center justify-center">
                <span className="font-serif text-xs font-bold text-white">MM</span>
              </div>
              <span className="font-serif text-lg font-semibold tracking-wider text-stone-900">
                MM STONES
              </span>
            </Link>
            <p className="text-stone-500 text-xs leading-relaxed max-w-sm font-light">
              Premier natural stone mining, cutting, and maritime export corporation. Supplying the international architectural community since 1988.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-stone-900 font-semibold uppercase tracking-wider text-xs mb-4">Navigation</h4>
            <ul className="space-y-2 text-stone-600">
              <li><Link href="#about" className="hover:text-stone-900 transition-colors">About Us</Link></li>
              <li><Link href="#applications" className="hover:text-stone-900 transition-colors">Applications</Link></li>
              <li><Link href="#collection" className="hover:text-stone-900 transition-colors">Collection</Link></li>
              <li><Link href="#finishes" className="hover:text-stone-900 transition-colors">Surface Finishes</Link></li>
              <li><Link href="#calculator" className="hover:text-stone-900 transition-colors">Tonnage Calculator</Link></li>
            </ul>
          </div>

          {/* Materials */}
          <div>
            <h4 className="text-stone-900 font-semibold uppercase tracking-wider text-xs mb-4">Materials</h4>
            <ul className="space-y-2 text-stone-600">
              <li><Link href="#collection" className="hover:text-stone-900 transition-colors">Ruby Red Granite</Link></li>
              <li><Link href="#collection" className="hover:text-stone-900 transition-colors">Titanium Quartzite</Link></li>
              <li><Link href="#collection" className="hover:text-stone-900 transition-colors">Imperial Red Marble</Link></li>
              <li><Link href="#collection" className="hover:text-stone-900 transition-colors">Desert Gold Sandstone</Link></li>
            </ul>
          </div>

          {/* Quarry Contact */}
          <div>
            <h4 className="text-stone-900 font-semibold uppercase tracking-wider text-xs mb-4">Quarry Operations</h4>
            <div className="space-y-2 text-stone-600 text-xs">
              <p className="text-stone-900 font-medium">+1 (800) 555-7866</p>
              <p>commissions@mmstones.com</p>
              <p className="text-stone-500 pt-1">Mon – Fri: 08:00 – 18:00</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <p>© {new Date().getFullYear()} MM STONES MINING CORP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-800 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-800 transition-colors">Terms of Supply</a>
            <a href="#" className="hover:text-stone-800 transition-colors">ASTM Reports</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
