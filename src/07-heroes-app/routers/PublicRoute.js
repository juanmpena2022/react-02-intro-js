import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  return auth?.logged ? <Navigate to="/" /> : children;
};
