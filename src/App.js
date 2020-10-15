import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import SidePanel from './Containers/SidePanel'
import MainContainer from './Containers/MainContainer'

function App() {
    return (
        <div className="wrapper">
            <SidePanel />
            <Switch>
                <Route path="/" component={MainContainer} />
            </Switch>
            
        </div>
    );
}

export default App;
