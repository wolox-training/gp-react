import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

function AuthComponent({ component, exact, path, userIsLogged }) {
  if (userIsLogged) {
    return <Redirect to="/game" />;
  }
  return <Route exact={exact} path={path} component={component} />;
}

AuthComponent.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  userIsLogged: PropTypes.bool.isRequired
};

export default AuthComponent;
