import React, { Component } from 'react';

import LoginForm from './layout';

class Login extends Component {
  handleSubmit = values => {
    console.log(JSON.stringify(values, null, 4));
  };

  render() {
    return <LoginForm onSubmit={this.handleSubmit} />;
  }
}

export default Login;
