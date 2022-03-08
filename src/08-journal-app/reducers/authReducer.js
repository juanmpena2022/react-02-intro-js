/*
    {
        uid,
        name    
    }
*/
import { authReducerType } from "../types/authReducerType";

export const authReducer = (state = {}, action) => {
  switch (action?.type) {
    case authReducerType.login:
      return {
        uid: action.payload.id,
        name: action.payload.displayName,
      };
    case authReducerType.logout:
      return {};

    default:
      return state;
  }
};
