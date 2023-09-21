import { useState, useEffect } from "react"
import { fetchProducts, fetchCategory } from "../API/APIFunctions"
import ProductCard from "../components/ProductCard"
import { SampleData } from "../API/SampleData"



export default function Products({ token, cart, setCart }) {
    // var filterdByCategory =false
    const [products, setProducts] = useState([SampleData])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);
    const [filteredByCategory, setFilteredByCategory] = useState(false)
    const [sortBy, setSortBy] = useState('price');
    const [priceRange, setPriceRange] = useState(1000);
    //console.log("token in products page", token)
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
    async function handleCategory(e) {
        setFilteredByCategory(true)
        console.log(e.target.value)
        const result = await fetchCategory(e.target.value)
        console.log("Category data", result)
        setFilteredCategory(result)
        console.log(filteredByCategory)
        if (e.target.value === "all") { setFilteredByCategory(false) }

    }
    function selectSortBy(e) {
        setSortBy(e.target.value);
      }
    
      function sortByPrice(ascending) {
        filteredProducts.sort((a, b) => {
          if (!ascending) {
            return b.price - a.price
          }
          return a.price - b.price
        })
      }
      if(sortBy === 'price') {
        sortByPrice();
      } else if (sortBy === 'rating') {
        filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      }
      
      let finalRender =filteredProducts.filter(product => product.price <= priceRange);
      console.log(priceRange)



    return (

        < div className="allProducts">

            <div className="ssf">
                {/* ssf is search sort and filter */}

                <form onSubmit={handleSearch}>
                    <b>Search: </b><input className="searchbar" onChange={handleSearch} type="text" id="search" />
                </form >
                <form ><b>Filter: </b>
                    <input value="electronics" type="radio" name="category" id="eletronics" onChange={handleCategory} /><label>Eletronics</label>
                    <input value="jewelery" type="radio" name="category" id="jewelery" onChange={handleCategory} /><label>Jewelery</label>
                    <input value="men's clothing" type="radio" name="category" id="men's clothing" onChange={handleCategory} /><label>Mens Clothing</label>
                    <input value="women's clothing" type="radio" name="category" id="women's clothing" onChange={handleCategory} /><label>Womens Clothing</label>
                    <input value="all" type="radio" name="category" id="all" onChange={handleCategory} /><label>All</label>

                </form>
                Min Price<input type="range" min="20" max="1000" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}/>Max Price
                <form><b>Sort: </b>
                    <select value={sortBy} onChange={selectSortBy}>
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                    </select>
                </form>
            </div>

            <main >
                {filteredByCategory ?
                    // TODO: SHOW LOADING BAR WHILE PRODUCT IS LOADING


                    filteredCategory.map((product, i) => (
                        <ProductCard
                            key={i}
                            product={product}
                            fetchAllproducts={fetchData}
                            cart={cart}
                            setCart={setCart}
                            token = {token}
                        />
                    ))


                    :

                    finalRender.map((product, i) => (
                        <ProductCard
                            key={i}
                            product={product}
                            fetchAllproducts={fetchData}
                            cart={cart}
                            setCart={setCart}
                            token ={token}
                        />
                    ))

                }
            </main>

        </div>


    )

}