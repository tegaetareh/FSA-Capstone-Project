import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


export default function Cart({ token, cart, setCart }) {

    const navigate = useNavigate();

    function navigateToProduct() {
        // 👇️ navigate to /

        navigate('/products');

    };
    function handleQty(e, item) {
        console.log(e.target.value)
        console.log(item)
        item.quantity = parseInt(e.target.value)




    }
    function clearCart() {
        console.log("clear cart clicked")
        setCart([]);
        localStorage.removeItem('Cart');


    }

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
                    {/* <h2>Your Items</h2> */}
                    <ul>
                        {cart.map(item => (
                            <div className="cartItem" key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <div className="cartContent">

                                    <p className="cartTitle">{item.title} </p>
                                    <p>Price: ${item.price} </p>
                                    <p>Quantity: {item.quantity} </p>
                                    {/* <form onSubmit={handleQty(item)}> */}
                                    <div className="quantity">
                                        <button className="btn" onClick={() => deleteItem(item.id)}>Delete Item</button><br />
                                        <button className="qtyButton">+</button>
                                        <input type="text" maxLength="3" size="3" id="qtyText" defaultValue={item.quantity} onChange={(e) => handleQty(e, item)} />
                                        <button className="qtyButton"> - </button>
                                    </div>

                                </div>

                                {/* </form> */}

                            </div>
                        ))}
                    </ul>
                    <p className="total">Total = ${(cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)).toFixed(2)} <br />
                    </p>
                    <div className="cartBuyButtons">
                        <button className="btn" onClick={() => clearCart()}  >Clear Cart</button>
                        <button className="btn">Checkout</button>
                    </div>

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