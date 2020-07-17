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

export const getcountrydetailsSuccess = (countryDetails) => {
  return {
    type: actionTypes.GETCOUNTRY_DETIALS,
    countryDetails: countryDetails,
  };
};
export const getstatedetailsSuccess = (stateDetails) => {
  return {
    type: actionTypes.GETSTATE_DETAILS,
    stateDetails: stateDetails,
  };
};
export const getcitydetailsSuccess = (cityDetails) => {
  return {
    type: actionTypes.GETCITY_DETAILS,
    cityDetails: cityDetails,
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
export const getcountrydetails = () => {
  return (dispatch) => {
    var URL =
      "http://13.235.251.42/grocery/backend/web/index.php/v1/country/get-country-list";

    fetch(URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
      }),
      body:
        "json=" +
        JSON.stringify([
          {
            loginuserID: "0",
            apiType: "Android",
            apiVersion: "1.0",
          },
        ]),
    })
      .then((response) => response.json())
      .then((res) => {
        dispatch(getcountrydetailsSuccess(res[0].data));
        console.log(res[0].data);
      })
     
  };
};
export const getstatedetails = () => {
  return (dispatch) => {
    var URL =
      "http://13.235.251.42/grocery/backend/web/index.php/v1/state/get-state-list";

    fetch(URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
      }),
      body:
        "json=" +
        JSON.stringify([
          {
            loginuserID: "0",
            apiType: "Android",
            apiVersion: "1.0",
          },
        ]),
    })
      .then((response) => response.json())
      .then((res) => {
        dispatch(getstatedetailsSuccess(res[0].data));
        console.log(res[0].data);
      })
     
  };
};
export const getcitydetails = () => {
  return (dispatch) => {
    var URL =
      "http://13.235.251.42/grocery/backend/web/index.php/v1/city/get-city-list";

    fetch(URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
      }),
      body:
        "json=" +
        JSON.stringify([
          {
            loginuserID: "0",
            apiType: "Android",
            apiVersion: "1.0",
          },
        ]),
    })
      .then((response) => response.json())
      .then((res) => {
        dispatch(getcitydetailsSuccess(res[0].data));
        console.log(res[0].data);
      })
     
  };
};