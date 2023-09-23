



export default function AddToCart({product, cart, setCart}) {

    function add2Cart() {

        //console.log("token is", localStorage.getItem('Token'))
        if (!localStorage.getItem('Token')) {
            console.log("no token here")
            return alert("Please login to add to products to cart")

        } else {
            console.log("token is", localStorage.getItem('Token'))
            console.log("cart", cart)
        }




        ////cart increase quantity code
        if (cart.some(e => e.id === product.id)) {
            const newCart = cart.map(item => {
                if (item.id === product.id) {
                    let newItem = item
                    newItem.quantity = newItem.quantity + 1
                    return newItem
                } else {
                    return item
                }
            })
            setCart(newCart)
            console.log("ID FOUND")
            //setCartQuantity(cartQuantity + 1);
        } else {
            let cartItem = {
                ...product,
                quantity: 1
            }
            setCart([...cart, cartItem]);
        }
        // console.log("Product already in cart? ", cart.includes(product.id))


        localStorage.setItem('Cart', JSON.stringify(cart));



    }





    return (
        <div className="btn_addToCart">

            <button onClick={() => add2Cart()}>Add to Cart</button>
        </div>
    )




}