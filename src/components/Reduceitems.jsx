import {useState} from "react"
const Reduce =()=> {
    const cartItems =[
        {name:"Apple", price: 2},
        {name: "Banana", price:3},
        {name: "Orange", price: 4}
    ];
    //using .reduce to calculate total
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return(
        <div className="p-4 text-center">
            <h1 className="text-xl font-bold mb-2">Shopping Cart</h1>
            <ul className="mb-2">
                {cartItems.map((item, index) => (
<li key={index}>
    {item.name} -${item.price}
</li>
                ))}
            </ul>
            <p className="font-semibold"> Total:${total}</p>
        </div>
    );
}
export default Reduce;
