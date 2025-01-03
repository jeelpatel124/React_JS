import React, { useState } from 'react'
import Signup from './signup'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {

  const [login,setLogin] = useState({
    email : "",
    password : ""
  })

  const handleChange=(e)=>{
    const {name,value} = e.target
    setLogin({...login,[name] : value})
  }

  const Navigate = useNavigate()

  const handleSubmit=(j)=>{
    j.preventDefault()
    
    fetch(`http://localhost:3000/user?email=${login.email}`)
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      if(res.length>0){
        if(res[0].password == login.password){
          alert("login successfully")
          localStorage.setItem("isLogin",true)
          Navigate("/product")
        }else{
          alert("worng password")
        }
      }
    })
    .catch((err)=>{
      console.log(err);
      
    })
  }

  return (
    <div>
      <center>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='email' placeholder='email' onChange={handleChange}/><br /><br />
        <input type="text" name='password' placeholder='password' onChange={handleChange}/><br /><br />
        <input type="submit" />
      </form>
      </center>
    </div>
  )
}

export default Login