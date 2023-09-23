import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "../API/APIFunctions";
import AddToCart from "../components/addToCart";
export default function SingleProduct({cart, setCart}) {
    const {id} = useParams();
    const [product, setProduct] = useState(null)
    useEffect(() => {
        async function fetchData() {
          const data = await fetchProductById(id)
          setProduct(data);
          console.log("Product returned ", product)
        }
        fetchData();
      }, [id]);
      if (!product) {
        return <h1>Loading Product..</h1>
      }
      
      //destructure product to get ket values
      const { title, description, image, price } = product;

      return (
            <div className="single-product">
                
                
                <h2>{title}</h2>
                <p>{description}</p>
                <p>${price}</p>
                <img src={image} alt={title} />
                <Link to='/'><button>Back to All Products</button></Link>
                {/* <button>Add to Cart</button> */}
                <AddToCart product={product} cart={cart} setCart={setCart} />
            </div>
      )
     



}