import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { FORM_SIGIN } from '@constants';

import styles from './styles.scss';
import CustomField from './components/CustomField/index';
import { required, minLength, isEmail } from './validation';

function Layout({ handleSubmit, userLoginError }) {
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
      {userLoginError && <div className={styles.error}>{userLoginError}</div>}
    </form>
  );
}

Layout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  userLoginError: PropTypes.string
};

export default reduxForm({
  form: FORM_SIGIN
})(Layout);
