import React, { createContext, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { Theme } from '../types/theme.ts';
import { darkTheme, lightTheme } from '../config/theme.ts';

const ThemeContext = createContext<Theme>(lightTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
