import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { capitalize } from "./util";

export const httpErrorHandler = (error: AxiosError<Error>) => {
  const { data } = error.response;

  let msg = capitalize(data["message"]);

  if (Array.isArray(data["data"]) && data["data"].length > 0) {
    msg = `${msg} - ${data["data"][0]["msg"]}`;
  }

  toast.error(msg);
  return false;
};
