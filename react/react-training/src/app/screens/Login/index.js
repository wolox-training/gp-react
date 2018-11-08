import React, { Component } from 'react';

import SignInForm from './components/SignInForm';

class Login extends Component {
  handleSubmit = values => {
    console.log(JSON.stringify(values, null, 4));
  };

  render() {
    return <SignInForm onSubmit={this.handleSubmit} />;
  }
}

export default Login;
