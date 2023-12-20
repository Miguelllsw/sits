import React from 'react';
import { BarraNavegacionPrincipal } from "../components/BarraNavegacionPrincipal";
import gobCL_Regular from "../assets/fonts/gobCL_Regular.woff";
import { Button, Toolbar } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const customTheme = createTheme({
    typography: {
        fontFamily: "gobCL, sans-serif",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'gobCL';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('gobCL'), local('gobCL-Regular'), url(${gobCL_Regular}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    },
    palette: {
        primary: {
            main: "#0b4582",
        },
        secondary: {
            main: "#e94860",
        },
    },
});


export default function MenuSuperior() {

    const volver = () => {
        window.history.back();
    }


    return (

        <Box sx={{ flexGrow: 1 }}>
        <BarraNavegacionPrincipal
            position="absolute"
            theme={customTheme}
        >
            <Toolbar
                sx={{
                    pr: "24px",
                }}
            >
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                </Typography>
                <Button
                    variant="contained"
                    onClick={volver}
                    sx={{
                        mr: 2,
                    }}
                >
                    Volver
                </Button>

            </Toolbar>
        </BarraNavegacionPrincipal>
    </Box>
    );
}