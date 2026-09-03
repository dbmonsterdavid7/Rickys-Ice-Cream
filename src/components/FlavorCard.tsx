import React from 'react';
import { Star, Plus, Eye, IceCream } from 'lucide-react';
import { Flavor } from '../types';

interface FlavorCardProps {
  key?: React.Key;
  flavor: Flavor;
  onSelect: (flavor: Flavor) => void;
  onAddToFlight?: (flavor: Flavor) => void;
  isInFlight?: boolean;
}

export default function FlavorCard({
  flavor,
  onSelect,
  onAddToFlight,
  isInFlight = false,
}: FlavorCardProps) {
  return (
    <div
      id={`flavor-card-${flavor.id}`}
      className="group relative bg-white hover:bg-zinc-50/50 rounded-[32px] border border-zinc-200 hover:border-black shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Card Image Container */}
      <div 
        className="relative h-56 w-full overflow-hidden bg-zinc-100 cursor-pointer"
        onClick={() => onSelect(flavor)}
      >
        <img
          src={flavor.image}
          alt={flavor.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-black text-white backdrop-blur-xs">
            {flavor.category}
          </span>
          {flavor.isSeasonal && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-white text-black border border-black flex items-center gap-1 shadow-xs">
              <IceCream className="w-2.5 h-2.5 text-black shrink-0" />
              Seasonal
            </span>
          )}
        </div>

        {/* Quick view hover icon */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-black uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-xs transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-md">
            <Eye className="w-3.5 h-3.5 text-black" />
            Quick View
          </span>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 sm:p-6 flex flex-col justify-between grow space-y-4">
        <div className="space-y-2">
          {/* Rating & Dietary */}
          <div className="flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1 text-black font-extrabold">
              <Star className="w-3.5 h-3.5 fill-black text-black" />
              <span>{flavor.rating.toFixed(1)}</span>
              <span className="text-zinc-400 font-normal">({flavor.reviewsCount})</span>
            </div>
            <div className="flex gap-1">
              {flavor.dietaryTags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-100 text-zinc-700 border border-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(flavor)}
            className="text-lg sm:text-xl font-black text-black group-hover:opacity-80 transition-opacity cursor-pointer leading-snug"
          >
            {flavor.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed font-normal">
            {flavor.tagline}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-zinc-200 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(flavor)}
            className="text-xs font-black uppercase tracking-wider text-black hover:text-zinc-600 transition-colors cursor-pointer"
          >
            Story & Notes →
          </button>

          {onAddToFlight && (
            <button
              id={`card-add-flight-${flavor.id}`}
              onClick={() => onAddToFlight(flavor)}
              disabled={isInFlight}
              className={`px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 ${
                isInFlight
                  ? 'bg-black text-white cursor-default'
                  : 'bg-zinc-100 hover:bg-black hover:text-white text-black border border-zinc-300 active:scale-95'
              }`}
              title={isInFlight ? 'Already in flight' : 'Add to 3-Scoop Flight'}
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="text-[10px]">{isInFlight ? 'In Flight' : '+ Flight'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
