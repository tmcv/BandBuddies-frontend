import { FETCH_STYLES_SUCCESS} from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STYLES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
