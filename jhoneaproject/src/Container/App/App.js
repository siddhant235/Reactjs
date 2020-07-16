import React, { Component,Suspense} from "react";
import {Route,Switch} from "react-router-dom";
const Layout=React.lazy(()=>import('../../Components/Layout/Layout'))
const Home=React.lazy(()=>import('../Home/Home'))
const ProductDetail=React.lazy(()=>import('../ProductDetail/ProductDetail'))
const CategoryList=React.lazy(()=>import('../CategoryList/CategoryList'))
const MyCart=React.lazy(()=>import('../../Components/MyCart/MyCart'))
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
          <Route Path="/user/mycart/" exact component={MyCart}/>
      </Switch>
      </Suspense>
    
      </div>
    );
  }
}

export default App;
