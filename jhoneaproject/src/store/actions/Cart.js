import * as actiontypes from './actionTypes'

export const allproducts=(products,itemID,total)=>{
    return{
 type:actiontypes.ALL_PRODUCTS,
 products:products,
 total:total,
 itemID:itemID
}
}


export const additems=(itemDetails,itemID)=>{
    return{
        type:actiontypes.ADD_ITEM,
        itemDetails:itemDetails,
        itemID:itemID
    }
}
export const removeitems=(itemID)=>{
    return{
        type:actiontypes.REMOVE_ITEM,
        itemID:itemID
    }

}
export const cart=(itemDetails,itemID,total)=>{
    return dispatch=>{
       
        dispatch(additems(itemDetails,itemID,total))
        dispatch(removeitems(itemID))
       
            console.log(itemDetails)
        
        
        
        
    }
}