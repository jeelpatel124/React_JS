import React,  {useEffect, useState } from 'react'
import { v4 } from 'uuid';
import ProductList from './productlist';

function ProductForm() {
    const [product,setProduct] = useState({
        id : v4(),
        title : "",
        price : "",
        des : "",
        image : ""
    })
    const [arr,setArr] = useState(JSON.parse(localStorage.getItem("data")) || [])
    const [edit,setEdit] = useState("")
    const [short,setShort] = useState(false)
    const [arr2,setArr2] = useState([])

    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(arr))
    },[arr])

    const handleInputChange = (e)=>{
          const {name,value} = e.target
          setProduct({...product,[name]:value})
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
        if(edit == ""){
        let obj = {
            ...product,
            id : v4()
        }
        setArr([...arr,obj])
        setProduct({
            title : "",
            price : "",
            des : "",
            image : ""
        })
    
     }else {
        let a = arr.map((el)=>{
            if(el.id == edit){
                return {...el,...product}
            }else{
                return el;
            }
         })
         setArr(a)
         setEdit("")
         setProduct({
            title : "",
            price : "",
            des : "",
            image : ""
        })
     }
    }
    const handleDelete = (deleteid) =>{
        let a = arr.filter((el)=>{
           if(el.id != deleteid){
            return el;
           }
        })
        setArr(a)
     }
     const handleEdit = (Editid)=>{
        setEdit(Editid)
        arr.forEach((el)=>{
            if(el.id == Editid){
                setProduct({...product,...el})
            }
        })
         
     }

     const hlShort =(el)=>{
        const {value} = el.target
        setArr([...arr])
        setShort(true)   
            
        if(value == "High"){
            const hp = arr.sort((a,b)=>{
                return b.price - a.price
            })
            setArr2(hp)
        }
        if(value == "Low"){
            const lp = arr.sort((a,b)=>{
                return a.price - b.price
            })
            setArr2(lp)
        }
    }
   
  return (
    <center><div>
        <h1><u><i>Product Form</i></u></h1>
        <form action="" onSubmit={handlesubmit}>
             <input type="text" id='in' value={product.title} placeholder='Title' name='title' onChange={handleInputChange}/><br /><br />
             <input type="number" id='in' placeholder='Price' value={product.price} name='price' onChange={handleInputChange}/><br /><br />
             <input type="text" id='in' placeholder='Description' value={product.des} name='des' onChange={handleInputChange}/><br /><br />
             <input type="text" id='in' placeholder='Image URL' value={product.image} name='image' onChange={handleInputChange}/><br /><br />
             <input type="submit" id='bt' value={edit == "" ? "submit" : "Edit"} /><br></br> 
             <select name="" id="" onChange={hlShort}>
                <option value="Price Shortting">Price Shortting</option>
                <option value="High">Hight</option>
                <option value="Low">Low</option>
             </select>
             
        </form>
        <ProductList arr={arr} handleDelete={handleDelete} handleEdit={handleEdit} arr2={arr2} short={short}/>
    </div>
    </center>
  )
}

export default ProductForm

