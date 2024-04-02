import React from "react";
import Link from "next/link";
function Header(){
return(
    
    <div className="nav-bar">
    <img src="troll-face.png" className="troll"></img>
    
    <div className="sitename">Meme Generator</div>
    <div className="end">Made by mohit</div>
    <Link href="/" className="text-lg"><button className="btn">GO BACK</button></Link>
    </div>
    )
}
export default Header;