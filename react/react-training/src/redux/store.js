import GameReducer from '@redux/game/reducer';
import LoginReducer from '@redux/login/reducer';
import UserReducer from '@redux/user/reducer';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  GameReducer,
  LoginReducer,
  UserReducer,
  form: formReducer
});

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
/* eslint-enable */
