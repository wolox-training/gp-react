import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { FORM_SIGIN } from '@constants';

import Form from './layout';

class SignInForm extends Component {
  render() {
    const { handleSubmit, userLoginError, userIsLogged } = this.props;
    return <Form handleSubmit={handleSubmit} userIsLogged={userIsLogged} userLoginError={userLoginError} />;
  }
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  userIsLogged: PropTypes.bool,
  userLoginError: PropTypes.string
};

export default reduxForm({
  form: FORM_SIGIN
})(SignInForm);
