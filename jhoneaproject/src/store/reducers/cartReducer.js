import * as actiontypes from '../actions/actionTypes'
import {updateObject} from '../utility'



const initialState={
allproducts:[],
Order:[],
total:0
}

// const allproductdetails=(state,action)=>{


//     return updateObject(state,{
//         allproducts:state.allproducts.concat(action.products),
//         total:action.total
//     })
   
// }
const additem=(state,action)=>{
let existing_item=state.allproducts.findIndex(item=>item.productID===action.itemDetails[0].productID)
console.log(existing_item)
if(existing_item>=0)
{ let updatedArr=[...state.allproducts]
    const totalquantity=+state.allproducts[existing_item].quantity+ +action.itemDetails[0].quantity;
    updatedArr[existing_item]={...updatedArr[existing_item],quantity:totalquantity}
   
    return updateObject(state,{
            allproducts:updatedArr})
    
}

else{
        return updateObject(state,{
            allproducts:state.allproducts.concat(action.itemDetails),
            total:action.total
        })
    }
}

const removeitem=(state,action)=>{
    let new_items=state.allproducts.filter(item=>action.itemID!==item.productID)
    console.log(new_items)
    return updateObject(state,{
        allproducts:new_items
       
    })
}

const cartreducer=(state=initialState,action)=>{
   switch(action.type){
       case actiontypes.ADD_ITEM:return additem(state,action);
       case actiontypes.REMOVE_ITEM:return removeitem(state,action);
       default:return state;
   }
  
   
}
export default cartreducer