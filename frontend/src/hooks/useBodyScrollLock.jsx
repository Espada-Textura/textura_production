import { useState, useEffect } from "react";

export const useBodyScrollLock = (state) => {
  const body = document.getElementsByTagName("body")[0];
  const header = document.getElementsByClassName("topbar--section")[0];
  const [isLocked, _setLock] = useState(body.style.overflowY === "hidden");

  useEffect(() => {
    if (state) {
      body.style.overflowY = "hidden";
      body.style.paddingRight = "0.75rem";
      header.classList.add("pr-3");
    }

    return () => {
      body.style.paddingRight = "initial";
      body.style.overflowY = "scroll";
      header.classList.remove("pr-3");
    };
  }, [isLocked, body.style]);
};
