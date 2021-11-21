import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchUser } from "../../util/user_util";

import UserShowComponent from "./user_show_component";


const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
  fetchUser = userId => dispatch(fetchUser(userId))
})

export default withRouter(connect(mSTP,mDTP)(UserShowComponent))