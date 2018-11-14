import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { FORM_SIGIN } from '@constants';

import Form from './layout';

class SignInForm extends Component {
  render() {
    const { handleSubmit, userTryLogin, userIsLogged } = this.props;

    return <Form handleSubmit={handleSubmit} userIsLogged={userIsLogged} userTryLogin={userTryLogin} />;
  }
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  userIsLogged: PropTypes.bool,
  userTryLogin: PropTypes.string
};

export default reduxForm({
  form: FORM_SIGIN
})(SignInForm);
