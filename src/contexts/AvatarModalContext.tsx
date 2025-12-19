import React, { createContext, useContext, useState } from 'react';

interface AvatarModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const AvatarModalContext = createContext<AvatarModalContextType | undefined>(undefined);

export const AvatarModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <AvatarModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </AvatarModalContext.Provider>
  );
};

export const useAvatarModal = () => {
  const context = useContext(AvatarModalContext);
  if (!context) {
    throw new Error('useAvatarModal must be used within AvatarModalProvider');
  }
  return context;
};
