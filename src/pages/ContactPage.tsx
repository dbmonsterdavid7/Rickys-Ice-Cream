import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ExternalLink, Star, IceCream } from 'lucide-react';
import { SHOP_INFO, FLAVORS } from '../data/iceCreamData';

export default function ContactPage() {
  const location = useLocation();
  const prefilledState = location.state as {
    packageId?: string;
    packageName?: string;
    guestCount?: number;
    estimatedTotal?: number;
    addons?: {
      waffleCones?: boolean;
      pintFavors?: boolean;
    };
  } | null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: prefilledState?.packageName || 'Vintage Ice Cream Cart Experience',
    eventDate: '',
    guestCount: prefilledState?.guestCount ? String(prefilledState.guestCount) : '60',
    selectedFlavors: [] as string[],
    message: prefilledState?.estimatedTotal 
      ? `Estimated online quote: ~$${prefilledState.estimatedTotal}. Notes on custom requests: ` 
      : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledState?.packageName) {
      setFormData((prev) => ({
        ...prev,
        serviceType: prefilledState.packageName || prev.serviceType,
        guestCount: prefilledState.guestCount ? String(prefilledState.guestCount) : prev.guestCount,
      }));
    }
  }, [prefilledState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate quick processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#000000', '#52525B', '#A1A1AA', '#E4E4E7', '#FFFFFF'],
      });
    }, 600);
  };

  const handleFlavorToggle = (flavorName: string) => {
    setFormData((prev) => {
      const exists = prev.selectedFlavors.includes(flavorName);
      if (exists) {
        return {
          ...prev,
          selectedFlavors: prev.selectedFlavors.filter((f) => f !== flavorName),
        };
      }
      if (prev.selectedFlavors.length < 5) {
        return {
          ...prev,
          selectedFlavors: [...prev.selectedFlavors, flavorName],
        };
      }
      return prev;
    });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 text-zinc-900">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-zinc-100/80 via-[#FAFAFA] to-transparent pt-12 pb-16 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 text-black text-xs font-black uppercase tracking-wider border border-zinc-300">
              <IceCream className="w-3.5 h-3.5 text-black shrink-0" />
              <span>We’d Love to Connect</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight">
              Visit our scoop shop or plan an event.
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Have questions about flavors, allergens, catering availability, or custom event orders? Send us a message or stop by our counter!
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Shop Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Col: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-zinc-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
                  Direct Inquiries
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-black mt-1">
                  Send a Message or Catering Request
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-normal">
                  We respond to all requests within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-[28px] bg-zinc-50 border border-zinc-200 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-black text-white mx-auto flex items-center justify-center shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-black">
                    Thank You, {formData.name || 'Friend'}!
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received by Ricky’s team. We will review your event date ({formData.eventDate || 'Upcoming Date'}) and reach out with a detailed confirmation shortly!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        serviceType: 'General Question / Shop Inquiry',
                        eventDate: '',
                        guestCount: '60',
                        selectedFlavors: [],
                        message: '',
                      });
                    }}
                    className="px-8 py-3.5 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-zinc-300 focus:border-black focus:ring-1 focus:ring-black text-sm outline-none transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-zinc-300 focus:border-black focus:ring-1 focus:ring-black text-sm outline-none transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-zinc-300 focus:border-black focus:ring-1 focus:ring-black text-sm outline-none transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                        Inquiry Topic / Service
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-zinc-300 focus:border-black focus:ring-1 focus:ring-black text-sm outline-none transition-all bg-white text-black font-medium"
                      >
                        <option value="General Question / Shop Inquiry">General Question / Shop Inquiry</option>
                        <option value="Vintage Ice Cream Cart Experience">Vintage Ice Cream Cart Experience</option>
                        <option value="The Deluxe Sundae & Topping Bar">The Deluxe Sundae & Topping Bar</option>
                        <option value="Party Pint Packs & Flight Drops">Party Pint Packs & Flight Drops</option>
                        <option value="Custom Wedding / VIP Flavor Collaboration">Custom Wedding / VIP Flavor Collab</option>
                        <option value="Wholesale & Grocery Pints">Wholesale & Grocery Pints</option>
                      </select>
                    </div>
                  </div>

                  {/* Event Date & Guest Count (If Catering) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                        Estimated Event Date
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:border-black text-xs sm:text-sm outline-none transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                        Estimated Guests
                      </label>
                      <input
                        type="number"
                        min="5"
                        max="2000"
                        placeholder="e.g. 75"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:border-black text-xs sm:text-sm outline-none transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Optional Flavors of Interest */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-black mb-2">
                      Flavors & Treats You’d Like Featured (Pick up to 5)
                    </label>
                    <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-3 rounded-2xl bg-zinc-50 border border-zinc-200">
                      {[
                        'Michigan Pothole',
                        'Superman',
                        'Mint Chocolate Chip',
                        'Cotton Candy Hard Scoop',
                        'Butter Pecan (Sugar Free)',
                        'Vanilla Hard Scoop',
                        'Chocolate Soft Serve',
                        'Vanilla Soft Serve',
                        'Chocolate/Vanilla Twist',
                        'Flurrio with Scratch Mix-Ins',
                        'Banana Split Station',
                        'Strawberry Shortcake Sundae',
                        'Boston Cooler Float Station',
                      ].map((flavorName) => {
                        const isSelected = formData.selectedFlavors.includes(flavorName);
                        return (
                          <button
                            type="button"
                            key={flavorName}
                            onClick={() => handleFlavorToggle(flavorName)}
                            className={`px-3 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-black text-white font-black shadow-xs'
                                : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-300 font-medium'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {flavorName}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
                      Event Location & Details / Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your venue, special dietary needs, or anything we can do to make it special..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-zinc-300 focus:border-black text-sm outline-none transition-all bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-6 rounded-full bg-black hover:bg-zinc-800 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>{submitting ? 'Sending Request...' : 'Send Inquiry to Ricky’s Team'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Col: Scoop Shop Info, Hours & Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Google Business Profile Card */}
            <div className="bg-black text-white rounded-[32px] p-6 sm:p-8 border border-zinc-800 space-y-6 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-zinc-400">
                  Google Business Profile
                </span>
                <span className="flex items-center gap-1 text-white font-black text-xs">
                  <Star className="w-3.5 h-3.5 fill-white text-white" />
                  4.9 Rating
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  {SHOP_INFO.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 italic font-medium">
                  "{SHOP_INFO.tagline}"
                </p>
              </div>

              <div className="space-y-3 text-xs text-zinc-300 font-medium">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Scoop Shop Address</strong>
                    <span>{SHOP_INFO.address}, {SHOP_INFO.city}, {SHOP_INFO.state} {SHOP_INFO.zip}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white shrink-0" />
                  <div>
                    <strong className="block text-white">Phone</strong>
                    <a href={`tel:${SHOP_INFO.phone}`} className="hover:text-zinc-300">
                      {SHOP_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white shrink-0" />
                  <div>
                    <strong className="block text-white">Email</strong>
                    <a href={`mailto:${SHOP_INFO.email}`} className="hover:text-zinc-300">
                      {SHOP_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Link to Google Business Profile */}
              <div className="pt-2">
                <a
                  href={SHOP_INFO.googleProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <IceCream className="w-3.5 h-3.5 text-black shrink-0" />
                  <span>Open Google Business Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-600" />
                </a>
              </div>
            </div>

            {/* Weekly Hours */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-zinc-200 shadow-sm space-y-4">
              <h4 className="text-lg font-black text-black flex items-center gap-2">
                <Clock className="w-4 h-4 text-black" />
                <span>Shop Hours</span>
              </h4>

              <div className="space-y-2 text-xs">
                {SHOP_INFO.hours.map((h, i) => (
                  <div
                    key={i}
                    className={`flex justify-between py-1.5 px-3 rounded-xl ${
                      h.isWeekend ? 'bg-zinc-100 font-bold text-black' : 'text-zinc-600'
                    }`}
                  >
                    <span>{h.day}</span>
                    <span className="font-mono text-black font-bold">{h.hours}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-zinc-500 pt-2 border-t border-zinc-200 font-medium">
                {SHOP_INFO.holidayNote}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
