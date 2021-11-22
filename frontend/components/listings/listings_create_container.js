import { connect } from "react-redux";
import { createListing } from "../../actions/listing_actions";
import ListingsCreateForm from "./listings_form";

const mSTP = (state) => ({
  sessionId: state.session.id
})

const mDTP = dispatch => ({
  createListing: listing => dispatch(createListing(listing))
})

export default connect(mSTP, mDTP)(ListingsCreateForm)

