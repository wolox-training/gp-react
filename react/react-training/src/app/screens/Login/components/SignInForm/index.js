import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { CustomField } from './components/CustomField';
import { required, minLength, isEmail } from './components/Validation';
import styles from './styles.scss';

class SignInForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Login</h2>
        <Field
          className={styles.input}
          type="text"
          placeholder="Username"
          name="username"
          component={CustomField}
          validate={[required, isEmail]}
        />
        <Field
          className={styles.input}
          type="password"
          placeholder="Password"
          name="password"
          component={CustomField}
          validate={[required, minLength]}
        />
        <div>
          <button className={styles.button}>Sign in</button>
        </div>
      </form>
    );
  }
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'signIn'
})(SignInForm);
