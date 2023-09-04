import { Link } from "react-router-dom";
export default function ProductCard({product, fetchAllproducts}){
    const { id, title, description, image, price } = product;
    // console.log(id, title, price)


    return (
        <div key={id} className="productCard" >
          <h2>{product.title}</h2>
          <p>{description}</p>
          <p>${price}</p>
          <img src={image} alt={title} />
          <div>
        <Link className="linkButton" to={`/products/${id}`}>View Product</Link>
        
      </div>
          
        </div>
      )

}