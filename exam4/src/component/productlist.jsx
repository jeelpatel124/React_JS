import React from 'react'

function ProductList({arr,handleDelete, handleEdit, arr2, short}) {
   
  return (
    <div>
        { short== false ?  arr.map((el)=>{
            return <div key={el.id}>
                 <img  src={el.image} alt="" width={"250px"} />
                 <h1>{el.title}</h1>
                 <p>₹{el.price}</p>
                 <p>{el.des}</p>
                 <button onClick={()=>{handleDelete(el.id)}}>Delete</button>
                 <button onClick={()=>handleEdit(el.id)}>Edit</button>
            </div>
          }) :  arr2.map((el)=>{
            return <div key={el.id}>
                 <img  src={el.image} alt="" width={"250px"} />
                 <h1>{el.title}</h1>
                 <p>₹{el.price}</p>
                 <p>{el.des}</p>
                 <button onClick={()=>{handleDelete(el.id)}}>Delete</button>
                 <button onClick={()=>handleEdit(el.id)}>Edit</button>
            </div>
          }) }
       
    </div>
  )
}

export default ProductList