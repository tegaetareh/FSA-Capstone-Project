import { useState, useEffect} from "react"
import { Route, Routes } from "react-router-dom"
import Products from "./Pages/Products"
import './style.css'
import SingleProduct from "./Pages/SingleProduct"
import Login from "./Pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Cart from "./Pages/Cart"
function App() {
  const [token, setToken] = useState(localStorage.getItem('Token'))
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('Cart')));
  useEffect(() => {
        const temp = JSON.stringify(cart);
        localStorage.setItem('Cart', temp);
    }, [cart]);
  console.log("Cart in appjss: ",cart);
  console.log("Local storage cart", JSON.parse(localStorage.getItem('Cart')))

  return (
    <>
    <Navbar cart={cart} setCart={setCart} token={token} setToken={setToken}/>
    
      <Routes>
        <Route path="/" element={<Products cart={cart} setCart={setCart}  />} />
        <Route path="/products" element={<Products cart={cart} setCart={setCart}  />} />
        <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
        <Route path='/products/:id' element={<SingleProduct cart={cart} setCart={setCart}  />} />
        <Route path="/cart" element={<Cart token={token} cart={cart} setCart={setCart}/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
