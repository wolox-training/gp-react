import { actionTypes } from './actions';

const initialState = {
  userIsLogged: false,
  userLoginError: null,
  userSession: null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        userIsLogged: false,
        userLoginError: null,
        userSession: null
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        userIsLogged: false,
        userLoginError: action.userLoginError,
        userSession: null
      };
    case actionTypes.LOGIN_SUCCESS:
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
