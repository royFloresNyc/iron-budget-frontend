import React from 'react'

class SignUpForm extends React.Component {
    state = {
        username: '',
        password: '',
        password_confirmation: ''
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.signUpHandler(this.state)
        this.setState({
            username: '',
            password: '',
            password_confirmation: ''
        })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className="sign-up-form">
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="username" 
                        placeholder="username" 
                        value={this.state.username} 
                        onChange={this.changeHandler} />
                    <input type="password" name="password" 
                        placeholder="password" 
                        value={this.state.password} 
                        onChange={this.changeHandler} />
                    <input type="password" name="password_confirmation" 
                        placeholder="password_confirmation" 
                        value={this.state.password_confirmation} 
                        onChange={this.changeHandler} />
                    {/* <input type="text" name="address"placeholder="address"/>
                    <input type="text" name="first_name"placeholder="first_name"/>
                    <input type="text" name="last_name"placeholder="last_name"/> */}
                    <input type="submit" value="submit"/>
                </form>
                <h3 onClick={this.props.hideForm}>x</h3>
            </div>
        )
    }
}

export default SignUpForm