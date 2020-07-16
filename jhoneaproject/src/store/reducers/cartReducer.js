import * as actiontypes from '../actions/actionTypes'
import {updateObject} from '../utility'

const initialState={
allproducts:[],
Order:[]
}

const allproductdetails=(state,action)=>{

    const id= updateObject(state,{allproducts:action.products});
    return updateObject(state,{
        allproducts:state.allproducts.concat(id)
    })
}

const cartreducer=(state=initialState,action)=>{
   switch(action.type){
       case actiontypes.ALL_PRODUCTS:return allproductdetails(state,action);
       default:return state;
   }
  
   
}
export default cartreducer