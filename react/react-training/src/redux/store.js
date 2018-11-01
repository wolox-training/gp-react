import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import GameReducer from '@redux/game/reducer';

const reducers = combineReducers({
  GameReducer
});

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
/* eslint-enable */
