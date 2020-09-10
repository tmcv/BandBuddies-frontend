import { LISTING_DETAILS_FETCHED } from "./actions";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LISTING_DETAILS_FETCHED:
      console.log("payload", payload)
      return { ...state, ...payload };
    default:
      return state;
  }
};
