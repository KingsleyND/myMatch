import { useGlobalContext } from "../state/context.jsx"

export default function Modal(){
  const {isModalActive, setIsModalActive, caller} = useGlobalContext()

  console.log("isModalActive: ", isModalActive)
  if (isModalActive){
  return <div className="popup" >
            <div className="popup-content">
              <button onClick={() => setIsModalActive(false)}>
                <span className="close">&times;</span>

              </button>

              {
                caller === "login" ? 
                  <div>Login content </div> 
                : caller === "signup" ? 
                  <div>Signup content</div> 
                : <></>
              }
          
          </div>
  </div>

  }
  return <> </>
}