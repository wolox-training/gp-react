import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import GameReducer from '@redux/game/reducer';
import FormReducer from '@redux/login/reducer';

const reducers = combineReducers({
  GameReducer,
  FormReducer
});

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
/* eslint-enable */
