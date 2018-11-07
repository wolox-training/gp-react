import React, { Component } from 'react';

import SignInForm from './components/SignInForm';

class Login extends Component {
  handleSubmit = values => {
    console.log(values);
  };

  render() {
    return <SignInForm onSubmit={this.handleSignIn} />;
    // return <SignInForm onSubmit={this.handleSubmit} />;
  }
}

export default Login;
