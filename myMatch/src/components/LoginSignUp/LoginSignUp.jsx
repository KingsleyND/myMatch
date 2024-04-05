import React from "react";

import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";
import profileIcon from "../assets/person.png";

export default function LoginSignUp() {
  const [action, setAction]

  return (
    <div className="logContainer">
      <div className="logHeader">
        <div className="logText">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="logInputs">
          <div className="logInput">
            <img src={profileIcon} alt="" />
            <input type="text" placeholder="username"/>
          </div>

          <div className="logInput">
            <img src={emailIcon} alt="" />
            <input type="email" placeholder="email" />
          </div>

          <div className="logInput">
            <img src={passwordIcon} alt="" />
            <input type="password" placeholder="password" />
          </div>
        
      </div>
      <div className="forgot-password">
        Forgot password? <span>click here</span>
      </div>
<div className="submit-container">
    <div className="logSubmit">
      Sign Up
    </div>
    <div className="logSubmit">
      Log in
    </div>
</div>

    </div>
  );
}
