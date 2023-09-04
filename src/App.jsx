import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Products from "./Pages/Products"
import './style.css'
import SingleProduct from "./Pages/SingleProduct"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
      </Routes>
    </>
  )
}

export default App
