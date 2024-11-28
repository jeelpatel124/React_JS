import { useState } from "react"
import './App.css'
function Form (){
    const [flip,setFlip] = useState("")
    const [user,setUser] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [arr,setArr] = useState([])
    const [elogin,setElogin] = useState("")
    const [passlogin,setPasslogin] = useState("")
    const [empty,setEmpty] = useState([])
    function Data(){
        const obj = {
            user,
            email,
            password
        }
        setArr([...arr,obj])
        alert ("Signup successfully")

        setEmpty([...empty,empty.length +1])
        setElogin("")
        setPasslogin("")
        setUser("")
        setEmail("")
        setPassword("")
    }
    console.log(arr)

    
    function Matchdata(){
        const a=arr.filter((el)=>{
            if(el.email == elogin && el.password == passlogin){
                alert ("Login successfully....")
            }else{
                alert ("Worng password")
            }
        })
    }
    return(<div id="main">
        {flip == "hide" ? <div>
            <h1 id="heading">Login</h1>
            <input id="in1" type="text" placeholder="Enter your email" onChange={(e)=>setElogin(e.target.value)} /><br />
            <input id="in2" type="text" placeholder="Enter your password" onChange={(e)=>setPasslogin(e.target.value)}/><br />
            <button id="bt1" onClick={Matchdata}>Login</button><br /><br />
            <span id="letter" onClick={()=> setFlip("show")}>Create Account</span>
            </div>
        : <div>
            <h1 id="heading">Signup</h1>
            <input id="in1" type="text" placeholder="Enter your name" onChange={(e)=>setUser(e.target.value)}/><br />
            <input id="in2" type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br />
            <input id="in2" type="text" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/><br />
            <button id="bt1" onClick={Data}>Signup</button><br /><br />
            <span id="letter" onClick={()=> setFlip("hide")}>Already Account</span>
            </div>



            
        }
    </div>)
}

export default Form
