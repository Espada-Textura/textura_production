import "@/sass/components/_button.scss";

import React from "react";

import SignUpForm from "./SignUpForm";
import ConfirmPasswordForm from "./ConfirmPasswordForm";
import VerifyPasswordForm from "./VerifyPasswordForm";

const SignUp = () => {
  return (
    <div className="signUp-container bg-[url(/src/images/sign-up.png)] bg-auto bg-no-repeat bg-center w-full h-screen md:p-14 flex justify-center items-center">
      <div className="signUp-content backdrop-blur-xl md:rounded-2xl lg:flex lg:flex-row">
        <SignUpForm />
        <div className="signUp--decor-content hidden p-14 lg:w-[50%] lg:flex lg:flex-col lg:justify-end lg:content-end">
          <div className="signUp--decor-content-main text-6xl font-bold text-right">
            One Of The Largest Artistic Platform In Cambodia.
          </div>
          <div className="signUp--decor-content-small text-base font-normal text-right">
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

export default SignUp;
