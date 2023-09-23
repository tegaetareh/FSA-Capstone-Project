import { useState, useEffect } from "react";
import AddToCart from "./addToCart";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
export default function ProductCard({ product, fetchAllproducts, cart, setCart, token }) {
    const { id, title, description, image, price } = product;
    const navigate = useNavigate();
    // console.log(id, title, price)
    //const [cartQuantity, setCartQuantity] = useState(1)


    function goToLinkID(id) {
        navigate(`/products/${id}`)

    }

    // function addToCart(product) {

    //         //console.log("token is", localStorage.getItem('Token'))
    //         if (!localStorage.getItem('Token')){
    //             console.log("no token here")
    //             return alert("Please login to add to products to cart")

    //         }else {
    //             console.log("token is", localStorage.getItem('Token'))
    //         }




    //     ////cart increase quantity code
    //     if (cart.some(e => e.id === product.id)) {
    //         const newCart =  cart.map(item=> {
    //             if(item.id === product.id){
    //                 let newItem = item
    //                 newItem.quantity = newItem.quantity + 1
    //                 return newItem
    //             }else {
    //                 return item
    //             }
    //         })
    //         setCart(newCart)
    //         console.log("ID FOUND")
    //         //setCartQuantity(cartQuantity + 1);
    //     }else {
    //         let cartItem = {
    //             ...product,
    //             quantity: 1
    //         }
    //         setCart([...cart, cartItem]);
    //     }
    //    // console.log("Product already in cart? ", cart.includes(product.id))


    //     localStorage.setItem('Cart', JSON.stringify(cart));


    // }



    return (
        // style title image price and product in different section so layout is more uniform
        <div key={product.id} className="productCard" >
            <h3>{product.title}</h3>
            {/* <p>{description}</p> */}

            <img src={product.image} alt={product.title} onClick={() => goToLinkID(id)} />
            <Rating
                allowFraction
                initialValue={product.rating.rate}
                onClick={function noRefCheck() { }}
                readonly
            />
            <h3>${product.price}</h3>
            <div>
                <Link className="linkButton" to={`/products/${product.id}`}><button>View Product</button></Link>
                {/* <button className="productCardButton" onClick={() => addToCart(product)}>Add to cart</button> */}
                <AddToCart product={product} cart={cart} setCart={setCart} />

            </div>
            {/* TODO: add back to all products button and add to cart button  underneath picture*/}
        </div>
    )

}