import React from 'react';

import Loading from './components/Loading';

function HOCLoading(MyComponent) {
  return function myLoading(props) {
    return <div>{props.isLoading ? <Loading /> : <MyComponent {...props} />}</div>;
  };
}

export default HOCLoading;
