import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root'
import { login, logout, signup } from './actions/session_actions'
import { requestListings } from "./actions/listing_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  
  // stays logged in after refreshing
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store}/>, root);
  
  // we don't put the store directly on the window because
  // it can be confusing when debugging, sometimes giving you access to state
  // when you shouldn't
  window.dispatch = store.dispatch;
  window.getState = store.getState
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.requestListings = requestListings
  window.store = store
});