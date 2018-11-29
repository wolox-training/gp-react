import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Loading from './components/Loading';

function HOCLoading(MyComponent) {
  return function myLoading(props) {
    return <Fragment>{props.isLoading ? <Loading /> : <MyComponent {...props} />}</Fragment>;
  };
}

HOCLoading.propTypes = {
  MyComponent: PropTypes.arrayOf(PropTypes.string)
};

export default HOCLoading;
