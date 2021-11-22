import React from "react";
import SplashContainer from "./splash/splash_container";
import SignupContainer from "./sessions/signup_contatiner";
import LoginContainer from "./sessions/login_container";
//===============================
import ListingsContainer from "./listings/listings_index_container";
import ListingsShowContainer from "./listings/listings_show_container";
//==============================
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <h1>Paw-perty</h1>

    </header>
      <SplashContainer />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      
      <Route exact path="/listings" render={props => <ListingsContainer {...props}/>}/>
      <Route path="/listings/:id" render={props => <ListingsShowContainer {...props}/>}/>
      {/* need to make protected */}
      <Route path="/listings/new" render={props => <ListingsShowContainer {...props}/>}/>

  </div>
);

export default App;