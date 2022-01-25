import { connect } from "react-redux";
import { withRouter } from "react-router";
import { requestListing, updateListing, clearErrors } from "../../actions/listing_actions";
import ListingEditComponent from "./listings_edit_component";

const mSTP = (state, ownProps) => {
  const currentUserId = state.session.id
  return{
    sessionId: currentUserId,
    errors: state.errors.listing,
    listing: state.entities.users[currentUserId].listings[ownProps.match.params.id]
}}

const mDTP = dispatch => ({
  requestListing: listingId => dispatch(requestListing(listingId)),
  updateListing: (listing, listingId) => dispatch(updateListing(listing, listingId)),
  clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(ListingEditComponent))