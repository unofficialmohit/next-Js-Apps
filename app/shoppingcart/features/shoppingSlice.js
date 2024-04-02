import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    cart:[
    //     {
    //     id:1,
    //     title:"",
    //     price:100,
    //     description:"",
    //     category:"",
    //     image:""
    // }
]
    ,
    productList:[
        // {
        //     id:1,
        //     title:"",
        //     price:100,
        //     description:"",
        //     category:"",
        //     image:""
        // }
    ]
}
export const shoppingSlice=createSlice({
    name:"shoppingsite",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload);
        },
        removeFromCart:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.cartId!=action.payload);
        },
        fetchList:(state,action)=>{
            state.productList= action.payload.productList;
        },
        emptyCart:(state,action)=>{
            state.cart=[];
        }
    }
})
export const {addToCart,removeFromCart,fetchList,emptyCart}=shoppingSlice.actions;
export default shoppingSlice.reducer;