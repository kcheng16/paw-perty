import { connect } from "react-redux";
import { withRouter } from "react-router";
import UserReservation from "./user_reservtions_component";

const mSTP = (state, ownProps) => ({
  sessionId: state.session.id,
  
})

const mDTP = (dispatch) => ({
  
})

export default withRouter(connect(mSTP, mDTP)(UserReservation))