import React from 'react';
import './styles.css';
import CollapsibleSection from './collapsibleSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function Projects(){
    return(
        <div className = 'qualContainer'>
            <div className='columnL'>
                <h1>Projects</h1>
                <div className='section-divider'></div>

                <CollapsibleSection title='Web-Based Star Tracker'>
                    <div className='projDesc'>
                        <p>The web-based star tracker is inspired by the app <i>Stellarium</i>. The website utilizes
                        several programming languages such as Python, C++, JavaScript, as well as React to host the website.
                        I used Python to gather the necessary data (Gaia, Hipparcos, and NGC catalogs) and filter them via visibility and 
                        distance from Earth. JavaScript was used to retrieve the user's geolocation, which was used to additionally filter the catalogs.</p>

                        <p>Initially, the website used Three.js to render the catalogs, but since it turned out to be computationally heavy, I switched to C++ and OpenGL.</p>
                        <a href='https://github.com/fungjessica/starmap.github.io' target='_blank'>
                            <button className='gitHubButton' style={{marginRight: '5px'}}>
                                <span style={{ fontSize: '13px', marginLeft: '2px' }}>GitHub</span>
                                <FontAwesomeIcon icon={faSquareGithub} style={{ fontSize: '15px', marginLeft: '5px' }}/>
                            </button>
                        </a>
                        <a href='https://fungjessica.github.io/starmap.github.io/' target='_blank'>
                            <button className='gitHubButton' style={{marginLeft: '5px'}}>
                                <span style={{ fontSize: '13px', marginLeft: '2px' }}>Website</span>
                                <FontAwesomeIcon icon={faRightToBracket} style={{ fontSize: '15px', marginLeft: '5px' }}/>
                            </button>
                        </a>
                    </div>
                </CollapsibleSection>
                <CollapsibleSection title='Critter Crops'>
                    <div className='projDesc'>
                        <p>Critter Crops was a video game I created with a group of friends
                            at San Jose State's Game Development Club. We worked on this 
                            project from September 2023 to May 2024. It is a 2D, pixelated
                            game utilizing the Unity Game Engine and C#. The game's theme is
                            a comfort farming simulator, inspired by hit titles such as Stardew Valley
                            and Pokemon. 
                        </p>
                        <p>I was the team's producer and main developer, in charge of enforcing
                            deadlines and the game's back-end functionalities. The main functions 
                            I developed were player and NPC movement, player farming capabilities, and 
                            special NPC skills.
                        </p>
                        <a href='https://github.com/fungjessica/critter-crops' target='_blank'>
                            <button className='gitHubButton' style={{marginRight: '5px'}}>
                                <span style={{ fontSize: '13px', marginLeft: '2px' }}>GitHub</span>
                                <FontAwesomeIcon icon={faSquareGithub} style={{ fontSize: '15px', marginLeft: '5px' }}/>
                            </button>
                        </a>
                        
                    </div>
                        
                    
                </CollapsibleSection>
                
            </div>
            
        </div>
    );
}