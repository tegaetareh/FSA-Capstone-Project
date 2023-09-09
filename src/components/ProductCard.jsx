import { Link, useNavigate } from "react-router-dom";
export default function ProductCard({ product, fetchAllproducts }) {
    const { id, title, description, image, price } = product;
    const navigate = useNavigate();
    // console.log(id, title, price)

    function goToLinkID(id) {
        navigate(`/products/${id}`)

    }


    return (
        // style title image price and product in different section so layout is more uniform
        <div key={id} className="productCard" >
            <h3>{product.title}</h3>
            {/* <p>{description}</p> */}
            
            <img src={image} alt={title}  onClick={() => goToLinkID(id)}/>
            <h3>${price}</h3>
            <div>
                <Link className="linkButton" to={`/products/${id}`}><button>View Product</button></Link>

            </div>
        {/* TODO: add back to all products button and add to cart button  underneath picture*/}
        </div>
    )

}