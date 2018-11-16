import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Game from '@screens/Game';
import Login from '@screens/Login';
import { ROUTES } from '@constants/routes.js';

import AuthRoute from './components/AuthRoute';

class AppRoutes extends Component {
  render() {
    let { userIsLogged } = this.props;
    if (!userIsLogged) {
      userIsLogged = localStorage.getItem('userIsLogged') === 'true';
    }
    return (
      <Router>
        <Switch>
          <AuthRoute exact path={ROUTES.HOME} component={Login} userIsLogged={userIsLogged} />
          <AuthRoute exact path={ROUTES.GAME} component={Game} userIsLogged={userIsLogged} />
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

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRoutes);
