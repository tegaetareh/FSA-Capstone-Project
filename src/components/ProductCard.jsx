import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function ProductCard({ product, fetchAllproducts, cart, setCart , token}) {
    const { id, title, description, image, price } = product;
    const navigate = useNavigate();
    // console.log(id, title, price)
    const [cartQuantity, setCartQuantity] = useState(1)


    function goToLinkID(id) {
        navigate(`/products/${id}`)

    }
    const uniqueArray = [];
    function addToCart(product) {
        
            //console.log("token is", localStorage.getItem('Token'))
            if (!localStorage.getItem('Token')){
                console.log("no token here")
                return alert("Please login to add to products to cart")

            }else {
                console.log("token is", localStorage.getItem('Token'))
            }
        

        let cartItem = {
            ...product,
            quantity: cartQuantity
        }

        ////cart increase quantity code
        console.log("Product already in cart? ", cart.includes(product))

        setCart([...cart, cartItem]);
        localStorage.setItem('Cart', JSON.stringify(cart));


    }
    


    return (
        // style title image price and product in different section so layout is more uniform
        <div key={product.id} className="productCard" >
            <h3>{product.title}</h3>
            {/* <p>{description}</p> */}

            <img src={product.image} alt={product.title} onClick={() => goToLinkID(id)} />
            <h3>${product.price}</h3>
            <div>
                <Link className="linkButton" to={`/products/${product.id}`}><button>View Product</button></Link>
                <button className="productCardButton" onClick={() => addToCart(product)}>Add to cart</button>

            </div>
            {/* TODO: add back to all products button and add to cart button  underneath picture*/}
        </div>
    )

}