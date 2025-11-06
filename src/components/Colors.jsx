import React, {useState} from "react"
function Colors(){
    const[color, setColor] = useState("Red")
return(
    <div style={{color:color}}>
        <p>This is the color you have selected:{color}</p>
        <select onChange={(d) => setColor(d.target.value)}>
            <option  style={{color:"red"}}value="Red">Red</option>
            <option style={{color:"green"}}value="Green">Green</option>
            <option  style={{color:"blue"}}value="Blue">Blue</option>
        </select>
    </div>
)
}
export default Colors