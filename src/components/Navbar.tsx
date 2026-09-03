import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Navigation, IceCream } from 'lucide-react';
import { SHOP_INFO } from '../data/iceCreamData';
import BrandLogo from './BrandLogo';
import { useNavigationModal } from '../context/NavigationModalContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openNavigationModal } = useNavigationModal();

  const navLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/about' },
    { name: 'Catering & Events', path: '/services' },
    { name: 'Visit & Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Mobile Scrolling Single Line Announcement Bar */}
      <div className="md:hidden bg-black text-white py-2 overflow-hidden border-b border-zinc-800 flex items-center relative select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6 text-[11px] font-bold tracking-wide">
          <span className="inline-flex items-center gap-1.5 text-white">
            <IceCream className="w-3 h-3 text-white shrink-0" />
            Est. 2026 • Family Owned & Operated
          </span>
          <span className="text-zinc-500">•</span>
          <button
            type="button"
            onClick={openNavigationModal}
            className="inline-flex items-center gap-1 text-zinc-200 hover:text-white underline underline-offset-2 shrink-0 cursor-pointer"
          >
            <MapPin className="w-3 h-3 text-white shrink-0" />
            22912 Pontiac Trail, South Lyon, MI
          </button>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-300">
            Cones & Cups • Flurrios • Specialties • Sundaes • Milkshakes • Slushies
          </span>
          <span className="text-zinc-500">•</span>
          <span className="text-white">★ 4.9 Google Rating</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-300">Open 7 Days • 12 PM – 10 PM</span>
          <span className="text-zinc-500">•</span>

          {/* Duplicate set for seamless continuous marquee loop */}
          <span className="inline-flex items-center gap-1.5 text-white">
            <IceCream className="w-3 h-3 text-white shrink-0" />
            Est. 2026 • Family Owned & Operated
          </span>
          <span className="text-zinc-500">•</span>
          <button
            type="button"
            onClick={openNavigationModal}
            className="inline-flex items-center gap-1 text-zinc-200 hover:text-white underline underline-offset-2 shrink-0 cursor-pointer"
          >
            <MapPin className="w-3 h-3 text-white shrink-0" />
            22912 Pontiac Trail, South Lyon, MI
          </button>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-300">
            Cones & Cups • Flurrios • Specialties • Sundaes • Milkshakes • Slushies
          </span>
          <span className="text-zinc-500">•</span>
          <span className="text-white">★ 4.9 Google Rating</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-300">Open 7 Days • 12 PM – 10 PM</span>
          <span className="text-zinc-500">•</span>
        </div>
      </div>

      {/* Desktop Announcement Bar */}
      <div className="hidden md:block bg-black text-white text-xs py-2.5 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden lg:block lg:flex-1" />

          <div className="flex items-center justify-center gap-2.5 text-center mx-auto">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-white font-bold text-[11px] border border-white/20 shrink-0">
              <IceCream className="w-3 h-3 text-white" />
              Est. 2026 • Family Owned
            </span>
            <span className="text-zinc-300 font-medium">
              Handcrafted Ice Cream, Flurrios & Specialties • 22912 Pontiac Trail, South Lyon, MI 48178
            </span>
          </div>

          <div className="flex items-center justify-end gap-5 text-[11px] text-zinc-300 font-medium shrink-0 lg:flex-1">
            <button 
              type="button"
              onClick={openNavigationModal}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              title="Choose navigation app for directions"
            >
              <Navigation className="w-3 h-3 text-white" />
              <span>{SHOP_INFO.city}, {SHOP_INFO.state}</span>
            </button>
            <a 
              href={`tel:${SHOP_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-white" />
              <span>{SHOP_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo with Link to / */}
            <Link 
              to="/" 
              id="brand-logo-link"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <BrandLogo size="md" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-black tracking-tight group-hover:opacity-80 transition-opacity">
                  Ricky's
                </span>
                <span className="text-[10px] tracking-[0.35em] uppercase font-extrabold text-zinc-500 -mt-1">
                  Ice Cream
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 font-bold uppercase tracking-widest text-xs">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-all duration-150 ${
                      isActive
                        ? 'border-b-2 border-black pb-1 text-black font-extrabold'
                        : 'text-zinc-600 hover:text-black pb-1'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Actions: Visit Us (Opens Navigation App) + Order Catering */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                id="nav-visit-us-btn"
                type="button"
                onClick={openNavigationModal}
                className="px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-100 hover:bg-zinc-200 text-black border border-zinc-300 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-xs"
                title="Choose maps app for directions to 22912 Pontiac Trail"
              >
                <Navigation className="w-3.5 h-3.5 text-black" />
                <span>Visit Us</span>
              </button>

              <Link
                to="/services"
                id="nav-book-catering-btn"
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest bg-black hover:bg-zinc-800 text-white shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Order Catering
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-black hover:bg-zinc-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-zinc-100 text-black font-extrabold border-l-4 border-black'
                      : 'text-zinc-700 hover:bg-zinc-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-3 border-t border-zinc-200 space-y-2">
              <button
                id="mobile-visit-us-btn"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openNavigationModal();
                }}
                className="w-full py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-100 hover:bg-zinc-200 text-black border border-zinc-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Navigation className="w-4 h-4 text-black" />
                <span>Visit Us</span>
              </button>

              <Link
                to="/services"
                id="mobile-catering-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-3 px-4 rounded-full text-xs font-bold uppercase tracking-widest bg-black hover:bg-zinc-800 text-white"
              >
                Book Event Catering
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
