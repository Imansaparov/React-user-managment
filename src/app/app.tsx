
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import {GlobalStyles} from "@/shared/styles/global-styles.ts";
import {CustomThemeProvider, darkTheme, lightTheme, useCustomTheme} from "@/app/theme-provider";

export const App: React.FC = () => {
    return (
        <CustomThemeProvider>
            <ThemeWrapper />
        </CustomThemeProvider>
    );
};

const ThemeWrapper: React.FC = () => {
    const { isDarkMode } = useCustomTheme();
    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <>
            <GlobalStyles theme={theme} />
            <RouterProvider router={router} />
        </>
    );
};
