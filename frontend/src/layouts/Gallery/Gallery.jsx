import Art from "@/components/ArtCard";

import artApi from "@/api";

import { useQuery } from "@tanstack/react-query";

const fetchGallery = () => artApi.get("art-posts");

const Gallery = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGallery,
    refetchOnWindowFocus: false,
    enabled: false,
  });

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
      {data?.data.artPosts.map((info) => (
        <Art title={info.title} art={info.arts[0]} key={info.arts[0].id} />
      ))}
    </div>
  );
};

export default Gallery;
