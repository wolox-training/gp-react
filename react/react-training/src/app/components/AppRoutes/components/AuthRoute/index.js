import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

export default class AuthComponent extends Component {
  render() {
    const { component, exact, path, userIsLogged } = this.props;
    if (userIsLogged) {
      return <Redirect to="/game" />;
    }
    return <Route exact={exact} path={path} component={component} />;
  }
}

AuthComponent.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  userIsLogged: PropTypes.bool.isRequired
};
