import React from 'react';
import './styles.css';
import sjsuTower from './assets/sjsuTower.jpg';

export default function About(){
    return(
        <div className='aboutContainer'>
            <div className='aboutMainText'>
                <h2><strong>A Little About Me</strong></h2>
            </div>
                <div className='aboutContent'>
                    <div className='aboutMeImg'>
                        <img className='aboutImg' src={sjsuTower} alt='SJSU Tower'/>
                    </div>
                    <div className='aboutImgTxt'>
                        <p>My name is Jessica and I am a senior at San Jose State
                            University, San Jose, California. 
                            I am pursuing a Bachelor's degree in Computer Science, with a minor in business. 
                            I currently have an expected graduation date of December 2026. 
                        </p>
                        
                        <p>I've always been interested in science and math, but 
                            I was mainly interested in game development. I started with 
                            making mods for existing video games before experimenting
                            with developing games on my own. I'm also interested in web design and development, especially UX/UI. 
                        </p>
                        <p>Recently however, I have discovered a passion for cybersecurity.
                            I really enjoy learning about the different types of internet attacks and how to 
                            protect one's device(s) from them. I believe that with the rise of technology and 
                            AI, the amount of cyberthreats will rise. I believe in educating those around me about the importance
                            of internet safety, especially since cyber attacks are only getting harder and harder to detect.
                        </p>
                    </div>
                    
                    
                </div>
                
        </div>
        
    );
}