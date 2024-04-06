import React, { useState } from "react";

import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";
import profileIcon from "../assets/person.png";

export default function LoginSignUp() {
  const [action, setAction] = useState("Sign Up")

  return (
    <div className="logContainer">
      <div className="logHeader">
        <div className="logText">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="logInputs">
        {action ==="Log in"? <></>:
        <div className="logInput">
            <img src={profileIcon} alt="" />
            <input type="text" placeholder="username"/>
          </div>
          }

          <div className="logInput">
            <img src={emailIcon} alt="" />
            <input type="email" placeholder="email" />
          </div>

          <div className="logInput">
            <img src={passwordIcon} alt="" />
            <input type="password" placeholder="password" />
          </div>
        
      </div>
      {action ==="Sign Up"? <></>:
      <div className="forgot-password">
        Forgot password? <span>click here</span>
      </div>
      }
<div className="submit-container">
    <div className={action === "Log in"? "logSubmit gray": "logSubmit"} onClick={()=>{setAction("Sign Up")}}>
      Sign Up
    </div>
    <div className={action === "Sign Up"? "logSubmit gray": "logSubmit"} onClick={()=>{setAction("Log in")}}>
      Log in
    </div>
</div>

    </div>
  );
}
