import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeType, ThemeContextType, Theme } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const themes: Record<string, Theme> = {
  theme1: {
    button: 'primary rounded-full'
  }
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.theme1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeType;
    if (savedTheme && ['theme1', 'theme2', 'theme3'].includes(savedTheme)) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const setTheme = (theme: ThemeType) => {
    if (theme === currentTheme) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentTheme(theme);
      localStorage.setItem('selectedTheme', theme);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      <div
        className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        data-theme={currentTheme}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};