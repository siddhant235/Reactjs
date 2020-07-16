import * as actionTypes from "./actionTypes";

export const getSearchdetailsSuccess = (searched) => {
  return {
    type: actionTypes.GETSEARCHDETAILS_SUCCESS,
    searched: searched,
  };
};
export const getsearchDetailsFail = (error) => {
  return {
    type: actionTypes.GETSEARCHDETAILS_FAILURE,
    error: error,
  };
};
export const getSearchDetailsStart = () => {
  return {
    type: actionTypes.GETSEARCHDETAILS_START,
  };
};
export const getsearchdetails = () => {
  return (dispatch) => {
    dispatch(getSearchDetailsStart());

    var URL =
      "http://13.235.251.42/grocery/backend/web/index.php/v1/product/global-search";

    fetch(URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
      }),
      body:
        "json=" +
        JSON.stringify([
          {
            loginuserID: "1",
            userType: "Retailer",
            businesscatIDs: "0",
            categoryIDs: "0",
            languageID: "1",
            searchkeyword: "a",
            apiType: "Android",
            apiVersion: "1.0",
          },
        ]),
    })
      .then((response) => response.json())
      .then((res) => {
        dispatch(getSearchdetailsSuccess(res[0].data));
      })
      .catch((err) => {
        dispatch(getsearchDetailsFail(err));
      });
  };
};
