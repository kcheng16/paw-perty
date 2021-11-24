import React from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import {openModal, closeModal} from "../../actions/modal_actions"
import SessionForm from "./session_form"
import { signup, logout } from "../../actions/session_actions"
import {clearErrors} from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
  sessionId: state.session.id,
  errors: state.errors.session,
  formType: 'Sign Up'
})

const mDTP = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Login
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  login: (formUser) => dispatch(login(formUser)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(SessionForm));