'use client';
import React from 'react'
import Header from './components/Header.jsx'
import {SnackbarProvider} from 'notistack';
import {Provider} from "react-redux";
import store from './app/store.js';
import DisplayList from './components/DisplayList.jsx';
import DisplayCart from './components/DisplayCart.jsx';
import "./index.css";
function App() {
  const[displayCart,setDisplayCart]=React.useState(false);
  
  return (
     <Provider store={store}>
     <SnackbarProvider>
        <Header setDisplayCart={setDisplayCart}/>
        <DisplayCart displayCart={displayCart} setDisplayCart={setDisplayCart} />
        <DisplayList/>
     </SnackbarProvider>
    
     </Provider>
  )
}





export default App