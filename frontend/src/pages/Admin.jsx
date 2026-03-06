
import {useEffect,useState} from "react"

export default function Admin(){

const [data,setData] = useState([])

useEffect(()=>{

fetch(import.meta.env.VITE_API+"/api/absensi")
.then(res=>res.json())
.then(res=>setData(res))

},[])

return(

<div style={{padding:40}}>

<h2>Dashboard Admin</h2>

<table border="1">

<thead>

<tr>
<th>Nama</th>
<th>NIP</th>
<th>Status</th>
</tr>

</thead>

<tbody>

{data.map((d,i)=>(

<tr key={i}>
<td>{d.nama}</td>
<td>{d.nip}</td>
<td>{d.status}</td>
</tr>

))}

</tbody>

</table>

</div>

)

}
