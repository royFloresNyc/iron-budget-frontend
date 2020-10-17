import React from 'react'
import { User }from '../Components/User'
import UserForm from '../Components/UserForm'

class UserInfo extends React.Component {
    state = {
        editBtnClicked: false
    }

    editBtnHandler = () => {
        this.setState(prevState => {
            return { editBtnClicked: !prevState.editBtnClicked }
        })
    }

    hideForm = () => {
        this.setState(prevState => {
            return { editBtnClicked: !prevState.editBtnClicked }
        })
    }

    render() {
        return (
            <div> 
                { this.props.user ? <User user={this.props.user} /> : null }
                <div className="edit-info-btn" onClick={this.editBtnHandler}>Edit Info</div>
                {this.state.editBtnClicked ? 
                    <UserForm user={this.props.user} 
                    submitHandler={this.props.submitHandler}
                    hideForm={this.hideForm}/> 
                : null}
            </div>
        )
    }
}

export {UserInfo}