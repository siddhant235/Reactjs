import * as actionTypes from "./actionTypes";

export const gethomedetailsSuccess = (homeDetails) => {
  return {
    type: actionTypes.GETHOMEDETAILS_SUCCESS,
    homeDetails: homeDetails,
  };
};
export const gethomeDetailsFail = (error) => {
  return {
    type: actionTypes.GETHOMEDETAILS_FAILURE,
    error: error,
  };
};
export const gethomeDetailsStart = () => {
  return {
    type: actionTypes.GETHOMEDETAILS_START,
  };
};



export const gethomedetails = () => {
  return (dispatch) => {
    dispatch(gethomeDetailsStart());

    var URL =
      "http://13.235.251.42/grocery/backend/web/index.php/v1/users/user-home";

    fetch(URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
      }),
      body:
        "json=" +
        JSON.stringify([
          {
            loginuserID: "18",
            userType: "Retailer",
            languageID: "1",
            page: "0",
            pagesize: "10",
            apiType: "Android",
            apiVersion: "1.0",
          },
        ]),
    })
      .then((response) => response.json())
      .then((res) => {
        dispatch(gethomedetailsSuccess(res[0]));
      })
      .catch((err) => {
        dispatch(gethomeDetailsFail(err));
      });
  };
};

