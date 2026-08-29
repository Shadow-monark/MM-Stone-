'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global Application Error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#faf9f6] text-stone-900 font-sans min-h-screen flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="max-w-md space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-800 block">
            M.M STONE
          </span>
          <h1 className="font-serif text-3xl font-normal leading-tight">
            Architectural Portal Recovered
          </h1>
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            A temporary connection reset occurred. Click below to reload the main catalog interface.
          </p>
          <div>
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center bg-[#5c1818] hover:bg-[#7a1f1f] text-white text-xs font-semibold uppercase tracking-[0.2em] px-7 py-3.5 rounded-sm shadow-md transition-all"
            >
              Reload Portal
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
