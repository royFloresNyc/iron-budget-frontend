// import { rightArithShift } from 'mathjs'
import React, { useState } from 'react'
import LoginForm from '../Components/LoginForm'
import SignUpForm from '../Components/SignUpForm'
import logo from '../Images/IronBudgetLogo.png'

const Login = ({logInHandler, signUpHandler}) => {
    const [signUp, setSignUp] = useState(false)

    const clickHandler = () => {
        setSignUp(!signUp)
    }
    console.log('current value of signUP: ', signUp)
    return (
        <div className="log-in-container">
            <div className="logo-log-in">
                <img src={logo} alt='Iron Budget Logo'/>
            </div>
            <div className="login-signup-wrapper">
                {!signUp ?
                    <LoginForm logInHandler={logInHandler} showSignUpForm={clickHandler}/>
                :
                    <SignUpForm signUpHandler={signUpHandler} hideForm={clickHandler}/>
                }
            </div>    
        </div>
    )
}

export default Login