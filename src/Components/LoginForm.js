import React from 'react'

class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.logInHandler(this.state)
        this.setState({ username: '', password: '' })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    render(){
        return (
            <div className="log-in-form">
                    <form onSubmit={this.submitHandler}>
                        <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler}/>
                        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler}/>
                        <input type="submit" value="submit"/>
                    </form>
                    <p>First time visitor?</p><span><h4 onClick={this.props.showSignUpForm}>Sign Up</h4></span>
            </div>
        )
    }
}

export default LoginForm