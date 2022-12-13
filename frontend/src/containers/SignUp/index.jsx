import Logo from "@components/Logo"

const SignUp = () => {
  return (
    <div className="signUp-container">
      <div className="signUp-content">
        <div className="signUp--form">
          <form className="signUp--form-form text-center">
            <div className="signUp--logo text-center">
              <Logo />
            </div>
            <div className="signUp--notes">
              <div className="signUp--notes--main-text">Create an account</div>
              <div className="signUp--note--small-text">
                Welcome to our neighbourhood. Let's get you started.
              </div>
            </div>
            <div className="signUp--alternative-signin flex justify-center">
              <button  className="sign-in--google w-96">
                Sign in with Google
              </button>
            </div>
            <div className="signUp--or-statement"></div>
            <div className="signUp--fills"></div>
            <div className="signUp--submit"></div>
          </form>
        </div>

        {/* <div className="signUp--decor-content sm:hide">
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
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
