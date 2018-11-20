import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Dashboard from '@screens/Dashboard';
import Error404 from '@screens/Error404';
import Login from '@screens/Login';
import Offline from '@screens/Offline';
import { ROUTES } from '@constants/routes.js';

import { OFFLINE_WE_ARE } from '@constants';

import AuthRoute from './components/AuthRoute';

class AppRoutes extends Component {
  render() {
    if (OFFLINE_WE_ARE) {
      return <Offline />;
    }

    // We are online...
    let { userIsLogged } = this.props;
    if (!userIsLogged) {
      userIsLogged = localStorage.getItem('userIsLogged') === 'true';
    }
    return (
      <Router>
        <Switch>
          <AuthRoute exact path={ROUTES.HOME} component={Login} userIsLogged={userIsLogged} />
          <AuthRoute exact path={ROUTES.GAME} component={Dashboard} userIsLogged={userIsLogged} />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
}

AppRoutes.propTypes = {
  userIsLogged: PropTypes.bool
};

const mapStateToProps = store => ({
  userIsLogged: store.LoginReducer.userIsLogged
});

export default connect(
  mapStateToProps,
  null
)(AppRoutes);
