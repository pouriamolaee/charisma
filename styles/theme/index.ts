import { createTheme, ThemeOptions } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#A274B2",
    },
    background: {
      default: "#808080",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
  },
  typography: {
    body2: {
      fontSize: "1rem",
    },
    caption: {
      color: grey[600],
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {},
    },
  },
});

export default theme;
