import artApi from "@/api";

import Gallery from "@/layouts/Gallery";

import { useQuery } from "@tanstack/react-query";

const fetchArt = () => artApi.get("art-posts");

const Home = () => {
  const { isLoading, isError, error, data } = useQuery(["arts"], fetchArt);

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

  return (
    <section className="home-container">
      <Gallery infos={data?.data.artPosts} />
    </section>
  );
};

export default Home;
