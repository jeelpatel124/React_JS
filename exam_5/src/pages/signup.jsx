import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

  const [signup,setSignup] = useState({
    username : "",
    email : "",
    password : ""
  })

  const handleChange=(e)=>{
    const {name,value} = e.target
    setSignup({...signup,[name] : value})
  }

  const Navigate = useNavigate()

  const handleSubmit=(j)=>{
    j.preventDefault()

    fetch(`http://localhost:3000/user`,{
      method : "POST",
      headers : {"Content-Type" : "Application/json"},
      body : JSON.stringify(signup)
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      Navigate("/login")
    })
    .catch((err)=>{
      console.log(err);
      
    })

    setSignup({
      username : "",
      email : "",
      password : ""
    })
  }

  return (
    <div>
      <center>
      <h1>Signup</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='username' value={signup.username} placeholder='username' onChange={handleChange}/><br /><br />
        <input type="text" name='email' value={signup.email} placeholder='email' onChange={handleChange}/><br /><br />
        <input type="text" name='password' value={signup.password} placeholder='password' onChange={handleChange}/><br /><br />
        <input type="submit" />
      </form>
      </center>
    </div>
  )
}

export default Signup