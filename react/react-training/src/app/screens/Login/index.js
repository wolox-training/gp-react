import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionsCreators as Actions } from '@redux/login/actions';

import LoginForm from './layout';

class SignInForm extends Component {
  handleSubmit = values => {
    const { login } = this.props;
    login(values.username, values.password);
  };

  render() {
    const { userLoginError } = this.props;
    return <LoginForm onSubmit={this.handleSubmit} userLoginError={userLoginError} />;
  }
}

SignInForm.propTypes = {
  login: PropTypes.func.isRequired,
  userLoginError: PropTypes.string
};

const mapStateToProps = store => ({
  userIsLogged: store.LoginReducer.userIsLogged,
  userLoginError: store.LoginReducer.userLoginError,
  userSession: store.LoginReducer.userSession
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(Actions.login(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
