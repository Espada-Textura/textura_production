import "@/sass/components/_button.scss";

import NotFoundBackgroundImage from "@images/not-found-pic.svg";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };

  function handleClick() {
    routeChange();
  }

  return (
    <div className="not-found-container flex items-center justify-center h-screen w-full md:px-52 lg:px-80">
      <div className="flex flex-col items-center justify-ceneter xl:flex-row xl:justify-between">
        <div className="xl:items-start xl:pr-40">
          <div className="text-6xl font-bold text-accent-100 my-3 text-center xl:text-left xl:my-8">
            Ooops!
          </div>
          <div className="text-4xl font-bold text-accent-100 my-3 text-center xl:text-left xl:my-5">
            Page Not Found!
          </div>
          <div className="my-8 w-96 md:w-[500px] xl:hidden">
            <img
              src={NotFoundBackgroundImage}
              alt="not-found"
              draggable="false"
            />
          </div>
          <div className="text-base font-medium my-2 flex flex-col items-center justify-center xl:items-start xl:my-5">
            <div className="my-1">This page doesn't exist or was removed!</div>
            <div className="mb-1">We suggest you back to home.</div>
          </div>
          <button
            className="button-outlined-fair-accent h-14 w-full rounded-2xl text-base font-bold my-2 hover:bg-accent-90 active:bg-accent-100"
            onClick={handleClick}
          >
            Back to home
          </button>
        </div>
        <div className="my-8 lg:w-[650px] xl:w-[750px] max-xl:hidden xl:pl-40">
          <img
            src={NotFoundBackgroundImage}
            alt="not-found"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
