import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actionsCreators as Actions } from '@redux/login/actions';
import { ROUTES } from '@constants/routes.js';

import styles from './styles.scss';

class TopBar extends Component {
  handleClick = () => {
    const { userLogout } = this.props;
    userLogout();
  };

  render() {
    return (
      <nav className={styles.bar}>
        <div className={styles.item}>
          <i className="fas fa-gamepad" />
          <NavLink activeClassName={styles.active} className={styles.link} to={ROUTES.GAME}>
            Game
          </NavLink>
        </div>
        <div className={styles.item}>
          <i className="fas fa-user" />
          <NavLink activeClassName={styles.active} className={styles.link} to={ROUTES.PROFILE}>
            Profile
          </NavLink>
        </div>
        <div className={styles.item}>
          <i className="fas fa-sign-out-alt" />
          <button className={styles.linkButton} onClick={this.handleClick}>
            Logout
          </button>
        </div>
      </nav>
    );
  }
}

TopBar.propTypes = {
  userLogout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(Actions.userLogout())
});

export default connect(
  null,
  mapDispatchToProps
)(TopBar);
