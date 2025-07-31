import React, { createContext, useContext, useMemo, useState } from 'react';

export type Page = 'home' | 'about' | 'contact';

interface NavigationContextProps {
  current: Page;
  goTo: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextProps | null>(null);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [current, setCurrent] = useState<Page>('home');

  const value = useMemo(() => ({ current, goTo: setCurrent }), [current]);

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
};

export const useNavigation = (): NavigationContextProps => {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be inside NavigationProvider');
  return ctx;
};
