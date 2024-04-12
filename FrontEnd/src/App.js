import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from './Component/Route/ProtectedRoute';
import './App.css';
import Login from './Component/User/Login';
import SignUp from './Component/User/Signup';
import DashBoard from './Component/Dashboard/DashBoard';
import { loadUser } from "./actions/UserAction";
import store from "./store";

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
        <ProtectedRoute exact path="/dashboard" component={DashBoard} />
      </Switch>
    </Router>

  );
}

export default App;
