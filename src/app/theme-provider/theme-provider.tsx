import React, { createContext, useContext, useState } from 'react';
import {ThemeContextType, ThemeProviderProps} from "@/app/theme-provider/types.ts";


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useCustomTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
  );
};
