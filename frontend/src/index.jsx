//react
import React from "react";
import ReactDOM from "react-dom/client";

//styles
import "./sass/index.scss";

//components
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

import App from "@/containers/App/App.jsx";
import theme from "@/themes/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
