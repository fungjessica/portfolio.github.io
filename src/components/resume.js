import React from 'react';
import './styles.css';
import icons from './assets/icons';
import CollapsibleSection from './collapsibleSection';
import res from './assets/Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import c from './assets/c.png';
import javaLogo from './assets/javaLogo.png';
import reactLogo from './assets/reactLogo.png';
import pythonLogo from './assets/pythonLogo.png';
import jsLogo from './assets/jsLogo.png';
import gitLogo from './assets/gitLogo.png';

export default function Resume(){
    return(
        <div className='qualContainer'>
            <div className='columnL'>
                <h1>Skills</h1>
                <div className='section-divider'></div>

                <h3>Technical</h3>
                <div className="icon-row">
                    <div className='icon'>
                        <img src={javaLogo} className='reactPNG' />
                        <p className='java'>Java</p>
                    </div>
                    <div className='icon'>
                        <img src={reactLogo} className='reactPNG' />
                        <p className='react'>React</p>
                    </div>
                    <div className='icon'>
                        <img src={c} className='png'/>
                        <p>C++</p>
                    </div>
                    <div className='icon'>
                        <img src={pythonLogo} className='png' />
                        <p>Python</p>
                    </div>
                    <div className='icon'>
                        <img src={jsLogo} className='png' />
                        <p>JavaScript</p>
                    </div>
                    <div style={{ flexBasis: '100%' }}></div>
                    <div className='icon'>
                        <img src={gitLogo} className='png'/>
                        <p>Git</p>
                    </div>
                    
                </div>
                <div className='section-divider'></div>
                <CollapsibleSection title='Audit' >
                    <div className='audDesc'>
                        <p>SQL</p>
                        <p>Internal Controls Testing</p>
                        <p>Data Analysis</p>
                    </div>
                </CollapsibleSection>
                <div className='section-divider'></div>

                <CollapsibleSection title='Office'>
                    <div className='audDesc'>
                        <p>hi</p>
                    </div>
                </CollapsibleSection>
            </div>

            <div className='columnR'>
                <h1>Work Experience</h1>
                <div className='section-divider'></div>
                <div className='workDesc'>
                    <p>Internal Audit IT Intern, Sanmina Corporation</p>
                    
                </div>
            </div>
            
        </div>
    );
    
}
{/*<div className="icon">
                        {icons.Java}
                        <p>Java</p>
                    </div>
                    <div className="icon">
                        {icons.Js}
                        <p>JavaScript</p>
                    </div>
                    <div className='icon'>
                        {icons.React}
                        <p>React</p>
                    </div>
                    <div className='icon'>
                        {icons.Python}
                        <p>Python</p>
                    </div>*/}