import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { ROUTES } from '@constants/routes.js';

import Game from './screens/Game';
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
        </Switch>
      </Fragment>
    </Router>
  );
}

export default Dashboard;
