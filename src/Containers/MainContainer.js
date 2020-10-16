import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Reports from '../Containers/Reports'
import Transactions from '../Containers/Transactions'
import { data } from '../data' //hard-coded data 

class MainContainer extends React.Component {
    state = {
        transactions: [],
        transaction_types: [],
        expense_categories: [],
        income_categories: [],
    }

    componentDidMount(){
        this.setState(data)
    }

    render () {
        return <div className="main-container">
            ***This is the Main Container for Rendering Components***
            <Switch>
                <Route path='/reports' render={() => <Reports/>} />
                <Route path='/transactions' render={() => <Transactions { ...this.state }/>} />
            </Switch>
        </div>
        
    }
}

export default MainContainer 