import Topbar from "@layouts/TopBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Topbar onContextMenu={(e) => e.preventDefault()} />
      <Outlet />
    </>
  );
};

export default Main;
