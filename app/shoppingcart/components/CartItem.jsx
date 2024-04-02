import React from 'react'
import DeleteButton from "@mui/icons-material/Delete"
import { Avatar, Button } from '@mui/material'
import { useDispatch} from 'react-redux'
import {removeFromCart} from "../features/shoppingSlice"
function CartItem(props) {
    const dispatch=useDispatch();
    function handleDelete(){
       dispatch(removeFromCart(props.itemData.cartId))
    }
  return (
    <div>
        <div className='cart-item-container'>
            <div className='imgdiv'><img src={props.itemData.image} style={{ width: '80px',height:'80px', maxWidth: '150px',border:'2px solid black' }}/></div>
            <div className='cart-item-title'>{props.itemData.title}</div>
            <div className='cart-item-price' style={{fontWeight:"900", color:"blue"}}>{props.itemData.price}$</div>
           <div><Button bgcolor='red' onClick={handleDelete}><DeleteButton/></Button></div>
        </div>

    </div>
  )
}
export default CartItem