import { apiUrl} from "../../config/constants";
import axios from "axios";

export const FETCH_INSTRUMENTS_SUCCESS = "FETCH_INSTRUMENTS_SUCCESS";

export const fetchInstrumentsSuccess = instruments => ({
  type: FETCH_INSTRUMENTS_SUCCESS,
  payload: instruments
});

export const fetchInstruments = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `${apiUrl}/instruments`
    );

    dispatch(fetchInstrumentsSuccess(response.data.instruments));
  };
};
