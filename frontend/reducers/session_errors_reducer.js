import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

export default (state={},action) => {
  Object.freeze(state);

  let nextState= Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = []
      return nextState
    case RECEIVE_ERRORS:
      nextState = action.errors.responseJSON;
      return nextState
    default:
      return state;
  }
}