// reducers.js

import { combineReducers } from "redux";
import contactReducer from "./contactReducer"; // Import your contact reducer

const rootReducer = combineReducers({
  contacts: contactReducer, // Add more reducers as needed
});

export default rootReducer;
