import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import {store} from "./StoreForImmigration/store.jsx"


export const theme = createTheme({
  palette: {
    primary: {
      main: "#FDD300",
      dark: "#f7a711",
      light: "#f73b11",
    },
  },
  typography: {
    fontFamily: "Poppins,juana,cential",
    color: "black",
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <App/>
      </Provider>
    </ThemeProvider>
  
);
