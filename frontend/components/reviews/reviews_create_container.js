import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createReview } from "../../actions/review_actions";
import ReviewsCreateComponent from "./reviews_create_component";

const mSTP = (state, ownProps) => ({
  sessionId: state.session.id,
  listingId: ownProps.match.params.id
})

const mDTP = (dispatch) => ({
  createReview: review => dispatch(createReview(review))
})

export default withRouter(connect(mSTP, mDTP)(ReviewsCreateComponent))