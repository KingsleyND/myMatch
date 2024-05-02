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
                      
                      Playstyle: <span id="player1PS">{match?.first?.preferences?.playstyle
}</span>
                    </li>
                  </ul>
                </li>
                <li>
                  Attributes
                  <ul>
                    <li>
                      Sportsmanship: <span id="player1SMS">{match?.first?.Attributes?.sportsmanship}
</span>
                    </li>
                    <li>
                      Network: <span id="player1NTW">{match?.first?.Attributes?.Network}
</span>
                    </li>
                    <li>
                      Toxicity: <span id="player1TX">{match?.first?.Attributes?.toxicity}
</span>
                    </li>
                  </ul>
                </li>
                <li>
                  Skill
                  <ul>
                    <li>
                      Rank: <span id="player1RK">{match?.first?.Skill?.Rank}
</span>
                    </li>
                    <li>
                      Level: <span id="player1LVL">{match?.first?.Skill?.Level}
</span>
                    </li>
                  </ul>
                </li>
                <li>
                  Favorite game mode:{" "}
                  <span id="Player1FGM">{match?.first?.favoriteGameMode}




</span>
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
                      communication: <span id="player2COM">{match?.Second?.preferences?.communication}
</span>
                    </li>
                    <li>
                      Playstyle: <span id="player2PS">{match?.Second?.preferences?.playstyle}
</span>
                    </li>
                  </ul>
                </li>
                <li>
                  Attributes
                  <ul>
                    <li>
                      Sportsmanship: <span id="player2SMS">{match?.Second?.Attributes?.sportsmanship}
</span>
                    </li>
                    <li>
                      Network: <span id="player2NTW">{match?.Second?.Attributes?.Network}
</span>
                    </li>
                    <li>
                      Toxicity: <span id="Player2TX">{match?.Second?.Attributes?.toxicity}
</span>
                    </li>
                  </ul>
                </li>
                <li>
                  Skill
                  <ul>
                    <li>
                      Rank: <span id="Player2RK">{match?.Second?.Skill?.Rank}</span>
                    </li>
                    <li>
                      Level: <span id="Player2LVL">{match?.Second?.Skill?.Level}
</span>
                    </li>
                  </ul>
                </li>
                <li>
                  Favorite game mode: 
                  <span id="Player2FGM">{match?.Second?.favoriteGameMode}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
