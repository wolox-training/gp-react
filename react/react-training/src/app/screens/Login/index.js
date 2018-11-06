import React, { Component } from 'react';

import LoginForm from './components/LoginForm';

const handleSignIn = values => {
  console.log(values);
};

class Login extends Component {
  render() {
    return <LoginForm onSubmit={this.handleSignIn} />;
  }
}

export default Login;
