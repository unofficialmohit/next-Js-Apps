import React from "react";
let arrRandom=[];  
function Meme(){
    if(arrRandom.length==100)
    {
        arrRandom=[];
    }
const [allMemeImages,setAllMemeImages]=React.useState([]);
const [memeImage,setMemeImage]=React.useState(
    {topText:"",
    bottomText:"",
    randomImage:"https://i.imgflip.com/25w3.jpg"}
);

React.useEffect(()=>{

// fetch("https://api.imgflip.com/get_memes")
// .then((response)=>{
// return response.json();
// })
// .then((memeFinalData)=>{
//     setAllMemeImages(memeFinalData.data.memes);
// })
async function memeEffect(){
    const res=await fetch("https://api.imgflip.com/get_memes");
    const memeFinalData=await res.json();
    setAllMemeImages(memeFinalData.data.memes);
}
memeEffect();
},[]);

// const [url,setUrl]=React.useState(memeData.data.memes[0].url);
function getMemeImage(){
let randomNumber;
while(true){
let flag=0;
randomNumber=Math.floor(Math.random()*allMemeImages.length);
for(let key of arrRandom)
{
if(randomNumber==key)
{
    flag=1;
    break;
}
}
if(flag==0)
{
    console.log(randomNumber);
    arrRandom.push(randomNumber);
    console.log(arrRandom);
    break;
}

}
let memeArray=allMemeImages[randomNumber];
let randomDataImage=memeArray.url;
setMemeImage((meme)=>{
    
return {...meme,randomImage:randomDataImage};
})
}
console.log(memeImage);
function handleDataChange(event){
setMemeImage((prevData)=>{
    return {...prevData,
        [event.target.name]:event.target.value
    }
})
}
return(
    <div className="meme">
    <div className="textfield">
    <label>Top Text
   <input type="text" className="userinput" placeholder="First Line" name="topText" onChange={handleDataChange} value={memeImage.topText}></input>
   </label>
    <label>Bottom Text
   <input type="text" 
   className="userinput" 
   placeholder="Second Line" 
   name="bottomText" 
   onChange={handleDataChange} 
   value={memeImage.bottomText} //value is given here to implement controlled input 
   ></input>
   </label>
   </div>
    <button type="button" className="submit" onClick={getMemeImage}>Generate A new Meme Image 🖼</button>
    <div  className="memepic">
    <img className="memeImage" src={memeImage.randomImage}></img>
    <div className="top text">{memeImage.topText}</div>
    <div className="bottom text">{memeImage.bottomText}</div>
    </div>
    </div>
)
}
export default Meme;