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

        < div key={products.id}>
            <h1>PRODUCTS</h1>
            <main >
                {
                    products.map((product) => (
                        <ProductCard
                             key={product.id}
                            product={product}
                            fetchAllproducts={fetchData}
                        />   
                    ))

                }
            </main>

        </div>


    )

}