import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import LandingPage from './pages/landingpage';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Home from './pages/home';
import Profile from './pages/profile';

class App extends Component {
  render() {
    return (
     <div>
      <Switch>
       <Route exact path="/" component={LandingPage} />
       <Route exact path="/signup" component={SignUp} />
       <Route exact path="/signin" component={SignIn} />
       <Route exact path="/home" component={Home} />
       <Route exact path="/profile" component={Profile} />
      </Switch>
     </div>
    );
  }
}

export default App;
