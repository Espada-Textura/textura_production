import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { art } from "@/api";

import { Helmet } from "react-helmet-async";

import Header from "./Header";
import Art from "./Art";
import Description from "./Description";
import Gallery from "@/layouts/Gallery";
import Comments from "./Comments";

const ArtView = () => {
  const param = useParams();

  const { data, isLoading } = art.useFetchPost(param.postId);

  const artData = data?.data;

  return (
    <Fragment>
      <Helmet prioritizeSeoTags>
        <title>Textura</title>
        <link rel="canonical" href="https://web.textura-art.com/" />
        <meta
          property="twitter:image"
          key="twitter:image"
          content={`https://web.textura-art.com/api/art/${param.postId}_thumbnail..jpeg`}
        />
        <meta
          property="og:image"
          key="og:image"
          content={`https://web.textura-art.com/api/art/${param.postId}_thumbnail..jpeg`}
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
      <section className="w-full h-full flex max-lg:flex-col">
        <section className="relative h-screen w-full">
          <Header />
          <Art art={artData} />
          <section className="hidden">
            <Gallery />
          </section>
        </section>
        <section
          section
          className="relative lg:w-[22rem] shrink-[1] lg:max-w-[22rem] max-w-full w-max p-6 gap-4 flex flex-col bg-primary-100"
        >
          <Description art={artData} />
          <Comments art={artData} />
        </section>
      </section>
    </Fragment>
  );
};

export default ArtView;
