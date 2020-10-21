import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Reports from '../Containers/Reports'
import Transactions from '../Containers/Transactions'
import { UserInfo } from '../Containers/UserInfo'
import BankMapContainer from '../Containers/BankMapContainer'
import SidePanel from './SidePanel'

class MainContainer extends React.Component {
    state = {
        transactions: []
    }

    componentDidMount = () =>{
        this.fetchUserData(this.props.currentUser.id)
    }

    render () {
        const { id, username, first_name, last_name, address, account_balance, banks } = this.state
        const user = { id, username, first_name, last_name, address, account_balance, banks }
        return (
            <div className="wrapper">
                <SidePanel accountBalance={this.state.account_balance} logOutHandler={this.props.logOutHandler}/>
                <div className="main-view">
                    <Switch>
                        <Route path='/reports' render={() => <Reports user={this.state}/>} />
                        <Route path='/myInfo' render={() => <UserInfo user={user} submitHandler={this.submitUserInfo}/>} />
                        <Route path='/myBank' render={() => <BankMapContainer geoLocation={this.state.geo_location} banks={this.state.banks}/> } />
                        <Route path={'/' || '/transactions'} render={() => 
                            <Transactions { ...this.state } 
                                submitHandler={this.submitTransaction}
                                deleteHandler={this.deleteTransaction}
                                editHandler={this.editTransaction}
                            />} />
                    </Switch>
                </div> 
            </div>
        )
    }
    // fetchLinkToken = (userId) => {

    //     let userdata = {user_id: 1, public_token: 0}

    //     let options = {
    //         method: "POST",
    //         header: {
    //             "content-type": 'application/json',
    //             "accept": 'application/json',
    //         },
    //         body: JSON.stringify({plaid_token: {...userdata}})
    //     }
    //     fetch(`http://localhost:3000/get_link_token`, options)
    //     .then(resp => resp.json())
    //     .then(userData => {
    //         this.setState({token: userData})
    //     })
    //     .catch(console.log)
    // } 
    fetchUserData = (userId) => {
        const url = `http://localhost:3000/users/${userId}`
        const fetchPromise = this.connectToDb(url)
        fetchPromise.then(userData => {
            this.setState(userData)
        })
    }

    submitTransaction = (tObject) => {
        const url = 'http://localhost:3000/transactions'
        const fetchPromise = this.connectToDb(url, "POST", tObject)
        fetchPromise.then(data => {
            const newArray = [data, ...this.state.transactions]
            const newBalance = this.getTotal(newArray)
            this.setState({ transactions:  newArray, account_balance: newBalance}) 
        })
    }

    deleteTransaction = (transaction) => {
        const url = 'http://localhost:3000/transactions/' + transaction.id
        const fetchPromise = this.connectToDb(url, "DELETE", transaction)
        fetchPromise.then(data => {
            const newArray = [...this.state.transactions]
            const index = newArray.findIndex(trans => trans.id === data.id)
            newArray.splice(index, 1)
            const newBalance = this.getTotal(newArray)
            this.setState({ transactions: newArray , account_balance: newBalance}) 
        })

        
    }

    editTransaction = (tObject) => {
        const url = 'http://localhost:3000/transactions/' + tObject.id
        const fetchPromise = this.connectToDb(url, "PATCH", tObject)
        fetchPromise.then(data => {
            const newArray = [...this.state.transactions]
            const index = newArray.findIndex(trans => trans.id === data.id)
            newArray.splice(index, 1, data)
            const newBalance = this.getTotal(newArray)
            this.setState({ transactions: newArray , account_balance: newBalance}) 
        }) 
    }

    getTotal = (tArray) => {
        const credit = tArray.filter(trans => trans.transaction_type_id === 1)
            .reduce((sum, transaction) => sum + transaction.amount ,0)
        const debit = tArray.filter(trans => trans.transaction_type_id === 2)
            .reduce((sum, transaction) => sum + transaction.amount ,0)
        return (credit - debit)
    }

    submitUserInfo = (userObj) => {
        console.log('submit this user object!!!!: ', userObj)

        const url = `http://localhost:3000/users/${userObj.id}`
        const fetchPromise = this.connectToDb(url, "PATCH", userObj)
        fetchPromise.then(dbObj => this.setState(dbObj))
    }

    connectToDb = (url, fetchMethod, object) => {
        const options = {
            method: fetchMethod,
            headers: {
                'content-type': 'application/json',
                accepts: 'application/json',
            },
            body: JSON.stringify(object)
        }
        
        if(fetchMethod || object ){
            return fetch(url, options).then(resp => resp.json())
        } else {
            return fetch(url).then(resp => resp.json())
        }
    }

}

export default MainContainer 