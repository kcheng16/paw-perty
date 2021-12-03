import {
  RECEIVE_ALL_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from "../actions/review_actions"
import { RECEIVE_LISTING } from "../actions/listing_actions"

export default (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)

  switch (action.type) {
    case  RECEIVE_ALL_REVIEWS:
      return action.reviews;

    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review
      return newState;

    case RECEIVE_LISTING:
      if (action.payload.reviews){
        return action.payload.reviews
      } else {
        return {}
      }

    case REMOVE_REVIEW:
      delete newState[action.reviewId]
      return newState

    default:
      return state
  }
  
}