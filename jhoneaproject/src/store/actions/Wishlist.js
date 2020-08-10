import * as actionTypes from './actionTypes'
export const getfav=(data,favstatus)=>
{return{
  type:actionTypes.GET_FAVOURITE,
  data:data,
  favstatus:favstatus
}
}
export const addfavourite=(favouritedata)=>{
    return dispatch=>{

   
        var URL =
          "/web/index.php/v1/userfavouriteproduct/add-product-favourite";
    
        fetch(URL, {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
          }),
          body:
            "json=" +
            JSON.stringify(favouritedata),
        })
          .then((response) => response.json())
          .then((res) => {
            console.log(res);
              
          })
          .catch((err) => {
            console.log(err)
          });
          
      }
}

export const removefavourite=(removefavouritedata)=>{
    return dispatch=>{

   
        var URL =
          "/web/index.php/v1/userfavouriteproduct/remove-product-favourite";
    
        fetch(URL, {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
          }),
          body:
            "json=" +
            JSON.stringify(removefavouritedata),
        })
          .then((response) => response.json())
          .then((res) => {
            console.log(res);
              
          })
          .catch((err) => {
            console.log(err)
          });
          
      }
}
export const favouritelist=(getfavouritedata)=>{
    return dispatch=>{

   
        var URL =
          "/web/index.php/v1/userfavouriteproduct/product-favourite-list";
    
        fetch(URL, {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
          }),
          body:
            "json=" +
            JSON.stringify(getfavouritedata),
        })
          .then((response) => response.json())
          .then((res) => {
            console.log(res);
            dispatch(getfav(res[0].data,res[0].status))
              
          })
          .catch((err) => {
            console.log(err)
          });
          
      }
}