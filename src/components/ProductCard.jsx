import { Link, useNavigate } from "react-router-dom";
export default function ProductCard({ product, fetchAllproducts, cart, setCart }) {
    // const { id, title, description, image, price } = product;
    const navigate = useNavigate();
    // console.log(id, title, price)

    function goToLinkID(id) {
        navigate(`/products/${id}`)

    }

    function addToCart(product) {
        const cartItem = {
          ...product,
          quantity: 1
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