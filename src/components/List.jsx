const List=()=>{
const fruits =["Apples","Banana","Mango","Orange","Dates"];
return(
    <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Fruits List</h2>
        <ul className="list-disc pl-5">
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    </div>
);
}
export default List;