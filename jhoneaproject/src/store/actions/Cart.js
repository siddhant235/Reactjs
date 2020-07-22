import * as actiontypes from './actionTypes'

export const allproducts=(products)=>{
    return{
 type:actiontypes.ALL_PRODUCTS,
 products:products
}
}


export const additems=(itemDetails)=>{
    return{
        type:actiontypes.ADD_ITEM,
        itemDetails:itemDetails
    }
}
export const removeitems=(itemID)=>{
    return{
        type:actiontypes.REMOVE_ITEM,
        itemID:itemID
    }

}
export const cart=(products)=>{
    return dispatch=>{
       
        dispatch(allproducts(products))
       
       
            console.log(products)
        
        
        
        
    }
}