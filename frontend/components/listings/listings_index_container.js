import { connect } from "react-redux";
import { requestListings } from "../../actions/listing_actions";
import ListingsIndex from "./listings_index"

const mSTP = state => ({
  listings: Object.values(state.entities.listings)
  
})

const mDTP = dispatch => ({
  requestListings: () => dispatch(requestListings())
})

export default connect(mSTP, mDTP)(ListingsIndex)