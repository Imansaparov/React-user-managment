import styled from '@emotion/styled';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useCustomTheme } from '@/app/theme-provider';

interface ThemeToggleButtonProps {
    theme: {
        color: string;
    };
}

const ThemeToggleButton = styled.button<ThemeToggleButtonProps>`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.color};
  padding: 0 12px;
  cursor: pointer;
  border: none;
  display: flex;
  ;
  gap: 8px;
`;

export const ThemeToggle: React.FC = () => {
    const { isDarkMode, toggleTheme } = useCustomTheme();


    return (
        <ThemeToggleButton theme={{ color: isDarkMode ? '#ffffff' : '#000000' }} onClick={toggleTheme}>
            {isDarkMode ? <LightMode /> : <DarkMode />}
        </ThemeToggleButton>
    );
};