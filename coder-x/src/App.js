import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


import Auth from './components/auth/Auth';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Router>
            <div className="App">
                <div className="container">
                <Route path="/" exact component={Auth}/>
                </div>
            </div>

            <Switch>
            </Switch>
        </Router>
        )
    }
}


export default App;