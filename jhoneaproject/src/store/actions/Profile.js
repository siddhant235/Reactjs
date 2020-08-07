import * as actionTypes from "./actionTypes";
export const updatestart = () => {
  return {
    type: actionTypes.UPDATE_PROFILE_START,
  };
};
export const updatefail = () => {
  return {
    type: actionTypes.UPDATE_PROFILE_FAIL,
  };
};
export const updatesuccess = () => {
  return {
    type: actionTypes.UPDATE_PROFILE_SUCCESS,
  };
};

export const profielupdate = (userprofile) => {
  return (dispatch) => {
    dispatch(updatestart());
    var URL =
      "http://13.235.251.42/grocery/backend/web/index.php/v1/users/user-update-profile";

    fetch(URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
      }),
      body:
        "json=" +
        JSON.stringify(userprofile),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem('userData',JSON.stringify(res[0].data[0]))
        dispatch(updatesuccess());
      })
      .catch((err) => {
        dispatch(updatefail(err));
      });
  };
};
