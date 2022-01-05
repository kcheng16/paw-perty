import React from "react";
import SplashContainer from "./splash/splash_container";
import Modal from "./modals/modal";
//===============================
import ListingsIndexContainer from "./listings/listings_index_container";
import ListingsShowContainer from "./listings/listings_show_container";
import ListingsCreateContainer from "./listings/listings_create_container";
import ListingsEditContainer from "./listings/listings_edit_container";
//==============================
import UserShowContainer from "./user/user_show_container";
import UserListingsContainer from "./user/user_listings_container";
//==============================
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
import ReservationShowContainer from "./reservations/reservation_show_container";
import SearchIndexContainer from "./search/search_index_container"

const App = () => (
  <div>
      <Modal />
    <header>
      <NavbarContainer />
    </header>

      <Switch>
        <Route path="/search/:city" render={props => <SearchIndexContainer {...props}/>}/>
        <Route path="/user/:id/listings" render={props => <UserListingsContainer {...props}/>}/>
        <Route exact path="/user/:id/reservations" render={props => <ReservationShowContainer {...props}/>}/>
        <Route exact path="/user/:id" render={props => <UserShowContainer {...props}/>}/>
        <Route exact path="/" render={props => <SplashContainer {...props}/>}/>
{/* unable to use protected-route: new and update */}
        <Route exact path="/listings/new" render={props => <ListingsCreateContainer {...props}/>}/>
        <Route exact path="/listings/:id/edit" render={props => <ListingsEditContainer {...props}/>}/>

        <Route exact path="/listings/:id" render={props => <ListingsShowContainer {...props}/>}/>
        <Route exact path="/listings" render={props => <ListingsIndexContainer {...props}/>}/>

      </Switch>
  </div>
);

export default App;