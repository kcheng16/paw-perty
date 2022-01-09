import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const mSTP = state => ({
    loggedIn: Boolean(state.session.id)
})

//======================================================
// Auth: page accessible only if signed-out (sign-up/sign-in)
const Auth = ({loggedIn, path, component: Component}) => (
    <Route
      path={path}
      render={props=>(
        !loggedIn ? <Component {...props} /> : <Redirect to= "/" /> 
      )}
    />
)
// Protected: page accessible only if signed-in (create/edit)
const Protected = ({loggedIn, path, component: Component}) => (
    <Route 
      path = {path}
      render={props => (
        loggedIn ? <Component {...props} /> : < Redirect to= "/"/>
      )}
    />
)

export const AuthRoute = withRouter(connect(mSTP)(Auth))
export const ProtectedRoute = withRouter(connect(mSTP)(Protected))