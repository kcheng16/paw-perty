import {
  RECEIVE_ALL_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from "../actions/review_actions"

export default (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)

  switch (action.type) {
    case  RECEIVE_ALL_REVIEWS:
      return action.reviews;

    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review;
      return newState

    case REMOVE_REVIEW:
      delete newState[action.reviewId]
      return nextState

    default:
      return state
  }
  
}