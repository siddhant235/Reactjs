import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThroughProvider } from "react-through";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import ProductDetailReducer from "./store/reducers/ProductDetailReducer";
import SearchReducer from "./store/reducers/SearchReducer";
import HomeReducer from './store/reducers/HomeDetailReducer';
import CartReducer from './store/reducers/cartReducer'
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./Container/App/App";
import registerServiceWorker from "./registerServiceWorker";
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const RootReducers = combineReducers({
  product: ProductDetailReducer,
  search:SearchReducer,
  home:HomeReducer,
  cart:CartReducer
});
const persistConfig={
  key:'cart',
  storage:storage,
  whitelist:['cart']
}
const pReducer=persistReducer(persistConfig,RootReducers)
const store = createStore(
pReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const persistor=persistStore(store);
export{persistor,store}
const theApp = (
  <Provider store={store}>
    <BrowserRouter forceRefresh={true}>
      <ThroughProvider>
        <App />
      </ThroughProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(theApp, document.getElementById("root"));
registerServiceWorker();
