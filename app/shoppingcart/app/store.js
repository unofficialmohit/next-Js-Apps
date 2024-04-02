import {configureStore} from "@reduxjs/toolkit";
import productList from "../saga/productList";
import shoppingCartReducer from "../features/shoppingSlice"
import createSagaMiddleware from "redux-saga"
const sagaMiddleware=createSagaMiddleware();
export const store=configureStore(
    {
        reducer:shoppingCartReducer,
        middleware:()=>[sagaMiddleware]
    }
);
sagaMiddleware.run(productList); 
export default store;