import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createListing } from "../../actions/listing_actions";
import ListingsCreateForm from "./listings_create_form";

const mSTP = (state) => ({
  sessionId: state.session.id
})

const mDTP = dispatch => ({
  createListing: listing => dispatch(createListing(listing))
})

export default withRouter(connect(mSTP, mDTP)(ListingsCreateForm))

