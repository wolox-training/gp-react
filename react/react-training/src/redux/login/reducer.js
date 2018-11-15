import { actionTypes } from './actions';

const initialState = {
  userIsLogged: false,
  userLoginError: null,
  userSession: null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.login:
      return {
        ...state,
        userIsLogged: false,
        userLoginError: null,
        userSession: null
      };
    case actionTypes.loginFailure:
      return {
        ...state,
        userIsLogged: false,
        userLoginError: action.userLoginError,
        userSession: null
      };
    case actionTypes.loginSuccess:
      localStorage.setItem('userIsLogged', true.toString());
      localStorage.setItem('userSession', action.userSession);
      return {
        ...state,
        userIsLogged: true,
        userLoginError: null,
        userSession: action.userSession
      };
    default:
      return state;
  }
};

export default Reducer;
