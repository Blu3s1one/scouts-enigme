import { createTheme } from "@mui/material";
import "../assets/fonts/fonts.css"; // Import the font CSS

export const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "white",
          backgroundColor: "black",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Aquire"',
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#2d2926",
      "100": "",
    },
    secondary: {
      main: "#00F587",
    },
    background: {
      default: "#000000",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontFamily: "Aquire",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: "3rem",
      color: "#ffffff",
    },
    h2: {
      fontFamily: "Aquire",
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: "2rem",
      color: "#ffffff",
    },
    h3: {
      fontFamily: "Aquire",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
      color: "#ffffff",
    },
    h4: {
      fontFamily: "Aquire",
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: "2rem",
      color: "#ffffff",
    },
    h5: {
      fontFamily: "Aquire",
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: "1.25rem",
      color: "#ffffff",
    },
    h6: {
      fontFamily: "Aquire",
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.25rem",
      color: "#ffffff",
    },
    body1: {
      fontFamily: "Aquire",
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      color: "#ffffff",
    },
    body2: {
      fontFamily: "Aquire",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      color: "#ffffff",
    },
  },
});
