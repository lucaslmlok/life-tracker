import { Dispatch } from "redux";
import axios from "axios";

import { httpErrorHandler } from "../../util/error-handling";
import { State } from "../state";
import { SIGNUP_API } from "../../util/urls";

export const SIGNUP = "SIGNUP";

export const checkIsAuth = () => {
  return async (dispatch: Dispatch<any>, getState: () => State) => {
    try {
    } catch (err) {}
  };
};

export const signup = (email: string, password: string, name: string) => {
  return async (dispatch: Dispatch<any>, getState: () => State) => {
    try {
      const url = process.env.REACT_APP_API + SIGNUP_API;
      const res = await axios.post(url, { email, password, name });

      const { token } = res.data;
      localStorage.setItem("token", token);
      dispatch({ type: SIGNUP, payload: { token } });
    } catch (err) {
      httpErrorHandler(err);
    }
  };
};
