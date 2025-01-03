import React from 'react'
import { useState } from 'react'
import Productlist from './productlist'

function Product() {

  const [product,setProduct] = useState({
    proimg : "",
    proname : "",
    proprice : "",
    prodis : ""
  })

  const handleChange=(e)=>{
    const {name,value} = e.target
    setProduct({...product,[name] : value})
  }

  const handleSubmit=(j)=>{
    j.preventDefault()

    fetch(`http://localhost:3000/products`,{
      method : "POST",
      headers : {"Content-Type" : "Application/json"},
      body : JSON.stringify(product)
    })
    
    setProduct({
      proimg : "",
      proname : "",
      proprice : "",
      prodis : ""
    })

  }

  return (
    <div>
      <center>
        <h1>Product</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='proimg' value={product.proimg} placeholder='productimage' onChange={handleChange}/><br />
        <input type="text" name='proname' value={product.proname} placeholder='productname' onChange={handleChange}/><br />
        <input type="text" name='proprice' value={product.proprice} placeholder='productprice' onChange={handleChange}/><br />
        <input type="text" name='prodis' value={product.prodis} placeholder='productdiscription' onChange={handleChange}/><br />
        <input type="submit" />
      </form>
      </center>
     
    </div>
  )
}

export default Product