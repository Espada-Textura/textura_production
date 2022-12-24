import "@/sass/components/_button.scss";

import logoBlackSvg from "@images/logo.svg";
import logoWhiteSvg from "@/images/logoWhite.svg";

import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const ConfirmPasswordForm = () => {
  return (
    <div className="confirmPassword--form p-14 rounded-l-2xl max-md:h-screen lg:w-[50%] lg:bg-primary-100 xl:px-24 2xl:px-36">
      <form className="text-center flex flex-col">
        <div className="flex justify-center pt-5">
          <picture>
            <source media="(min-width: 1024px)" srcset={logoBlackSvg} />
            <img src={logoWhiteSvg} alt="logo" draggable="false" />
          </picture>
        </div>
        <div>
          <div className="mt-4 text-3xl font-bold lg:text-secondary-100 my-4">
            Choose a password
          </div>
          <div className="mt-2 text-base font-medium lg:text-secondary-70 my-4">
            For your security, please pick a password that only you know.
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-col text-left mb-4">
            <label
              className="text-base font-semibold lg:text-secondary-100 my-1"
              for="password"
            >
              Password
            </label>
            <input
              className="h-14 placeholder-[#F9FBFC]/70 text-primary-100 text-sm border-2 border-solid border-primary-70 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:placeholder-secondary-50 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            ></input>
          </div>
          <div className="flex flex-col text-left my-4">
            <label
              className="text-base font-semibold lg:text-secondary-100 my-1"
              for="cfpassword"
            >
              Confirm Password
            </label>
            <input
              className="h-14 placeholder-[#F9FBFC]/70 text-primary-100 text-sm border-2 border-solid border-primary-70 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:placeholder-secondary-50 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
              id="cfpassword"
              type="password"
              placeholder="Re-enter your password"
              required
            ></input>
          </div>
          <div className="text-base text-primary-100 lg:text-secondary-100 text-left">
            Your password should contain <strong>8 characters</strong>.
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
          You acknowledge that you have read and agree to our{" "}
          <a className="text-accent-100 hover:text-accent-80 cursor-pointer">
            terms and conditions
          </a>{" "}
          and{" "}
          <a className="text-accent-100 hover:text-accent-80 cursor-pointer">
            privacy policy
          </a>
          .
        </div>
      </form>
    </div>
  );
};

export default ConfirmPasswordForm;
