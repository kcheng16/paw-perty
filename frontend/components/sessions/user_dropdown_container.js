import { connect } from "react-redux";
import {openModal, closeModal} from "../../actions/modal_action"
import UserDropdown from "./user_dropdown"

const mSTP = state => ({

})

const mDTP = dispatch => ({
  openLoginModal: () => dispatch(openModal('login')),
  openSignupModal: () => dispatch(openModal('signup')),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(UserDropdown)