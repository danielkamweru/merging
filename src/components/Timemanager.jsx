import React, {useState, useEffect} from 'react';

function Timemanager (){
  const[currentTime, setCurrentTime] = useState(new Date());

  useEffect(() =>{
    const timer =setInterval(() =>{
      setCurrentTime(new Date());
    })
    //proper  cleanup function
    return () => clearInterval(timer);
  }, []);
  return(
    <div className="text-center">
      <div className="p-4 text-center"></div>
      <p className="text-2xl font-bold"> Clock</p>
      <div>{currentTime.toDateString()}</div>
      <div>{currentTime.toLocaleTimeString()}</div>
    </div>
  )
}
export default Timemanager;
