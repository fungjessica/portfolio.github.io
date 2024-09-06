import React from 'react';
import './styles.css';
import CollapsibleSection from './collapsibleSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects(){
    return(
        <div className='aboutContainer'>
            {/*<div className='projMainText'>
                <h2><strong>My Projects</strong></h2>
            </div>*/}
            <div className='projectContent'>
                <div className='pSecondaryText'>
                    <div className='projectItem'>
                        <CollapsibleSection title='Critter Crops'>
                            {/*<h2><i>Critter Crops</i></h2>*/}
                            
                            <p className='projectDesc'>
                                Critter Crops is a 2D, 16-bit style video game
                                that I have been developing with a team in the Game Development Club
                                at SJSU since September 2023. I assume the role of Producer and Backend Developer. I am in charge
                                of overseeing the group's task timeline and completion, implementation, and 
                                development of the game's inner mechanics. 
                            </p>
                            
                            <p>
                                During my time as the group leader, I have been able to improve my leadership, interpersonal,
                                and communication skills, as well as my skills and knowledge of C# and debugging capabilities. 
                                    
                            </p>
                            <a href='https://github.com/fungjessica/critter-crops/tree/jess'>
                                <button className='button'>
                                    <FontAwesomeIcon icon={faSquareGithub} style={{fontSize: '17px', marginRight: '5px'}}/>
                                    <span style={{ fontSize: '13px'}} className='buttonTxt'>Github</span>
                                </button>
                            </a>
                        </CollapsibleSection>
                    </div>

                    <div className='projectItem'>
                        <CollapsibleSection title='Library Management System'>
                            <p className='projectDesc'>
                            In my first semester at SJSU, I took a 
                            class covering Object Oriented Programming in Java. The class
                            included a massive 3-month long collaborative project that required us to
                            develop a fully functional online library system using Java and JavaFX/Java Swing. 
                            I was responsible for creating the library's
                            backend, where the librarian is able to view the list of available books and its status'. 
                            I was also responsible for designing the librarian's screen, using 
                            JavaFX, now known as Java Swing. 
                            </p>
                            <p>
                                As I collaborated with my team on this project, I gained communication and technical
                                skills, especially expanding my knowledge of Java and learning how to utilize GitHub.
                            
                            </p>
                            <a href='https://github.com/lisayu198/CS151-Library-Management-System-by-Jamba-Juice/tree/jess-branch'>
                                <button className='gitHubButton'>
                                    <span className='buttonTxt'>Github</span>
                                </button>
                            </a>
                        </CollapsibleSection>
                        {/*<h2><i>Library Management System</i></h2>*/}
                        
                        
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}