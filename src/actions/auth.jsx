import * as axios from "axios";

import { LOGIN, LOGOUT } from "../constants";

const setUserDetails = user => ({
  type: LOGIN.action,
  user
});

const signIn = (email, password) => dispatch =>
  axios
    .post(LOGIN.url, { email, password })
    .then(({ data: { result: user } }) => dispatch(setUserDetails(user)))
    .catch(console.error);

const signOutUser = () => ({
  type: LOGOUT.action
});

const signOut = () => dispatch =>
  axios
    .post(LOGOUT.url)
    .then(() => dispatch(signOutUser()))
    .catch(console.error);

export const authActions = { signIn, signOut };
