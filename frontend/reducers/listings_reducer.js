import { 
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
  REMOVE_LISTING,
} from "../actions/listing_actions";

export default (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;

    case RECEIVE_LISTING:
      nextState[action.listing.id] = action.listing
      return nextState

    case REMOVE_LISTING:
      delete nextState[action.listingId]
      return nextState

    default:
      return state
  }
}