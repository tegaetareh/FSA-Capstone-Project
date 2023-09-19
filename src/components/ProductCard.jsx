import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function ProductCard({ product, fetchAllproducts, cart, setCart }) {
    const { id, title, description, image, price } = product;
    const navigate = useNavigate();
    // console.log(id, title, price)
    const [cartQuantity, setCartQuantity] = useState(1)

    function goToLinkID(id) {
        navigate(`/products/${id}`)

    }
const uniqueArray = [];
    function addToCart(product) {

 let cartItem = {
            ...product,
            quantity: cartQuantity
        }

        // console.log("product quantity before ", cartItem.quantity)
        function objectExists(arr, id) {
            let isIdFound = false;
            console.log("id", id)
            console.log("array is ", arr)
            console.log("array length ", arr.length)
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === id) {
                    console.log("array is is ", arr[i].id)
                    isIdFound = true;
                    break;
                }
            }
            console.log("array length ", arr.length)
            return isIdFound
        }
        console.log("Exists? ", objectExists(cart, id));
        if (objectExists(cart, id)) {

            let newQuantity = cartQuantity + 1
            setCartQuantity(newQuantity);
        }
       
        /////code to filter array/////////////////
        
        const idSet = new Set();
        for (const obj of cart) {
            if (!idSet.has(obj.id)) {
                idSet.add(obj.id);
                uniqueArray.push(obj);
            }
            console.log("UNIQUE ARRAY",uniqueArray)
        }

        setCart([...cart, cartItem]);
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