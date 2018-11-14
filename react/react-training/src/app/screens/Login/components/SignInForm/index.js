import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { FORM_SIGIN } from '@constants';

import Form from './layout';

class SignInForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return <Form handleSubmit={handleSubmit} />;
  }
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: FORM_SIGIN
})(SignInForm);
