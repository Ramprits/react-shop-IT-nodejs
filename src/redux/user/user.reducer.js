import { userLoginTypes, userRegisterTypes } from "./user.constants";

const initialState = {
  userInfo: undefined,
  loading: false,
  errorMessage: ""
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userLoginTypes.USER_LOGIN_START:
    case userRegisterTypes.USER_REGISTER_START:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: ""
      });
    case userLoginTypes.USER_LOGIN_SUCCESS:
    case userRegisterTypes.USER_REGISTER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: "",
        userInfo: payload
      });

    case userLoginTypes.USER_LOGIN_FAILURE:
    case userRegisterTypes.USER_REGISTER_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: payload
      });

    default:
      return state;
  }
};
