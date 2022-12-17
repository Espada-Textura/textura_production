import Topbar from "@layouts/TopBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <>
      <Topbar onContextMenu={(e) => e.preventDefault()} />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default Main;
