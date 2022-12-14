import "@/sass/components/_button.scss";

import logoBlackSvg from "@images/logo.svg";
import logoWhiteSvg from "@/images/logoWhite.svg";

import { Link } from "react-router-dom";

const RecoveryPasswordForm = () => {
  return (
    <div className="recoveryPassword--form p-14 rounded-l-2xl max-md:h-screen lg:w-[50%] lg:bg-primary-100 xl:px-24 2xl:px-36">
      <form className="text-center flex flex-col">
        <div className="flex justify-center pt-5">
          <picture>
            <source media="(min-width: 1024px)" srcSet={logoBlackSvg} />
            <img src={logoWhiteSvg} alt="logo" draggable="false" />
          </picture>
        </div>
        <div>
          <div className="mt-4 text-3xl font-bold lg:text-secondary-100 my-4">
            Recovery Password
          </div>
          <div className="mt-2 text-base font-medium lg:text-secondary-70 my-4">
            Need help with your password? Let's reset your account.
          </div>
        </div>
        <div className="mb-8">
          <div className="flex flex-col text-left">
            <label
              className="text-base font-semibold lg:text-secondary-100 my-1"
              htmlFor="recoveryPasswordEmail"
            >
              Email
            </label>
            <input
              className="h-14 placeholder-[#F9FBFC]/70 text-primary-100 text-sm border-2 border-solid border-primary-70 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:placeholder-secondary-50 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
              id="recoveryPasswordEmail"
              type="email"
              placeholder="example@example.com"
              required
            ></input>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <button
            className="button-filled-accent w-full h-14 rounded-2xl"
            type="button"
          >
            Next
          </button>
        </div>
        <div className="mb-8 lg:text-secondary-70">
          Not a member?{" "}
          <Link
            to="/sign-up"
            className="text-accent-100 hover:text-accent-80 cursor-pointer"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RecoveryPasswordForm;
