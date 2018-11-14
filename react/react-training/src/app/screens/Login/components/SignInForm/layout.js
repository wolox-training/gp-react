import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import { CustomField } from './components/CustomField';
import { required, minLength, isEmail } from './validation';
import styles from './styles.scss';

class Layout extends Component {
  render() {
    const { handleSubmit, userTryLogin } = this.props;

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
        {userTryLogin && <div className={styles.error}>{userTryLogin}</div>}
      </form>
    );
  }
}

Layout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  userIsLogged: PropTypes.bool,
  userTryLogin: PropTypes.string
};

export default Layout;
