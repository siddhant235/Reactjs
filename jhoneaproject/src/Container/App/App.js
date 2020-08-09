import React, { Component,Suspense} from "react";
import {Route,Switch} from "react-router-dom";
const Checkout=React.lazy(()=>import('../../Components/Checkout/Checkout'))
const Layout=React.lazy(()=>import('../../Components/Layout/Layout'))
const Home=React.lazy(()=>import('../Home/Home'))
const ProductDetail=React.lazy(()=>import('../ProductDetail/ProductDetail'))
const CategoryList=React.lazy(()=>import('../CategoryList/CategoryList'))
const Login=React.lazy(()=>import('../../Components/Authentication/Login/Login'))
const Signup=React.lazy(()=>import('../../Components/Authentication/SignUp/Signup'))
const MyCart=React.lazy(()=>import('../../Components/MyCart/MyCart'))
const MyProfile =React.lazy(()=>import('../../Components/Profile/Profile'))
const Wishlist=React.lazy(()=>import('../../Components/Wishlist/Wishlist'))
const Notification=React.lazy(()=>import('../../Components/Notifications/Notification'))
class App extends Component {
  
  
  render() {
   
    return (
      <div>
        <Suspense fallback={<div>LOADING......</div>}>
       <Layout/>
            <Switch>
          <Route path="/" exact component={Home}/>
        
          <Route path="/product-detail/:id/" exact component={ProductDetail}/>
          <Route path="/category-list/" exact component={CategoryList}/>
          <Route path="/login/" exact component={Login}/>
          <Route path="/Signup/" exact component={Signup}/>
          <Route path="/checkout/" exact component={Checkout}/>
          <Route path="/myprofile/" exact component={MyProfile}/>
          <Route path="/wishlist/" exact component={Wishlist}/>
          <Route path="/notifications/" exact component={Notification}/>
          <Route Path="/user/mycart/" exact component={MyCart}/>
         
          
      </Switch>
      </Suspense>
    
      </div>
    );
  }
}

export default App;
