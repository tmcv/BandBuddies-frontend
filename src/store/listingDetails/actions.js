import axios from "axios";
import { apiUrl } from "../../config/constants";

export const LISTING_DETAILS_FETCHED = "LISTING_DETAILS_FETCHED";

const listingDetailsFetched = listing => ({
  type: LISTING_DETAILS_FETCHED,
  payload: listing
});

export const fetchListingById = id => {
  console.log("fetching listing with id", id)
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/listings/${id}`);
    const data = response.data;
    console.log("data:", data.listingDetails)
    dispatch(listingDetailsFetched(data.listingDetails));
  };
};

