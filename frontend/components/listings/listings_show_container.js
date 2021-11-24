import { connect } from "react-redux";
import { requestListing } from "../../actions/listing_actions";
import { deleteListing } from "../../actions/listing_actions";
import { withRouter } from "react-router";
import ListingsShow from "./listings_show"

const mSTP = (state,ownProps) =>({
  listing: state.entities.listings[ownProps.match.params.id],
  session: state.session
})

const mDTP = (dispatch) => ({
  requestListing: listingId => dispatch(requestListing(listingId)),
  deleteListing: (listingId) => dispatch(deleteListing(listingId))
})

export default withRouter(connect(mSTP, mDTP)(ListingsShow))