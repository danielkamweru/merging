import React, {useState, useEffect} from "react";
const Timer=()=>{
const [count, setCount] = useState(0);
const[running, setRunning] =useState(true);
useEffect(() => {
    let interval;
    if(running){
        console.log("Timer started");
        interval =setInterval(() =>{
            setCount((prev) => prev + 1);
        }, 1000);
        //stop and reset after 5 seconds
        setTimeout(() =>{
            clearInterval(interval);
            console.log("Timer stopped");
            setCount(0); //reset counter to 0
            setRunning(false); //trigger re-render
        },60000 );
} else{
    //wait 1seconds, the start again
    const restartTimeout = setTimeout(() =>{
        console.log("Timer restarted");
        setRunning(true);
    },1000);
    return () => clearTimeout(restartTimeout);
}
return () => clearInterval(interval);
}, [running]);
return(
    <div className="text-center mt-10 text-xl">
        <p>Seconds passed:{count}</p>
    </div>
);
}
export default  Timer;

