import React, { Component } from 'react'


export default function Showcase() {
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
                            <li>communication<span id=''>mic</span></li>
                            <li>Playstyle<span id=''>DPS</span></li>
                        </ul>
                    </li>
                    <li>Attributes
                        <ul>
                            <li>communication<span id=''>mic</span></li>
                            <li>Playstyle<span id=''>DPS</span></li>
                            <li>Playstyle<span id=''>DPS</span></li>
                        </ul>
                    </li>
                    <li>Preferences
                        <ul>
                            <li>communication<span id=''>mic</span></li>
                            <li>Playstyle<span id=''>DPS</span></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
            <div className="user2Stats">

            </div>
        </div>
        </div>
        
        
      </div>
  )
}
