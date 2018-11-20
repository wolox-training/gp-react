import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.scss';

function TopBar() {
  return (
    <nav className={styles.bar}>
      <div className={styles.item}>
        <i className="fas fa-gamepad" />
        <NavLink activeClassName={styles.active} className={styles.link} to="/game/">
          Game
        </NavLink>
      </div>
      <div className={styles.item}>
        <i className="fas fa-user" />
        <NavLink activeClassName={styles.active} className={styles.link} to="/profile/">
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <i className="fas fa-sign-out-alt" />
        <NavLink activeClassName={styles.active} className={styles.link} to="/logout/">
          Logout
        </NavLink>
      </div>
    </nav>
  );
}

export default TopBar;
