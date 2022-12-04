//react
import React from "react";
import ReactDOM from "react-dom/client";

//styles
import "@sass/index.scss";

//components
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import App from "@containers/App/App.jsx";
import theme from "@/themes/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
