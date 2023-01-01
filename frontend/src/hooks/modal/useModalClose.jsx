import { useEffect } from "react";

export const useOutSideClose = (refArray, callback, [dependency]) => {
  useEffect(() => {
    const handler = (event) => {
      !refArray.reduce(
        (accumulator, currentRef) =>
          accumulator || currentRef.current.contains(event.target),
        refArray[0].current.contains(event.target)
      ) && callback();
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, dependency);
};
