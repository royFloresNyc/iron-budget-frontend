import React from 'react'
import NavBar from '../Components/NavBar'
import logo from '../Images/IronBudgetLogo.png'

const SidePanel = ({accountBalance, logOutHandler}) => {
    console.log('side panel Acct balance: ', accountBalance)
    return <div className="side-panel">
            <div className="logo">
                <img src={logo} alt='Iron Budget Logo'/>
            </div>
            <div className="account-balance">
                <h3>Account Balance:</h3>
                <h1>${accountBalance}</h1>
            </div>
            <NavBar logOutHandler={logOutHandler}/>
        </div> 
}

export default SidePanel

