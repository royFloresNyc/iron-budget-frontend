import React from 'react'
import { Route, Switch } from 'react-router-dom'

class MainContainer extends React.Component {
    render () {
        return <div className="main-container">
            <h1>This is the Main Container for Rendering Components</h1>
            <Switch>
                {/* { add different routes here} */}
            </Switch>
        </div>
        
    }
}

export default MainContainer 