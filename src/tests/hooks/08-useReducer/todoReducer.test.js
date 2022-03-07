import { todoReducer } from "../../../06-hook-app/components/08-useReducer/todoReducer";
import { todoReducerActionType } from "../../../enums/todoReducerActionType";
import { demoTodos } from "../../fixtures/demoTodos";

describe("pruebas del hook todoReducer", () => {
  test("deber retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos);
    expect(state).toEqual(demoTodos);
  });

  test("deber de agregar un Todo", () => {
    const newTodo = {
      id: 3,
      desc: "Aprender JS",
      done: false,
    };
    const action = {
      type: todoReducerActionType.add,
      payload: newTodo,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("deber de eliminar un Todo", () => {
    const action = {
      type: todoReducerActionType.delete,
      payload: 1,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(1);
    expect(state[0]).toEqual(demoTodos[1]);
  });

  test("deber de hacer el TOGGLE del Todo", () => {
    const action = {
      type: todoReducerActionType.toggle,
      payload: 1,
    };
    const state = todoReducer(demoTodos, action);
    expect(state[0].done).toBe(true);
    expect(state[1].done).toBe(false);
  });
});
