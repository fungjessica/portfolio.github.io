import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

export default function Contact(){
    return(
        <div className='contactContainer'>
            <div className='contactHeader'>
                <h2><strong>Get in Touch</strong></h2>
            </div>
            
            {/*<h2><strong>Send an Inquiry</strong></h2>*/}
            <div className='textArea'>
                <div className='fieldContainer'>
                    <label className='label'>Your Name</label>
                    <textarea name='field' rows={1} cols={30}></textarea>
                </div>
                <div className='fieldContainer'>
                    <label className='label'>Email</label>
                    <textarea name='field' rows={1} cols={30}></textarea>
                </div>
                <div className='fieldContainer'>
                    <label className='label'>Subject</label>
                    <textarea name='field' rows={1} cols={30}></textarea>
                </div>
                <div className='fieldContainer'>
                    <label className='label'>Message</label>
                    <textarea name='field' rows={1} cols={30}></textarea>
                </div>
                <button className='button'>
                    
                    <span style={{ fontSize: '13px', marginLeft: '5px' }} className='buttonTxt'>Submit</span>
                    <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '13px', marginLeft: '5px' }} className='plane'/>
                </button>
            </div>
            <div className='cntLink'>
                <a href='https://www.linkedin.com/in/jessica-x-fung/'>
                    {/*<button className='button'>
                    </button>*/}
                    <FontAwesomeIcon icon={faLinkedin} className='cntBtn'/>
                    <span className='contactTxt'>Prefer LinkedIn? Click here</span>
                </a>
                
                {/*<button className='button'>
                </button>*/}
                <a href='https://www.google.com'>
                    <FontAwesomeIcon icon={faEnvelope} className='cntBtn'/>
                    <span className='contactTxt'>Prefer to email me directly? Click here</span>
                </a>
            </div>
                
        </div>
    )
}