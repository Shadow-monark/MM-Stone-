'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Router Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-md space-y-6">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 block">
          Notice — Application Recovered
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 leading-tight">
          MM STONE INDUSTRIES
        </h1>
        <p className="text-stone-600 text-sm font-light leading-relaxed">
          The page encountered a temporary state reset. Click below to continue browsing our architectural stone collection.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center bg-[#5c1818] hover:bg-[#7a1f1f] text-white text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3 rounded-sm shadow-md transition-all"
          >
            Reset View
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3 rounded-sm shadow-md transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
