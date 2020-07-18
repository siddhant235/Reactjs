import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState={
    homeDetails:[],
    countryDetails:[],
    stateDetails:[],
    cityDetails:[],
    homeloading:true
}

const gethomeDetailStart = (state, action) => {
    return updateObject(state, { homeloading: true });
  };
  const gethomeDetailsFail = (state, action) => {
    return updateObject(state, { homeloading: false });
  };
  const gethomeDetailsSuccess = (state, action) => {
    return updateObject(state, {
      homeDetails: action.homeDetails,
      homeloading: false,
    });
  };
  
 
  const getcountryDetailsSuccess = (state, action) => {
    return updateObject(state, {
      countryDetails: action.countryDetails,
  
    });
  };
  const getstateDetailsSuccess = (state, action) => {
    return updateObject(state, {
      stateDetails: action.stateDetails,
  
    });
  };
  const getcityDetailsSuccess = (state, action) => {
    return updateObject(state, {
      cityDetails: action.cityDetails,
  
    });
  };
  const homeReducer=(state=initialState,action)=>{
     switch(action.type){
         case actionTypes.GETHOMEDETAILS_START:return gethomeDetailStart(state,action);
         case actionTypes.GETHOMEDETAILS_SUCCESS:return gethomeDetailsSuccess(state,action);
         case actionTypes.GETHOMEDETAILS_FAILURE:return gethomeDetailsFail(state,action);
         case actionTypes.GETCOUNTRY_DETIALS:return getcountryDetailsSuccess(state,action);
         case actionTypes.GETSTATE_DETAILS:return getstateDetailsSuccess(state,action);
         case actionTypes.GETCITY_DETAILS:return getcityDetailsSuccess(state,action);


         default:return state;
     }
  }
  export default homeReducer;