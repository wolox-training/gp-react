import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HOCLoading from '@components/HOCLoading';
import { actionsCreators as Actions } from '@redux/login/actions';

import LoginForm from './layout';

class SignInForm extends Component {
  componentDidMount() {
    this.props.userLoginVerify();
  }

  handleSubmit = values => {
    this.props.userLogin(values.username, values.password);
  };

  render() {
    return <LoginForm onSubmit={this.handleSubmit} userLoginError={this.props.userLoginError} />;
  }
}

SignInForm.propTypes = {
  userLogin: PropTypes.func.isRequired,
  userLoginVerify: PropTypes.func.isRequired,
  userLoginError: PropTypes.string
};

const mapStateToProps = store => ({
  isLoading: store.LoginReducer.userLoginLoading,
  userIsLogged: store.LoginReducer.userIsLogged,
  userLoginError: store.LoginReducer.userLoginError,
  userSession: store.LoginReducer.userSession
});

const mapDispatchToProps = dispatch => ({
  userLogin: (username, password) => dispatch(Actions.userLogin(username, password)),
  userLoginVerify: () => dispatch(Actions.userLoginVerify())
});

const myLoginWithLoading = HOCLoading(SignInForm);

const myLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(myLoginWithLoading);

export default myLogin;
