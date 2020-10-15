import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Reports from '../Containers/Reports'
import Transactions from '../Containers/Transactions'

class MainContainer extends React.Component {
    render () {
        return <div className="main-container">
            <h3>***This is the Main Container for Rendering Components***</h3>
            <Switch>
                <Route path='/reports' render={routerProps => <Reports/>} />
                <Route path='/transactions' render={routerProps => <Transactions/>} />
            </Switch>
        </div>
        
    }
}

export default MainContainer 