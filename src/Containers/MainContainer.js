import React from 'react'
import { Route, Switch } from 'react-router-dom'

class MainContainer extends React.Component {
    render () {
        return <div className="main-container">
            <h3>***This is the Main Container for Rendering Components***</h3>
            <Switch>
                {/* { add different routes here} */}
            </Switch>
        </div>
        
    }
}

export default MainContainer 