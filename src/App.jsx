import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Products from "./Pages/Products"
import './style.css'
import SingleProduct from "./Pages/SingleProduct"
import Login from "./Pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Cart from "./Pages/Cart"
function App() {

  const [cart, setCart] = useState([]);
  console.log("Cart: ",cart);

  return (
    <>
    <Navbar cart={cart}/>
    
      <Routes>
        <Route path="/" element={<Products cart={cart} setCart={setCart}  />} />
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path='/products/:id' element={<SingleProduct cart={cart} setCart={setCart}  />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
