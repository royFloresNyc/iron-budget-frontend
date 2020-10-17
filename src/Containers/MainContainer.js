import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Reports from '../Containers/Reports'
import Transactions from '../Containers/Transactions'

class MainContainer extends React.Component {
    state = {
        transactions: [],
        transaction_types: [],
        expense_categories: [],
        debit_categories: [],
        credit_categories: [],
        income_categories: [],
    }

    componentDidMount = () =>{
        this.fetchUserData(1)
    }

    render () {
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
            </Switch>
        </div> 
    }

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
        console.log('submit (POST) this: ', tObject)
        // const url = 'http://localhost:3000/transactions'
        // const fetchPromise = this.connectToDb(url, "POST", tObject)
        // fetchPromise.then(data => console.log('Deleted this object: ', data))

        this.setState({ transactions: [tObject, ...this.state.transactions]}) 
    }

    deleteTransaction = (transactionId) => {
        console.log('delete this id: ', transactionId)
        // const url = 'http://localhost:3000/transactions/' + transactionId
        // const fetchPromise = this.connectToDb(url, "DELETE")
        // fetchPromise.then(data => console.log('Deleted this object: ', data))

        const newArray = [...this.state.transactions]
        const index = newArray.findIndex(trans => trans.id === transactionId)
        newArray.splice(index, 1)
        this.setState( {transactions: newArray})
    }

    editTransaction = (tObject) => {
        console.log('Send a PATCH for this: ', tObject)
        
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