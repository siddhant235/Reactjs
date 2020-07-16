import * as actionTypes from "./actionTypes";

export const getproductdetailsSuccess = (productDetails) => {
  return {
    type: actionTypes.GETPRODUCTDETAILS_SUCCESS,
    productDetails: productDetails,
  };
};
export const getProductDetailsFail = (error) => {
  return {
    type: actionTypes.GETPRODUCTDETAILS_FAILURE,
    error: error,
  };
};
export const getProductDetailsStart = () => {
  return {
    type: actionTypes.GETPRODUCTDETAILS_START,
  };
};

export const getsimilardetailsSuccess = (similarProducts) => {
  return {
    type: actionTypes.GETSIMILARPROD_SUCCESS,
    similarProducts: similarProducts,
  };
};
export const getsimilarDetailsFail = (error) => {
  return {
    type: actionTypes.GETSIMILARPROD_FAILURE,
    error: error,
  };
};
export const getsimilarDetailsStart = () => {
  return {
    type: actionTypes.GETSIMILARPROD_START,
  };
};
export const getproductdetails = () => {
  return (dispatch) => {
    dispatch(getProductDetailsStart());

    var URL =
      "http://13.235.251.42/grocery/backend/web/index.php/v1/product/get-product-list";

    fetch(URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
      }),
      body:
        "json=" +
        JSON.stringify([
          {
            loginuserID: "13",
            languageID: "1",
            productID: "",
            subcatID: "0",
            productImage: "",
            categoryID: "0",
            colorID: "",
            materialID: "",
            page: 0,
            pagesize: "10",
            apiType: "Android",
            apiVersion: "1.0",
            size: "2",
          },
        ]),
    })
      .then((response) => response.json())
      .then((res) => {
        dispatch(getproductdetailsSuccess(res[0].data));
      })
      .catch((err) => {
        dispatch(getProductDetailsFail(err));
      });
  };
};

export const getSimilarProductdetails = () => {
  return (dispatch) => {
    dispatch(getsimilarDetailsStart());

    var URL =
      "http://13.235.251.42/grocery/backend/web/index.php/v1/product/get-similar-product-list";

    fetch(URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
      }),
      body:
        "json=" +
        JSON.stringify([
          {
            loginuserID: "13",
            languageID: "1",
            productID: "2",
            subcatID: "0",
            categoryID: "0",
            colorID: "",
            materialID: "",
            page: 0,
            pagesize: "10",
            apiType: "Android",
            apiVersion: "1.0",
          },
        ]),
    })
      .then((response) => response.json())
      .then((res) => {
        dispatch(getsimilardetailsSuccess(res[0].data));
      })
    
      .catch((err) => {
        dispatch(getsimilarDetailsFail(err));
      });
  };
};