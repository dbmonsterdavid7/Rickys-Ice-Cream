import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Clock, IceCream, Navigation, Utensils, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS, SHOP_INFO } from '../data/iceCreamData';
import { MENU_CATEGORIES } from '../data/menuData';
import MenuBoardView from '../components/MenuBoardView';

export default function HomePage() {
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=22912+Pontiac+Trail,+South+Lyon,+MI+48178";
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const reviewScrollRef = useRef<HTMLDivElement>(null);

  const handleReviewScroll = () => {
    if (reviewScrollRef.current) {
      const scrollLeft = reviewScrollRef.current.scrollLeft;
      const width = reviewScrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex >= 0 && newIndex < TESTIMONIALS.length && newIndex !== activeReviewIndex) {
        setActiveReviewIndex(newIndex);
      }
    }
  };

  const scrollToReview = (index: number) => {
    if (reviewScrollRef.current) {
      const width = reviewScrollRef.current.offsetWidth;
      reviewScrollRef.current.scrollTo({
        left: index * width,
        behavior: 'smooth'
      });
      setActiveReviewIndex(index);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 text-zinc-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-8 lg:pt-14 lg:pb-10 bg-gradient-to-b from-zinc-100/70 via-[#FAFAFA] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-zinc-900">
              <div className="flex justify-center sm:justify-start">
                <div className="inline-flex items-center justify-center text-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 text-black text-xs font-black uppercase tracking-wider border border-zinc-300">
                  <IceCream className="w-3.5 h-3.5 text-black shrink-0" />
                  <span className="text-center">South Lyon's Favorite Ice Cream Shop • Est. 2026</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[1.12]">
                Ice cream, Flurrios & specialty treats made with pure passion.
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl font-normal">
                Visit our family-owned shop on Pontiac Trail in South Lyon. Churning fresh soft-serve, beloved Michigan hard scoops, Flurrios with over 20 scratch mix-ins, decadent specialty sundaes, shakes, floats, and slushies!
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
                <a
                  href="#flavor-menu"
                  className="w-full sm:w-auto justify-center px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-widest shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer text-center"
                >
                  <Utensils className="w-4 h-4" />
                  <span>Explore Menu</span>
                </a>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center px-8 py-4 rounded-full bg-white hover:bg-zinc-50 text-black border border-zinc-300 font-extrabold text-xs uppercase tracking-widest transition-all shadow-xs flex items-center gap-2 text-center"
                >
                  <Navigation className="w-4 h-4 text-black" />
                  <span>Visit Us • Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right Col: Hero Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Image */}
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-black aspect-[4/5] transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=85"
                    alt="Ricky's Ice Cream & Treats"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] uppercase font-black tracking-widest text-zinc-300">
                      House Favorite
                    </span>
                    <h3 className="text-2xl font-black text-white">
                      Banana Split & Custom Flurrios
                    </h3>
                    <p className="text-xs text-zinc-300 mt-1">
                      Made fresh to order with hot fudge, brownies & whipped cream
                    </p>
                  </div>
                </div>

                {/* Floating Location Badge */}
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-3xl shadow-xl border border-zinc-200 max-w-[240px] hidden sm:flex items-center gap-3 hover:border-black transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-black block">
                      22912 Pontiac Trail
                    </span>
                    <span className="text-[11px] text-zinc-600 hover:text-black font-extrabold">
                      South Lyon, MI →
                    </span>
                  </div>
                </a>

                {/* Floating Hours Badge */}
                <div className="absolute -top-4 -right-4 bg-black text-white p-3.5 rounded-3xl shadow-xl border border-zinc-800 flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  <div className="text-xs">
                    <span className="font-extrabold block text-white">Open Today</span>
                    <span className="text-[11px] text-zinc-300">12 PM – 10 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Category Jump Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-10">
        <div className="bg-white p-4 sm:p-6 rounded-[28px] border border-zinc-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-black">
              Menu Highlights:
            </span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-extrabold">
            {MENU_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href="#flavor-menu"
                className="px-3.5 py-1.5 rounded-full bg-zinc-100 hover:bg-black hover:text-white transition-all text-zinc-800 border border-zinc-200"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Board Section (Directly from Board Image) */}
      <section id="flavor-menu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-zinc-200">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
              Fresh At The Shop
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black mt-1">
              Ice Cream Menu
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-normal">
              Fresh soft-serve, Michigan hard scoops, Flurrios, specialties, sundaes, shakes, slushies, and floats!
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-3 w-full md:w-auto">
            <Link
              to="/menu"
              className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-black text-xs font-extrabold uppercase tracking-wider border border-zinc-300 transition-all flex items-center gap-1.5 text-center"
            >
              <span>Interactive Menu Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Embedded Menu Board View */}
        <MenuBoardView />
      </section>

      {/* Specialties & Flurrio Feature Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-[36px] p-8 sm:p-12 text-white border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-wider border border-white/20">
                <IceCream className="w-3.5 h-3.5 text-white shrink-0" />
                House Specialties & Flurrios
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Try the Banana Split, Cookie Dough Monster, or Gold Mine.
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Every specialty creation is hand-crafted with generous toppings, warm fudge, scratch-baked brownies, and fresh whipped cream. Or build your own Flurrio with your favorite candies and syrups.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Visit Shop at 22912 Pontiac Trail</span>
                </a>
                <Link
                  to="/menu"
                  className="text-xs text-zinc-300 hover:text-white font-extrabold underline underline-offset-4"
                >
                  View full specialty list ($5.89 each) →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 text-center space-y-3 w-full max-w-xs">
                <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center mx-auto">
                  <IceCream className="w-7 h-7" />
                </div>
                <h4 className="font-black text-white text-base">
                  Specialties • $5.89
                </h4>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                  Banana Split • Cookie Dough Monster • Gold Mine • Parfait • Strawberry Shortcake • Superbowl • Tin Roof • Trash Can
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Love & Google Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-zinc-200 space-y-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
                Community Testimonials
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-black mt-1">
                Loved by Families Across South Lyon
              </h2>
            </div>
            <a
              href={SHOP_INFO.googleProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-black text-xs font-extrabold uppercase tracking-wider border border-zinc-300 transition-all flex items-center gap-2 self-start sm:self-auto"
            >
              <span>4.9 ★ Rating on Google</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Carousel View (1 review displayed at a time) */}
          <div className="block md:hidden space-y-4">
            <div
              ref={reviewScrollRef}
              onScroll={handleReviewScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth -mx-2 px-2"
            >
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="w-full shrink-0 snap-center px-1"
                >
                  <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 space-y-4 flex flex-col justify-between min-h-[220px]">
                    <div className="space-y-2.5">
                      <div className="flex items-center">
                        <div className="flex items-center gap-1 text-black">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-black text-black" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic font-medium">
                        "{t.comment}"
                      </p>
                    </div>

                    <div className="pt-3 border-t border-zinc-200 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-extrabold text-black block">{t.author}</span>
                        <span className="text-[11px] text-zinc-500">{t.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Carousel Controls */}
            <div className="flex items-center justify-between pt-1 px-1">
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToReview(idx)}
                    aria-label={`Go to review ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeReviewIndex === idx ? 'w-6 bg-black' : 'w-2 bg-zinc-300 hover:bg-zinc-400'
                    }`}
                  />
                ))}
                <span className="text-[11px] text-zinc-500 font-bold ml-2">
                  {activeReviewIndex + 1} of {TESTIMONIALS.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollToReview(Math.max(0, activeReviewIndex - 1))}
                  disabled={activeReviewIndex === 0}
                  aria-label="Previous review"
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                    activeReviewIndex === 0
                      ? 'border-zinc-200 text-zinc-300 cursor-not-allowed'
                      : 'border-zinc-300 text-black hover:bg-zinc-100'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToReview(Math.min(TESTIMONIALS.length - 1, activeReviewIndex + 1))}
                  disabled={activeReviewIndex === TESTIMONIALS.length - 1}
                  aria-label="Next review"
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                    activeReviewIndex === TESTIMONIALS.length - 1
                      ? 'border-zinc-200 text-zinc-300 cursor-not-allowed'
                      : 'border-zinc-300 text-black hover:bg-zinc-100'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-black">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black text-black" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-700 leading-relaxed italic font-medium">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-extrabold text-black block">{t.author}</span>
                    <span className="text-[11px] text-zinc-500">{t.location}</span>
                  </div>
                  <span className="text-[10px] font-extrabold text-black uppercase bg-zinc-200/80 px-2.5 py-1 rounded-full">
                    {t.favoriteFlavor}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Location & Hours Map Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black text-white rounded-[36px] p-8 sm:p-12 border border-zinc-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-wider border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-white" />
              Visit The Shop
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              22912 Pontiac Trail, South Lyon, MI 48178
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed font-normal">
              Conveniently located in South Lyon with easy parking, quick window and counter service, and outdoor seating. Open 7 days a week!
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-zinc-800">
                <span className="text-zinc-400">Monday – Thursday</span>
                <span className="font-bold text-white">12:00 PM – 10:00 PM</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-zinc-800">
                <span className="text-zinc-400">Friday – Saturday</span>
                <span className="font-bold text-white">11:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-zinc-800">
                <span className="text-zinc-400">Sunday</span>
                <span className="font-bold text-white">11:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Maps</span>
              </a>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-extrabold text-xs uppercase tracking-wider transition-all"
              >
                Contact Shop
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-zinc-800 h-72 sm:h-80 relative bg-zinc-900">
            <iframe
              title="Ricky's Ice Cream Location"
              src="https://maps.google.com/maps?q=22912+Pontiac+Trail,+South+Lyon,+MI+48178&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
