import Logo from "@components/Logo";

import logoWhiteSvg from "@/images/logoWhite.svg";

import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="signUp-container bg-[url(/src/images/sign-up.png)] bg-auto bg-no-repeat bg-center w-full h-screen">
      <div className="signUp-content h-screen backdrop-blur-lg md:flex md:flex-col">
        <div className="signUp--form">
          <form className="signUp--form-form text-center">
            <div className="signUp--logo flex justify-center">
              <img src={logoWhiteSvg} alt="logo" draggable={false} />
            </div>
            <div className="signUp--notes">
              <div className="signUp--notes--main-text mx-12">
                Create an account
              </div>
              <div className="signUp--note--small-text mx-12">
                Welcome to our neighbourhood. Let's get you started.
              </div>
            </div>
            <div className="signUp--alternative-signin flex justify-center mx-14">
              <button type="button" className="sign-in--google w-full h-14">
                <FcGoogle size={30} />
                Sign in with Google
              </button>
            </div>
            <div className="signUp--or-statement">- or -</div>
            <div className="signUp--fills mx-14">
              <div className="flex justify-between">
                <div className="flex flex-col text-left">
                  <label for="fname">First Name</label>
                  <input
                    className="h-14 bg-primary-10/0 placeholder-[#F9FBFC]/70 border-2 border-primary-100 text-primary-100 text-sm rounded-lg focus:ring-accent-100 focus:border-accent-100 p-2.5"
                    id="fname"
                    type="text"
                    placeholder="Jonh"
                    required
                  ></input>
                </div>
                <div className="flex flex-col text-left">
                  <label for="fname">Last Name</label>
                  <input
                    className="h-14 bg-primary-10/0 placeholder-[#F9FBFC]/70 border-2 border-primary-100 text-primary-100 text-sm rounded-lg focus:ring-accent-100 focus:border-accent-100 p-2.5"
                    id="lname"
                    type="text"
                    placeholder="Doe"
                    required
                  ></input>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <label for="email">Email</label>
                <input
                  className="h-14 bg-primary-10/0 placeholder-[#F9FBFC]/70 border-2 border-primary-100 text-primary-100 text-sm rounded-lg focus:ring-accent-100 focus:border-accent-100 p-2.5"
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  required
                ></input>
              </div>
            </div>
            <div className="signUp--submit flex justify-center mx-14">
              <button
                className="signUp--submit-button w-full h-14"
                type="button"
              >
                Next
              </button>
            </div>
            <div>Already have an account? <a className="">Sign In</a></div>
          </form>
        </div>

        <div className="signUp--decor-content hidden md:flex">
          <div className="signUp--decor-content-main">
            One of the
            <br />
            largest artistic
            <br />
            communities
            <br />
            in Cambodia.
          </div>
          <div className="signUp--decor-content-small">
            Most persons who engage in artistic and cultural pursuits
            <br />
            would agree that they improve the quality of their lives
            <br />
            because they provide possibilities for social interaction,
            <br />
            personal fulfillment, enlightening viewpoints, and intellectual
            <br />
            stimulation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
