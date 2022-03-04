import { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  const loginUser = () => {
    setUser({
      id: 1,
      name: "Juan",
      email: "jm@gmail.com",
    });
  };

  return (
    <>
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={loginUser}>
        Login
      </button>
    </>
  );
};
