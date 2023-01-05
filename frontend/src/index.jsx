//react
import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";

//styles
import "@/sass/index.scss";

//components
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "@/containers/App/App.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Helmet>
          <title>Hello</title>
          <link rel="canonical" href="https://web.textura-art.com/" />
          <meta
            property="twitter:image"
            content="https://web.textura-art.com/api/art/Jqiu3gLgwzNg9mUG6BEv9k_thumbnail.jpeg"
          />
          <meta
            property="og:image"
            content="https://web.textura-art.com/api/art/Jqiu3gLgwzNg9mUG6BEv9k_thumbnail.jpeg"
          />
        </Helmet>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);
