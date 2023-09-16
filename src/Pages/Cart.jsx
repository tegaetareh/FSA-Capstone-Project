import { useState, useEffect } from "react"

export default function Cart({ cart, setCart }) {

    function deleteItem(id) {
        setCart(cart.filter(item => item.id !== id));
    }
    console.log("cart :", cart)


    return (

        <>
            <div className="cart">
                <h2>Your Items</h2>
                <ul>
                    {cart.map(item => (
                        <div className="cartItem" key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title} </p>
                            <p>Price: ${item.price} </p>
                            <p>Quantity: {item.quantity} </p>
                            <button onClick={() => deleteItem(item.id)}>Remove from cart ❌</button><br /><br />
                            <hr />
                            
                            </div>
                    ))}
                </ul>
                <p>Total = {cart.reduce((acc, item) => acc + item.price, 0)}</p>
                <p><button>Checkout</button></p>
                {/* TODO: Checkout functionality, stripe or download pdf/file of order details */}

            </div>

        </>


    )

}