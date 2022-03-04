import { todoReducerActionType } from "../../../enums/todoReducerActionType";

export const todoReducer = (state = [], action) => {
  switch (action?.type) {
    case todoReducerActionType.add:
      return [...state, action.payload];
    case todoReducerActionType.delete:
      return state.filter((s) => s.id !== action.payload);
    case todoReducerActionType.toggle:
      return state.map((s) => {
        if (s.id === action.payload) {
          s.done = !s.done;
        }
        return s;
      });
    default:
      return state;
  }
};
