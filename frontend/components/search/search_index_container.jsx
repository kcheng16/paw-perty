import { connect } from "react-redux";
import { withRouter } from "react-router";
import { requestListings } from "../../actions/listing_actions";
import SearchIndexComponent from "./search_index_component"

const mSTP = (state, ownProps) => {
  return {
    listings: Object.values(state.entities.listings)
}}

const mDTP = (dispatch) => ({
  requestListings: () => dispatch(requestListings())
})

export default withRouter(connect(mSTP, mDTP)(SearchIndexComponent))