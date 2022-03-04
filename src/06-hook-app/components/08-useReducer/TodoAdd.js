import { useForm } from "../../../hooks/06-hook-app/useForm";
import PropTypes from "prop-types";

export const TodoAdd = ({ handleAddTodo }) => {
  const {
    formState: { description },
    handleInputChange,
    reset,
  } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length === 0) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Add Todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="description"
          value={description}
          placeholder="Aprender..."
          autoComplete="off"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};

TodoAdd.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};
