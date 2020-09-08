import { apiUrl} from "../../config/constants";
import axios from "axios";

export const FETCH_STYLES_SUCCESS = "FETCH_STYLES_SUCCESS";

export const fetchStylesSuccess = styles => ({
  type: FETCH_STYLES_SUCCESS,
  payload: styles
});

export const fetchStyles = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `${apiUrl}/styles`
    );

    dispatch(fetchStylesSuccess(response.data.styles));
  };
};
