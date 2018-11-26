import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionsCreators as Actions } from '@redux/user/actions';

import { USER_ID } from '@constants';

import { USER_DATA_SHAPE } from './constants';
import Card from './layout';

class Profile extends Component {
  componentDidMount() {
    this.props.userGet(USER_ID);
  }

  render() {
    return <Card userData={this.props.userData} />;
  }
}

Profile.propTypes = {
  userGet: PropTypes.func.isRequired,
  userData: PropTypes.shape(USER_DATA_SHAPE)
};

const mapStateToProps = store => ({
  userId: store.LoginReducer.userId,
  userData: store.UserReducer.userData,
  userDataError: store.UserReducer.userDataError
});

const mapDispatchToProps = dispatch => ({
  userGet: userId => dispatch(Actions.userGet(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
