import { useEffect, useReducer } from "react";
import { todoReducerActionType } from "../../../enums/todoReducerActionType";
import "./style.css";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, todosDispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    const actionDelete = {
      type: todoReducerActionType.delete,
      payload: id,
    };
    todosDispatch(actionDelete);
  };
  const handleToggle = (id) => {
    const actionToggle = {
      type: todoReducerActionType.toggle,
      payload: id,
    };
    todosDispatch(actionToggle);
  };

  const handleAddTodo = (todo) => {
    todosDispatch({
      type: todoReducerActionType.add,
      payload: todo,
    });
  };

  return (
    <>
      <h1>TodoApp: ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  );
};
