import { createStore, combineReducers } from 'redux';
import { reducer as game } from '@redux/game/reducer';

const reducers = combineReducers({
  game
});

/* eslint-disable no-underscore-dangle */
// noinspection JSUnresolvedVariable
// noinspection JSUnusedGlobalSymbols
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
