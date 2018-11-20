import React, { Fragment } from 'react';

import photo from './assets/ profilePic9.jpg';
import styles from './styles.scss';

function Profile() {
  const nameUser = 'Johana Uribe';
  return (
    <Fragment>
      <div>
        <h2 className={styles.title}>{nameUser}</h2>
      </div>
      <div className={styles.card}>
        <div className={styles.framework}>
          <img
            alt={nameUser}
            className={styles.photo}
            height={photo.height}
            src={photo}
            width={photo.width}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.text}>
            <span className={styles.user}>Gender:</span> Female
            <br />
            <span className={styles.user}>Region:</span> Colombia
            <br />
            <span className={styles.user}>Phone:</span>{' '}
            <a href="tel:(514) 706 7652}" className={styles.link}>
              (514) 706 7652
            </a>
            <br />
            <span className={styles.user}>Birthday:</span> 04/09/1992
            <br />
            <span className={styles.user}>Email:</span>
            &nbsp;
            <a href="johanauribe@example.com" className={styles.link}>
              johanauribe@example.com
            </a>
            <br />
            <span className={styles.user}>Password:</span> Uribe92~
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
