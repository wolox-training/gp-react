import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
import { Field, reduxForm } from 'redux-form';
// import { Route } from 'react-router-dom';

import styles from './styles.scss';
import PropTypes from 'prop-types';
import Layout from '../../../Game/layout';

class SignInForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Login</h2>
        <div>
          <Field
            className={styles.input}
            type="text"
            placeholder="Username"
            name="username"
            component="input"
          />
        </div>
        <div>
          <Field
            className={styles.input}
            type="password"
            placeholder="Password"
            name="password"
            component="input"
          />
        </div>
        <div>
          <button className={styles.button}>Sign in</button>
        </div>
      </form>
    );
  }
}

// handleSubmit = values => {
//   console.log(values);
// };

SignInForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'signIn'
})(SignInForm);
