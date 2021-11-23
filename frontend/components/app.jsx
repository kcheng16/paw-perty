import React from "react";
import SplashContainer from "./splash/splash_container";
import SignupContainer from "./sessions/signup_contatiner";
import LoginContainer from "./sessions/login_container";
//===============================
import ListingsIndexContainer from "./listings/listings_index_container";
import ListingsShowContainer from "./listings/listings_show_container";
import ListingsCreateContainer from "./listings/listings_create_container";
//==============================
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import UserDropdownContainer from "./sessions/user_dropdown_container";
import Modal from "./modals/modal";

const App = () => (
  <div>
      <Modal />
    <header>
      <img className="logo" src="https://res.cloudinary.com/de8carnhu/image/upload/v1637652441/pawperty-logo_bemkc9.png"/>
      <UserDropdownContainer />
      <SplashContainer/>

    </header>

      {/* <AuthRoute exact path="/signup" component={SignupContainer} /> */}
      {/* <AuthRoute exact path="/login" component={LoginContainer} /> */}

      <Switch>
        {/* need to make below protected */}
        <Route exact path="/listings/new" render={props => <ListingsCreateContainer {...props}/>}/>
        {/* need to make above protected */}
        <Route exact path="/listings/:id" render={props => <ListingsShowContainer {...props}/>}/>
        <Route exact path="/listings" render={props => <ListingsIndexContainer {...props}/>}/>
      </Switch>
  </div>
);

export default App;