import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import listings from "./listings/reducer";
import listingDetails from "./listingDetails/reducer";
import styles from "./styles/reducer";
import instruments from "./instruments/reducer";

export default combineReducers({
  appState,
  user,
  listings,
  listingDetails,
  styles,
  instruments
});
