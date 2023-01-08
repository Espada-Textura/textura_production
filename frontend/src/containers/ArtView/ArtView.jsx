import { Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useKeyAction } from "@/hooks";
import { art } from "@/api";

import Head from "./Helmet";
import Footer from "@/layouts/Footer";
import Header from "./Header";
import Art from "./Art";
import Description from "./Description";
// import Gallery from "@/layouts/Gallery";
import Comments from "./Comments";
import { useState } from "react";

const ArtView = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [isTheaterMode, setTheaterMode] = useState(false);
  const { data, isLoading, isSuccess } = art.useFetchPost(param.postId);

  const artData = data?.data;

  useKeyAction(
    "Escape",
    () => {
      navigate("/home");
    },
    []
  );

  return (
    <Fragment>
      {isSuccess && <Head aid={artData?.arts[0]?.aid} />}
      <section
        className={`w-full h-full flex ${
          isTheaterMode ? "flex-col" : "max-lg:flex-col"
        }`}
      >
        <section className="relative w-full">
          <Header isTheater={isTheaterMode} setTheater={setTheaterMode} />
          <Art art={artData} />
        </section>
        <section
          className={`relative shrink-[1] ${
            isTheaterMode ? "" : "lg:max-w-[24rem]"
          } max-w-full w-max p-4 sm:p-6 gap-4 flex flex-col bg-primary-100`}
        >
          <Description art={artData} />
          <Comments art={artData} />
        </section>
      </section>
      <Footer />
    </Fragment>
  );
};

export default ArtView;
