import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { CartProvider } from "./context/cart";
ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
