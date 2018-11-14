import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Game from '@screens/Game';
import Login from '@screens/Login';
import { ROUTES } from '@constants/routes.js';

export default class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Login} />
          <Route exact path={ROUTES.GAME} component={Game} />
        </Switch>
      </Router>
    );
  }
}
