import PropTypes from "prop-types";
import React, {useMemo} from "react";
// material
import {alpha, CssBaseline} from "@mui/material";
import {
    ThemeProvider,
    createTheme,
    StyledEngineProvider
} from "@mui/material/styles";
// hooks
import useSettings from "../hooks/useSettings";
//
import palette from "./palette";
import typography from "./typography";
import shape from "./shape";
import componentsOverride from "./overrides";
import shadows, {customShadows} from "./shadow";

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
    children: PropTypes.node
};

export default function ThemeConfig({children}) {
    const {themeMode, themeDirection, setColor} = useSettings();
    const isLight = themeMode === "dark";

    const themeOptions = useMemo(
        () => ({
            palette: isLight
                ? {...palette.light, mode: "light", primary: setColor}
                : {...palette.dark, mode: "dark", primary: setColor},
            typography,
            shape,
            direction: themeDirection,
            shadows: isLight ? shadows.light : shadows.dark,
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 465,
                    md: 900,
                    lg: 1200,
                    xl: 1536
                }
            },
            customShadows: isLight
                ? {
                      ...customShadows.light,
                      primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)}`
                  }
                : {
                      ...customShadows.dark,
                      primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)}`
                  }
        }),
        [isLight, themeDirection, setColor]
    );

    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
