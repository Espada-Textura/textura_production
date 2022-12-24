import "@/sass/components/_button.scss";

import logoBlackSvg from "@images/logo.svg";
import logoWhiteSvg from "@/images/logoWhite.svg";

import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  return (
    <div className="signUp--form p-14 rounded-l-2xl max-md:h-screen lg:w-[50%] lg:bg-primary-100 xl:px-24 2xl:px-36">
      <form className="text-center flex flex-col">
        <div className="flex justify-center pt-5">
          <picture>
            <source media="(min-width: 1024px)" srcset={logoBlackSvg} />
            <img src={logoWhiteSvg} alt="logo" draggable="false" />
          </picture>
        </div>
        <div>
          <div className="mt-4 text-3xl font-bold lg:text-secondary-100 my-4">
            Create an account
          </div>
          <div className="mt-2 text-base font-medium lg:text-secondary-70 my-4">
            Welcome to our neighbourhood. Let's get you started.
          </div>
        </div>
        <div className="text-base font-bold flex justify-center my-5">
          <button
            type="button"
            className="w-full h-14 rounded-2xl bg-primary-100 text-secondary-100 lg:border-2 lg:border-solid lg:border-secondary-30"
          >
            <FcGoogle size={30} />
            Sign in with Google
          </button>
        </div>
        <div className="flex justify-center items-center mb-6">
          <div className="w-[100%] h-0.5 bg-primary-100 lg:bg-secondary-30 mr-4"></div>
          <div className="lg:lg:text-secondary-50">or</div>
          <div className="w-[100%] h-0.5 bg-primary-100 lg:bg-secondary-30 ml-4"></div>
        </div>
        <div className="mb-8">
          <div className="flex justify-between mb-5">
            <div className="flex flex-col text-left w-[49%]">
              <label className="text-base font-semibold lg:text-secondary-100 my-1" for="fname">
                First Name
              </label>
              <input
                className="h-14 placeholder-[#F9FBFC]/70 text-primary-100 text-sm border-2 border-solid border-primary-70 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:placeholder-secondary-50 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
                id="fname"
                type="text"
                placeholder="Jonh"
                required
              ></input>
            </div>
            <div className="flex flex-col text-left w-[49%]">
              <label className="text-base font-semibold lg:text-secondary-100 my-1" for="lname">
                Last Name
              </label>
              <input
                className="h-14 placeholder-[#F9FBFC]/70 text-primary-100 text-sm border-2 border-solid border-primary-70 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:placeholder-secondary-50 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
                id="lname"
                type="text"
                placeholder="Doe"
                required
              ></input>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <label className="text-base font-semibold lg:text-secondary-100 my-1" for="email">
              Email
            </label>
            <input
              className="h-14 placeholder-[#F9FBFC]/70 text-primary-100 text-sm border-2 border-solid border-primary-70 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:placeholder-secondary-50 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
              id="email"
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
          Already have an account? <a className="text-accent-100 hover:text-accent-80 cursor-pointer">Sign In</a>
        </div>
        <div className="mb-8 lg:text-secondary-70">
          You acknowledge that you have read and agree to our{" "}
          <a className="text-accent-100 hover:text-accent-80 cursor-pointer">terms and conditions</a> and{" "}
          <a className="text-accent-100 hover:text-accent-80 cursor-pointer">privacy policy</a>.
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
