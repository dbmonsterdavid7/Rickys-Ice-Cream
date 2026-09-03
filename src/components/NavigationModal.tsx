import React, { useState, useEffect } from 'react';
import { X, Navigation, MapPin, Copy, Check, ExternalLink, IceCream, Compass } from 'lucide-react';
import { SHOP_INFO } from '../data/iceCreamData';

interface NavigationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationModal({ isOpen, onClose }: NavigationModalProps) {
  const [copied, setCopied] = useState(false);
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const ua = navigator.userAgent || '';
      const isApple = /iPhone|iPad|iPod|Macintosh/i.test(ua);
      setIsAppleDevice(isApple);
    }
  }, []);

  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const fullAddress = `${SHOP_INFO.address}, ${SHOP_INFO.city}, ${SHOP_INFO.state} ${SHOP_INFO.zip}`;
  const encodedAddress = encodeURIComponent(fullAddress);

  const appleMapsUrl = `https://maps.apple.com/?daddr=${encodedAddress}&dirflg=d`;
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const wazeUrl = `https://waze.com/ul?q=${encodedAddress}&navigate=yes`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="nav-modal-title"
    >
      <div 
        id="navigation-app-modal"
        className="relative w-full max-w-lg bg-white rounded-t-[32px] sm:rounded-[32px] shadow-2xl border border-zinc-200 overflow-hidden max-h-[92vh] flex flex-col text-zinc-900 animate-in slide-in-from-bottom-6 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Bar Indicator */}
        <div className="sm:hidden w-12 h-1.5 bg-zinc-300 rounded-full mx-auto mt-3 mb-1" />

        {/* Modal Header */}
        <div className="px-6 py-5 bg-black text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center shadow-xs shrink-0">
              <Navigation className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <IceCream className="w-3 h-3 text-white" />
                <span>Visit Ricky's Ice Cream</span>
              </div>
              <h3 id="nav-modal-title" className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug">
                Choose Navigation App
              </h3>
            </div>
          </div>
          <button 
            id="close-nav-modal-btn"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close navigation options"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Destination Info Box */}
        <div className="p-6 bg-zinc-50 border-b border-zinc-200 space-y-2">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-xs font-black uppercase tracking-wider text-black block">
                Destination:
              </span>
              <p className="text-sm font-bold text-zinc-900">
                {SHOP_INFO.name}
              </p>
              <p className="text-xs text-zinc-600 font-medium">
                {fullAddress}
              </p>
            </div>
          </div>
        </div>

        {/* App Options List */}
        <div className="p-6 space-y-3 overflow-y-auto">
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
            Select your preferred app for turn-by-turn directions:
          </p>

          {/* 1. Apple Maps */}
          <a
            id="open-apple-maps-option"
            href={appleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className={`w-full p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 group cursor-pointer ${
              isAppleDevice 
                ? 'bg-black text-white border-black shadow-md hover:bg-zinc-800' 
                : 'bg-white hover:bg-zinc-50 text-zinc-900 border-zinc-200 hover:border-zinc-400'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                isAppleDevice ? 'bg-white text-black' : 'bg-zinc-100 text-black border border-zinc-200'
              }`}>
                {/* Apple Maps / Compass Icon */}
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className={`font-black text-sm tracking-tight ${isAppleDevice ? 'text-white' : 'text-black'}`}>
                    Apple Maps
                  </span>
                  {isAppleDevice && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white text-black">
                      Recommended
                    </span>
                  )}
                </div>
                <p className={`text-xs ${isAppleDevice ? 'text-zinc-300' : 'text-zinc-500'}`}>
                  Opens native Apple Maps on iPhone, iPad & Mac
                </p>
              </div>
            </div>
            <ExternalLink className={`w-4 h-4 shrink-0 ${isAppleDevice ? 'text-zinc-400 group-hover:text-white' : 'text-zinc-400 group-hover:text-black'}`} />
          </a>

          {/* 2. Google Maps */}
          <a
            id="open-google-maps-option"
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className={`w-full p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 group cursor-pointer ${
              !isAppleDevice 
                ? 'bg-black text-white border-black shadow-md hover:bg-zinc-800' 
                : 'bg-white hover:bg-zinc-50 text-zinc-900 border-zinc-200 hover:border-zinc-400'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                !isAppleDevice ? 'bg-white text-black' : 'bg-zinc-100 text-black border border-zinc-200'
              }`}>
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className={`font-black text-sm tracking-tight ${!isAppleDevice ? 'text-white' : 'text-black'}`}>
                    Google Maps
                  </span>
                  {!isAppleDevice && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white text-black">
                      Recommended
                    </span>
                  )}
                </div>
                <p className={`text-xs ${!isAppleDevice ? 'text-zinc-300' : 'text-zinc-500'}`}>
                  Turn-by-turn navigation & route options
                </p>
              </div>
            </div>
            <ExternalLink className={`w-4 h-4 shrink-0 ${!isAppleDevice ? 'text-zinc-400 group-hover:text-white' : 'text-zinc-400 group-hover:text-black'}`} />
          </a>

          {/* 3. Waze */}
          <a
            id="open-waze-maps-option"
            href={wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full p-4 rounded-2xl bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 hover:border-zinc-400 transition-all flex items-center justify-between gap-4 group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-zinc-100 text-black border border-zinc-200 flex items-center justify-center shrink-0">
                <Navigation className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="font-black text-sm text-black tracking-tight block">
                  Waze
                </span>
                <p className="text-xs text-zinc-500">
                  Live traffic, road hazards & community alerts
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-black shrink-0" />
          </a>

          {/* 4. Copy Address Option */}
          <div className="pt-2">
            <button
              id="copy-address-btn"
              onClick={handleCopyAddress}
              className="w-full py-3 px-4 rounded-2xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Address Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-700" />
                  <span>Copy Full Address for Another App</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-50 border-t border-zinc-200">
          <button
            id="cancel-nav-modal-btn"
            onClick={onClose}
            className="w-full py-3 rounded-full bg-white hover:bg-zinc-100 border border-zinc-300 text-zinc-800 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
