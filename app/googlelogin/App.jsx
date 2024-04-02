import React from 'react'
// import { GoogleLogin } from '@react-oauth/google'
import { useGoogleLogin,googleLogout } from '@react-oauth/google';
import Link from 'next/link';
function App() {
  // const responseMessage=(response)=>{
  //   console.log(response);
  // }
  // const errorMessage=(error)=>{
  //   console.log(error);
  // }
  const[user,setUser]=React.useState(null);
  const[profile,setProfile]=React.useState(null);
  const login=useGoogleLogin({
    onSuccess:(response)=>setUser(response),
    onError:(error)=>console.log("Login Failed "+error)
  });
  React.useEffect(()=>{
  async function login(){
    const response=await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,{
    headers:{
      Authorization:`Bearer ${user.access_token}`,
      Accept:'application/json'
    }});
    const data=await response.json();
    console.log(data)
    setProfile(data);
  }
  {user && login();}
  },[user])
  const logout=()=>{
    googleLogout();
    setProfile(null);
    }
  return (
   <div className='text-center'>
      <h1 className='h1'>Google Login Window</h1>
      {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/> */}
      {profile && 
      <div>
        <div>Username : {profile.name}</div>
        <div>Email : {profile.email}</div>
       <div> <img src={profile.hd?"user.png": profile.picture} alt={'Profile Image'} className='pic'/></div>
        </div>
      }
      <button className='button' onClick={login}>{profile?"Change Account":"Login"}</button>
      {profile && <button className="logout button" onClick={logout}>Logout</button>}

      <Link href={"/"}><button className='btn'>GO BACK</button></Link>
   </div>  )
}

export default App