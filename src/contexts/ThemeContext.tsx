import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'purple' | 'cyberpunk' | 'retro' | 'glassmorphism' | 'neon-grid' | 'synthwave' | 'glass-emerald' | 'glass-rose' | 'glass-amber' | 'glass-violet' | 'glass-cyan' | 'glass-dream' | 'sunset-blaze' | 'ocean-depth' | 'neon-pulse' | 'emerald-glow' | 'vibrant-dark' | 'glassmorphism-pro';

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

// Revolutionary theme system with unique visual identities
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
  },
  {
    id: 'glass-emerald' as Theme,
    name: 'Glass Emerald',
    color: 'hsl(160, 100%, 60%)',
    description: 'Frosted emerald glass with nature vibes'
  },
  {
    id: 'glass-rose' as Theme,
    name: 'Glass Rose',
    color: 'hsl(350, 100%, 70%)',
    description: 'Romantic rose-tinted glass effects'
  },
  {
    id: 'glass-amber' as Theme,
    name: 'Glass Amber',
    color: 'hsl(45, 100%, 65%)',
    description: 'Warm amber glass with golden highlights'
  },
  {
    id: 'glass-violet' as Theme,
    name: 'Glass Violet',
    color: 'hsl(270, 100%, 70%)',
    description: 'Deep violet glass with mystical feel'
  },
  {
    id: 'glass-cyan' as Theme,
    name: 'Glass Cyan',
    color: 'hsl(190, 100%, 65%)',
    description: 'Cool cyan glass with arctic vibes'
  },
  {
    id: 'glass-dream' as Theme,
    name: 'Purple Glass Dream',
    color: 'hsl(262, 80%, 65%)',
    description: 'Elegant purple with dreamy glass effects'
  },
  {
    id: 'sunset-blaze' as Theme,
    name: 'Sunset Blaze',
    color: 'hsl(15, 100%, 65%)',
    description: 'Warm orange and red sunset gradients'
  },
  {
    id: 'ocean-depth' as Theme,
    name: 'Ocean Depth',
    color: 'hsl(205, 100%, 45%)',
    description: 'Deep blue ocean with aquatic vibes'
  },
  {
    id: 'neon-pulse' as Theme,
    name: 'Neon Pulse',
    color: 'hsl(300, 100%, 65%)',
    description: 'Electric neon with pulsing animations'
  },
  {
    id: 'emerald-glow' as Theme,
    name: 'Emerald Glow',
    color: 'hsl(150, 100%, 50%)',
    description: 'Bright emerald with glowing effects'
  },
  {
    id: 'vibrant-dark' as Theme,
    name: 'Vibrant Professional',
    color: 'hsl(180, 100%, 60%)',
    description: 'Modern dark theme with energetic accents'
  },
  {
    id: 'glassmorphism-pro' as Theme,
    name: 'Glassmorphism Professional',
    color: 'hsl(225, 70%, 65%)',
    description: 'Glassmorphism with deep blue accents and blur effects'
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