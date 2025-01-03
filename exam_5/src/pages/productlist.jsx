import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Productlist() {

  const [productlist,setProductlist] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/products`)
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      setProductlist(res);
    })
    .catch((err)=>{
      console.log(err);
      
    })
  },[productlist])

  const Delete = (Iddelete) =>{
    fetch(`http://localhost:3000/products/${Iddelete}`,{
      method : "DELETE",
    })
    .then((res)=>{
      console.log(res);
      
    })
  }

  return (
    <div>
      {productlist.map((el)=>{
        return <div key={el.id}>
          <img src={el.proimg} alt="" />
          <h1>{el.proname}</h1>
          <h3>{el.proprice}</h3>
          <p>{el.prodis}</p>
          <button onClick={()=>{Delete(el.id)}}>DELETE</button>
          <Link to={`/editform/${el.id}`}><button>Edit</button></Link>
          </div>
      })}
    </div>
  )
}

export default Productlist