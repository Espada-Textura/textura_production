import Topbar from "@layouts/TopBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <>
      <Topbar onContextMenu={(e) => e.preventDefault()} />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={false}
        hideProgressBar
        newestOnTop
        closeOnClick
        limit={5}
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Main;
