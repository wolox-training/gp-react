import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import photo from './assets/profile.jpg';
import styles from './styles.scss';

function Layout({ userData }) {
  if (!userData) {
    return <div className={styles.loader}>Loading...</div>;
  }

  const userName = `${userData.name} ${userData.surname}`;
  return (
    <Fragment>
      <div>
        <h2 className={styles.title}>{userName}</h2>
      </div>
      <div className={styles.card}>
        <div className={styles.framework}>
          <img alt={userName} className={styles.photo} src={photo} />
        </div>
        <div className={styles.info}>
          <p className={styles.text}>
            <span className={styles.user}>Id:</span> {userData.id}
            <br />
            <span className={styles.user}>Email:</span>
            &nbsp;
            <a href={userData.email} className={styles.link}>
              {userData.email}
            </a>
            <br />
            <span className={styles.user}>Gender:</span> {userData.gender}
            <br />
            <span className={styles.user}>Phone:</span>{' '}
            <a href="tel:(514) 706 7652}" className={styles.link}>
              {userData.phone}
            </a>
            <br />
            <span className={styles.user}>Birthday:</span> {userData.birthday}
            <br />
            <span className={styles.user}>Country:</span> {userData.region}
          </p>
        </div>
      </div>
    </Fragment>
  );
}

Layout.propTypes = {
  userData: PropTypes.shape({
    birthday: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
};

export default Layout;
