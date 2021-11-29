import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateListing, clearErrors } from "../../actions/listing_actions";
import ListingEditComponent from "./listings_edit_component";

const mSTP = (state, ownProps) => ({
  sessionId: state.session.id,
  errors: state.errors.listing
})

const mDTP = dispatch => ({
  updateListing: listing => dispatch(updateListing(listing)),
  clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(ListingEditComponent))