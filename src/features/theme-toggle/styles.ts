import styled from "@emotion/styled";

interface ThemeToggleButtonProps {
    theme: {
        color: string;
    };
}

export const ThemeToggleButton = styled.button<ThemeToggleButtonProps>`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.color};
  padding: 0 12px;
  cursor: pointer;
  border: none;
  display: flex;
  gap: 8px;
`;