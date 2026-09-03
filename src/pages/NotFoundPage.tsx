import React from 'react';
import { Link } from 'react-router-dom';
import { IceCream, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-zinc-900">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-[32px] border border-zinc-200 shadow-xl">
        <div className="w-20 h-20 rounded-3xl bg-black text-white mx-auto flex items-center justify-center transform -rotate-12 shadow-md">
          <IceCream className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-zinc-500 font-mono">
            Error 404 • Page Not Found
          </span>
          <h1 className="text-3xl font-black text-black">
            Oops! That scoop dropped.
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
            The page you're looking for doesn't exist or may have melted away into another flavor.
          </p>
        </div>

        <div className="pt-2 space-y-2">
          <Link
            to="/"
            className="w-full py-3.5 px-5 rounded-full bg-black hover:bg-zinc-800 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Scoop Shop</span>
          </Link>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <Link
              to="/about"
              className="py-2.5 px-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-black border border-zinc-300 text-xs font-bold text-center transition-colors"
            >
              Our Story
            </Link>
            <Link
              to="/services"
              className="py-2.5 px-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-black border border-zinc-300 text-xs font-bold text-center transition-colors"
            >
              Catering
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
