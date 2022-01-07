import { connect } from "react-redux";
import { requestListing, deleteListing } from "../../actions/listing_actions";
import { deleteReview, updateReview } from "../../actions/review_actions";
import { createReservation } from "../../actions/reservation_actions";
import { openModal } from "../../actions/modal_actions";
import { withRouter } from "react-router";
import ListingsShow from "./listings_show"

const mSTP = (state,ownProps) =>{
  
  return {
  listing: state.entities.listings[ownProps.match.params.id],
  session: state.session,
  reviews: Object.values(state.entities.reviews)
}}

const mDTP = (dispatch) => ({
  requestListing: listingId => dispatch(requestListing(listingId)),
  deleteListing: listingId => dispatch(deleteListing(listingId)),
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
  createReservation: reservation => dispatch(createReservation(reservation)),
  openLoginModal: () => dispatch(openModal('login')),
})

export default withRouter(connect(mSTP, mDTP)(ListingsShow))