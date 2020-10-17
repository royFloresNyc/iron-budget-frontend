import React from 'react'

class UserForm extends React.Component {
    state = {
        username: '',
        first_name: '',
        last_name: '',
        address: '',
    }

    componentDidMount = () => {
        let user = {...this.props.user}
        delete user.banks
        delete user.account_balance
        this.setState( user )
    }

    changeHandler = (e) => {
        this.setState( {[e.target.name]: e.target.value})
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState( {
            username: '',
            first_name: '',
            last_name: '',
            address: '',
        }, this.props.hideForm())
    }

    render(){
        return (
            <div className="user-form" >
                <form onSubmit={this.localSubmitHandler}>
                    <input type="text" name="userName" 
                        value={this.state.username ? this.state.username : ''} 
                        placeholder="Enter User Name" 
                        onChange={this.changeHandler}/>
                    <input type="text" name="first_name" 
                        value={this.state.first_name ? this.state.first_name : ''} 
                        placeholder="Enter First Name" 
                        onChange={this.changeHandler}/>
                    <input type="text" name="last_name" 
                        value={this.state.last_name ? this.state.last_name : ''} 
                        placeholder="Enter Last Name" 
                        onChange={this.changeHandler}/>
                    <input type="text" name="address" 
                        value={this.state.address ? this.state.address: ''} 
                        placeholder="Enter Address" 
                        onChange={this.changeHandler}/>
                    <input type="submit"/>
                    <h3 onClick={this.props.hideForm}>x</h3>
                </form>
            </div>
        )
    }
}

export default UserForm