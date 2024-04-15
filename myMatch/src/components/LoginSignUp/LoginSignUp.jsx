import React, { useState } from "react";
import { useGlobalContext } from "../../state/context";

import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";
import profileIcon from "../assets/person.png";

export default function LoginSignUp() {
  const [action, setAction] = useState("Sign Up")
  const {setIsModalActive} = useGlobalContext()

  function handleSignup(e){
    e.preventDefault()

    setAction("Sign Up")
    setIsModalActive(true)
  }

  function handleLogin(e){
    e.preventDefault()

    setAction("Log In")
    setIsModalActive(true)
  }




  // var modal = document.getElementById('logContainer');

  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }

  return (

    <div className="logContainer" id="logContainer">
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
          <div className={action === "Log in"? "logSubmit gray": "logSubmit"} onClick={handleSignup}>
            Sign Up
          </div>
          <div className={action === "Sign Up"? "logSubmit gray": "logSubmit"} onClick={handleLogin}>
            Log in
          </div>
      </div>
    </div>
  );
}