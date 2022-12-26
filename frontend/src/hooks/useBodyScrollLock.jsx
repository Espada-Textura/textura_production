import { useState, useEffect } from "react";

export const useBodyScrollLock = (state) => {
  const body = document.getElementsByTagName("body")[0];
  const [isLocked, setLock] = useState(body.style.overflowY === "hidden");

  useEffect(() => {
    body.style.overflowY = state ? "hidden" : "auto";

    return () => (body.style.overflowY = "auto");
  }, [isLocked, body.style]);
};
