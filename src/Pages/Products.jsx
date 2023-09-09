import { useState, useEffect } from "react"
import { fetchProducts } from "../API/APIFunctions"
import ProductCard from "../components/ProductCard"
import { SampleData } from "../API/SampleData"



export default function Products() {
    const [products, setProducts] = useState([SampleData])

    async function fetchData() {
        const result = await fetchProducts()
        setProducts(result)
        console.log("products", products)
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (

        < div className="allProducts">
            {/* <h1>PRODUCTS</h1> */}
            <main >
                {
                    // TODO: SHOW LOADING BAR WHILE PRODUCT IS LOADING
                    products.map((product, i) => (
                        <ProductCard
                             key={i}
                            product={product}
                            fetchAllproducts={fetchData}
                        />   
                    ))

                }
            </main>

        </div>


    )

}