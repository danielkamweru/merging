import React, {useState} from "react";
function Count() {
  const[count, setCount] = useState(0);
  return (
    <div>
      <p>count:{count}</p>
      <button  style={{ padding:"10px",backgroundColor:"blue", borderRadius:"8px",margin:"5px"}}onClick={() => setCount(count+1)}> increase</button>
      <button style={{ padding:"10px",backgroundColor:"gray", color:"white", margin:"5px",borderRadius:"10px"}}onClick={() => setCount(count -1)}>decrease</button>
      <button style={{ padding:"10px",backgroundColor:"green", margin:"10px",borderRadius:"8px"}}onClick={() => setCount(0)}> reset</button>
    </div>
  );
}

export default Count; 










