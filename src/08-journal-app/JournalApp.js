import { store } from "../07-heroes-app/store/store";
import { RouterApp } from "./routers/RouterApp";
import { Provider } from "react-redux";

export const JournalApp = () => {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  );
};
