import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

class Login extends Component {
  render() {
    return (
      <div className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <input className={styles.input} type="text" placeholder="Username" name="username" />
        <input className={styles.input} type="password" placeholder="Password" name="password" />
        <button className={styles.button}>
          <Link className={styles.link} to="/game">
            Sign in
          </Link>
        </button>
      </div>
    );
  }
}

export default Login;
