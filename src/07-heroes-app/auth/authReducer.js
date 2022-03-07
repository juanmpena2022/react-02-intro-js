// const state = {
//   name: "Juan",
//   logged: true,
// };

import { authReducerType } from "../types/authReducerType";

export const authReducer = (state = {}, action) => {
  switch (action?.type) {
    case authReducerType.login:
      return { ...action.payload, logged: true };
    case authReducerType.logout:
      return { logged: false };
    default:
      return state;
  }
};
