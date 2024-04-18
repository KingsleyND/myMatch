import React, { useState, useRef } from "react";
import { useGlobalContext } from "../state/context.jsx"
import { useAuth } from "../contexts/AuthContext.jsx";
import emailIcon from "./assets/email.png";
import passwordIcon from "./assets/email.png";
import profileIcon from "./assets/person.png";
import { Alert } from "react-bootstrap";


export default function Modal(){
  const {isModalActive, setIsModalActive, caller} = useGlobalContext()
  const [action, setAction] = useState("Sign Up")
  const emailRef = useRef()
  const passwordRef = useRef()
  const {signup, currentUser} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()

    // if(passwordRef.current.value !== passwordConfirmRef.current.value){
    //   return  setError("passwords do not match")
    // }

    try{
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    }catch{
      setError("Failed to create an account")
    }
    setLoading(false)

    
  }

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
  function handleProfile(e){
    e.preventDefault()
    setIsModalActive(true)
  }
  

  console.log("isModalActive: ", isModalActive)
  if (isModalActive){
  return <div className="popup" >
            <div className="popup-content">
              <button onClick={() => setIsModalActive(false)}>
                <span className="close">&times;</span>

              </button>

              {
                caller === "login" ? 
                  <div>Login content
                    
                    <div className="logContainer" id="logContainer">
      <div className="logHeader">
        <div className="logText">Log in</div>
        <div className="underline"></div>
      </div>
      <div className="logInputs">
        {/* {action ==="Log in"? <></>:
        <div className="logInput">
            <img src={profileIcon} alt="" />
            <input type="text" placeholder="username"/>
          </div>
          } */}


          <form id="login-form">
          <div className="logInput">
            <img src={emailIcon} alt="" />
            <input type="email" id="login-email" placeholder="email" required />
          </div>
          
          <div className="logInput">
            <img src={passwordIcon} alt="" />
            <input type="password" id="login-password" placeholder="password" required />
          </div>
          </form>
      </div>
      
      {action ==="Log In"? <></>:
        <div className="forgot-password">
          Forgot password? <span>click here</span>
        </div>
      }
      <div className="submit-container">
          {/* <div className={action === "Log in"? "logSubmit gray": "logSubmit"} onClick={handleSignup}>
            Sign Up
          </div> */}
          <div className={action === "Sign Up"? "logSubmit gray": "logSubmit"} onClick={handleLogin}>
            Log in
          </div>
      </div>
    </div>
                     </div> 
                : caller === "signup" ? 
                  <div>Signup content
                    <div className="logContainer" id="logContainer">
      <div className="logHeader">
        <div className="logText">SIgn up</div>
        {currentUser && currentUser.email}
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="underline"></div>
      </div>
{/* SIGN UP   -------- */}

      <form id="signup-form" onSubmit={handleSubmit}>
      <div className="logInputs">
        {action ==="Log in"? <></>:
        <div className="logInput">
            <img src={profileIcon} alt="" />
            <input type="text" placeholder="username"/>
          </div>
          }

          <div className="logInput">
            <img src={emailIcon} alt="" />
            <input type="email" id="signup-email" ref={emailRef} placeholder="email" required />
          </div>
          
          <div className="logInput">
            <img src={passwordIcon} alt="" />
            <input type="password" id="signup-password" ref={passwordRef} placeholder="password" required />
          </div>        
      </div>
      
      {action ==="Sign Up"? <></>:
        <div className="forgot-password">
          Forgot password? <span>click here</span>
        </div>
      }
        <div className="submit-container">
            <button disabled={loading} className="logSubmit" onClick={handleSignup} type="submit">
              Sign Up.
            </button>
            {/* <div className={action === "Sign Up"? "logSubmit gray": "logSubmit"} onClick={handleLogin}>
              Log in
            </div> */}
        </div>
      </form>
    </div>
                  </div> 
                  
                : <></>
              }
          
          </div>
  </div>

  }
  return <> </>
}