import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionsCreators as Actions } from '@redux/login/actions';

import Card from './layout';

class Profile extends Component {
  componentDidMount() {
    const userId = 1;
    const { getUser } = this.props;
    getUser(userId);
  }

  render() {
    const { userData } = this.props;
    return <Card userData={userData} />;
  }
}

Profile.propTypes = {
  getUser: PropTypes.func.isRequired,
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

const mapStateToProps = store => ({
  userId: store.LoginReducer.userId,
  userData: store.LoginReducer.userData,
  userDataError: store.LoginReducer.userDataError
});

const mapDispatchToProps = dispatch => ({
  getUser: userId => dispatch(Actions.getUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
