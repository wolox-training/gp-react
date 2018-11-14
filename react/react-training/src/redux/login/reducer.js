import { actionTypes } from './actions';

const initialState = {
  userIsLogged: false,
  userTryLogin: null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.login:
      return {
        ...state,
        userIsLogged: false,
        userTryLogin: null
      };
    case actionTypes.loginFailure:
      return {
        ...state,
        userIsLogged: false,
        userTryLogin: action.userTryLogin
      };
    case actionTypes.loginSuccess:
      return {
        ...state,
        userIsLogged: true,
        userTryLogin: action.userTryLogin
      };
    default:
      return state;
  }
};

export default Reducer;
