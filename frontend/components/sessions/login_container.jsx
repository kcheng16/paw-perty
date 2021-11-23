import { login, logout } from "../../actions/session_actions"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import SessionForm from "./session_form"
import { openModal, closeModal } from '../../actions/modal_actions';
import React from "react";

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
  logout: () => dispatch(logout())
})

export default withRouter(connect(mSTP,mDTP)(SessionForm));