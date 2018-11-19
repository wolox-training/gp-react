import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { ROUTES } from '@constants/routes.js';

import Game from './screens/Game';
import Logout from './screens/Logout';
import Profile from './screens/Profile';
import TopBar from './screens/Game/components/TopBar';

function Dashboard() {
  return (
    <Router>
      <Fragment>
        <TopBar />
        <Switch>
          <Route exact path={ROUTES.GAME} component={Game} />
          <Route exact path={ROUTES.PROFILE} component={Profile} />
          <Route exact path={ROUTES.LOGOUT} component={Logout} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default Dashboard;
