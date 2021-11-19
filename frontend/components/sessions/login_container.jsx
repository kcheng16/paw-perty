import { login } from "../../actions/session_actions"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import SessionForm from "./session_form"


const mSTP = (state, ownProps) => ({
  sessionId: state.session.id,
  errors: state.errors.session,
  formType: 'Login'
})

const mDTP = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user))
})

export default withRouter(connect(mSTP,mDTP)(SessionForm));