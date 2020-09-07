import { FETCH_LISTINGS_SUCCESS, CREATE_LISTING_SUCCESS } from "./actions";
// import { LISTING_UPDATED } from "../listingDetails/actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTINGS_SUCCESS:
      return [...state, ...action.payload];
    // case LISTING_UPDATED: {
    //   return state.map(listing => {
    //     if (listing.id !== action.payload.id) {
    //       return listing;
    //     }

    //     return action.payload;
    //   });
    // }
    case CREATE_LISTING_SUCCESS: {
      return [action.payload, ...state]
    }
    default:
      return state;
  }
};
