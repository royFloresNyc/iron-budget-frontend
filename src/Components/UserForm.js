import React from 'react'

class UserForm extends React.Component {
    state = {
        username: '',
        first_name: '',
        last_name: '',
        address: '',
        bank: '',
    }

    componentDidMount = () => {
        let user = {...this.props.user}
        delete user.banks
        delete user.account_balance
        user.bank = this.props.user.banks[0].name
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
            //bank: '',
        }, this.props.hideForm())
    }

    render(){
        return (
            <div className="user-form" >
                <form onSubmit={this.localSubmitHandler}>
                    <input type="text" name="username" 
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
                    <input type="text" name="bank" 
                        value={this.state.bank ? this.state.bank: ''} 
                        placeholder="Enter Bank Name" 
                        onChange={this.changeHandler}/>
                    {/* <select>
                        <option value="Chase">Chase</option>
                        <option value="Bank of America">Bank of America</option>
                        <option value="CitiBank">CitiBank</option>
                        <option value="Wells Fargo">Wells Fargo</option>
                        <option value="TD Bank">TD Bank</option>
                        <option value="Capital One">Capital One</option>
                        <option value="HSBC">HSBC</option>
                    </select> */}
                    <div className="submit-btn">
                        <input type="submit"/>
                    </div>
                    <h3 onClick={this.props.hideForm}>x</h3>
                </form>
            </div>
        )
    }
}

export default UserForm