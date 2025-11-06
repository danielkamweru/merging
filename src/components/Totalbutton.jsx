import {useState} from "react"
function Totalbutton() {
  const[count,setCount] = useState(0);
  return (
    <div>
      <p>count:{count}</p>
      <button style={{padding:"10px",backgroundColor:"blue",borderRadius:"8px", margin:"10px"}}onClick={() =>setCount(count+9)}>Total</button>
       <button style ={{padding :"10px",backgroundColor:"green" ,borderRadius:"8px"}} onClick={() =>setCount(0)}>reset</button>
      </div>
  )
}

export default Totalbutton;