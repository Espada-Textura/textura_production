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
          <meta
            property="og:image:alt"
            content="Textura is a place, likely a community, for our Cambodian Artists to share their arts, earn recognition, express feeling and emotion through art, and more importantly is to improve the artist community in Cambodia. Textura mainly focuses on Digital Art and Digital painting. We are developing and growing bigger and will add more than just Digital Arts."
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="600" />
          <meta property="og:site_name" content="Textura" />
          <meta property="og:type" content="object" />
          <meta
            property="og:description"
            content="Textura is a place, likely a community, for our Cambodian Artists to share their arts, earn recognition, express feeling and emotion through art, and more importantly is to improve the artist community in Cambodia. Textura mainly focuses on Digital Art and Digital painting. We are developing and growing bigger and will add more than just Digital Arts."
          />
        </Helmet>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);
