import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import ListItem from './ListItem';
import { Snackbar } from '@mui/material';
function DisplayList() {
  const dispatch=useDispatch();
  const data=useSelector(state=>state.productList);
  console.log(data);
  const[snack,setSnack]=React.useState(false);
  return (
       <div>
        <div className='container'>
            {data.length>0?data.map((data,index)=><ListItem key={index} listData={data}/>):<h1>Loading......</h1>}
        </div>
       </div>
  )
}
export default DisplayList