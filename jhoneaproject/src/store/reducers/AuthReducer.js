import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility'
const initialState={
    userData:[],
    Loginstatus:false,
    Loginmessage:'',
    Signupmessage:'',
    Signupstatus:false
}
const addUsers=(state,action)=>{
    let user=state.userData.findIndex(item=>item.userID===action.userData[0].userID)
    console.log(state.userData)
    if(user>-1)
    {
        return updateObject({
            ...state,
            Signupmessage:action.Signupmessage,
        Signupstatus:action.Signupstatus
        })
    }
    else
    {
    return updateObject({...state,
         userData:state.userData.concat(action.userData),
        Signupmessage:action.Signupmessage,
        Signupstatus:action.Signupstatus
    })
}
}
const loginusers=(state,action)=>{
    return updateObject({
        ...state,
        Loginstatus:action.Loginstatus,
        Loginmessage:action.Loginmessage
    })

}
const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.AUTH_SIGNUP:return addUsers(state,action)
        case actionTypes.AUTH_SIGNIN:return loginusers(state,action)
            
            
    
        default:return state    }
}
export default authReducer