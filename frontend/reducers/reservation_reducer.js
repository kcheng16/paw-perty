import {
  RECEIVE_RESERVATIONS,
  RECEIVE_RESERVATION,
  REMOVE_RESERVATION
} from "../actions/reservation_actions"

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

export default (state={}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return action.reservations;

    case RECEIVE_RESERVATION:
      newState[action.reservation.id] = action.reservation
      return newState

    case REMOVE_RESERVATION:
      delete newState[action.reservationId]
      return newState

    case RECEIVE_CURRENT_USER:
      console.log("RESERVATION:", action.user.reservations)
      newState = action.user.reservations
      return newState
      
    default:
      return state
  }
}