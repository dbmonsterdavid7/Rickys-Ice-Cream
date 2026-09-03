import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScoopFlightBuilder from './components/ScoopFlightBuilder';

import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import { Flavor } from './types';
import { FLAVORS } from './data/iceCreamData';
import { NavigationModalProvider } from './context/NavigationModalContext';

export default function App() {
  const [isFlightModalOpen, setIsFlightModalOpen] = useState(false);
  const [flightFlavors, setFlightFlavors] = useState<Flavor[]>([
    FLAVORS[0],
    FLAVORS[1],
    FLAVORS[3],
  ]);

  const handleAddToFlight = (flavor: Flavor) => {
    if (flightFlavors.some((f) => f.id === flavor.id)) return;
    if (flightFlavors.length < 3) {
      setFlightFlavors((prev) => [...prev, flavor]);
    }
  };

  const handleRemoveFromFlight = (flavorId: string) => {
    setFlightFlavors((prev) => prev.filter((f) => f.id !== flavorId));
  };

  const handleClearFlight = () => {
    setFlightFlavors([]);
  };

  return (
    <BrowserRouter>
      <NavigationModalProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-black selection:text-white">
          {/* Navigation Bar with Link / NavLink */}
          <Navbar onOpenFlightBuilder={() => setIsFlightModalOpen(true)} />

          {/* Dynamic Route Pages */}
          <main className="grow">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    onOpenFlightBuilder={() => setIsFlightModalOpen(true)}
                    flightFlavors={flightFlavors}
                    onAddToFlight={handleAddToFlight}
                    onRemoveFromFlight={handleRemoveFromFlight}
                    onClearFlight={handleClearFlight}
                  />
                }
              />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/flavors" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* 404 Catch-All Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Global Shared Footer */}
          <Footer />

          {/* Global 3-Scoop Flight Customizer Modal */}
          <ScoopFlightBuilder
            isOpen={isFlightModalOpen}
            onClose={() => setIsFlightModalOpen(false)}
            selectedFlavors={flightFlavors}
            onRemoveFlavor={handleRemoveFromFlight}
            onAddFlavor={handleAddToFlight}
            onClearFlight={handleClearFlight}
          />
        </div>
      </NavigationModalProvider>
    </BrowserRouter>
  );
}
