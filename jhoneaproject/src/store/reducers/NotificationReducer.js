import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility'
const  initialState={
notificationdata:[]
}
const getNotificationdata=(state,action)=>{
    return updateObject({...state,notificationdata:action.notificationdata})
}

const notify=(state=initialState,action)=>
{
switch(action.type)
{
    case actionTypes.GET_NOTIFICATIONS:return getNotificationdata(state,action);
    
    default:return state;
}
}
export default notify;