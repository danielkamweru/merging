import React, {useState} from "react"
const Filter =() =>{
    const [searchTerm, setSearchTerm] =useState("")
    //sample data
    const fruits =["Apple","Banana", "Orange", "Mango", "Dates"];
    //filter fruits based on search term
    const filteredFruits = fruits.filter(fruit =>
        fruit.toLowerCase().includes(searchTerm.toLowerCase( ))
    );
    return(
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Fruit example</h1>
            <input 
            type="text"
            placeholder="search fruit ..."
            className="border p-2rounded  mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm (e.target.value)}
            />
            <ul>
                {filteredFruits.map((fruit, index) =>(
         <li key={index} className="p-1">{fruit}</li>
                ))}
            </ul>
        </div>
    );
}
export default Filter