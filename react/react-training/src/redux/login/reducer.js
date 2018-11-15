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
        ...action.payload
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.loginSuccess:
      localStorage.setItem('userIsLogged', true.toString());
      localStorage.setItem('userSession', action.userSession);
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
