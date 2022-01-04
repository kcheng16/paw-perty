import { connect } from "react-redux";
import { searchUsers, clearSearch } from "../../actions/search_actions";
import SearchBar from "./search_bar";

const mSTP = (state) => {
  return {
    searchResults: state.entities.searchResults
  };
};

const mDTP = (dispatch) => {
  return {
    searchUsers: (string) => dispatch(searchUsers(string)),
    clearSearch: () => dispatch(clearSearch()),
  };
};

export default connect(mSTP, mDTP)(SearchBar);