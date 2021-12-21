import * as reservationApiUtil from '../util/reservation_util'

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS'
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION'
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION'
//===========================================================
export const receiveReservations = (reservations) => ({
  type: RECEIVE_RESERVATIONS,
  reservations
})

export const receiveReservation = (reservation) => ({
  type: RECEIVE_RESERVATION,
  reservation
})

export const removeReservation = (reservationId) => ({
  type: REMOVE_RESERVATION,
  reservationId
})
//===========================================================

export const requestReservations = () => dispatch => (
  reservationApiUtil.fetchReservations()
    .then(reservations => dispatch(receiveReservations(reservations)))
)

export const requestReservation = (reservationId) => dispatch => (
  reservationApiUtil.fetchReservation(reservationId)
    .then(reservation => dispatch(receiveReservation(reservation)))
) 

export const createReservation = reservation => dispatch => (
  reservationApiUtil.createReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)))
)

export const deleteReservation = reservationId => dispatch => (
  reservationApiUtil.deleteReservation(reservationId)
    .then(() => dispatch(removeReservation(reservationId)))
)