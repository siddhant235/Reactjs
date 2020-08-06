import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  userData: [],
  Loginstatus: false,
  Loginmessage: "",
  Signupmessage: "",
  Signupstatus: false,
  otpstatus: false,
  otpmessage: "",
};
const addUsers = (state, action) => {
  return updateObject({
    ...state,
    userData: state.userData.concat(action.userData),
    Signupmessage: action.Signupmessage,
    Signupstatus: action.Signupstatus,
  });
};
const loginusers = (state, action) => {
  return updateObject({
    ...state,
    Loginstatus: action.Loginstatus,
    Loginmessage: action.Loginmessage,
  });
};
const otpVerify=(state,action)=>{
  return updateObject({...state,
  otpstatus:action.status
  })
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SIGNUP:
      return addUsers(state, action);
    case actionTypes.AUTH_SIGNIN:
      return loginusers(state, action);
   case actionTypes.AUTH_OTP:
     return otpVerify(state,action)

    default:
      return state;
  }
};
export default authReducer;
