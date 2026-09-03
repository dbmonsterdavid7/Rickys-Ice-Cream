import React from 'react';
import { X, Star, CheckCircle2, AlertCircle, Utensils, Flame, IceCream } from 'lucide-react';
import { Flavor } from '../types';

interface FlavorModalProps {
  flavor: Flavor | null;
  onClose: () => void;
  onAddToFlight?: (flavor: Flavor) => void;
  isAlreadyInFlight?: boolean;
}

export default function FlavorModal({
  flavor,
  onClose,
  onAddToFlight,
  isAlreadyInFlight = false,
}: FlavorModalProps) {
  if (!flavor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="flavor-detail-modal"
        className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl border border-zinc-300 overflow-hidden max-h-[92vh] flex flex-col text-zinc-900"
      >
        {/* Close Button */}
        <button
          id="close-flavor-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-zinc-100 text-black border border-zinc-200 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto">
          {/* Header Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
            <img
              src={flavor.image}
              alt={flavor.name}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-black text-white border border-zinc-700">
                  {flavor.category}
                </span>
                {flavor.isSeasonal && (
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white text-black flex items-center gap-1 shadow-xs">
                    <IceCream className="w-3 h-3 text-black shrink-0" />
                    Seasonal Churn
                  </span>
                )}
                {flavor.dietaryTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-900/90 text-zinc-200 border border-zinc-700 backdrop-blur-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                {flavor.name}
              </h3>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 text-zinc-900">
            {/* Tagline & Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-200">
              <p className="text-black text-base font-extrabold italic">
                "{flavor.tagline}"
              </p>
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="flex text-black">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(flavor.rating)
                          ? 'fill-black text-black'
                          : 'text-zinc-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-black text-black">{flavor.rating.toFixed(1)}</span>
                <span className="text-xs text-zinc-500 font-medium">({flavor.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Story & Description */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">
                Flavor Profile & Craft
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-800 font-normal">
                {flavor.description}
              </p>
            </div>

            {/* Tasting Notes */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2.5">
                Tasting Notes
              </h4>
              <div className="flex flex-wrap gap-2">
                {flavor.tastingNotes.map((note, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-black"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Ingredients & Nutrition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
              <div>
                <h5 className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-1.5 mb-2">
                  <Utensils className="w-3.5 h-3.5 text-black" />
                  Key Ingredients
                </h5>
                <ul className="text-xs text-zinc-600 space-y-1">
                  {flavor.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black" />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-1.5 mb-2">
                  <AlertCircle className="w-3.5 h-3.5 text-black" />
                  Allergen & Energy
                </h5>
                <div className="text-xs text-zinc-600 space-y-1.5">
                  <p>
                    <strong className="text-black">Allergens:</strong>{' '}
                    {flavor.allergens.length > 0
                      ? flavor.allergens.join(', ')
                      : 'None (Made in a facility that handles nuts and dairy)'}
                  </p>
                  <p className="flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-black" />
                    <strong className="text-black">Est. Calories:</strong> ~{flavor.caloriesPerScoop} kcal per single scoop
                  </p>
                </div>
              </div>
            </div>

            {/* Pairing suggestion */}
            <div className="p-4 rounded-2xl bg-black text-white">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-1">
                Scoop Master Recommendation
              </span>
              <p className="text-xs text-zinc-200 italic leading-relaxed">
                "{flavor.pairingSuggestions}"
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-zinc-300 hover:bg-white text-black text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close
          </button>

          {onAddToFlight && (
            <button
              id={`add-to-flight-${flavor.id}-btn`}
              onClick={() => {
                onAddToFlight(flavor);
                onClose();
              }}
              disabled={isAlreadyInFlight}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                isAlreadyInFlight
                  ? 'bg-zinc-300 text-zinc-600 cursor-not-allowed opacity-90'
                  : 'bg-black hover:bg-zinc-800 text-white shadow-black/20'
              }`}
            >
              <IceCream className="w-3.5 h-3.5 text-white shrink-0" />
              <span>{isAlreadyInFlight ? 'Added to Flight!' : 'Add to 3-Scoop Flight'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
