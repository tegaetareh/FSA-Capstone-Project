import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


export default function Checkout({ token, cart, setCart}) {
    

    const navigate = useNavigate();




    function navigateToProduct() {
        // 👇️ navigate to /

        navigate('/products');

    };

    function handleCheckout() {
        setCart([]);
        localStorage.removeItem('Cart');
        navigateToProduct()
    }

  

    return (


        <div>
            {token ?
                <div className="cart">
                    <h2 className="purchase">Purchased Successful!</h2>
                    <h3 >Purchased Items</h3>
                    <ul>
                        {cart.map(item => (
                            <div className="cartItem" key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <div className="cartContent checkout">

                                    <p className="cartTitle">{item.title} </p>
                                    <p>Price: ${item.price} </p>
                                    <p>Quantity: {item.quantity} </p>
                                    {/* <div className="quantity">
                                        <input type="text" maxLength="3" size="3" id="qtyText" value={item.quantity} onChange={(event) => handleQty(event, item)} />
                                    </div> */}
                                </div>

                            </div>
                        ))}
                    </ul>

                    <p className="total"> Total = ${(cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)).toFixed(2)}<br />
                    </p>
                    <div className="cartBuyButtons">
                        <button className="btn" onClick={handleCheckout}>Continue Shopping</button>
                    </div>

                </div> :
                <div className="cart" >
                    <h1>Please Log in to view cart</h1>
                    {navigateToProduct()}
                </div>


            }

        </div>


    )

}