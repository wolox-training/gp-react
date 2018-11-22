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
    case actionTypes.USER_GET:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.USER_GET_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.USER_GET_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.USER_PATCH:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.USER_PATCH_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.USER_PATCH_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.USER_POST:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.USER_POST_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.USER_POST_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.USER_LOGIN_VERIFY:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
