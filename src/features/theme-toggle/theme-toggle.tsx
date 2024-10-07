import { DarkMode, LightMode } from '@mui/icons-material';

import { useCustomTheme } from '@/app/theme-provider';
import {ThemeToggleButton} from "@/features/theme-toggle/styles.ts";

export const ThemeToggle: React.FC = () => {
    const { isDarkMode, toggleTheme } = useCustomTheme();

    return (
        <ThemeToggleButton theme={{ color: isDarkMode ? '#ffffff' : '#000000' }} onClick={toggleTheme}>
            {isDarkMode ? <LightMode /> : <DarkMode />}
        </ThemeToggleButton>
    );
};