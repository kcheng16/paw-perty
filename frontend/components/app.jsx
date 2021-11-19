import React from "react";
import GreetingContainer from "./greetings/greeting_container";
import SignupContainer from "./sessions/signup_contatiner";
import LoginContainer from "./sessions/login_container";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <h1>Paw-perty</h1>
    </header>

      <GreetingContainer />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />

  </div>
);

export default App;