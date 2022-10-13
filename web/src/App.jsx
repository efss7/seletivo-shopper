import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";
import { GlobalState } from "./global/State";
import { Router } from "./routes/Router";


function App() {

  return (
    <ThemeProvider theme={theme}>
    <GlobalState>
      <Router/>
    </GlobalState>
    </ThemeProvider>
  );
}

export default App;
