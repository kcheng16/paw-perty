import { 
  RECEIVE_LISTING_ERRORS, 
  CLEAR_ERRORS,
  RECEIVE_LISTING
} from "../actions/listing_actions";

export default (state={},action) => {
  Object.freeze(state);
  let nextState= Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_LISTING:
      nextState = [];
      return nextState

    case RECEIVE_LISTING_ERRORS:
      nextState = action.errors.responseJSON;
      return nextState

    case CLEAR_ERRORS:
        return []
        
    default:
      return state;
  }
}