import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, ArrowRight, IceCream } from 'lucide-react';
import { CATERING_PACKAGES } from '../data/iceCreamData';
import CateringEstimator from '../components/CateringEstimator';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How far in advance do we need to book our event catering?',
      a: 'For weekend weddings and peak summer dates, we recommend booking 2 to 6 months in advance. For corporate events, birthday parties, and weekday celebrations, 1 to 2 weeks notice is usually plenty!',
    },
    {
      q: 'Do you offer vegan, dairy-free, and gluten-free catering options?',
      a: 'Yes, absolutely! All of our catering packages allow you to select a mix of dairy and dairy-free options. Our fruit sorbets and cold-brew coconut flavors are 100% plant-based and certified vegan. Many of our signature flavors are naturally gluten-free.',
    },
    {
      q: 'What is included with the Vintage Ice Cream Cart rental?',
      a: 'The cart rental includes delivery, setup, clean teardown, 2 hours of live scooping service by a trained Ricky’s scoop master, your choice of up to 6 artisan flavors, freshly pressed waffle cones, sugar cones, compostable cups, wooden spoons, and napkins.',
    },
    {
      q: 'What is your service travel radius?',
      a: 'We provide complimentary travel within 30 miles of our scoop kitchen. For events beyond 30 miles throughout the region, a modest mileage travel surcharge applies. Contact us for custom regional quotes!',
    },
    {
      q: 'Can we create a custom signature ice cream flavor for our wedding?',
      a: 'Yes! Our "Custom Flavor Collaboration" package allows couples to visit our test kitchen for a private 90-minute tasting session. Ricky will work with you to invent a bespoke flavor named after your love story.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 text-zinc-900">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-zinc-100/80 via-[#FAFAFA] to-transparent pt-12 pb-16 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 text-black text-xs font-black uppercase tracking-wider border border-zinc-300">
              <IceCream className="w-3.5 h-3.5 text-black shrink-0" />
              <span>Full-Service Event Catering</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight">
              Make your celebration unforgettably sweet.
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              From picturesque wedding carts to interactive sundae bars and corporate drop-off coolers, Ricky’s brings handcrafted artisan scoops directly to your guests.
            </p>
          </div>
        </div>
      </section>

      {/* Catering Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
            Tailored Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black">
            Choose Your Catering Style
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed font-normal">
            Every package is backed by our full hospitality guarantee, compostable ware, and handcrafted flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATERING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-[32px] border transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl flex flex-col justify-between ${
                pkg.popular
                  ? 'border-black ring-2 ring-black/20'
                  : 'border-zinc-200'
              }`}
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-black">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 bg-white text-black px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <span className="text-[11px] font-black uppercase tracking-widest text-zinc-300 block">
                      Ideal For: {pkg.idealFor}
                    </span>
                    <h3 className="text-2xl font-black text-white">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex items-baseline justify-between gap-2 pb-4 border-b border-zinc-200">
                    <div>
                      <span className="text-3xl font-black text-black font-mono">
                        ${pkg.pricePerGuest.toFixed(2)}
                      </span>
                      <span className="text-xs text-zinc-500 font-bold"> / guest</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-500">
                      +${pkg.baseFee} base setup
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed italic">
                    "{pkg.tagline}"
                  </p>

                  <div className="space-y-2.5">
                    <h5 className="text-xs font-black uppercase tracking-wider text-black">
                      Package Inclusions:
                    </h5>
                    <ul className="space-y-2 text-xs text-zinc-700">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-black mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <Link
                  to="/contact"
                  state={{
                    packageId: pkg.id,
                    packageName: pkg.name,
                  }}
                  className="w-full py-3.5 px-5 rounded-full bg-black hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-wider text-center block transition-colors shadow-md"
                >
                  Book {pkg.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Interactive Cost Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CateringEstimator />
      </section>

      {/* How Booking Works: 3 Simple Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
            Seamless Planning
          </span>
          <h2 className="text-3xl font-black text-black">
            How Event Booking Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-[28px] bg-zinc-50 border border-zinc-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-black text-sm shadow-sm">
              1
            </div>
            <h3 className="text-lg font-black text-black">
              Submit Date & Guest Estimate
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-normal">
              Use our simple contact form or calculator to share your event details, location, and preferred service style.
            </p>
          </div>

          <div className="p-6 rounded-[28px] bg-zinc-50 border border-zinc-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-black text-sm shadow-sm">
              2
            </div>
            <h3 className="text-lg font-black text-black">
              Pick Your Custom Flavor Menu
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-normal">
              Choose your favorite signature and seasonal churns. We offer in-shop tastings for couples and event planners!
            </p>
          </div>

          <div className="p-6 rounded-[28px] bg-zinc-50 border border-zinc-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-black text-sm shadow-sm">
              3
            </div>
            <h3 className="text-lg font-black text-black">
              We Arrive & Serve Pure Joy
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-normal">
              Our professional scoop masters handle delivery, setup, hospitality, and total cleanup so you can celebrate stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-50 rounded-[32px] p-8 sm:p-12 border border-zinc-200 space-y-8 shadow-xs">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-black">
              Everything You Need to Know About Ricky’s Catering
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-black text-black text-base hover:text-zinc-600 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-black shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl font-black text-black">
          Have custom requirements or a large corporate inquiry?
        </h2>
        <p className="text-sm text-zinc-600 max-w-xl mx-auto">
          We cater gatherings from 15 to 1,500+ guests. Get in touch with our team for personalized planning.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-widest transition-all shadow-md mt-2"
        >
          <span>Contact Catering Team</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
