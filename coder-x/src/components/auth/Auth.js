import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// import child component
import Login from './login'
import SingIn from './sing-in'

// import css
import './auth.css'
class Auth extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
           <Router>
                <Switch>
                    <div className="auth">
                        <Route path="/" exact component={Login}/>
                        <Route path="/sing-in" exact component={SingIn}/>
                    </div>
                </Switch>
           </Router> 
        )
    }
}
export default Auth;