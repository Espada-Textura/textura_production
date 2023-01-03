import { useEffect } from "react";
import { art } from "@/api";

import Art from "@/components/ArtCard";

const Gallery = () => {
  const {
    isLoading,
    isFetching,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
  } = art.useFetchGallery();

  useEffect(() => {
    let fetch = false;

    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetch && scrollHeight - scrollTop <= clientHeight * 1.5) {
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    <div>{error.message}</div>;
  }

  console.log(isFetching, data);

  return (
    <>
      <div className={`gallery--container columns-4 p-6 sm:p-8 sm:gap-6`}>
        {data?.pages.map((page) =>
          page?.data?.artPosts.map((info) => (
            <Art title={info.title} art={info.arts[0]} key={info.arts[0].id} />
          ))
        )}
      </div>
      {isFetching && <div>Loading More</div>}
    </>
  );
};

export default Gallery;
