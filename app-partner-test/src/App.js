import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      	<Switch>
	      <Route path="/" component={LandingPage} exact />
	      <Route path="/login" component={LogIn} />
	      <Route component={Error} />
      	</Switch>
      </BrowserRouter>
    );
  }
}

export default App;
