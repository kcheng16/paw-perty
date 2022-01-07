import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchUser } from '../../actions/user_actions'
import { deleteListing } from "../../actions/listing_actions";

import UserListings from "./user_listings";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  deleteListing: listingId => dispatch(deleteListing(listingId))
})

export default withRouter(connect(mSTP,mDTP)(UserListings))