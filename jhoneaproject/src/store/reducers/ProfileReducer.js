import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility'
const  initialState={
  loading:false,
  error:'',
  updatestatus:false
}
const updateStart=(state,action)=>{
    return updateObject({...state,loading:true})
}
const updatefail=(state,action)=>{
    return updateObject({...state,loading:false,error:action.error})
}
const updateSuccess=(state,action)=>{
    return updateObject({...state,loading:false,updatestatus:action.updatestatus})
}
const profileUpdate=(state=initialState,action)=>
{
switch(action.type)
{
    case actionTypes.UPDATE_PROFILE_START:return updateStart(state,action);
    case actionTypes.UPDATE_PROFILE_FAIL:return updatefail(state,action);
    case actionTypes.UPDATE_PROFILE_SUCCESS:return updateSuccess(state,action);
    default:return state;
}
}
export default profileUpdate;