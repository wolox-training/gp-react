import React, { Component } from 'react';

import styles from './styles.scss';

class Login extends Component {
  render() {
    return (
      <div className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <div>
          <input className={styles.box} type="text" placeholder="Username" name="username" />
        </div>
        <div>
          <input className={styles.box} type="password" placeholder="Password" name="password" />
        </div>
        <div>
          <button className={styles.button}>Sign in</button>
        </div>
      </div>
    );
  }
}

export default Login;
