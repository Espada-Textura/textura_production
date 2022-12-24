import "@/sass/components/_button.scss";

import logoBlackSvg from "@images/logo.svg";
import logoWhiteSvg from "@/images/logoWhite.svg";

const VerifyPasswordForm = () => {
  return (
    <div className="verify-password--form p-14 rounded-l-2xl max-md:h-screen lg:w-[50%] lg:bg-primary-100 xl:px-24 2xl:px-36">
      <form className=" text-center flex flex-col">
        <div className="flex justify-center pt-5">
          <picture>
            <source media="(min-width: 1024px)" srcset={logoBlackSvg} />
            <img src={logoWhiteSvg} alt="logo" draggable="false" />
          </picture>
        </div>
        <div>
          <div className="mt-4 text-3xl font-bold lg:text-secondary-100 my-4">
            Verification
          </div>
          <div className="mt-2 text-base font-medium lg:text-secondary-70 my-4">
            We sent you a verification code to your email address.
          </div>
          <div className="mt-2 text-base font-bold lg:text-accent-100">
            email@example.com
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-col text-left">
            <label
              className="text-base font-semibold lg:text-secondary-100 my-1"
              for="number"
            >
              Verification Code
            </label>
            <div className="flex flex-row justify-between items-center">
              {/* <input
                className="w-16 h-16 text-primary-100 text-sm border-2 border-solid border-primary-100 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
                id="number"
                type="number"
                required
              ></input>
              <input
                className="w-16 h-16 text-primary-100 text-sm border-2 border-solid border-primary-100 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
                id="number"
                type="number"
                required
              ></input>
              <input
                className="w-16 h-16 text-primary-100 text-sm border-2 border-solid border-primary-100 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
                id="number"
                type="number"
                required
              ></input>
              <input
                className="w-16 h-16 text-primary-100 text-sm border-2 border-solid border-primary-100 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
                id="number"
                type="number"
                required
              ></input>
              <input
                className="w-16 h-16 text-primary-100 text-sm border-2 border-solid border-primary-100 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
                id="number"
                type="number"
                required
              ></input>
              <input
                className="w-16 h-16 text-primary-100 text-sm border-2 border-solid border-primary-100 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
                id="number"
                type="number"
                required
              ></input> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <button
            className="button-filled-accent w-full h-14 rounded-2xl"
            type="button"
          >
            Create Account
          </button>
        </div>
        <div className="mb-8 lg:text-secondary-70">
          Did not get the code?{" "}
          <a className="text-accent-100 hover:text-accent-80 cursor-pointer">
            Resend
          </a>
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

export default VerifyPasswordForm;
