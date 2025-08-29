import { useState, useMemo, createContext, useContext } from 'react';
import type { Theme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { customTheme } from '../themes/customTheme';
import pragmaTheme from '../themes/pragmaTheme';

// Simple light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f47cffff',
      paper: '#fcacffff',
    },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a174e', // navy blue
      paper: '#11235a',   // slightly lighter navy
    },
  }
});

const muiTheme = createTheme();

const themeMap: Record<string, Theme> = {
  mui: muiTheme,
  light: lightTheme,
  dark: darkTheme,
  custom: customTheme,
  pragma: pragmaTheme,
};

interface ThemeSwitcherContextType {
  themeName: string;
  theme: Theme;
  setThemeName: (name: string) => void;
}

const ThemeSwitcherContext = createContext<ThemeSwitcherContextType | undefined>(undefined);

export function ThemeSwitcherProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<string>('pragma');

  const theme = useMemo(() => themeMap[themeName] || pragmaTheme, [themeName]);

  return (
    <ThemeSwitcherContext.Provider value={{ themeName, theme, setThemeName }}>
      {children}
    </ThemeSwitcherContext.Provider>
  );
}

export function useThemeSwitcher() {
  const context = useContext(ThemeSwitcherContext);
  if (!context) {
    throw new Error('useThemeSwitcher must be used within a ThemeSwitcherProvider');
  }
  return context;
}
