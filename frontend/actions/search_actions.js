import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";

const receiveSearchResults = ({ listing }) => {
  console.log("search action(receive):",listing);
  return {
    type: RECEIVE_SEARCH_RESULTS,
    listing,
  };
};

export const searchListings = string => dispatch => (
  SearchApiUtil.searchListings(string)
    .then(listing => dispatch(receiveSearchResults(listing)))
)