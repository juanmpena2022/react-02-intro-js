import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  localStorage.setItem('lastPath', location.pathname + location.search);

  return auth?.logged ? children : <Navigate to="/login" />;
};
