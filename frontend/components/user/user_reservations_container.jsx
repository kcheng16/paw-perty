import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchUser } from "../../actions/user_actions";
import { updateReservation, deleteReservation, requestReservation } from "../../actions/reservation_actions";
import UserReservation from "./user_reservations_component";

const mSTP = (state, ownProps) => {
  return {
  currentUser: state.entities.users[state.session.id],
  reservations: Object.values(state.entities.reservations),
}}

const mDTP = (dispatch) => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateReservation: reservation => dispatch(updateReservation(reservation)),
  deleteReservation: reservationId => dispatch(deleteReservation(reservationId)),
  requestReservation: reservationId => (dispatch(requestReservation(reservationId)))

})

export default withRouter(connect(mSTP, mDTP)(UserReservation))