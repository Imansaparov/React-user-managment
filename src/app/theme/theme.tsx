import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "var(--font-primary)",
    allVariants: {
      color: "white",
      fontSize: "16px",
    },
  },
  palette: {
    primary: {
      main: "#2C42E8",
    },
  },
});
