import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionsCreators as Actions } from '@redux/login/actions';

class Logout extends Component {
  componentDidMount() {
    const { logout } = this.props;
    logout();
  }

  render() {
    return <Fragment />;
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Actions.logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Logout);
