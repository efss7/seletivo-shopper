import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#52B591",
      contrastText: "white",
    },
    secondary: {
      main: "#1D1939",
      contrastText: "white",
    },
    subtext: {
      main: "#000",
      contrastText: "white",
    },
  },
});

export default theme;