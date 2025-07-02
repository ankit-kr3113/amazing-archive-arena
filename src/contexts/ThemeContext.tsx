import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'purple' | 'cyberpunk' | 'retro' | 'glassmorphism' | 'neon-grid' | 'synthwave';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Array<{
    id: Theme;
    name: string;
    color: string;
    description: string;
  }>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes = [
  {
    id: 'purple' as Theme,
    name: 'Purple Dream',
    color: 'hsl(262, 80%, 65%)',
    description: 'Classic elegant portfolio'
  },
  {
    id: 'cyberpunk' as Theme,
    name: 'Cyberpunk 2024',
    color: 'hsl(180, 100%, 50%)',
    description: 'Futuristic hacker aesthetic with neon grids'
  },
  {
    id: 'retro' as Theme,
    name: '80s Retro Wave',
    color: 'hsl(320, 100%, 60%)',
    description: 'Vintage 80s with scanlines and VHS effects'
  },
  {
    id: 'glassmorphism' as Theme,
    name: 'Glass Morphism',
    color: 'hsl(220, 100%, 70%)',
    description: 'Frosted glass with blur effects'
  },
  {
    id: 'neon-grid' as Theme,
    name: 'Neon Grid',
    color: 'hsl(290, 100%, 70%)',
    description: 'Tron-like grid system with electric colors'
  },
  {
    id: 'synthwave' as Theme,
    name: 'Synthwave',
    color: 'hsl(340, 100%, 60%)',
    description: 'Retro futurism with gradient mountains'
  }
];

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('purple');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme && themes.find(t => t.id === savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    
    // Remove all theme classes
    document.documentElement.removeAttribute('data-theme');
    
    // Apply new theme
    if (theme !== 'purple') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
    themes
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};