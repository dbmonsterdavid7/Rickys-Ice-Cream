import React from 'react';
import { MENU_CATEGORIES } from '../data/menuData';
import { Star, Navigation } from 'lucide-react';
import { useNavigationModal } from '../context/NavigationModalContext';

export default function MenuBoardView() {
  const { openNavigationModal } = useNavigationModal();
  const conesCups = MENU_CATEGORIES.find((c) => c.id === 'cones-cups')!;
  const flurrios = MENU_CATEGORIES.find((c) => c.id === 'flurrios')!;
  const specialties = MENU_CATEGORIES.find((c) => c.id === 'specialties')!;
  const sundaes = MENU_CATEGORIES.find((c) => c.id === 'sundaes')!;
  const milkshakes = MENU_CATEGORIES.find((c) => c.id === 'milkshakes')!;
  const slushies = MENU_CATEGORIES.find((c) => c.id === 'slushies')!;
  const floats = MENU_CATEGORIES.find((c) => c.id === 'floats')!;
  const beverages = MENU_CATEGORIES.find((c) => c.id === 'beverages')!;

  const flurrioToppingsCol1 = flurrios.subsections?.[0]?.items.slice(0, 11) || [];
  const flurrioToppingsCol2 = flurrios.subsections?.[0]?.items.slice(11) || [];

  return (
    <div className="bg-black text-white p-4 sm:p-8 rounded-[32px] border border-zinc-800 shadow-2xl space-y-6">
      {/* Board Top Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block">
            Ricky's Ice Cream • South Lyon, MI
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Official Shop Menu Board
          </h2>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <button
            type="button"
            onClick={openNavigationModal}
            className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-bold hover:text-white transition-colors cursor-pointer"
            title="Directions to 22912 Pontiac Trail"
          >
            22912 Pontiac Trail
          </button>
          <button
            type="button"
            onClick={openNavigationModal}
            className="px-3 py-1 rounded-full bg-white text-black font-black uppercase tracking-wider hover:bg-zinc-200 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Navigation className="w-3 h-3" />
            <span>Visit Us</span>
          </button>
        </div>
      </div>

      {/* Grid Row 1: Cones & Cups, Flurrios, Specialties */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Card 1: CONES & CUPS */}
        <div className="bg-black rounded-3xl border-2 border-white p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white border-b-2 border-white/20 pb-2">
              Cones & Cups
            </h3>

            {/* Pricing Line */}
            <div className="text-xs sm:text-sm font-black text-white leading-relaxed">
              <p>BABY CONE OR CUP $2.00 • SMALL CONE OR CUP $3.19</p>
              <p>MEDIUM CONE OR CUP $3.69 • LARGE CONE OR CUP $4.19</p>
            </div>

            {/* Dips + Toppings */}
            <div className="space-y-1.5 pt-2 border-t border-zinc-800">
              <h4 className="text-xs font-black uppercase tracking-wider text-zinc-200">
                DIPS + TOPPINGS AVAILABLE ON CONES AND CUPS FOR $0.75
              </h4>
              <p className="text-xs text-zinc-300 uppercase leading-relaxed font-semibold">
                BIRTHDAY CAKE CONE DIP • BLUE RASPBERRY CONE DIP • CHERRY • CHOCOLATE • COTTON CANDY • NUTS • SPRINKLES • TOASTED COCONUT
              </p>
            </div>

            {/* Soft Serve Flavors */}
            <div className="space-y-1 pt-2 border-t border-zinc-800">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                SOFT SERVE FLAVORS:
              </h4>
              <p className="text-xs text-zinc-300 font-bold uppercase">
                CHOCOLATE, VANILLA, (TWIST AVAILABLE)
              </p>
            </div>

            {/* Hard Scoop Flavors */}
            <div className="space-y-1 pt-2 border-t border-zinc-800">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                HARD SCOOP FLAVORS:
              </h4>
              <p className="text-xs text-zinc-300 font-bold uppercase leading-relaxed">
                COTTON CANDY, VANILLA, MINT CHOCOLATE CHIP, SUPERMAN, MICHIGAN POTHOLE, BUTTER PECAN (SUGAR FREE)
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: FLURRIOS */}
        <div className="bg-black rounded-3xl border-2 border-white p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="border-b-2 border-white/20 pb-2 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
                Flurrios
              </h3>
              <span className="text-xs sm:text-sm font-black text-white font-mono">
                MINI $4.39 • SMALL $5.29 • MEDIUM $5.79 • LARGE $6.49
              </span>
            </div>

            <p className="text-[11px] text-zinc-300 font-bold uppercase tracking-wide">
              ALL FLURRIOS COME WITH ONE FREE MIX-IN. ADDITIONAL MIX-INS OR TOPPINGS AVAILABLE.
            </p>

            {/* Mix-ins Header */}
            <div className="pt-2 border-t border-zinc-800">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                TOPPINGS & MIX-INS
              </h4>
              <span className="text-[11px] font-bold text-zinc-400 block mb-2">
                ALL TOPPINGS AND MIX-INS ARE $0.75
              </span>

              {/* 2-Column Toppings List */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs font-bold uppercase text-zinc-300">
                <div className="space-y-1">
                  {flurrioToppingsCol1.map((item) => (
                    <div key={item} className="truncate">• {item}</div>
                  ))}
                </div>
                <div className="space-y-1">
                  {flurrioToppingsCol2.map((item) => (
                    <div key={item} className="truncate">• {item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: SPECIALTIES */}
        <div className="bg-black rounded-3xl border-2 border-white p-6 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white border-b-2 border-white/20 pb-2 mb-3">
              Specialties
            </h3>

            <div className="space-y-3 text-xs">
              {specialties.items?.map((item) => (
                <div key={item.name} className="border-b border-zinc-800/80 pb-2 last:border-0">
                  <div className="flex justify-between items-baseline font-black uppercase text-white">
                    <span className="text-sm">{item.name}</span>
                    <span className="font-mono text-zinc-300">${item.price?.toFixed(2)}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 uppercase font-semibold leading-tight mt-0.5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Row 2: Sundaes, Milkshakes, Slushies */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Card 4: SUNDAES */}
        <div className="bg-black rounded-3xl border-2 border-white p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <h3 className="text-3xl font-black uppercase tracking-wider text-white">
              Sundaes
            </h3>
            <p className="text-xs sm:text-sm font-black text-white font-mono">
              SMALL $4.39 • MEDIUM $4.79 • LARGE $5.09
            </p>

            <div className="pt-2 border-t border-zinc-800 space-y-1">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                AVAILABLE FLAVORS:
              </h4>
              <p className="text-xs text-zinc-300 font-bold uppercase leading-relaxed">
                BLUEBERRY, CARAMEL, HOT FUDGE, PEANUT BUTTER, PINEAPPLE, RASPBERRY, STRAWBERRY
              </p>
            </div>
          </div>
        </div>

        {/* Card 5: MILKSHAKES */}
        <div className="bg-black rounded-3xl border-2 border-white p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <h3 className="text-3xl font-black uppercase tracking-wider text-white">
              Milkshakes
            </h3>
            <p className="text-xs sm:text-sm font-black text-white font-mono">
              SMALL $4.69 • MEDIUM $5.19 • LARGE $6.09
            </p>

            <div className="pt-2 border-t border-zinc-800 space-y-1">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                AVAILABLE FLAVORS:
              </h4>
              <p className="text-xs text-zinc-300 font-bold uppercase leading-relaxed">
                BANANA, BLUEBERRY, BUTTERSCOTCH, CHOCOLATE, HOT FUDGE, MARSHMALLOW, MINT, PEANUT BUTTER, PINEAPPLE, RASPBERRY, STRAWBERRY, VANILLA
              </p>
            </div>
          </div>
        </div>

        {/* Card 6: SLUSHIES */}
        <div className="bg-black rounded-3xl border-2 border-white p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <h3 className="text-3xl font-black uppercase tracking-wider text-white">
              Slushies
            </h3>
            <p className="text-xs sm:text-sm font-black text-white font-mono">
              JUNIOR $2.00 • SMALL $2.79 • MEDIUM $3.19 • LARGE $3.39
            </p>

            <div className="pt-2 border-t border-zinc-800 space-y-1">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                JOLLY RANCHER FLAVORS:
              </h4>
              <p className="text-xs text-zinc-300 font-bold uppercase leading-relaxed">
                WATERMELON, CHERRY, BLUE RASPBERRY, STRAWBERRY, GRAPE, GREEN APPLE
              </p>
            </div>

            <div className="pt-2 border-t border-zinc-800 space-y-1">
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                CLASSIC FLAVORS:
              </h4>
              <p className="text-xs text-zinc-300 font-bold uppercase leading-relaxed">
                PINEAPPLE, BANANA, BUBBLE GUM, COTTON CANDY, MANGO, ORANGE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Row 3: Floats & Beverages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Card 7: FLOATS */}
        <div className="bg-black rounded-3xl border-2 border-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-3xl font-black uppercase tracking-wider text-white">
            Floats
          </h3>
          <div className="text-xs sm:text-sm font-black text-white space-y-1 font-mono text-left sm:text-right">
            <div>BOSTON COOLER $6.49</div>
            <div>ROOT BEER FLOAT $6.49</div>
          </div>
        </div>

        {/* Card 8: BEVERAGES */}
        <div className="bg-black rounded-3xl border-2 border-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-3xl font-black uppercase tracking-wider text-white">
            Beverages
          </h3>
          <div className="text-xs sm:text-sm font-black text-white space-y-1 text-left sm:text-right">
            <div className="uppercase">
              SODAS (PEPSI, DIET PEPSI, DR. PEPPER, STARRY, MT. DEW, ROOT BEER, VERNORS) <span className="font-mono text-zinc-300">$2.00</span>
            </div>
            <div>
              WATER <span className="font-mono text-zinc-300">$1.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
