import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Heart, ExternalLink, Check, IceCream, Navigation } from 'lucide-react';
import { SHOP_INFO } from '../data/iceCreamData';
import BrandLogo from './BrandLogo';
import { useNavigationModal } from '../context/NavigationModalContext';

export default function Footer() {
  const { openNavigationModal } = useNavigationModal();
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setEmailSubscribed(true);
    setEmailInput('');
  };

  return (
    <>
      <footer className="bg-black text-white pt-16 pb-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
            {/* Col 1: Brand & Heritage */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-3 group">
                <BrandLogo size="md" inverted={true} />
                <div>
                  <span className="text-2xl font-black tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                    Ricky's
                  </span>
                  <span className="block text-[10px] tracking-[0.35em] uppercase font-bold text-zinc-400">
                    Ice Cream
                  </span>
                </div>
              </Link>
              <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                Family-owned & operated since 2026. Handcrafted small-batch ice cream churned daily with 100% pasture-grazed dairy and bakery-fresh mix-ins.
              </p>
              <div className="pt-2">
                <a
                  href={SHOP_INFO.googleProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-semibold transition-colors"
                >
                  <IceCream className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>4.9 ★ on Google Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">
                Explore Ricky’s
              </h4>
              <ul className="space-y-2 text-xs font-medium">
                <li>
                  <Link to="/menu" className="text-zinc-400 hover:text-white transition-colors inline-block py-1">
                    Scoop Shop Menu Board
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-zinc-400 hover:text-white transition-colors inline-block py-1">
                    Our Story & Family Heritage
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-zinc-400 hover:text-white transition-colors inline-block py-1">
                    Ice Cream Cart Catering & Weddings
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-zinc-400 hover:text-white transition-colors inline-block py-1">
                    Visit Scoop Shop & Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Scoop Shop Hours & Location */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" />
                <span>Visit Us & Hours</span>
              </h4>
              <div className="space-y-1.5 text-xs text-zinc-400">
                {SHOP_INFO.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center py-0.5">
                    <span className="text-zinc-300 font-medium">{h.day}</span>
                    <span className="font-mono text-white font-bold">{h.hours}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-zinc-800 text-xs text-zinc-400 space-y-1">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                  <button
                    type="button"
                    onClick={openNavigationModal}
                    className="text-left hover:text-white transition-colors cursor-pointer"
                    title="Choose navigation app"
                  >
                    {SHOP_INFO.address}, {SHOP_INFO.city}, {SHOP_INFO.state} {SHOP_INFO.zip}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>{SHOP_INFO.phone}</span>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={openNavigationModal}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-[11px] font-bold transition-colors cursor-pointer"
                    title="Open in Maps"
                  >
                    <Navigation className="w-3 h-3 text-white" />
                    <span>Open in Maps</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Col 4: Pint Club Newsletter */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">
                The Ricky’s Pint Club
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                Receive secret seasonal flavor drop alerts, tasting kitchen invites, and special perks!
              </p>
              {emailSubscribed ? (
                <div className="p-3 bg-zinc-900 border border-zinc-700 rounded-2xl text-white text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Welcome to the Pint Club! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-full bg-white hover:bg-zinc-200 text-black font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                  >
                    Join the Club
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p className="flex items-center gap-1 text-center sm:text-left font-medium">
              © {new Date().getFullYear()} Ricky’s Ice Cream Co. • Est. 2026 • Family Owned & Operated. Made with <Heart className="w-3.5 h-3.5 text-zinc-400 fill-zinc-400 mx-0.5 inline" /> for ice cream lovers.
            </p>

            <div className="flex items-center gap-5 font-semibold">
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/services" className="hover:text-white transition-colors">Catering</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
