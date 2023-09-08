import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Products from "./Pages/Products"
import './style.css'
import SingleProduct from "./Pages/SingleProduct"
import Login from "./Pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
function App() {


  return (
    <>
    <Navbar />
    
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path='/products/:id' element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
