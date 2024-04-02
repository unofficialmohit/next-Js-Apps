import React from 'react'
import {Badge, Button} from "@mui/material";
import CartLogo from "@mui/icons-material/ShoppingCart"
import {  useSelector } from 'react-redux';
import "../index.css";
import Link from 'next/link';
function Header(props) {
const itemCount=useSelector(state=>state.cart.length);
  return (
    <div>

   <div className='navbar'>    
        <div className='site-name'>INDIA STORE</div>
        <Badge badgeContent={itemCount} color='success'>
            <Button variant='contained' onClick={()=>props.setDisplayCart(prevData=>!prevData)}>{<CartLogo/>}</Button>
        </Badge>
   </div>
   <div className='m-2'><Link href="/"><button className='btn'>GO BACK</button></Link></div>
    </div>
  )
}

export default Header