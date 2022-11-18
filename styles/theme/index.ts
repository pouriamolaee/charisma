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
    caption: {
      color: grey[500],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {},
    },
  },
});

export default theme;
