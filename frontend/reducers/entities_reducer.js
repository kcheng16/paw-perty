import { combineReducers } from "redux";
import listingsReducer from "./listings_reducer";
import usersReducer from "./users_reducer";

export default combineReducers({
  users: usersReducer,
  listings: listingsReducer,
});

