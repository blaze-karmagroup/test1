import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8D7249",
    },
    secondary: {
      main: "#8D7B5C",
      accent: "#FFFFFF",
    },
    error: {
      main: "#C04040",
    },
    info: {
      main: "#64B5F6",
    },
    success: {
      main: "#66BB6A",
    },
    background: {
      default: "#211E1B",
      paper: "#333333",
      light: "#EBE0D2",
    },
    text: {
      primary: "#D9D9D9",
      secondary: "#EBE0D2",
      dark: "#211E1B",
    },
  },
});

export default theme;