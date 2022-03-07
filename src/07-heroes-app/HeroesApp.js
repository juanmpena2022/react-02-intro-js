import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { RouterApp } from "./routers/RouterApp";

const init = () => {
  return JSON.parse(localStorage.getItem("auth")) || { logged: false };
};

export const HeroesApp = () => {
  const [auth, dispatch] = useReducer(authReducer, {}, init);
  
  useEffect(() => {
    if (auth) {
      localStorage.setItem("auth", JSON.stringify(auth));
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      <RouterApp />
    </AuthContext.Provider>
  );
};
