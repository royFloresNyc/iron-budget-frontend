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
            const newBalance = data.transaction_type_id === 1 ? this.state.account_balance + data.amount : this.state.account_balance - data.amount
            this.setState({ transactions: [data, ...this.state.transactions] , account_balance: newBalance}) 
        })
    }

    deleteTransaction = (transaction) => {
        console.log('delete this id: ', transaction)
        const url = 'http://localhost:3000/transactions/' + transaction.id
        const fetchPromise = this.connectToDb(url, "DELETE", transaction)
        fetchPromise.then(data => {
            const newArray = [...this.state.transactions]
            const index = newArray.findIndex(trans => trans.id === data.id)
            newArray.splice(index, 1)
            const newBalance = data.transaction_type_id === 1 ? this.state.account_balance - data.amount : this.state.account_balance + data.amount
            this.setState({ transactions: [data, ...this.state.transactions] , account_balance: newBalance}) 
        })

        
    }

    editTransaction = (tObject) => {
        const url = 'http://localhost:3000/transactions/' + tObject.id
        const fetchPromise = this.connectToDb(url, "PATCH", tObject)
        fetchPromise.then(data => {
            const newArray = [...this.state.transactions]
            const index = newArray.findIndex(trans => trans.id === data.id)
            const oldObj = this.state.transactions[index]
            newArray.splice(index, 1, data)
            if (data.amount === oldObj.amount && data.transaction_type_id === oldObj.transaction_type_id){
                this.setState( {transactions: newArray})
            } else {
// I think Math on this this is wrong ???====================================================================
                //const diff = Math.abs(data.amount - oldObj.amount)
                const newBalance = data.transaction_type_id === 1 ? this.state.account_balance + data.amount : this.state.account_balance - data.amount
                this.setState({ transactions: newArray , account_balance: newBalance}) 
            }
        }) 
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