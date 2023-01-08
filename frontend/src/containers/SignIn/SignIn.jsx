import "@/sass/components/_button.scss";

import logoBlackSvg from "@images/logo.svg";
import logoWhiteSvg from "@/images/logoWhite.svg";

import { auth } from "@/api";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { userAuthStore } from "@/zustand";
import axios from "@/axios";

const SignIn = () => {
  const client = useQueryClient();

  const setCurrentUser = userAuthStore((state) => state.setCurrentUser);
  const currentUser = userAuthStore((state) => state.currentUser);

  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isPaused,
    isSuccess,
    mutate,
  } = auth.login();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const tryToSignIn = (form) => {
    mutate(form, {
      onSuccess: (resp) => {
        setCurrentUser(resp.data);
        axios.defaults.headers.common.Authorization = `Bearer ${resp.data.accessToken}`;
      },
    });
  };

  return (
    <div className="signIn-container bg-[url(/src/images/sign-up.png)] bg-auto bg-no-repeat bg-center w-full h-screen md:p-14 flex justify-center items-center">
      <div className="signIn-content backdrop-blur-xl md:rounded-2xl lg:flex lg:flex-row">
        <div className="signIn--form p-14 rounded-l-2xl max-md:h-screen lg:w-[50%] lg:bg-primary-100 xl:px-24 2xl:px-36">
          <form
            className="text-center flex flex-col"
            onSubmit={handleSubmit(tryToSignIn)}
          >
            <div className="flex justify-center pt-5">
              <picture>
                <source media="(min-width: 1024px)" srcSet={logoBlackSvg} />
                <img src={logoWhiteSvg} alt="logo" draggable="false" />
              </picture>
            </div>
            <div>
              <div className="mt-4 text-3xl font-bold lg:text-secondary-100 my-4">
                Welcome Back {currentUser.email}
              </div>
              <div className="mt-2 text-base font-medium lg:text-secondary-70 my-4">
                Happy to see you again! Let's get you started.
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
              <div className="flex flex-col text-left mb-5">
                <label
                  className="text-base font-semibold lg:text-secondary-100 my-1"
                  htmlFor="signInEmail"
                >
                  Email
                </label>
                <input
                  className="h-14 placeholder-[#F9FBFC]/70 text-primary-100 text-sm border-2 border-solid border-primary-70 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:placeholder-secondary-50 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
                  id="signInEmail"
                  type="email"
                  placeholder="Eneter your email"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Invalid email format.",
                    },
                  })}
                ></input>
              </div>
              <div className="flex flex-col text-left">
                <label
                  className="text-base font-semibold lg:text-secondary-100 my-1"
                  htmlFor="signInPassword"
                >
                  Password
                </label>
                <input
                  className="h-14 placeholder-[#F9FBFC]/70 text-primary-100 text-sm border-2 border-solid border-primary-70 hover:border-primary-100 active:border-accent-100 focus:border-accent-100 focus:hover:border-accent-100 rounded-2xl p-3 lg:text-secondary-100 lg:placeholder-secondary-50 lg:border-2 lg:border-solid lg:border-secondary-50 lg:hover:border-secondary-100"
                  id="signInPassword"
                  type="password"
                  placeholder="Eneter your password"
                  {...register("password", {
                    required: "Password is required.",
                    maxLength: {
                      value: 64,
                      message: "Password is too many characters.",
                    },
                    minLength: {
                      value: 8,
                      message: "Password is must be more than 8 characters.",
                    },
                  })}
                ></input>
                <div className="font-semibold text-accent-100 text-right mt-1">
                  <Link
                    to="/recovery-password"
                    className="text-accent-100 hover:text-accent-80 cursor-pointer"
                  >
                    Forget Password
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-8">
              <button
                className="button-filled-accent w-full h-14 rounded-2xl"
                type="submit"
              >
                Log In
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
            <div className="mb-8 lg:text-secondary-70">
              You acknowledge that you have read and agree to our{" "}
              <Link
                to="/terms"
                className="text-accent-100 hover:text-accent-80 cursor-pointer"
              >
                terms and conditions
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy-policy"
                className="text-accent-100 hover:text-accent-80 cursor-pointer"
              >
                privacy policy
              </Link>
              .
            </div>
          </form>
        </div>
        <div className="signIn--decor-content hidden p-14 lg:w-[50%] lg:flex lg:flex-col lg:justify-end lg:content-end">
          <div className="signIn--decor-content-main text-6xl font-bold text-right">
            One Of The Largest Artistic Platform In Cambodia.
          </div>
          <div className="signIn--decor-content-small text-base font-normal text-right">
            Most persons who engage in artistic and cultural pursuits would
            agree that they improve the quality of their lives because they
            provide possibilities for social interaction, personal fulfillment,
            enlightening viewpoints, and intellectual stimulation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
