import { login, logout } from "../../actions/session_actions"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from "./session_form"
import React from "react";
import {clearErrors} from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
  sessionId: state.session.id,
  errors: state.errors.session,
  formType: 'Login'
})

const mDTP = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  login: (formUser) => dispatch(login(formUser)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP,mDTP)(SessionForm));