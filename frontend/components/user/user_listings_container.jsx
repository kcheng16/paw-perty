import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchUser } from '../../actions/user_actions'
import UserListings from "./user_listings";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  listings: Object.values(state.entities.listings)
})

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
})

export default withRouter(connect(mSTP,mDTP)(UserListings))