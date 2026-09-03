import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Search, LayoutGrid, Layers, Check, IceCream } from 'lucide-react';
import { MENU_CATEGORIES, MenuCategory } from '../data/menuData';
import { SHOP_INFO } from '../data/iceCreamData';
import MenuBoardView from '../components/MenuBoardView';

export default function MenuPage() {
  const [viewMode, setViewMode] = useState<'board' | 'interactive'>('board');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=22912+Pontiac+Trail,+South+Lyon,+MI+48178";

  // Filter categories based on search or selected tab
  const filteredCategories = MENU_CATEGORIES.filter((category) => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const matchesTitle = category.title.toLowerCase().includes(query);
    const matchesItems = category.items?.some(
      (item) => item.name.toLowerCase().includes(query) || item.description?.toLowerCase().includes(query)
    );
    const matchesSubsections = category.subsections?.some(
      (sub) => sub.title.toLowerCase().includes(query) || sub.items.some((it) => it.toLowerCase().includes(query))
    );
    return matchesTitle || matchesItems || matchesSubsections;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-zinc-900">
      {/* Page Header */}
      <div className="bg-white rounded-[36px] p-6 sm:p-10 border border-zinc-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 text-black text-xs font-black uppercase tracking-wider border border-zinc-300">
            <IceCream className="w-3.5 h-3.5 text-black shrink-0" />
            <span>South Lyon, Michigan • Est. 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
            Ricky’s Ice Cream Menu
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 font-normal max-w-2xl leading-relaxed">
            Fresh soft serve, Michigan hard scoops, signature Flurrios with scratch mix-ins, specialty sundaes, shakes, floats, and slushies.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-600 pt-1">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-black" />
              {SHOP_INFO.address}, {SHOP_INFO.city}, {SHOP_INFO.state} {SHOP_INFO.zip}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-black" />
              Open Daily 12 PM – 10 PM
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-black hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 text-center"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions to Shop</span>
          </a>

          {/* View Mode Toggle Buttons */}
          <div className="p-1 bg-zinc-100 rounded-full border border-zinc-200 flex items-center justify-center">
            <button
              onClick={() => setViewMode('board')}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                viewMode === 'board'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Chalkboard View</span>
            </button>
            <button
              onClick={() => setViewMode('interactive')}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                viewMode === 'interactive'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-zinc-600 hover:text-black'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area based on viewMode */}
      {viewMode === 'board' ? (
        <section className="space-y-6">
          <MenuBoardView />
        </section>
      ) : (
        <section className="space-y-8">
          {/* Search & Category Filter bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-200">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                All Items
              </button>
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-black text-white shadow-xs'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search flavors, mix-ins..."
                className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-zinc-300 text-xs font-medium placeholder-zinc-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Interactive Categories Display */}
          <div className="space-y-10">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-[32px] p-6 sm:p-8 border border-zinc-200 space-y-6 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-zinc-100">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                      {category.title}
                    </h2>
                    {category.tagline && (
                      <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mt-1">
                        {category.tagline}
                      </p>
                    )}
                  </div>
                  {category.pricingHeader && (
                    <span className="text-xs sm:text-sm font-black text-black font-mono px-3 py-1 bg-zinc-100 rounded-full border border-zinc-200">
                      {category.pricingHeader}
                    </span>
                  )}
                </div>

                {/* Sizing Pills if defined */}
                {category.sizes && category.sizes.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-black uppercase tracking-wider text-zinc-500 block">
                      Sizes & Pricing
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {category.sizes.map((size) => (
                        <div
                          key={size.name}
                          className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-center"
                        >
                          <span className="text-xs font-bold text-zinc-700 block">
                            {size.name}
                          </span>
                          <span className="text-sm font-black text-black font-mono mt-0.5 block">
                            ${size.price.toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Subsections: e.g. Dips, Soft Serve, Hard Scoop, Toppings */}
                {category.subsections && category.subsections.length > 0 && (
                  <div className="space-y-6 pt-2">
                    {category.subsections.map((sub, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="flex items-baseline justify-between gap-2">
                          <h3 className="text-sm font-black uppercase tracking-wider text-black">
                            {sub.title}
                          </h3>
                          {sub.priceNote && (
                            <span className="text-xs font-bold text-zinc-600">
                              {sub.priceNote}
                            </span>
                          )}
                        </div>
                        {sub.description && (
                          <p className="text-xs text-zinc-500 font-medium">
                            {sub.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {sub.items.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-800"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Items (Specialties, Floats, Beverages) */}
                {category.items && category.items.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between space-y-2 hover:border-black transition-colors"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="font-black text-black text-base">
                            {item.name}
                          </h4>
                          {item.price && (
                            <span className="font-mono font-black text-sm text-black">
                              ${item.price.toFixed(2)}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer Visit Shop CTA Banner */}
      <div className="bg-black text-white p-8 sm:p-12 rounded-[36px] border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xl">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
            Come Visit Us In Person
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Craving a Scoop, Flurrio, or Boston Cooler?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-medium max-w-xl">
            Stop by our shop at 22912 Pontiac Trail in South Lyon, Michigan. We are open 7 days a week with friendly service and fresh churns!
          </p>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-extrabold text-xs uppercase tracking-widest shadow-md transition-all shrink-0 flex items-center gap-2"
        >
          <Navigation className="w-4 h-4" />
          <span>Get Directions</span>
        </a>
      </div>
    </div>
  );
}
