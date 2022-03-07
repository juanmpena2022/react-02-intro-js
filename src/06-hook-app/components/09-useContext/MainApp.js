import { useState } from "react";
import { RouterApp } from "./RouterApp";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  const [user, setUser] = useState(null);
  const userContextProviderValue = { user, setUser };

  return (
    <UserContext.Provider value={userContextProviderValue}>
      <RouterApp />
    </UserContext.Provider>
  );
};
