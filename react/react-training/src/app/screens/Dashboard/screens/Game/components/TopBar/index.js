import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@constants/routes.js';

import styles from './styles.scss';

function TopBar() {
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
        <NavLink activeClassName={styles.active} className={styles.link} to={ROUTES.LOGOUT}>
          Logout
        </NavLink>
      </div>
    </nav>
  );
}

export default TopBar;
