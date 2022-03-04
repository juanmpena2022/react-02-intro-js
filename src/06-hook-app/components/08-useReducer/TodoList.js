import PropTypes from "prop-types";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos = [], handleDelete, handleToggle }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {todos.map((t, i) => (
          <TodoListItem
            key={t.id}
            todo={t}
            index={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
