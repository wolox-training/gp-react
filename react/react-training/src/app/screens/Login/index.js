import React, { Component } from 'react';

import styles from './styles.scss';

class Login extends Component {
  handleClick() {
    window.location = '/game';
  }

  render() {
    return (
      <div className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <input className={styles.input} type="text" placeholder="Username" name="username" />
        <input className={styles.input} type="password" placeholder="Password" name="password" />
        <button className={styles.button} onClick={this.handleClick}>
          Sign in
        </button>
      </div>
    );
  }
}

export default Login;
