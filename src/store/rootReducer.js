import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import listings from "./listings/reducer";

export default combineReducers({
  appState,
  user,
  listings
});
