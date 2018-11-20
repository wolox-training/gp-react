import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import GameReducer from '@redux/game/reducer';
import LoginReducer from '@redux/login/reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  GameReducer,
  LoginReducer,
  form: formReducer
});

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
/* eslint-enable */
