import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import SidePanel from './Containers/SidePanel'
import MainContainer from './Containers/MainContainer'
import Login from './Containers/Login'

class App extends React.Component {
    state = {
        currentUser: null
    }

    signUpHandler = (userObj) => {
        const user = {...userObj}
        const url = 'http://localhost:3000/users/'

        const fetchPromise = this.logInToDb(url, "POST", user)
        fetchPromise.then(userData => this.setState({ currentUser: userData.user }))
        .catch('Error signing-up: ', console.log)
    }

    logInHandler = (userObj) => {
        const user = {...userObj}
        const url = 'http://localhost:3000/login'
        const fetchPromise = this.logInToDb(url, "POST", user)
        fetchPromise.then(userData => this.setState({ currentUser: userData.user }))
            .catch('Error logging in: ', console.log)
    }

    logInToDb = (url, method, obj) => {
        let options = {
            method: method,
            headers: {
                "Authorization": `Bearer <token>`,
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({user: {...obj}})
        }

        return fetch(url, options)
        .then(resp=>resp.json())
    }
    
    render() {
        console.log('current user: ', this.state.currentUser)
        return (
            <div>
                {this.state.currentUser ?
                    <div className="wrapper">
                        <SidePanel />
                        <Switch>
                            <Route path="/" render={() => <MainContainer currentUser={this.state.currentUser}/>} />
                        </Switch>
                    </div>
                :
                    <Login signUpHandler={this.signUpHandler} logInHandler={this.logInHandler}/>
                }
            </div>
        );
    }
}

export default App;
