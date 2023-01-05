import { useEffect } from "react";

export const useInfiniteScrolling = (callBack, watcher, bottomMultiplier) =>
  useEffect(() => {
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (
        watcher &&
        scrollHeight - scrollTop <= clientHeight * bottomMultiplier
      ) {
        callBack();
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
