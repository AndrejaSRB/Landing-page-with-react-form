import * as actionTypes from "./actions/actionTypes";

const initialState = {
  userIpAdress: null,
  userZipCode: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_USER_IP:
      const code = action.payload.postal ? action.payload.postal : 19107;
      return {
        ...state,
        userZipCode: code,
        userIpAdress: action.payload.ip
      };
    default:
      return state;
  }
};

export default rootReducer;
