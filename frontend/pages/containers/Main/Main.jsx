import "@/sass/components/_react-toastify/index.scss";

import Topbar from "@layouts/TopBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <>
      <Topbar onContextMenu={(e) => false} />
      <Outlet />
      <ToastContainer
        containerId={"notify"}
        position="top-right"
        autoClose={5000}
        rtl={false}
        limit={3}
        hideProgressBar
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover
        theme="light"
        enableMultiContainer
      />
    </>
  );
};

export default Main;
