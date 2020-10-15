import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import SideNavPanel from './Containers/SideNavPanel'
import MainContainer from './Containers/MainContainer'

function App() {
    return (
        <>
            <SideNavPanel />
            <Switch>
                <Route path="/" component={MainContainer} />
            </Switch>
            
        </>
    );
}

export default App;
