import React from 'react'
import BasicFinances from '../Components/BasicFinances'
import ReportsNav from '../Components/ReportsNav'
import { Route, Switch } from 'react-router-dom'
import Income from '../Components/Income'
import Expenditure from '../Components/Expenditure'
import BudgetComparison from '../Components/BudgetComparison'
import Projection from '../Components/Projection'
import Spinner from 'react-bootstrap/Spinner'


 

class Reports extends React.Component {
//--State--------------------------------------------------------
    // state = {
    //     userInfo: []
    // }
//--Fetch--------------------------------------------------------
    // componentDidMount = () => {
    //     fetch(`http://localhost:3000/users/1`)
    //     .then(resp => resp.json())
    //     .then(userData => this.setState({userInfo: userData}))
    // }
//---------------------------------------------------------------
    render() {
        return(
            <div>
                {/* <Switch>
                    <Route path='/reports/basic_finances' render={() => this.props.user.transactions ? <BasicFinances info={this.props.user.transactions} periods={this.props.user.transacts_by_period}/> : <h1>"LOADING"</h1> } />
                    <Route path='/reports/income' render={() => this.props.user.transactions ? <Income info={this.props.user.transactions} periods={this.props.user.transacts_by_period}/> : <h1>"LOADING"</h1> } />
                    <Route path='/reports/expenditure' render={() => this.props.user.transactions ? <Expenditure info={this.props.user.transactions} periods={this.props.user.transacts_by_period}/> : <h1>"LOADING"</h1> } />
                    <Route path='/reports/budget_comparison' render={() => this.props.user.transactions ?  <BudgetComparison info={this.props.user} periods={this.props.user.transacts_by_period}/> : <h1>"LOADING"</h1> }/>
                    <Route path='/reports/projection' render={() => this.props.user.transactions ? <Projection info={this.props.user} periods={this.props.user.transacts_by_period}/> : <h1>"LOADING"</h1> }/>
                    
                </Switch> */}
            <ReportsNav/>
            <Switch>
                <Route path='/reports/income' render={() => this.props.user.transactions ? <Income info={this.props.user.transactions} periods={this.props.user.transacts_by_period}/> : <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>} />
                                <Route path='/reports/expenditure' render={() => this.props.user.transactions ? <Expenditure info={this.props.user.transactions} periods={this.props.user.transacts_by_period}/> : <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>} />
                                <Route path='/reports/budget_comparison' render={() => this.props.user.transactions ? <BudgetComparison info={this.props.user} periods={this.props.user.transacts_by_period} createBudget={this.props.createBudget}/> : <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>}/>
                                <Route path='/reports/projection' render={() => this.props.user.transactions ? <Projection info={this.props.user} periods={this.props.user.transacts_by_period}/> : <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>}/>
                <Route path={'/reports/' || '/reports/basic_finances'} render={() => this.props.user.transactions ? <BasicFinances info={this.props.user.transactions} periods={this.props.user.transacts_by_period}/> : <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>} />
            </Switch>
            
            </div>
        )
    }

}

export default Reports
