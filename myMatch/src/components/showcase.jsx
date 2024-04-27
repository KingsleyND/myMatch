import React, { Component } from 'react'
import { findBestMatch } from '../utils/matchAlg'


export default function Showcase() {
   const user= findBestMatch(users) 
    
  return (
    <div>
        <div>
            <h1>showcase</h1>
        <div className='buttonContainer'> <button className='findMatchButton'>Find Match</button></div>

        <div className='showcaseContainer'>
            <h3>Best Match</h3>
            <div className="user1Stats">
                <h2 className='name' id='user1Name'>User1</h2>

                <div className='attributes'><h4>attributes</h4>
                <ul>
                    <li>Preferences
                        <ul>
                            <li>communication: <span id=''>mic</span></li>
                            <li>Playstyle: <span id=''>DPS</span></li>
                        </ul>
                    </li>
                    <li>Attributes
                        <ul>
                            <li>Sportsmanship: <span id=''>mic</span></li>
                            <li>Network: <span id=''>80ms</span></li>
                            <li>Toxicity: <span id=''>25%</span></li>
                        </ul>
                    </li>
                    <li>Skill
                        <ul>
                            <li>Rank: <span id=''>mic</span></li>
                            <li>Level: <span id=''>20</span></li>
                        </ul>
                    </li>
                    <li>Favorite game mode: <span>Team death match</span></li>
                </ul>
                </div>
            </div>


            <div className="user2Stats">
            <h2 className='name' id='user1Name'>User2</h2>
            <div className='attributes'><h4>attributes</h4>
                <ul>
                    <li>Preferences
                        <ul>
                            <li>communication: <span id=''>mic</span></li>
                            <li>Playstyle: <span id=''>DPS</span></li>
                        </ul>
                    </li>
                    <li>Attributes
                        <ul>
                            <li>Sportsmanship: <span id=''>mic</span></li>
                            <li>Network: <span id=''>80ms</span></li>
                            <li>Toxicity: <span id=''>25%</span></li>
                        </ul>
                    </li>
                    <li>Skill
                        <ul>
                            <li>Rank: <span id=''>mic</span></li>
                            <li>Level: <span id=''>20</span></li>
                        </ul>
                    </li>
                    <li>Favorite game mode: <span>Team death match</span></li>
                </ul>
                </div>
            </div>
        </div>
        </div>
        
        
      </div>
  )
}
