import { useState, useEffect } from "react"
import { fetchProducts } from "../API/APIFunctions"
import ProductCard from "../components/ProductCard"
import { SampleData } from "../API/SampleData"



export default function Products() {
    const [products, setProducts] = useState([SampleData])
    const [filteredProducts, setFilteredProducts] = useState([]);

    async function fetchData() {
        const result = await fetchProducts()
        setProducts(result)
        setFilteredProducts(result)

        console.log("products", products)
    }
    useEffect(() => {
        fetchData()
    }, [])

    function handleSearch(e) {
        e.preventDefault()
        const search = e.target.value
        const filteredProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase())
        })
        setFilteredProducts(filteredProducts)
    }


    return (

        < div className="allProducts">
            {/* <h1>PRODUCTS</h1> */}
            <form onSubmit={handleSearch}>
                    {/* <label htmlFor="search">Search Posts</label> */}
                    <input className="searchbar" onChange={handleSearch} type="text" id="search" />
            </form>
            <main >
                {
                    // TODO: SHOW LOADING BAR WHILE PRODUCT IS LOADING
                
                    filteredProducts.map((product, i) => (
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