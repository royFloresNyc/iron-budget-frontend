import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Reports from '../Containers/Reports'
import Transactions from '../Containers/Transactions'
import TestLogin from '../Components/TestLogin'

class MainContainer extends React.Component {
    state = {
        transactions: [],
        transaction_types: [],
        expense_categories: [],
        debit_categories: [],
        credit_categories: [],
        income_categories: [],
        token: [],
    }

    componentDidMount = () =>{
        this.fetchUserData(1)
        // this.fetchLinkToken(1)
    }

    render () {
        console.log("main", this.state.token)
        return <div className="main-container">
            ***This is the Main Container for Rendering Components***
            <Switch>
                <Route path='/reports' render={() => <Reports/>} />
                <Route path='/transactions' render={() => 
                    <Transactions { ...this.state } 
                        submitHandler={this.submitTransaction}
                        deleteHandler={this.deleteTransaction}
                        editHandler={this.editTransaction}
                    />} />
                <Route path='/testLogin' render = {() => <TestLogin token={this.state.token}/>}/>
            </Switch>
        </div> 
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
        // fetch(`http://localhost:3000/users/${userId}`)
        //     .then(resp => resp.json())
        //     .then(userData => {
        //         this.setState(userData)
        //     })
        const url = `http://localhost:3000/users/${userId}`
        const fetchPromise = this.connectToDb(url)
        fetchPromise.then(userData => {
            this.setState(userData)
        })
    }

    submitTransaction = (tObject) => {
        this.setState({ transactions: [tObject, ...this.state.transactions]}) 
        let newObj = [...tObject, {user_id: 1}]
        let options = {
            method: "POST",
            header: {
                'content-type': 'application/json',
                "accept": 'application/json',
            },
            body: JSON.stringify(newObj)
        }
        // fetch(`http://localhost:3000/transactions`, options)

    }

    deleteTransaction = (transactionId) => {
        // const url = 'http://localhost:3000/transactions/' + transactionId
        // const fetchPromise = this.connectToDb(url, "DELETE")
        // fetchPromise.then(data => console.log('Deleted this object: ', data))

        const newArray = [...this.state.transactions]
        const index = newArray.findIndex(trans => trans.id === transactionId)
        newArray.splice(index, 1)
        this.setState( {transactions: newArray})
    }

    editTransaction = (tObject) => {
        
        // const url = 'http://localhost:3000/transactions/' + tObject.id
        // const fetchPromise = this.connectToDb(url, "PATCH", tObject)
        // fetchPromise.then(data => console.log('Added this object to db: ', data))

        const newArray = [...this.state.transactions]
        const index = newArray.findIndex(trans => trans.id === tObject.id)
        newArray.splice(index, 1, tObject)
        this.setState( {transactions: newArray})
    }

    connectToDb = (url, fetchMethod, object) => {
        const options = {
            method: fetchMethod,
            header: {
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