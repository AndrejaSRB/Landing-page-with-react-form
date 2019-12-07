import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getUserId = () => {
  return dispatch => {
    axios
      .get("https://ipapi.co/json/", {})
      .then(response => dispatch(saveUserId(response.data)))
      .catch(error => console.log(error));
  };
};

export const saveUserId = payload => ({
  type: actionTypes.SAVE_USER_IP,
  payload
});
