import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.scss';

function TopBar() {
  return (
    <nav className={styles.bar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <i className="fas fa-gamepad" />
          <NavLink activeClassName={styles.active} className={styles.link} to="/game/">
            Game
          </NavLink>
        </li>
        <li className={styles.item}>
          <i className="fas fa-user" />
          <NavLink activeClassName={styles.active} className={styles.link} to="/profile/">
            Profile
          </NavLink>
        </li>
        <li className={styles.item}>
          <i className="fas fa-sign-out-alt" />
          <NavLink activeClassName={styles.active} className={styles.link} to="/logout/">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;
