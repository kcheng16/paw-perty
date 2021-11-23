import { connect } from "react-redux";
import {openModal, closeModal} from "../../actions/modal_actions"
import UserDropdown from "./user_dropdown"
import { logout } from "../../actions/session_actions"

const mSTP = state => ({
  currentUserId: state.session.id
})

const mDTP = dispatch => ({
  openLoginModal: () => dispatch(openModal('login')),
  openSignupModal: () => dispatch(openModal('signup')),
  closeModal: () => dispatch(closeModal()),
  logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(UserDropdown)