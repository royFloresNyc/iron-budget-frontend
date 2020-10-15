import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <ul className="nav">
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