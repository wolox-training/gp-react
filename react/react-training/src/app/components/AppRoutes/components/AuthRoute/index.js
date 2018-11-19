import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router';
import { ROUTES } from '@constants/routes.js';

function AuthComponent({ component, exact, path, userIsLogged }) {
  if (!userIsLogged) {
    if (path === ROUTES.HOME || path === ROUTES.LOGIN) {
      return <Route exact={exact} path={path} component={component} />;
    }
    return <Redirect to={ROUTES.LOGIN} />;
  }

  // The user is logged
  if (path === ROUTES.LOGIN) {
    return <Redirect to={ROUTES.HOME_LOGGED} />;
  }
  return <Route exact={exact} path={path} component={component} />;
}

AuthComponent.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  userIsLogged: PropTypes.bool
};

export default AuthComponent;
