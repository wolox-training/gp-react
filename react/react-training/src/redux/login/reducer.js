import { actionTypes } from './actions';

const initialState = {
  userIsLogged: localStorage.getItem('userIsLogged') === 'true',
  userLoginError: null,
  userSession: null,
  userId: null,
  userData: null,
  userDataError: null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.GET_USER_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
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
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.LOGIN_VERIFY:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
