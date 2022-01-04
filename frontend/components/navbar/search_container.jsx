import { connect } from "react-redux";
import { searchListings, clearSearch } from "../../actions/search_actions";
import SearchComponent from "./search_component";

const mSTP = (state) => {
  return {
    searchResults: state.entities.searchResults
  };
};

const mDTP = (dispatch) => {
  return {
    searchListings: (string) => dispatch(searchListings(string)),
    clearSearch: () => dispatch(clearSearch()),
  };
};

export default connect(mSTP, mDTP)(SearchComponent);