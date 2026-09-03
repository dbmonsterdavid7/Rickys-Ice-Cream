import React, { useState } from 'react';
import { X, Trash2, Check, IceCream, Plus, Info } from 'lucide-react';
import { FLAVORS } from '../data/iceCreamData';
import { Flavor } from '../types';

interface ScoopFlightBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFlavors: Flavor[];
  onRemoveFlavor: (flavorId: string) => void;
  onAddFlavor: (flavor: Flavor) => void;
  onClearFlight: () => void;
}

export default function ScoopFlightBuilder({
  isOpen,
  onClose,
  selectedFlavors,
  onRemoveFlavor,
  onAddFlavor,
  onClearFlight,
}: ScoopFlightBuilderProps) {
  const [copiedNotification, setCopiedNotification] = useState(false);

  if (!isOpen) return null;

  const maxSlots = 3;
  const isFull = selectedFlavors.length >= maxSlots;

  const handleShareFlight = () => {
    const names = selectedFlavors.map((f) => f.name).join(', ');
    const shareText = `My custom 3-Scoop Flight at Ricky's Ice Cream (Est. 2026): ${names}. Try it out!`;
    navigator.clipboard.writeText(shareText);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="flight-builder-modal"
        className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl border border-zinc-300 overflow-hidden max-h-[92vh] flex flex-col text-zinc-900"
      >
        {/* Header */}
        <div className="p-6 bg-black text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center">
              <IceCream className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">
                3-Scoop Tasting Flight Builder
              </h3>
              <p className="text-xs text-zinc-400 font-medium">
                Mix and match 3 handcrafted flavors for the ultimate tasting tray.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-zinc-700"
            aria-label="Close Flight Builder"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Flight Tray Preview (3 Slots) */}
          <div className="p-6 rounded-3xl bg-zinc-50 border-2 border-dashed border-zinc-300 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-black">
                  Your Flight Tray ({selectedFlavors.length}/{maxSlots})
                </span>
                {isFull && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-black text-white">
                    Ready to Taste!
                  </span>
                )}
              </div>

              {selectedFlavors.length > 0 && (
                <button
                  onClick={onClearFlight}
                  className="text-xs text-zinc-500 hover:text-black flex items-center gap-1 font-bold cursor-pointer transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {/* 3 Slots Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[0, 1, 2].map((index) => {
                const flavor = selectedFlavors[index];
                return (
                  <div
                    key={index}
                    className={`rounded-2xl p-4 flex flex-col items-center justify-center text-center relative transition-all min-h-[140px] ${
                      flavor
                        ? 'bg-white border-2 border-black shadow-sm'
                        : 'bg-zinc-100 border border-dashed border-zinc-300 text-zinc-400'
                    }`}
                  >
                    {flavor ? (
                      <>
                        <button
                          onClick={() => onRemoveFlavor(flavor.id)}
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black text-white hover:bg-zinc-800 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
                          title="Remove from flight"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        <img
                          src={flavor.image}
                          alt={flavor.name}
                          className="w-12 h-12 rounded-full object-cover mb-2 border border-zinc-200"
                        />
                        <span className="text-xs font-black text-black line-clamp-2">
                          {flavor.name}
                        </span>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mt-1">
                          Scoop {index + 1}
                        </span>
                      </>
                    ) : (
                      <div className="space-y-1">
                        <div className="w-10 h-10 rounded-full bg-zinc-200 text-zinc-500 flex items-center justify-center mx-auto mb-1">
                          <Plus className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-zinc-500 block">
                          Slot #{index + 1}
                        </span>
                        <span className="text-[10px] text-zinc-400">
                          Select a flavor below
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Available Flavors Palette */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-3">
              Tap to Add Handcrafted Flavors
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-60 overflow-y-auto pr-1">
              {FLAVORS.map((f) => {
                const isSelected = selectedFlavors.some((sf) => sf.id === f.id);
                return (
                  <button
                    key={f.id}
                    onClick={() => {
                      if (isSelected) {
                        onRemoveFlavor(f.id);
                      } else if (!isFull) {
                        onAddFlavor(f);
                      }
                    }}
                    disabled={!isSelected && isFull}
                    className={`flex items-center gap-3 p-2.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-black text-white border-black shadow-xs'
                        : isFull
                        ? 'bg-zinc-100 text-zinc-400 border-zinc-200 opacity-60 cursor-not-allowed'
                        : 'bg-white hover:bg-zinc-50 text-black border-zinc-200 hover:border-black'
                    }`}
                  >
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-10 h-10 rounded-xl object-cover shrink-0"
                    />
                    <div className="grow min-w-0">
                      <p className="text-xs font-black truncate">{f.name}</p>
                      <p className={`text-[10px] truncate ${isSelected ? 'text-zinc-300' : 'text-zinc-500'}`}>
                        {f.tagline}
                      </p>
                    </div>
                    <div className="shrink-0">
                      {isSelected ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-zinc-600" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pro Tip */}
          <div className="p-3.5 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-start gap-2.5 text-xs text-zinc-700">
            <Info className="w-4 h-4 text-black shrink-0 mt-0.5" />
            <p>
              <strong className="text-black">Flight Pairing Secret:</strong> Try pairing a dark chocolate, a salty-caramel, and a bright dairy-free fruit sorbet for peak palate contrast!
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-zinc-50 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleShareFlight}
              disabled={selectedFlavors.length === 0}
              className="px-4 py-2 rounded-full border border-zinc-300 hover:bg-white text-black text-xs font-extrabold uppercase tracking-wider transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              {copiedNotification ? '✓ Flight Copied!' : 'Copy Flight Link'}
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-black uppercase tracking-widest transition-all cursor-pointer shadow-md"
          >
            {isFull ? 'Done — Save Flight' : 'Close Builder'}
          </button>
        </div>
      </div>
    </div>
  );
}
