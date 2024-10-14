import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Contact = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f2r441c', 'template_16whui8', form.current, '5phpKFCSwe_MKQ14E').then((result) => {
            console.log(result.text);
            alert("Message sent!");
        }, (error) => {
            console.log(error.text);
            alert("Failed to send message!");
        });
        
            
    }
    return(
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <div className='contactContainer'>
                <div className='contactHeader'>
                    <h2><strong>Get in Touch</strong></h2>
                </div>
            
            {/*<h2><strong>Send an Inquiry</strong></h2>*/}
            <div className='textArea'>
                <div className='fieldContainer'>
                    <label className='label'>Your Name</label>
                    <input type='text' id='name' name='name' required className='form-input' />
                </div>
                <div className='fieldContainer'>
                    <label className='label'>Email</label>
                    <input type='email' id='email' name='email' required className='form-input' />
                </div>
                {/*<div className='fieldContainer'>
                    <label className='label'>Subject</label>
                    
                </div>*/}
                <div className='fieldContainer'>
                    <label className='message'>Message</label>
                    <textarea id='message' name='message' required className='form-textarea' />
                </div>
                {/*<input type='submit' value='Send' className='button' />*/}
                <button type='submit' className='button'>
                    <span style={{ fontSize: '13px', marginLeft: '2px' }} className='buttonTxt'>Submit</span>
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
                
                
                {/*<a href='https://www.google.com'>
                    <FontAwesomeIcon icon={faEnvelope} className='cntBtn'/>
                    <span className='contactTxt'>Prefer to email me directly? Click here</span>
                </a>*/}
            </div>
                
            </div>
        </form>
        
    );
};
export default Contact;