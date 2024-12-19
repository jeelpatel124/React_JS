import React, { useState } from "react"
import Productdata from "./productdata"
function Product(){

    const [product,setProduct] = useState({
        productname : "",
        productprice : "",
        productdes : "",
        productimg : ""
    })

    var [pnErr,setpnErr] = useState(false)
    var [ppErr,setppErr] = useState(false)
    var [pdErr,setpdErr] = useState(false)

    const handleChange = (e)=>{
        const {name,value} = e.target
        setProduct({...product, [name] : value})
        console.log(product);
    }

    function hlBlure(b){
        var {name,value} = b.target
        if(name == "productname" && value.length <= 3){
            setpnErr(true)
        }
        if(name == "productprice" && value.length < 1){
            setppErr(true)
        }
        if(name == "productdes" && value.length >=200 ){
            setpdErr(true)
        }
    }

    function hlFocus(f){
        var {name,value} = f.target
        if(name == "productname"){
            setpnErr(false)
        }
        if(name == "productprice"){
            setppErr(false)
        }
        if(name == "productdes"){
            setpdErr(false)
        }
    }

    function submitdata(e){
        e.preventDefault()

        if(pnErr == false && ppErr == false && pdErr == false){
            setProduct(product)
            alert("submit successfully")
        }else{
            alert("no data")
        }

    }

    return (
        <div id="main">
        <form action="" onSubmit={submitdata}>
        <h1>Product Form</h1>
        <input type="text" name="productname" placeholder="Product name" onChange={handleChange} onBlur={hlBlure} onFocus={hlFocus}/> <br />
        {pnErr == true ? <p>Must be at least 3 characters long.</p> : ""}
        
        <br />
        <input type="number" name="productprice" placeholder="Product price" onChange={handleChange} onBlur={hlBlure} onFocus={hlFocus}/><br />
        {ppErr == true ? <p>Must be a positive number.</p> : ""}
        
        <br />
        <select name="" id="" onChange={handleChange}>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Groceries">Groceries</option>
            <option value="Books">Books</option>
        </select><br /><br />
        <input type="text" name="productdes" placeholder="Product Description" onChange={handleChange} onBlur={hlBlure} onFocus={hlFocus}/>
        {pdErr == true ? <p>Maximum of 200 characters.</p> : ""}
        
        <br /><br />
        
        <input type="text" name="productimg" accept="image/jpeg,image/png" placeholder="Product image" onChange={handleChange} onBlur={hlBlure} onFocus={hlFocus}/><br /><br />
        <input type="submit" />
        </form>
        </div>
    )
}

export default Product