import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./components/context/CartContext";
import AuthContextComponent from "./components/context/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material";
import ShipmentContextComponent from "./components/context/ShipmentContext";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#131316",
        light: "#F5E5C8",
        dark: "#9E6E51",
        contrastText: "#36454F",
      },
      secondary: {
        main: "#36454F",
      },
      background: {
        main: "#FFFFFF",
        light: "#ffffff",
        dark: "#F7F7F7",
      },
      details: {
        // main: "#bf3815",
        main: "#1E372F",
      },
      warning: {
        main: "#D70040",
      },
    },
    typography: {
      fontFamily: ["Raleway", "Playfair", "sans-serif"].join(","),
    },
  });

  return (
    // theme prodivder helps customize pallete
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CartContextComponent>
          <AuthContextComponent>
            <ShipmentContextComponent>
              <AppRouter />
            </ShipmentContextComponent>
          </AuthContextComponent>
        </CartContextComponent>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
