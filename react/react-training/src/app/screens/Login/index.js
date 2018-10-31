import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login-wrap">
        <h2>Login</h2>
        <div className="form">
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password" name="passwprd" />
          <button>Sign in</button>
        </div>
      </div>
    );
  }
}

export default Login;
