import { Link } from "react-router-dom";
export default function ProductCard({ product, fetchAllproducts }) {
    const { id, title, description, image, price } = product;
    // console.log(id, title, price)


    return (
        <div key={id} className="productCard" >
            <h3>{product.title}</h3>
            {/* <p>{description}</p> */}
            
            <img src={image} alt={title} />
            <h3>${price}</h3>
            <div>
                <Link className="linkButton" to={`/products/${id}`}>View Product</Link>

            </div>

        </div>
    )

}