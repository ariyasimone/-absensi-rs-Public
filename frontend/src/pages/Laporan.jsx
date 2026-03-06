
import React,{useEffect,useState} from "react"

export default function Laporan(){

const [data,setData]=useState({})

useEffect(()=>{

fetch("http://localhost:5000/api/laporan/harian")
.then(res=>res.json())
.then(setData)

},[])

return(

<div style={{padding:"20px"}}>

<h2>Laporan Harian</h2>

<p>Total Hadir: {data.total_hadir}</p>
<p>Total Pegawai: {data.total_pegawai}</p>

</div>

)

}
