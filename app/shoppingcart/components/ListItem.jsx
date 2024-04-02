import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { addToCart } from '../features/shoppingSlice';
import { SnackbarProvider, useSnackbar } from 'notistack';

function ListItem(props) {
    const dispatch=useDispatch();
    const prevCartCount=useSelector(state=>state.cart.length);
    console.log(prevCartCount);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    function handleClick(){
        enqueueSnackbar("Item Added to Cart",{ variant: 'info' });
        const cartItem={cartId:(prevCartCount+1),...props.listData};
        dispatch(addToCart(cartItem))
    }
    const temp=useSelector(state=>state.cart);
    console.log(temp);
  return (
    <div className='item-container'>
        <div className='item-detail'>
            <img className='img' src={props.listData.image} alt="image" />
            <div className='text-container'>
                <div className='item-text'>
                    <div className='title'>
                    {props.listData.title}
                    </div>
                    <div className='price'>
                    {props.listData.price}$
                    </div>
                </div>
            </div>
        </div>
        <div className='description'>{props.listData.description}</div>
        <div className='btndiv'> <Button variant='contained' onClick={handleClick}>Add to Cart</Button></div>
    </div>
  )
}

export default ListItem