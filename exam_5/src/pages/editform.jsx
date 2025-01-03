import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Editform() {

    const {idd} = useParams()

    console.log(idd);
    
    const navigate = useNavigate()

    const [edit,setEdit] = useState({
        proimg : "",
      proname : "",
      proprice : "",
      prodis : ""
    })

    const handleChange=(e)=>{
        const {name,value} = e.target
        setEdit({...edit,[name] : value})
    }

    useEffect(()=>{
       fetch(`http://localhost:3000/products/${idd}`)
       .then((res)=>res.json())
       .then((res)=>{
        console.log(res);
        setEdit(res)
       })
       .catch((err)=>{
        console.log(err);
        
       })
    },[])

  const handleSubmit=(p)=>{
    p.preventDefault()

    fetch(`http://localhost:3000/products/${idd}`,{
        method : "PUT",
        headers : {"Content-Type" : "Application/json" },
        body : JSON.stringify(edit)
    })
    navigate("/productlist")
  }

  return (
    <div>
        <h1>Edit form</h1>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" name='proimg' value={edit.proimg} placeholder='productimage' onChange={handleChange}/><br />
        <input type="text" name='proname' value={edit.proname} placeholder='productname' onChange={handleChange}/><br />
        <input type="text" name='proprice' value={edit.proprice} placeholder='productprice' onChange={handleChange}/><br />
        <input type="text" name='prodis' value={edit.prodis} placeholder='productdiscription' onChange={handleChange}/><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Editform