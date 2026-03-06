
import React,{useState} from "react"

export default function Presensi(){

const [msg,setMsg]=useState("")

const checkin=async()=>{

const res=await fetch("http://localhost:5000/api/absensi/checkin",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({pegawai:"pegawai_demo"})
})

const data=await res.json()
setMsg(JSON.stringify(data))

}

return(

<div style={{padding:"20px"}}>

<h2>Presensi Pegawai</h2>

<button onClick={checkin}>Check In</button>

<p>{msg}</p>

</div>

)

}
