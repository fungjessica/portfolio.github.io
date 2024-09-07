import React from 'react';
import './styles.css';
import './navStyle.css';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <header>
            <div className='rightHeader'>
                <Link to='/' className='underline'>Home</Link>
                <Link to='/about' className='underline'>About</Link>
                <Link to='/projects' className='underline'>Projects</Link>
                <Link to='/resume' className='underline'>Qualifications</Link>
                <Link to='/contact' className='underline'>Contact</Link>
            </div>
        </header>
    );
}