import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Cart({ token, cart, setCart }) {
    const navigate = useNavigate();

    function navigateToProduct() {
        // 👇️ navigate to /

        navigate('/products');

    };

    function deleteItem(id) {
        setCart(cart.filter(item => item.id !== id));
        localStorage.setItem('Cart', JSON.stringify(cart));
        console.log("cart lenght", cart.length)
        
    }
    console.log("cart :", cart)

    useEffect(() => {
        if (!cart.length) navigateToProduct()
    }, [cart]);


    return (

 
        <div>
            {token ?
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
                    <p>Total = {cart.reduce((acc, item) => acc + (item.price*item.quantity), 0)}</p>
                    <p><button>Checkout</button></p>
                    {/* TODO: Checkout functionality, stripe or download pdf/file of order details */}
                    {/* todo: if no item in cart show message not total */}

                </div> :
                <div className="cart" >
                    <h1>Please Log in to view cart</h1>
                    {navigateToProduct()}
                </div>


            }

        </div>


    )

}