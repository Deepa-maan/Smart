import React from "react";
import Button from "../Common/Button/Button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="landing-page ">
          <div className="margin-s padding-32 no-padding-mobile">
            <h1 className="margin-m text-center font-size-s">
              Web Chat Application
            </h1>
            <h5 className="margin-s text-center">
              A simple way to connect with your friends, anytime, anywhere.
            </h5>
          </div>

          <div className="margin-ml buttons-wrapper">
            <Link to="/register">
              <Button btnStyle="Button margin-xs register-btn">Register</Button>
            </Link>
            <Link to="/login">
              <Button btnStyle="Button margin-xs login-btn">Login</Button>
            </Link>
          </div>
        </div>

        {/* <div className="col blue-bg padding-32 mobile-hide"></div> */}
      </div>
    </div>
  );
};

export default LandingPage;
