import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchUser } from "../../actions/user_actions"
import UserReservation from "./user_reservations_component";

const mSTP = (state, ownProps) => {
  console.log("USER:", state.entities.users[state.session.id])
  // console.log(Object.values(state.entities.users[state.session.id].reservations))
  return {
  currentUser: state.entities.users[state.session.id],
  reservations: Object.values(state.entities.users[state.session.id].reservations)
}}

const mDTP = (dispatch) => ({
  fetchUser: userId => dispatch(fetchUser(userId))
})

export default withRouter(connect(mSTP, mDTP)(UserReservation))