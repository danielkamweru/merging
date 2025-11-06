import React,{useState, useEffect} from "react"
const Fetcher=() =>{
    const[image, setImage] = useState("null")
    useEffect(() =>{
        fetch("http://localhost:3000/plants")
        .then(r => r.json())
        .then(data =>setImage("http://localhost:3000/plants/${data.items[0]message}"));
    },[])
    if(!image){
        return<p> Loading ...</p>
    }
    return(
        <>
        <img src={image} alt="http://localhost:3000/plants"/>
        </>
    );
}
export default Fetcher


