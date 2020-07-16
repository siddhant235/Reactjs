import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    productDetails: [],
    similarProducts:[],
    productloading: false,
   
  };
  const getProductDetailStart = (state, action) => {
    return updateObject(state, { productloading: true });
  };
  const getProductDetailsFail = (state, action) => {
    return updateObject(state, { productloading: false });
  };
  const getProductDetailsSuccess = (state, action) => {
    return updateObject(state, {
      productDetails: action.productDetails,
      productloading: false,
    });
  };

  const getSimilarProductStart = (state, action) => {
    return updateObject(state, { productloading: true });
  };
  const getSimilarProductFail = (state, action) => {
    return updateObject(state, { productloading: false });
  };
  const getSimilarProductSuccess = (state, action) => {
    return updateObject(state, {
      similarProducts: action.similarProducts,
      productloading: false,
    });
  };
  const productDetailreducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETPRODUCTDETAILS_START:return getProductDetailStart(state, action);
          case actionTypes.GETPRODUCTDETAILS_SUCCESS:return getProductDetailsSuccess(state, action);
          case actionTypes.GETPRODUCTDETAILS_FAILURE:return getProductDetailsFail(state, action);

          case actionTypes.GETSIMILARPROD_START:return getSimilarProductStart(state,action);
          case actionTypes.GETSIMILARPROD_SUCCESS:return getSimilarProductSuccess(state, action);
          case actionTypes.GETSIMILARPROD_FAILURE:return getSimilarProductFail(state, action);
           default:return state;
    }
    
}
export default productDetailreducer;