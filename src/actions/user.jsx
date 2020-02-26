import * as axios from "axios";

import { CREATE_USER } from "../constants";

const signUp = (name, email, password) => () =>
  axios.post(CREATE_USER.url, { name, email, password }).catch(console.error);

export const userActions = { signUp };
