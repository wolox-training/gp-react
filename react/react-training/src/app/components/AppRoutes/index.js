import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from '@screens/Game';
import Login from '@screens/Login';
import { ROUTES } from '@constants/routes.js';

export default class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={ROUTES.HOME} component={Login} />
          <Route exact path={ROUTES.GAME} component={Game} />
        </div>
      </Router>
    );
  }
}
