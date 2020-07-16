import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  searched: [],

  searchloading: false,
};

const getsearchDetailStart = (state, action) => {
  return updateObject(state, { searchloading: true });
};
const getsearchDetailsFail = (state, action) => {
  return updateObject(state, { searchloading: false });
};
const getsearchDetailsSuccess = (state, action) => {
  return updateObject(state, {
    searched: action.searched,
    searchloading: false,
  });
};
const serachReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETSEARCHDETAILS_START:
      return getsearchDetailStart(state, action);
    case actionTypes.GETSEARCHDETAILS_SUCCESS:
      return getsearchDetailsSuccess(state, action);
    case actionTypes.GETSEARCHDETAILS_FAILURE:
      return getsearchDetailsFail(state, action);
    default:
      return state;
  }
};
export default serachReducer;
