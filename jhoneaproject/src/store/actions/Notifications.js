import * as actionTypes from './actionTypes'
export const getnotifications=(notificationdata)=>
{return{
  type:actionTypes.GET_NOTIFICATIONS,
  notificationdata:notificationdata
}
}
export const getNotifcations=(notificationdata)=>{
    return dispatch=>{

                
        var URL =
          "http://13.235.251.42/grocery/backend/web/index.php/v1/notification/get-notification-list";
    
        fetch(URL, {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
          }),
          body:
            "json=" +
            JSON.stringify(notificationdata),
        })
          .then((response) => response.json())
          .then((res) => {
              console.log(res)
           dispatch(getnotifications(res[0].data))
              
          })
          .catch((err) => {
            console.log(err)
          });
          
      }
}

export const removeNotifications=(removeNotification)=>{
    return dispatch=>{

   
        var URL =
          "http://13.235.251.42/grocery/backend/web/index.php/v1/userfavouriteproduct/remove-product-favourite";
    
        fetch(URL, {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
          }),
          body:
            "json=" +
            JSON.stringify(removeNotification),
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
