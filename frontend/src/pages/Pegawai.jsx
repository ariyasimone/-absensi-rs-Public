
import React,{useEffect,useState} from "react"

export default function Pegawai(){

const [pegawai,setPegawai]=useState([])

useEffect(()=>{

fetch("http://localhost:5000/api/pegawai")
.then(res=>res.json())
.then(data=>setPegawai(data.pegawai))

},[])

return(

<div style={{padding:"20px"}}>

<h2>Data Pegawai</h2>

<ul>
{pegawai.map((p,i)=>(
<li key={i}>{p.nama} - {p.jabatan}</li>
))}
</ul>

</div>

)

}
