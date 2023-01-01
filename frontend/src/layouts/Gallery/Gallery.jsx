import Art from "@/components/ArtCard";

import { art } from "@/api";
import { useEffect } from "react";

const Gallery = () => {
  const { isLoading, isError, error, data } = art.useFetchGallery();

  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  if (isError) {
    <>
      <div>{error.message}</div>
    </>;
  }

  console.log(data);

  return (
    <div className="gallery--container columns-4 p-6 sm:p-8 sm:gap-6">
      {data?.data?.artPosts.map((info) => (
        <Art title={info.title} art={info.arts[0]} key={info.arts[0].id} />
      ))}
    </div>
  );
};

export default Gallery;
