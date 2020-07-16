import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState={
    homeDetails:[],
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

  const homeReducer=(state=initialState,action)=>{
     switch(action.type){
         case actionTypes.GETHOMEDETAILS_START:return gethomeDetailStart(state,action);
         case actionTypes.GETHOMEDETAILS_SUCCESS:return gethomeDetailsSuccess(state,action);
         case actionTypes.GETHOMEDETAILS_FAILURE:return gethomeDetailsFail(state,action);
         default:return state;
     }
  }
  export default homeReducer;