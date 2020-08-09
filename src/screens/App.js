import React, {useState} from 'react';
import '../css/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Home from "../screens/Home";
import AboutPage from "./AboutPage";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import ContactScreen from "./ContactScreen";
import Store from "./Store";
import HowItWorks from "./howItWorks";
import Discussion from "./Discussion";
import Profile from "./profile";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/about'} exact component={AboutPage}/>
                    <Route path={'/loginScreen'} exact component={LoginScreen}/>
                    <Route path={'/SignUpScreen'} exact component={SignUpScreen}/>
                    <Route path={'/ContactScreen'} exact component={ContactScreen}/>
                    <Route path={'/Store'} exact component={Store}/>
                    <Route path={'/HowItWorks'} exact component={HowItWorks}/>
                    <Route path={'/Discussion'} exact component={Discussion}/>
                    <Route path={'/profile'} exact component={Profile}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
