import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import MainContainer from './Containers/MainContainer'
import Login from './Containers/Login'

class App extends React.Component {
    state = {
        currentUser: null
    }

    componentDidMount = () => {
        if(localStorage.token){
            const token = localStorage.getItem("token")
            const url = 'http://localhost:3000/profile/'
            let options = {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            }
            fetch(url, options)
                .then(resp => resp.json())
                .then(userData => { this.setState({ currentUser: userData.user }) })
                .catch('Error logging in: ', console.log)
        }
    }

    signUpHandler = (userObj) => {
        const user = {...userObj}
        const url = 'http://localhost:3000/users/'

        const fetchPromise = this.logInToDb(url, "POST", user)
        fetchPromise.then(userData => {
            this.setState({ currentUser: userData.user })
            localStorage.setItem('token', userData.jwt)
        }).catch('Error logging in: ', console.log)
    }

    logInHandler = (userObj) => {
        const user = {...userObj}
        const url = 'http://localhost:3000/login'
        const fetchPromise = this.logInToDb(url, "POST", user)
        fetchPromise.then(userData => {
            this.setState({ currentUser: userData.user })
            localStorage.setItem('token', userData.jwt)
        }).catch('Error logging in: ', console.log)
    }

    logInToDb = (url, method, obj) => {
        let options = {
            method: method,
            headers: {
                // "Authorization": `Bearer ${token}`,
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({user: {...obj}})
        }

        return fetch(url, options)
        .then(resp=>resp.json())
    }

    logOut = () => {
        localStorage.clear()
        this.setState({currentUser: null})
    }
    
    render() {
        return (
            <div >
                {this.state.currentUser ?
                    <Route path="/" render={() => <MainContainer currentUser={this.state.currentUser} logOutHandler={this.logOut}/>} />
                :
                    <Login signUpHandler={this.signUpHandler} logInHandler={this.logInHandler}/>
                }
            </div>
        );
    }
}

export default App;
