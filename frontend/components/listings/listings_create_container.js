import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createListing, clearErrors } from "../../actions/listing_actions";
import ListingsCreateForm from "./listings_create_form";

const mSTP = (state) => ({
  sessionId: state.session.id,
  errors: state.errors.listing,
})

const mDTP = dispatch => ({
  createListing: listing => dispatch(createListing(listing)),
  clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(ListingsCreateForm))

