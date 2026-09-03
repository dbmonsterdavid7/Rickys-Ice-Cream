import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, CheckCircle, ArrowRight, IceCream } from 'lucide-react';
import { SHOP_INFO } from '../data/iceCreamData';

export default function AboutPage() {
  const steps = [
    {
      number: '01',
      title: 'Pasture-Grazed Sweet Cream',
      description: 'We partner directly with family dairy farms within 60 miles of our kitchen. The cows graze freely on fresh grass, yielding golden cream with rich natural butterfat.',
    },
    {
      number: '02',
      title: 'Scratch-Baked In Our Ovens',
      description: 'We never use industrial syrups or artificial pastes. Our in-house kitchen bakes every single fudge brownie, butter cake, cinnamon oat crisp, and fruit compote from scratch.',
    },
    {
      number: '03',
      title: 'Slow-Batch Freezing',
      description: 'We churn our ice cream in artisan batch freezers with low overrun (minimal air). This produces an ultra-dense, velvety texture that melts smoothly on the palate.',
    },
    {
      number: '04',
      title: 'Hand-Packed With Care',
      description: 'Every single pint and scoop is packed by hand. We believe ice cream is one of life’s purest shared joys, and we treat every batch with uncompromising craft.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 text-zinc-900">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-zinc-100/80 via-[#FAFAFA] to-transparent pt-12 pb-16 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 text-black text-xs font-black uppercase tracking-wider border border-zinc-300">
              <Heart className="w-3.5 h-3.5 text-black" />
              <span>Family Owned & Operated • Est. 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight">
              Obsessed with the art of honest, unhurried ice cream.
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Founded in 2026 by Ricky and his family, our mission is simple: create unforgettable ice cream from the ground up using authentic culinary craft and pure ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-zinc-700 leading-relaxed text-sm sm:text-base">
            <h2 className="text-3xl sm:text-4xl font-black text-black">
              How a Passion for Pure Ingredients Built Ricky’s
            </h2>
            <p>
              In 2026, Ricky set out to build an ice cream shop that honored classic creamery traditions. Starting with a commitment to pure sweet milk from regional pasture herds, fresh field berries, and honest kitchen recipes, Ricky’s was born as a proud family enterprise.
            </p>
            <p>
              While commercial mass brands cut corners with corn syrup, artificial emulsifiers, and powdered flavor bases, Ricky took the artisan path: <strong className="text-black">treat ice cream making like fine pastry arts</strong>.
            </p>
            <p>
              Today, Ricky’s Ice Cream is 100% family-owned. We still bake our own cookies, roast our own nuts, simmer our berry compotes, and obsess over every tenth of a percent of butterfat.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-3xl bg-zinc-50 border border-zinc-200">
                <span className="text-2xl font-black text-black block">100% Family</span>
                <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Owned & Operated</span>
              </div>
              <div className="p-4 rounded-3xl bg-zinc-50 border border-zinc-200">
                <span className="text-2xl font-black text-black block">0 Stabilizers</span>
                <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Pure Cream & Craft</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-black aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1000&q=85"
                  alt="Ricky's Ice Cream Test Kitchen"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-black text-white p-5 rounded-3xl shadow-xl border border-zinc-800 max-w-xs">
                <p className="text-xs italic text-zinc-300 leading-relaxed font-medium">
                  "If we wouldn't serve it to our own family at Sunday dinner, it never goes into the churn."
                </p>
                <span className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-widest block mt-2">
                  — Ricky & The Family (Est. 2026)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind The Churn: 4 Steps */}
      <section className="bg-zinc-50 py-16 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black">
              Behind the Churn
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Every pint of Ricky's follows an uncompromising four-step culinary journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-[28px] border border-zinc-200 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-2xl font-black text-black block">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-black text-black">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing & Environmental Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black text-white rounded-[36px] p-8 sm:p-12 border border-zinc-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400">
                Ethical Sourcing & Quality
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Good to the Earth, Gentle to the Herd.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                We believe exceptional taste comes from genuine respect for our ingredients, our community, and the earth.
              </p>
              <ul className="space-y-2.5 text-xs text-zinc-200">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-white shrink-0" />
                  <span>100% compostable plant-fiber cups, wooden spoons, and recyclable containers</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-white shrink-0" />
                  <span>Single-origin Fair-Trade cacao and direct-source Madagascar vanilla beans</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-white shrink-0" />
                  <span>Kitchen food scraps and organic trims are composted with local urban farms</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 text-center space-y-1">
                  <span className="text-2xl font-black text-white block">100%</span>
                  <span className="text-xs font-bold text-zinc-400 block">Compostable Serving Ware</span>
                </div>
                <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 text-center space-y-1">
                  <span className="text-2xl font-black text-white block">60 Mi</span>
                  <span className="text-xs font-bold text-zinc-400 block">Average Milk Sourcing Radius</span>
                </div>
                <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 text-center space-y-1">
                  <span className="text-2xl font-black text-white block">Fair Trade</span>
                  <span className="text-xs font-bold text-zinc-400 block">Direct Producer Cocoa</span>
                </div>
                <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800 text-center space-y-1">
                  <span className="text-2xl font-black text-white block">Est. 2026</span>
                  <span className="text-xs font-bold text-zinc-400 block">Family Handcrafted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Explore Flavors & Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black text-black">
          Ready to taste the difference?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/menu"
            className="px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-widest transition-all shadow-md"
          >
            Explore Scoop Shop Menu
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-white hover:bg-zinc-50 text-black border border-zinc-300 font-extrabold text-xs uppercase tracking-widest transition-all shadow-xs"
          >
            Visit Our Scoop Shop
          </Link>
        </div>
      </section>
    </div>
  );
}
