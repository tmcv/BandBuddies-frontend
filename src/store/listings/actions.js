import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";
import { selectToken} from "../user/selectors";

export const FETCH_LISTINGS_SUCCESS = "FETCH_LISTINGS_SUCCESS";

export const CREATE_LISTING_SUCCESS = "CREATE_LISTING_SUCCESS";

export const fetchListingsSuccess = listings => ({
  type: FETCH_LISTINGS_SUCCESS,
  payload: listings
});

export const fetchListings = () => {
  return async (dispatch, getState) => {
    const listingsCount = getState().listings.length;
    const response = await axios.get(
      `${apiUrl}/listings?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${listingsCount}`
    );

    dispatch(fetchListingsSuccess(response.data.listings.rows));
  };
};

export const createListing = (title, minimumLevel, isBand, description, style, instrument) => {
  return async (dispatch, getState) => {
    const state = getState();
    const response = await axios.post(`${apiUrl}/listings`, {
      title,
      minimumLevel,
      isBand,
      description,
      style,
      instrument: instrument ? instrument : null
    }, {
      headers: { Authorization: `Bearer ${selectToken(state)}` }
    })

    console.log("RESPONSE:", response)
    dispatch({type: CREATE_LISTING_SUCCESS, payload: response.data.newListing});
  };
};
