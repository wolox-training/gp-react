import React, { Component } from 'react';
import { createStore, combineReducers, reducer as formReducer } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import styles from '../../styles.scss';

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className={styles.title}>Login</h2>
      <div>
        <Field className={styles.box} type="text" placeholder="Username" name="username" component="input" />
      </div>
      <div>
        <Field
          className={styles.box}
          type="password"
          placeholder="Password"
          name="password"
          component="input"
        />
      </div>
      <div>
        <Route
          render={({ history }) => (
            <button className={styles.button} onClick={() => history.push('/game')}>
              Sign in
            </button>
          )}
        />
      </div>
    </form>
  );
};

handleSignIn = values => {
  console.log(values);
};

LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm);

export default LoginForm;
