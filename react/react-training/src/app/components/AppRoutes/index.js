import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from '@screens/Game';
import Login from '@screens/Login';

export default class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/game" component={Game} />
        </div>
      </Router>
    );
  }
}
