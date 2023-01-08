import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { art } from "@/api";

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
