'use client';
import React from 'react'
import App from './App.jsx'
import {GoogleOAuthProvider} from "@react-oauth/google";
import './index.css'
export default function page(){
return(
  <GoogleOAuthProvider clientId='1035425147156-7im56s1u7bubdrutmmv4muae3ud1pdfm.apps.googleusercontent.com'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
)
}

