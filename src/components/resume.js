import React from 'react';
import './styles.css';
import CollapsibleSection from './collapsibleSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Resume(){
    return(
        <div className='qualContainer'>
            
            <a href='/assets/Resume.pdf' target='_blank' className='resumePDF'>
                Downloadable Resume
                <FontAwesomeIcon icon="fa-solid fa-download" className='download'/>
                
            </a>
            
            <CollapsibleSection title='Technical Skills'>
                <ul>
                    <li>list</li>
                </ul>
            </CollapsibleSection>
            <CollapsibleSection title='Soft Skills'>
                <ul>
                    <li>list</li>
                </ul>
            </CollapsibleSection>
            <CollapsibleSection title='Audit Skills'>
                <ul>
                    <li>list</li>
                </ul>
            </CollapsibleSection>
            
            <CollapsibleSection title='Education'>
                <ul>
                    <li>list</li>
                </ul>
            </CollapsibleSection>
            <CollapsibleSection title='Software and Languages'>
                <ul>
                    <li>list</li>
                </ul>
            </CollapsibleSection>
            <CollapsibleSection title='Awards'>
                <ul>
                    <li>list</li>
                </ul>
            </CollapsibleSection>
        </div>
    );
    
}