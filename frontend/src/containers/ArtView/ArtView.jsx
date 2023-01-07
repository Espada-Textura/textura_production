import { useParams } from "react-router-dom";
import { art } from "@/api";

import { useBodyScrollLock } from "@/hooks";

import Header from "./Header";
import Art from "./Art";

const ArtView = () => {
  useBodyScrollLock(true, true);

  const param = useParams();

  const { data, isLoading } = art.useFetchPost(param.postId);
  console.log(data);

  return (
    <>
      <section className="w-full h-screen flex max-lg:flex-col">
        <section className="relative min-h-screen w-full">
          <Header />
          <Art art={data?.data} />
        </section>
        <section className="relative lg:w-[18rem] lg:min-w-[18rem] w-full "></section>
      </section>
    </>
  );
};

export default ArtView;
