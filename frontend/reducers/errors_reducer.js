import { combineReducers } from "redux";
import listingsErrorsReducer from "./listings_errors_reducer";

import sessionErrorsReducer from "./session_errors_reducer";

export default combineReducers({
  session: sessionErrorsReducer,
  listing: listingsErrorsReducer
});

