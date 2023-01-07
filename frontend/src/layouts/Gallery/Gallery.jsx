import { useEffect } from "react";
import { art } from "@/api";
import { ImSpinner2 } from "react-icons/im";

import Art from "@/components/ArtCard";

const Gallery = () => {
  const {
    isLoading,
    isFetching,
    isFetchingNextPage,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
  } = art.useFetchGallery();

  //Handling scroll event and adding more data as user scrolling into the bottom of the page.
  useEffect(() => {
    let fetch = false;
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetch && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetch = true;
        if (hasNextPage) await fetchNextPage();
        fetch = false;
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  //If the component is in the first load of the appication, fetching data will display loading page
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={`gallery--container columns-4 p-6 sm:p-8 sm:gap-6`}>
        {data?.pages.map((page) =>
          page?.data?.artPosts.map((info) => (
            <Art data={info} key={info.arts[0].id} />
          ))
        )}
      </div>

      {isFetching ||
        (isFetchingNextPage && (
          <div className="w-full h-[2rem] flex items-center justify-center">
            <ImSpinner2 className="w-10 h-10 animate-spin bg-secondary-60" />
          </div>
        ))}

      {isError && <div>{error.message}</div>}
    </>
  );
};

export default Gallery;
