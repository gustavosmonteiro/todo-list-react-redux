import * as axios from "axios";
import { LOGIN, LOGOUT } from "../constants";

const USER_KEY = "user";
const user =
  (localStorage.getItem(USER_KEY) &&
    JSON.parse(localStorage.getItem(USER_KEY))) ||
  undefined;

if (user) {
  axios.defaults.headers.common["Authorization"] = user.token;
}

export const auth = (state = { user }, action) => {
  switch (action.type) {
    case LOGIN.action:
      localStorage.setItem(USER_KEY, JSON.stringify(action.user));
      axios.defaults.headers.common["Authorization"] = action.user.token;
      return {
        user: action.user
      };
    case LOGOUT.action:
      localStorage.removeItem(USER_KEY);
      return {};
    default:
      return state;
  }
};
