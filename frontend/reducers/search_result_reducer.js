import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

const searchResultsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [];

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      newState = action.users;
      return newState;
    default:
      return [];
  }
};

export default searchResultsReducer;