import { Helmet } from "react-helmet-async";

const Head = ({ pid }) => {
  return (
    <Helmet>
      <title>Textura</title>
      <link rel="canonical" href="https://web.textura-art.com/" />
      <meta
        property="twitter:image"
        key="twitter:image"
        content={`https://web.textura-art.com/api/art/${pid}_thumbnail..jpeg`}
      />
      <meta
        property="og:image"
        key="og:image"
        content={`https://web.textura-art.com/api/art/${pid}_thumbnail..jpeg`}
      />
      <meta
        property="og:image:alt"
        content="Textura is a place, likely a community, for our Cambodian Artists to share their arts, earn recognition, express feeling and emotion through art, and more importantly is to improve the artist community in Cambodia."
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta property="og:site_name" content="Textura" />
      <meta property="og:type" content="object" />
      <meta
        property="og:description"
        content="Textura is a place, likely a community, for our Cambodian Artists to share their arts, earn recognition, express feeling and emotion through art, and more importantly is to improve the artist community in Cambodia."
      />
    </Helmet>
  );
};

export default Head;
