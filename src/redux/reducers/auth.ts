import { SIGNUP, LOGIN } from "../actions/auth";

export interface AuthState {
  isAuth: boolean;
  token: string;
}

const initialState: AuthState = {
  isAuth: false,
  token: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
    case LOGIN:
      return { ...state, token: payload.token, isAuth: true };
    default:
      return state;
  }
};
