import React from 'react';
import './styles.css';
import CollapsibleSection from './collapsibleSection';
import res from './assets/Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Resume(){
    return(
        <div className='qualContainer'>
            
            <a href={res} target='_blank' className='resumePDF' rel='noopener noreferrer'>
                Downloadable Resume
                <FontAwesomeIcon icon={faDownload} className='download' />
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