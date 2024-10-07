import {ReactNode} from "react";

export interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export interface ThemeProviderProps {
    children: ReactNode;
}