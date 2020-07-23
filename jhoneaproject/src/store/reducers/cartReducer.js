import * as actiontypes from '../actions/actionTypes'
import {updateObject} from '../utility'


const initialState={
allproducts:[],
Order:[]
}

const allproductdetails=(state,action)=>{

 
    return updateObject(state,{
        allproducts:state.allproducts.concat(action.products)
       
    })
    
}
const removeitem=(state,action)=>{
    let new_items=state.allproducts.filter(item=>action.itemID===item.productID)
    console.log(new_items)
    return updateObject(state,{
        allproducts:new_items
       
    })
}

const cartreducer=(state=initialState,action)=>{
   switch(action.type){
       case actiontypes.ALL_PRODUCTS:return allproductdetails(state,action);
       case actiontypes.REMOVE_ITEM:return removeitem(state,action);
       default:return state;
   }
  
   
}
export default cartreducer