import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Checkout from "./Checkout";
//dialog code
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//dialog code

export default function Cart({ token, cart, setCart }) {
    const [total, setTotal] = useState(0)
    const [addQty, setAddQty] = useState(0);
    const [reduceQty, setReduceQty] = useState(0);
    //  dialog react code
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    //   end of dialog react code
    const navigate = useNavigate();


    function navigateToProduct() {
        // 👇️ navigate to /

        navigate('/products');

    };

    function navigateToCheckout() {
        // 👇️ navigate to /

        navigate('/checkout');

    };
    // console.log(document.getElementById("qtyText").value)

    function handleQty(event, item) {
        event.target.value = Math.max(1, Math.min(20, parseInt(event.target.value)))
        console.log("item in handleqty", item.quantity)
        console.log ("input value", event.target.value)
        console.log("isnan", isNaN(event.target.value))
        if (event.target.value==="") {
            event.target.value = 1 //sets input value to   1 if form is empty
        }
        console.log(event.target.value)
        console.log(item)


        if (cart.some(e => e.id === item.id)) {
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    let newItem = item
                    newItem.quantity = parseInt(event.target.value)
                    return newItem
                } else {
                    return item
                }
            })
            setCart(newCart)


        } else {
            let cartItem = {
                ...product,
                quantity: 1
            }
            setCart([...cart, cartItem]);
        }




    }

    function handleAdd(item) {
        setCart((prevCart) => {
            return prevCart.map((targetItem) => {
                return item.id === targetItem.id
                    ? {
                        ...item,
                        // quantity: item.quantity ? item.quantity + 1 : 1,
                        quantity: 
                        item.quantity <=19 ? item.quantity + 1 : 20,
                    }
                    : item;
            });
        });


    }
    function handleMinus(item) {
        setCart((prevCart) => {
            return prevCart.map((targetItem) => {
                return item.id === targetItem.id
                    ? {
                        ...item,
                        quantity: 
                        item.quantity && item.quantity > 1 ? item.quantity - 1 : 1,
                    }
                    : item;
            });
        });
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


    // setTotal((cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)).toFixed(2))

    function calcTotal() {
        let grandSum = ((cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)).toFixed(2))
        setTotal(grandSum)
    }

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
                                        <button className="qtyButton" id="plus" onClick={() => handleAdd(item)}>+</button>
                                        <input type="number" maxLength="5" size="5" id="qtyText" value={item.quantity} onChange={(event) => handleQty(event, item)} />
                                        <button className="qtyButton" id="minus" onClick={() => { handleMinus(item) }}> - </button>
                                    </div>

                                </div>

                                {/* </form> */}

                            </div>
                        ))}
                    </ul>

                    <p className="total"> Total = ${(cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)).toFixed(2)}<br />
                    </p>
                    <div className="cartBuyButtons">
                        <button className="btn" onClick={() => clearCart()}  >Clear Cart</button>
                        {/* <button className="btn" onClick={navigateToCheckout} >Checkout</button> */}
                        <button className="btn" onClick={handleClickOpen('paper')} >Checkout</button>
                    </div>

                    {/* TODO: Checkout functionality, stripe or download pdf/file of order details */}
                    {/* todo: if no item in cart show message not total */}
                    <div>
{/* ====================================MUI CART RENDER CODE================================ */}
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            {/* <DialogTitle id="scroll-dialog-title">Checkout</DialogTitle> */}
                            <DialogContent dividers={scroll === 'paper'}>
                                <DialogContentText
                                    id="scroll-dialog-description"
                                    ref={descriptionElementRef}
                                    tabIndex={-1}
                                >
                                   
                                    <Checkout token={token} cart={cart} setCart={setCart} />
                                </DialogContentText>
                            </DialogContent>
                            {/* <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose}>Subscribe</Button>
                            </DialogActions> */}
                        </Dialog>
{/* =====================================END OF MUI RENDER CODE=================================================== */}
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