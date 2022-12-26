import { useEffect } from "react";

export const useKeyAction = (key, callBack, dependency) => {
  useEffect(() => {
    const handler = (event) => {
      event.key === key && callBack();
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, dependency);
};
