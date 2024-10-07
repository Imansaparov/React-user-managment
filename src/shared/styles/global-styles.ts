import { createGlobalStyle } from 'styled-components';
import {ThemeType} from "@/app/theme-provider";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    margin: 0;
    padding: 0;
    font-family: Roboto, 'Times New Roman', serif;
  }
`;

