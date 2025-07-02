import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'purple' | 'sunset' | 'ocean' | 'neon' | 'emerald' | 'light';

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
    description: 'Classic purple with mystical vibes'
  },
  {
    id: 'sunset' as Theme,
    name: 'Sunset Blaze',
    color: 'hsl(25, 95%, 60%)',
    description: 'Warm orange and red gradients'
  },
  {
    id: 'ocean' as Theme,
    name: 'Ocean Depth',
    color: 'hsl(180, 95%, 55%)',
    description: 'Cool cyan and blue tones'
  },
  {
    id: 'neon' as Theme,
    name: 'Neon Pulse',
    color: 'hsl(320, 100%, 70%)',
    description: 'Vibrant pink and magenta energy'
  },
  {
    id: 'emerald' as Theme,
    name: 'Emerald Glow',
    color: 'hsl(145, 85%, 55%)',
    description: 'Fresh green with nature vibes'
  },
  {
    id: 'light' as Theme,
    name: 'Vibrant Light',
    color: 'hsl(262, 90%, 60%)',
    description: 'Bright light theme with vibrant accents'
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