

import logoBlackSvg from "@images/logo.svg";
import logoWhiteSvg from "@/images/logoWhite.svg";

import { FcGoogle } from "react-icons/fc";

import React from "react";

const SignUp = () => {
  return (
    <div className="signUp-container bg-[url(/src/images/sign-up.png)] bg-auto bg-no-repeat bg-center w-full h-screen md:p-14 flex justify-center items-center">
      <div className="signUp-content backdrop-blur-xl md:rounded-2xl lg:flex lg:flex-row">
        <div className="signUp--form p-14 rounded-l-2xl max-md:h-screen lg:w-[50%] lg:bg-primary-100 xl:px-24 2xl:px-36">
          <form className="signUp--form-form text-center flex flex-col">
            <div className="signUp--logo flex justify-center pt-5">
              <picture>
                <source media="(min-width: 1024px)" srcset={logoBlackSvg} />
                <img src={logoWhiteSvg} alt="logo" draggable="false" />
              </picture>
            </div>
            <div className="signUp--notes">
              <div className="signUp--notes--main-text mt-4 lg:text-secondary-100">
                Create an account
              </div>
              <div className="signUp--note--small-text mt-2 lg:text-secondary-70">
                Welcome to our neighbourhood. Let's get you started.
              </div>
            </div>
            <div className="signUp--alternative-signin flex justify-center my-5">
              <button
                type="button"
                className="sign-in--google w-full h-14 rounded-2xl bg-primary-100 text-secondary-100 lg:border-2 lg:border-solid lg:border-secondary-30"
              >
                <FcGoogle size={30} />
                Sign in with Google
              </button>
            </div>
            <div className="signUp--or-statement flex justify-center items-center mb-6">
              <div className="signUp--horizontal-line bg-primary-100 lg:bg-secondary-30 mr-4"></div>
              <div className="lg:lg:text-secondary-50">or</div>
              <div className="signUp--horizontal-line bg-primary-100 lg:bg-secondary-30 ml-4"></div>
            </div>
            <div className="signUp--fills mb-8">
              <div className="signUp--fill--name flex justify-between mb-5">
                <div className="signUp--fill--fname flex flex-col text-left w-[49%]">
                  <label className="lg:text-secondary-100" for="fname">
                    First Name
                  </label>
                  <input
                    className="signUp--inputs h-14 placeholder-[#F9FBFC]/70 text-primary-100 text-sm rounded-2xl p-3 lg:text-secondary-30 lg:placeholder-secondary-50 lg:border-2 lg:border-solid lg:border-secondary-30"
                    id="fname"
                    type="text"
                    placeholder="Jonh"
                    required
                  ></input>
                </div>
                <div className="signUp--fill--lname flex flex-col text-left w-[49%]">
                  <label className="lg:text-secondary-100" for="lname">
                    Last Name
                  </label>
                  <input
                    className="signUp--inputs h-14 placeholder-[#F9FBFC]/70 text-primary-100 text-sm rounded-2xl p-3 lg:text-secondary-100 lg:placeholder-secondary-50 lg:border-2 lg:border-solid lg:border-secondary-30"
                    id="lname"
                    type="text"
                    placeholder="Doe"
                    required
                  ></input>
                </div>
              </div>
              <div className="signUp--fill--email flex flex-col text-left">
                <label className="lg:text-secondary-100" for="email">
                  Email
                </label>
                <input
                  className="signUp--inputs h-14 placeholder-[#F9FBFC]/70 text-primary-100 text-sm rounded-2xl p-3 lg:text-secondary-100 lg:placeholder-secondary-50 lg:border-2 lg:border-solid lg:border-secondary-30"
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  required
                ></input>
              </div>
            </div>
            <div className="signUp--submit flex justify-center mb-8">
              <button
                className="signUp--submit-button w-full h-14"
                type="button"
              >
                Next
              </button>
            </div>
            <div className="signUp--has-account mb-8 lg:text-secondary-70">
              Already have an account?{" "}
              <a className="text-accent-100">Sign In</a>
            </div>
            <div className="signUp--agree-term mb-8 lg:text-secondary-70">
              You acknowledge that you have read and agree to our{" "}
              <a className="text-accent-100">terms and conditions</a> and{" "}
              <a className="text-accent-100">privacy policy</a>.
            </div>
          </form>
        </div>

        <div className="signUp--decor-content hidden p-14 lg:w-[50%] lg:flex lg:flex-col lg:justify-end lg:content-end">
          <div className="signUp--decor-content-main text-right">
            One Of The Largest Artistic Platform In Cambodia.
          </div>
          <div className="signUp--decor-content-small text-right">
            Most persons who engage in artistic and cultural pursuits would
            agree that they improve the quality of their lives because they
            provide possibilities for social interaction, personal fulfillment,
            enlightening viewpoints, and intellectual stimulation.
          </div>
        </div>
      </div>
      {/* <div className="signUp--background-credit text-center">
        Photo by <a>Filip Mroz</a> on <a>Unsplash</a>
      </div> */}
    </div>
  );
};

export default SignUp;
