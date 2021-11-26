import { 
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
  REMOVE_LISTING,
} from "../actions/listing_actions";

import { RECEIVE_CURRENT_USER } from "../actions/user_actions";

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

    case RECEIVE_CURRENT_USER:
      let listings = Object.values(action.user.listings)
      listings.forEach(listing => nextState[listing.id] = listing)
      return nextState
      
    default:
      return state
  }
}