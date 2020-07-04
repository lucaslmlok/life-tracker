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
    default:
      return state;
  }
};
