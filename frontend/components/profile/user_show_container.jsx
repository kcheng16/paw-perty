import { connect } from "react-redux";
import { withRouter } from "react-router";

import UserShowComponent from "./user_show_component";


const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
  // need a fetchUser
})

export default withRouter(connect(mSTP,mDTP)(UserShowComponent))