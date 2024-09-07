import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import linkedpfp from './assets/linkedpfp.jpg';

export default function Home(){
    return(
        <div className='container'>
            <div className='imgntxt'>
                <div className='homeMainTxt'>
                    <h1><strong>Hi, I'm Jessica</strong></h1>
                    <p>I'm an aspiring Cybersecurity Analyst</p>
                </div>
                <div className='round-corners'>
                    <img className='headshot' src={linkedpfp} alt='profile'/>
                    
                </div>
            </div>
            <div className='homeIcons'>
                <a href='/about'>
                    <button className='button'>
                        <FontAwesomeIcon icon={faHandshake} />
                        <span style={{ fontSize: '13px', marginLeft: '5px' }} className='buttonTxt'>Get to Know Me</span>
                    </button>
                </a>
                
                <a href='https://www.linkedin.com/in/jessica-x-fung/' target='_blank'>
                    <button className='button'>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span style={{ fontSize: '13px', marginLeft: '5px' }} className='buttonTxt'>Connect With Me</span>
                    </button>
                </a>
                
                
            </div>
            
        </div>
        
        
    );
}