import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

export default (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.user.id] = action.user
      return nextState
      // Object.assign({}, state, { [action.user.id]: action.user })

    default:
      return state;
  }
}