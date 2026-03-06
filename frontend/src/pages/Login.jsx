
import React,{useState} from "react"

export default function Login(){

const [msg,setMsg]=useState("")

const login=async()=>{

const res=await fetch("http://localhost:5000/api/auth/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username:"admin",password:"admin"})
})

const data=await res.json()
setMsg(JSON.stringify(data))

}

return(
<div style={{padding:"20px"}}>
<h2>Login Admin</h2>
<button onClick={login}>Login</button>
<p>{msg}</p>
</div>
)
}
