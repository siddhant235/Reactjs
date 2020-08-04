import * as actionTypes from "./actionTypes";
export const Usersignup = (userData,Signupmessage,Signupstatus) => {
  return {
    type: actionTypes.AUTH_SIGNUP,
    userData:userData,
    Signupmessage:Signupmessage,
    Signupstatus:Signupstatus
  };
};
export const UserLogin=(Loginmessage,Loginstatus)=>{
  return{
    type:actionTypes.AUTH_SIGNIN,
    Loginmessage:Loginmessage,
    Loginstatus:Loginstatus
  }

}
export const Logout=()=>{
  return{
    type:actionTypes.AUTH_LOGOUT,
  }
}

export const signup = (UserDetails) => {
  return (dispatch) => {
    var URL =
      "http://13.235.251.42/grocery/backend/web/index.php/v1/users/user-signup";

    fetch(URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
      }),
      body:
        "json=" +
        JSON.stringify(UserDetails),
    })
      .then((response) => response.json())
      .then((res) => {
        dispatch(Usersignup(res[0].data,res[0].message,res[0].status));
        console.log(res[0].message);
      })

      .catch((err) => {
        console.log(err);
      });
  };
};

export const login=(userData)=>{
  return dispatch=>{
    var URL =
    "http://13.235.251.42/grocery/backend/web/index.php/v1/users/user-login";
    fetch(URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
      }),
      body:
        "json=" +
        JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((res) => {
        localStorage.setItem('userID',res[0].data[0].userID)
        dispatch(UserLogin(res[0].message,res[0].status));
       
      })

      .catch((err) => {
        console.log(err);
      });
  }
}
export const logout=()=>{
  return dispatch=>{
    localStorage.removeItem('userID')
    dispatch(Logout());
  }
}