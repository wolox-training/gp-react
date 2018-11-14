import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { actionsCreators as Actions } from '@redux/login/actions';

import SignInForm from './components/SignInForm';

class Login extends Component {
  handleSubmit = values => {
    const { login } = this.props;
    login(values.username, values.password);
  };

  render() {
    return (
      <SignInForm
        onSubmit={this.handleSubmit}
        userIsLogged={this.props.userIsLogged}
        userTryLogin={this.props.userTryLogin}
      />
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  userIsLogged: PropTypes.bool,
  userTryLogin: PropTypes.string
};

const mapStateToProps = store => ({
  userIsLogged: store.LoginReducer.userIsLogged,
  userTryLogin: store.LoginReducer.userTryLogin
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(Actions.login(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
