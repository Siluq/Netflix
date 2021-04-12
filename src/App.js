import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}></Route>
      <Route path="/user">
        <p>heyy i am a user</p>
      </Route>
    </Router>
  );
}
