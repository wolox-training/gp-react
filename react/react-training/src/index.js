import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from '@components/AppRoutes';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import './scss/styles.scss';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
