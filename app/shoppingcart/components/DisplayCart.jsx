import React from 'react'
import AddMoreToCart from "@mui/icons-material/AddShoppingCart"
import CheckoutCart from "@mui/icons-material/ShoppingCart"
import {useDispatch,useSelector} from "react-redux";
import CartItem from './CartItem';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { Dialog,DialogContentText,DialogTitle,DialogActions,Button } from '@mui/material';
import { emptyCart } from '../features/shoppingSlice';
function DisplayCart({displayCart,setDisplayCart}) {
  const cartData=useSelector(state=>state.cart);
  console.log(cartData);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch=useDispatch();
  function handlePay(){
    setDisplayCart(false);
    enqueueSnackbar('Items Purchased Succcesfully',{ variant: 'success' });
    dispatch(emptyCart());
  }
  return (
  
      <div>
        
      <Dialog
      open={displayCart}
      sx={{
        backdropFilter: "blur(5px)"
      }}>
        <DialogTitle>Cart Checkout</DialogTitle>
        <DialogContentText>
        <div className='cart-items'>
        {cartData.length>0?cartData.map((data,index)=>{
          return <CartItem itemData={data} key={index}/>
        }):"YOUR CART IS EMPTY,ADD ITEMS TO CART "}
        </div>
        </DialogContentText>
        <DialogActions>
          <Button onClick={handlePay} startIcon={<CheckoutCart/>} disabled={cartData.length==0}>Pay</Button>
          <Button onClick={()=>setDisplayCart(false)} startIcon={<AddMoreToCart/>} >Add More Items</Button>
        </DialogActions>
    </Dialog>
    </div>
  )
}

export default DisplayCart