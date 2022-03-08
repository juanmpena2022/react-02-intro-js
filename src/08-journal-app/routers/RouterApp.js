import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { RouterAuth } from "./RouterAuth";

export const RouterApp = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={RouterAuth} />
          <Route exact path="/" component={JournalScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
