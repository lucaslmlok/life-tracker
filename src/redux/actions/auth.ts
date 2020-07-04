import { Dispatch } from "redux";

import { State } from "../state";

export const SIGNUP = "SIGNUP";

export const signup = (email: string, password: string, name: string) => {
  return async (dispatch: Dispatch<any>, getState: () => State) => {
    dispatch({ type: SIGNUP });
  };
};
