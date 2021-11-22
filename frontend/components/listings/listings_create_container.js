import { connect } from "react-redux";
import { createListing } from "../../actions/listing_actions";
import ListingsCreateForm from "./listings_form";

const mDTP = dispatch => ({
  createListing: listing => dispatch(createListing(listing))
})

export default connect(null, mDTP)(ListingsCreateForm)

