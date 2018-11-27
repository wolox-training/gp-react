import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Dashboard from '@screens/Dashboard';
import Error404 from '@screens/Error404';
import Login from '@screens/Login';
import Offline from '@screens/Offline';
import { actionsCreators as Actions } from '@redux/user/actions';
import { ROUTES } from '@constants/routes.js';

import { WE_ARE_ONLINE, USER_INI } from '@constants';

import AuthRoute from './components/AuthRoute';

class AppRoutes extends Component {
  componentDidMount() {
    if (WE_ARE_ONLINE) {
      this.props.userPost(USER_INI);
    }
  }

  render() {
    if (WE_ARE_ONLINE) {
      const { userIsLogged } = this.props;
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

    // We are Offline
    return <Offline />;
  }
}

AppRoutes.propTypes = {
  userIsLogged: PropTypes.bool,
  userPost: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  userIsLogged: store.LoginReducer.userIsLogged
});

const mapDispatchToProps = dispatch => ({
  userPost: myUser => dispatch(Actions.userPost(myUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRoutes);
