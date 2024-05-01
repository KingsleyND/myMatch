import React, {useState} from "react";
import { FindPerfectMatch } from "../utils/FindPerfectMatch";
  
export default function Showcase() {
  const [match , setMatch] = useState()
  const [loading , setLoading] = useState(false)
  const handlePerfectMatch = async() => {
    setLoading(true)
    const perfectMatch = await FindPerfectMatch()
    setLoading(false)
    setMatch(perfectMatch)
  }
console.log(match)
  if(loading) return (
    <div>
      Loading
    </div> 
  )
  
  return (
    <div>
      <div>
        <h1>showcase</h1>
        <div className="buttonContainer" >
          {" "}
          <button
            className="findMatchButton" onClick={handlePerfectMatch}
            
          >
            Find Match
          </button>
        </div>

        <div className="showcaseContainer">
          <h3>Best Match</h3>
          <div className="user1Stats">
            <h2 className="name" id="user1Name">
              User1
            </h2>

            <div className="attributes">
              <h4>attributes</h4>
              <ul>
                <li>
                  Preferences
                  <ul>
                    <li>
                      communication: <span id="player1com">{match?.first?.preferences?.communication}</span>
                    </li>
                    <li>
                      Playstyle: <span id="player1PS">DPS</span>
                    </li>
                  </ul>
                </li>
                <li>
                  Attributes
                  <ul>
                    <li>
                      Sportsmanship: <span id="player1SMS">⭐⭐⭐⭐</span>
                    </li>
                    <li>
                      Network: <span id="player1NTW">80ms</span>
                    </li>
                    <li>
                      Toxicity: <span id="player1TX">25%</span>
                    </li>
                  </ul>
                </li>
                <li>
                  Skill
                  <ul>
                    <li>
                      Rank: <span id="player1RK">mic</span>
                    </li>
                    <li>
                      Level: <span id="player1LVL">20</span>
                    </li>
                  </ul>
                </li>
                <li>
                  Favorite game mode:{" "}
                  <span id="Player1FGM">Team death match</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="user2Stats">
            <h2 className="name" id="user1Name">
              User2
            </h2>
            <div className="attributes">
              <h4>attributes</h4>
              <ul>
                <li>
                  Preferences
                  <ul>
                    <li>
                      communication: <span id="player2COM">mic</span>
                    </li>
                    <li>
                      Playstyle: <span id="player2PS">DPS</span>
                    </li>
                  </ul>
                </li>
                <li>
                  Attributes
                  <ul>
                    <li>
                      Sportsmanship: <span id="player2SMS">⭐⭐⭐⭐</span>
                    </li>
                    <li>
                      Network: <span id="player2NTW">80ms</span>
                    </li>
                    <li>
                      Toxicity: <span id="Player2TX">25%</span>
                    </li>
                  </ul>
                </li>
                <li>
                  Skill
                  <ul>
                    <li>
                      Rank: <span id="Player2RK">Gold</span>
                    </li>
                    <li>
                      Level: <span id="Player2LVL">20</span>
                    </li>
                  </ul>
                </li>
                <li>
                  Favorite game mode:{" "}
                  <span id="Player2FGM">Team death match</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
