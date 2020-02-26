const BASE_URL = "http://18.228.59.15:3000";

const USERS_URL = `${BASE_URL}/users`;
const AUTH_URL = `${BASE_URL}/auth`;
const PROJECTS_URL = `${BASE_URL}/projects`;
const TASKS_URL = `${BASE_URL}/tasks`;

export const CREATE_USER = {
  action: "CREATE_USER",
  url: `${USERS_URL}`
};
export const LOGIN = {
  action: "LOGIN",
  url: `${AUTH_URL}/login`
};
export const LOGOUT = {
  action: "LOGOUT",
  url: `${AUTH_URL}/logout`
};

export const LIST_PROJECTS = {
  action: "LIST_PROJECTS",
  url: `${PROJECTS_URL}`
};
export const LIST_PROJECT = {
  action: "LIST_PROJECT",
  url: `${PROJECTS_URL}/:id`
};
export const CREATE_PROJECT = {
  action: "LIST_PROJECTS",
  url: `${PROJECTS_URL}`
};
export const UPDATE_PROJECT = {
  action: "UPDATE_PROJECT",
  url: `${PROJECTS_URL}/:id`
};
export const DELETE_PROJECT = {
  action: "DELETE_PROJECT",
  url: `${PROJECTS_URL}/:id`
};

export const LIST_TASKS = {
  action: "LIST_TASKS",
  url: `${TASKS_URL}`
};
export const LIST_TASK = {
  action: "LIST_TASK",
  url: `${TASKS_URL}/:id`
};
export const CREATE_TASK = {
  action: "LIST_TASKS",
  url: `${TASKS_URL}`
};
export const UPDATE_TASK = {
  action: "UPDATE_TASK",
  url: `${TASKS_URL}/:id`
};
export const DELETE_TASK = {
  action: "DELETE_TASK",
  url: `${TASKS_URL}/:id`
};
