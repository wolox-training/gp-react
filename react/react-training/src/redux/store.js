import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as game } from '@redux/game/reducer';

const reducers = combineReducers({
  game
});

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
/* eslint-enable */
