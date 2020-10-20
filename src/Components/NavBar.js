import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({logOutHandler}) => {
    return (
        <div className='nav-bar'>
            <ul className="nav">
                <NavLink to='/reports'><li>Reports</li></NavLink>
                <NavLink to='/transactions'><li>Transactions</li></NavLink>
                <NavLink to='/myInfo'><li>My Info</li></NavLink>
                <NavLink to='/myBank'><li>My Bank</li></NavLink>
                <NavLink to='/'><li onClick={logOutHandler}>Log Out</li></NavLink>
            </ul>
        </div>
    )
}

export default NavBar