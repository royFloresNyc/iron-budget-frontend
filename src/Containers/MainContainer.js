import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Reports from '../Containers/Reports'
import Transactions from '../Containers/Transactions'

class MainContainer extends React.Component {
    state = {
        transactions: [
            {
                name: "Wholefoods",
                amount: 50,
                t_date: "10-19-2020",
                category_id: 1,
                transaction_type_id: 1
            },
            {
                name: "Metro Card",
                amount: 107,
                t_date: "10-01-2020",
                category_id: 3,
                transaction_type_id: 1
            },
            {
                name: "Amazon",
                amount: 25,
                t_date: "10-02-2020",
                category_id: 2,
                transaction_type_id: 1
            },
            {
                name: "Sushi",
                amount: 40,
                t_date: "10-10-2020",
                category_id: 4,
                transaction_type_id: 1
            },
        ]
    }

    componentDidMount(){

    }

    render () {
        return <div className="main-container">
            ***This is the Main Container for Rendering Components***
            <Switch>
                <Route path='/reports' render={() => <Reports/>} />
                <Route path='/transactions' render={() => <Transactions transactions={this.state.transactions}/>} />
            </Switch>
        </div>
        
    }
}

export default MainContainer 