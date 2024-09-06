import React from 'react';
import './styles.css';
import './navStyle.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
    return(
        <header>
            <div className='rightHeader'>
                <NavLink className='underline' exact to='/'>Home</NavLink>
                <NavLink className='underline' exact to='/about'>About</NavLink>
                <NavLink className='underline' exact to='/projects'>Projects</NavLink>
                <NavLink className='underline' exact to='/resume'>Qualifications</NavLink>
                <NavLink className='underline' exact to='/contact'>Contact</NavLink>
            </div>
        </header>
    );
}