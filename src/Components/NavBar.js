import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({logOutHandler}) => {
    return (
        <div className='nav-bar'>
            <ul className="nav">
                <li><NavLink to='/reports'>Reports</NavLink></li>
                <li><NavLink to='/transactions'>Transactions</NavLink></li>
                <li><NavLink to='/myInfo'>My Info</NavLink></li>
                <li><NavLink to='/myBank'>My Bank</NavLink></li>
                <li onClick={logOutHandler}>Log Out</li>
            </ul>
        </div>
    )
}

export default NavBar