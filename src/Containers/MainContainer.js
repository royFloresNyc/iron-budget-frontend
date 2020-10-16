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

    fetchUserData = (userId) => {
        fetch(`http://localhost:3000/users/${userId}`)
            .then(resp => resp.json())
            .then(userData => {
                this.setState(userData)
            })
    }

    submitTransaction = (tObject) => {
        console.log('submit this: ', tObject)
    }

    render () {
        return <div className="main-container">
            ***This is the Main Container for Rendering Components***
            <Switch>
                <Route path='/reports' render={() => <Reports/>} />
                <Route path='/transactions' render={() => <Transactions { ...this.state } submitHandler={this.submitTransaction}/>} />
            </Switch>
        </div> 
    }
}

export default MainContainer 