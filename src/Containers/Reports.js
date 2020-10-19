import React from 'react'
import BasicFinances from '../Components/BasicFinances'
import ReportsNav from '../Components/ReportsNav'
import { Route, Switch } from 'react-router-dom'
import Income from '../Components/Income'
import Expenditure from '../Components/Expenditure'
import BudgetComparison from '../Components/BudgetComparison'
import Projection from '../Components/Projection'
 

class Reports extends React.Component {
//--State--------------------------------------------------------
    state = {
        userInfo: []
    }
//--Fetch--------------------------------------------------------
    componentDidMount = () => {
        fetch(`http://localhost:3000/users/1`)
        .then(resp => resp.json())
        .then(userData => this.setState({userInfo: userData}))
    }
//---------------------------------------------------------------
    render() {
        console.log(this.state.userInfo)
        return(
            <div>
            <ReportsNav/>
            <Switch>
                <Route path='/reports/basic_finances' render={() => this.state.userInfo.transactions ? <BasicFinances info={this.state.userInfo.transactions}/> : <h1>"LOADING"</h1> } />
                <Route path='/reports/income' render={() => this.state.userInfo.transactions ? <Income info={this.state.userInfo.transactions}/> : <h1>"LOADING"</h1> } />
                <Route path='/reports/expenditure' render={() => this.state.userInfo.transactions ? <Expenditure info={this.state.userInfo.transactions}/> : <h1>"LOADING"</h1> } />
                <Route path='/reports/budget_comparison' render={() => this.state.userInfo.transactions ? <BudgetComparison info={this.state.userInfo}/> : <h1>"LOADING"</h1> }/>
                <Route path='/reports/projection' render={() => this.state.userInfo.transactions ? <Projection info={this.state.userInfo}/> : <h1>"LOADING"</h1> }/>
            </Switch>
            </div>
        )
    }

}

export default Reports