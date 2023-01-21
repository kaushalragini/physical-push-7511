import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isAuthLoading: false,
  isAuthError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case types.USER_LOGIN_REQUEST:
      return { ...state, isAuthLoading: true };
    case types.USER_LOGIN_SUCCESS:
      return { ...state, isAuthLoading: false, token: payload, isAuth: true };
    case types.USER_LOGIN_ERROR:
      return { ...state, isAuthError: false, isAuthError: true };
  }
};
export { reducer };
