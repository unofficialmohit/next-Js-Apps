import {put} from "redux-saga/effects";
import { fetchList } from "../features/shoppingSlice";
function* productList(){
    let data=yield fetch('https://fakestoreapi.com/products')
    data=yield data.json();
    yield put(fetchList({productList:data}))
    //data inside fetchList will be send as payload , so can be accessed using action.payload.productList directly
}
export default productList;