import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";



import Login from './Login/Login';
import SignUp from './Signup/SignUp';
import Dashboard from './Dashboard/Dashboard';

import Details from './Dashboard/details';
import cart from '../src/Canpm rt/Cart'

import Error from '../src/Error/Error'

import Modal from '../src/Modal';



class App extends Component {
    render() {
        return (
            <React.Fragment>
                
                <Switch>
                    <Route exact path='/' component={Login}></Route>
                    <Route exact path='/signup' component={SignUp}></Route>
                    <Route exact path='/dashboard/' component={Dashboard}></Route>
                    <Route exact path='/details/' component={Details}></Route>
                    <Route exact path='/cart' component={cart} ></Route>
                    <Route component={Error}></Route>
                </Switch>
                <Modal />
                
            </React.Fragment>
        );
    }
}

export default App;