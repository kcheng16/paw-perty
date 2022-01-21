import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchUser } from "../../actions/user_actions";
import { updateReservation, deleteReservation, requestReservation } from "../../actions/reservation_actions";
import ReservationShowComponent from "./reservation_show_component"

const mSTP = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id]
  return {
    currentUser,
    reservations: currentUser.reservations ? Object.values(Object.values(currentUser.reservations)) : ""
}}

const mDTP = (dispatch) => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateReservation: reservation => dispatch(updateReservation(reservation)),
  deleteReservation: reservationId => dispatch(deleteReservation(reservationId)),
  requestReservation: reservationId => (dispatch(requestReservation(reservationId)))

})

export default withRouter(connect(mSTP, mDTP)(ReservationShowComponent))