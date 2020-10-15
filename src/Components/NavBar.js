import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <ul>
                <li><NavLink to='/'>Navigation Link</NavLink></li>
                <li><NavLink to=''>Navigation Link</NavLink></li>
                <li><NavLink to=''>Navigation Link</NavLink></li>
                <li><NavLink to=''>Navigation Link</NavLink></li>
                <li><NavLink to=''>Navigation Link</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar