import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-md space-y-6">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500 block">
          404 — Page Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900 leading-tight">
          Quarry Path Not Found
        </h1>
        <p className="text-stone-600 text-sm font-light leading-relaxed">
          The architectural slab or page you are searching for does not exist or has been relocated.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-[0.2em] px-7 py-3.5 rounded-sm shadow-md transition-all"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
