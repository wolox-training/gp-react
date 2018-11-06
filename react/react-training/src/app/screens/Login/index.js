import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import styles from './styles.scss';

class Login extends Component {
  render() {
    return (
      <div className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <input className={styles.input} type="text" placeholder="Username" name="username" />
        <input className={styles.input} type="password" placeholder="Password" name="password" />
        <div>
          <Route
            render={({ history }) => (
              <button className={styles.button} onClick={() => history.push('/game')}>
                Sign in
              </button>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Login;
