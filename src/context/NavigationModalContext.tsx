import React, { createContext, useContext, useState, ReactNode } from 'react';
import NavigationModal from '../components/NavigationModal';

interface NavigationModalContextType {
  isOpen: boolean;
  openNavigationModal: () => void;
  closeNavigationModal: () => void;
}

const NavigationModalContext = createContext<NavigationModalContextType | undefined>(undefined);

export function NavigationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openNavigationModal = () => setIsOpen(true);
  const closeNavigationModal = () => setIsOpen(false);

  return (
    <NavigationModalContext.Provider value={{ isOpen, openNavigationModal, closeNavigationModal }}>
      {children}
      <NavigationModal isOpen={isOpen} onClose={closeNavigationModal} />
    </NavigationModalContext.Provider>
  );
}

export function useNavigationModal() {
  const context = useContext(NavigationModalContext);
  if (!context) {
    throw new Error('useNavigationModal must be used within a NavigationModalProvider');
  }
  return context;
}
