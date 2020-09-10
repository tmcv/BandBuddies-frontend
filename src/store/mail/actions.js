import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";
import { selectToken} from "../user/selectors";

export const CREATE_LISTING_SUCCESS = "CREATE_LISTING_SUCCESS";

export const sendMail = (to, userEmail, subject, text) => {
  return async (dispatch, getState) => {
    const state = getState();
    const response = await axios.post(`${apiUrl}/mail`, {
      to,
      userEmail,
      subject,
      text
    }, {
      headers: { Authorization: `Bearer ${selectToken(state)}` }
    })

    console.log("RESPONSE:", response)
    // dispatch({type: CREATE_MAIL_SUCCESS, payload: response.data.newListing});
  };
};
