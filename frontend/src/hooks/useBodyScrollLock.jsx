import { useState, useEffect } from "react";

export const useBodyScrollLock = (state, hideCompletely = false) => {
  const body = document.getElementsByTagName("body")[0];
  const topbar = document.getElementsByClassName("topbar--section")[0];
  const [isLocked, _setLock] = useState(body.style.overflowY === "hidden");

  useEffect(() => {
    if (state) {
      body.style.overflowY = "hidden";
      body.style.paddingRight = hideCompletely ? "0" : "0.75rem";
      topbar?.classList.add("pr-3");
    }

    return () => {
      body.style.paddingRight = "initial";
      body.style.overflowY = "scroll";
      topbar?.classList.remove("pr-3");
    };
  }, [isLocked, body.style]);
};
