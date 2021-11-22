import { connect } from "react-redux";
import { requestListing } from "../../actions/listing_actions";
import ListingsShow from "./listings_show"

const mSTP = (state,ownProps) =>({
  listing: state.entities.listings[ownProps.match.params.id]
})

const mDTP = (dispatch) => ({
  requestListing: listingId => dispatch(requestListing(listingId))
})

export default connect(mSTP, mDTP)(ListingsShow)