import { useEffect, useState } from "react";
import "./effect.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {}, []);
  useEffect(() => {}, [formState]);
  useEffect(() => {}, [email]);

  const iptNameChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
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
          onChange={iptNameChange}
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
          onChange={iptNameChange}
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
};
