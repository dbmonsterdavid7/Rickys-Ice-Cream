import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Users, Check, ArrowRight, IceCream, Plus } from 'lucide-react';
import { CATERING_PACKAGES } from '../data/iceCreamData';

export default function CateringEstimator() {
  const navigate = useNavigate();
  const [selectedPkgId, setSelectedPkgId] = useState(CATERING_PACKAGES[0].id);
  const [guests, setGuests] = useState(75);
  const [includeWaffleCones, setIncludeWaffleCones] = useState(true);
  const [includePintFavors, setIncludePintFavors] = useState(false);

  const activePackage = CATERING_PACKAGES.find((p) => p.id === selectedPkgId) || CATERING_PACKAGES[0];

  // Pricing calculations
  const guestCost = guests * activePackage.pricePerGuest;
  const waffleCost = includeWaffleCones ? guests * 1.25 : 0;
  const pintFavorCost = includePintFavors ? guests * 5.00 : 0;
  const totalEstimated = activePackage.baseFee + guestCost + waffleCost + pintFavorCost;

  const handleProceedToInquiry = () => {
    navigate('/contact', {
      state: {
        packageId: activePackage.id,
        packageName: activePackage.name,
        guestCount: guests,
        estimatedTotal: totalEstimated,
        addons: {
          waffleCones: includeWaffleCones,
          pintFavors: includePintFavors,
        },
      },
    });
  };

  return (
    <div 
      id="catering-calculator"
      className="bg-black text-white rounded-[32px] p-6 sm:p-10 border border-zinc-800 shadow-2xl space-y-8"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-black uppercase tracking-wider mb-2 border border-zinc-700">
            <Calculator className="w-3.5 h-3.5 text-white" />
            Instant Event Calculator
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Estimate Your Ice Cream Catering
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-normal">
            Configure your party size and package to see transparent estimates with zero hidden fees.
          </p>
        </div>

        <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 text-right shrink-0">
          <span className="text-[11px] uppercase tracking-widest text-zinc-400 block font-bold">
            Estimated Total
          </span>
          <span className="text-3xl sm:text-4xl font-black text-white font-mono">
            ${totalEstimated.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
          </span>
          <span className="block text-[10px] text-zinc-400 mt-0.5 font-medium">
            ~${(totalEstimated / guests).toFixed(2)} per guest
          </span>
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Col: Package Selection & Add-ons */}
        <div className="space-y-6">
          <div>
            <label className="text-xs font-black uppercase tracking-wider text-zinc-300 block mb-3">
              1. Choose Service Style
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {CATERING_PACKAGES.map((pkg) => {
                const isSelected = pkg.id === selectedPkgId;
                return (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-zinc-900 border-white text-white shadow-md'
                        : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-black text-sm text-white">
                        {pkg.name}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-white shrink-0" />}
                    </div>
                    <span className="block text-[11px] text-zinc-400 line-clamp-1">
                      {pkg.idealFor}
                    </span>
                    <span className="text-xs font-mono font-bold text-white mt-1 block">
                      ${pkg.pricePerGuest.toFixed(2)}/guest + ${pkg.baseFee} base
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <label className="text-xs font-black uppercase tracking-wider text-zinc-300 block mb-3">
              2. Optional Upgrades
            </label>
            <div className="space-y-2.5">
              <label 
                className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:bg-zinc-900 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeWaffleCones}
                    onChange={(e) => setIncludeWaffleCones(e.target.checked)}
                    className="w-4 h-4 rounded text-black focus:ring-white bg-zinc-900 border-zinc-700"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Fresh Hand-Pressed Waffle Cones
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      Pressed on-site with cinnamon & brown sugar
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-white font-bold shrink-0">
                  +$1.25/guest
                </span>
              </label>

              <label 
                className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:bg-zinc-900 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includePintFavors}
                    onChange={(e) => setIncludePintFavors(e.target.checked)}
                    className="w-4 h-4 rounded text-black focus:ring-white bg-zinc-900 border-zinc-700"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Individual Take-Home Favor Pints
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      Personalized souvenir pints for each attendee
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-white font-bold shrink-0">
                  +$5.00/guest
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Col: Guest Slider & Summary */}
        <div className="space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-black uppercase tracking-wider text-zinc-300">
                3. Number of Guests
              </label>
              <span className="text-lg font-black text-white font-mono">
                {guests} Guests
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="500"
              step="5"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1">
              <span>15 Guests (Intimate)</span>
              <span>250 Guests</span>
              <span>500+ (Festival)</span>
            </div>
          </div>

          {/* Cost Breakdown Details */}
          <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 space-y-2 text-xs">
            <h5 className="font-black text-white uppercase tracking-wider text-[11px] pb-2 border-b border-zinc-800">
              Pricing Breakdown ({activePackage.name})
            </h5>
            <div className="flex justify-between text-zinc-400">
              <span>Base Equipment & Setup:</span>
              <span className="text-white font-mono">${activePackage.baseFee}</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>{guests} Guests @ ${activePackage.pricePerGuest.toFixed(2)}/ea:</span>
              <span className="text-white font-mono">${guestCost.toFixed(2)}</span>
            </div>
            {includeWaffleCones && (
              <div className="flex justify-between text-zinc-400">
                <span>Waffle Cones ({guests} @ $1.25):</span>
                <span className="text-white font-mono">${waffleCost.toFixed(2)}</span>
              </div>
            )}
            {includePintFavors && (
              <div className="flex justify-between text-zinc-400">
                <span>Pint Favors ({guests} @ $5.00):</span>
                <span className="text-white font-mono">${pintFavorCost.toFixed(2)}</span>
              </div>
            )}
            <div className="pt-2 border-t border-zinc-800 flex justify-between font-black text-white text-sm">
              <span>Estimated Investment:</span>
              <span className="text-white font-mono">${totalEstimated.toFixed(0)}</span>
            </div>
          </div>

          {/* CTA Proceed Button */}
          <button
            id="estimator-proceed-btn"
            onClick={handleProceedToInquiry}
            className="w-full py-4 px-6 rounded-full bg-white hover:bg-zinc-200 text-black font-black text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Lock In Date with This Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
