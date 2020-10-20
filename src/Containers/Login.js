// import { rightArithShift } from 'mathjs'
import React, { useState } from 'react'
import LoginForm from '../Components/LoginForm'
import SignUpForm from '../Components/SignUpForm'

const Login = ({logInHandler, signUpHandler}) => {
    const [signUp, setSignUp] = useState(false)

    const clickHandler = () => {
        setSignUp(!signUp)
    }
    console.log('current value of signUP: ', signUp)
    return (
        <div className="log-in-container">
            {!signUp ?
                <LoginForm logInHandler={logInHandler} showSignUpForm={clickHandler}/>
            :
                <SignUpForm signUpHandler={signUpHandler} hideForm={clickHandler}/>
            }
        </div>
    )
}

export default Login