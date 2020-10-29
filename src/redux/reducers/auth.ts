import { SIGNUP, LOGIN } from "../actions/auth";

export interface AuthState {
  isAuth: boolean;
  token: string;
  username: string;
}

const initialState: AuthState = {
  isAuth: false,
  token: null,
  username: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
    case LOGIN:
      return { ...state, ...payload, isAuth: true };
    default:
      return state;
  }
};
