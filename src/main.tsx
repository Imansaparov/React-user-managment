import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { ThemeProvider } from "@mui/material";

import { App } from "./app";
import { store } from '@/store/store.ts';
import { theme } from "@/app/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Provider store={store}>
        <App />
        </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
