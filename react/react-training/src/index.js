import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Game from '@screens/Game';
import Login from '@screens/Login';
import { store } from '@redux/store';

const App = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
