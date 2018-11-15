import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { CustomField } from './components/CustomField';
import { required, minLength, isEmail } from './validation';
import styles from './styles.scss';

class Layout extends Component {
  render() {
    const { handleSubmit, userLoginError } = this.props;

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
}

Layout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  userLoginError: PropTypes.string
};

export default Layout;
