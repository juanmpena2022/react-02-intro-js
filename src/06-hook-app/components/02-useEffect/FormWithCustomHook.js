import { useEffect } from "react";
import { useForm } from "../../../hooks/06-hook-app/useForm";
import "./effect.css";

export const FormWithCustomHook = () => {
  const { formState, handleInputChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formState;
  useEffect(() => {
    console.log("email");
  }, [email]);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*******"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
