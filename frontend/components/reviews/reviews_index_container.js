import { connect } from "react-redux";
import { withRouter } from "react-router";
import { requestReviews } from "../../actions/review_actions";
import ReviewsIndexComponent from "./reviews_index_component";

const mSTP = (state, ownProps) => ({
  reviews: Object.values(state.entities.reviews)
})

const mDTP = (dispatch) => ({
  requestReviews: review => dispatch(requestReviews(review))
})

export default withRouter(connect(mSTP, mDTP)(ReviewsIndexComponent))