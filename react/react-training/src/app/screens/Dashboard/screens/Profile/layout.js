import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { RIEInput } from 'riek';
import { actionsCreators as Actions } from '@redux/user/actions';
import { USER_DATA_SHAPE } from '@propTypes/userDataShape';

import { validateEmail } from '@utils';

import photo from './assets/profile.jpg';
import styles from './styles.scss';

class Layout extends Component {
  userChangeData = newUserData => {
    const { userData, userPatch } = this.props;
    userPatch(userData.id, newUserData);
  };

  handleValidate = email => validateEmail(email);

  render() {
    const { userData } = this.props;
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
              <span className={styles.user}>Id:</span>
              {userData.id}
            </p>
            <p className={styles.text}>
              <span className={styles.user}>Email:</span>
              <RIEInput
                value={userData.email}
                propName="email"
                change={this.userChangeData}
                validate={this.handleValidate}
                shouldRemainWhileInvalid
                classInvalid={styles.error}
              />
            </p>
            <p className={styles.text}>
              <span className={styles.user}>Gender:</span>
              <RIEInput value={userData.gender} propName="gender" change={this.userChangeData} />
            </p>
            <p className={styles.text}>
              <span className={styles.user}>Phone:</span>
              <RIEInput value={userData.phone} propName="phone" change={this.userChangeData} />
            </p>
            <p className={styles.text}>
              <span className={styles.user}>Birthday:</span>
              <RIEInput value={userData.birthday} propName="birthday" change={this.userChangeData} />
            </p>
            <p className={styles.text}>
              <span className={styles.user}>Country:</span>
              <RIEInput value={userData.region} propName="region" change={this.userChangeData} />
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

Layout.propTypes = {
  userData: PropTypes.shape(USER_DATA_SHAPE),
  userPatch: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  userId: store.LoginReducer.userId,
  userData: store.UserReducer.userData,
  userDataError: store.UserReducer.userDataError
});

const mapDispatchToProps = dispatch => ({
  userPatch: (userId, userData) => dispatch(Actions.userPatch(userId, userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
