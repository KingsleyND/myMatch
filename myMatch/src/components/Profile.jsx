import React, { useState } from "react";
import { useGlobalContext } from "../state/context.jsx"

import emailIcon from "./assets/email.png";
import passwordIcon from "./assets/email.png";
import profileIcon from "./assets/person.png";


export default function Modal(){
  const {isModalActive, setIsModalActive, caller} = useGlobalContext()
  const [action, setAction] = useState("Sign Up")

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

  console.log("isModalActive: ", isModalActive)
  if (isModalActive){
  return <div className="popup" >
            <div className="popup-content">
              <button onClick={() => setIsModalActive(false)}>
                <span className="close">&times;</span>

              </button>

              {/* Account modal */}
                  <div id="modal-account" className="" >
                    Profile content
                    <div className="profile-content">
                      
                    </div>
                  </div>
  
      </div>
  </div>
  // return <> </>
}
}