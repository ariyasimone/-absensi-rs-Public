
import {useEffect,useState} from "react"

export default function AdminDashboard(){

const [data,setData] = useState([])

useEffect(()=>{
fetch("http://localhost:5000/api/absensi")
.then(res=>res.json())
.then(res=>setData(res))
},[])

return(
<div style={{padding:40}}>
<h2>Dashboard Admin</h2>
<table border="1" cellPadding="10">
<thead>
<tr>
<th>Nama</th>
<th>NIP</th>
<th>Status</th>
<th>Foto</th>
</tr>
</thead>
<tbody>
{data.map((d,i)=>(
<tr key={i}>
<td>{d.nama}</td>
<td>{d.nip}</td>
<td>{d.status}</td>
<td>{d.photo && <img src={`http://localhost:5000/uploads/${d.photo}`} width="60"/>}</td>
</tr>
))}
</tbody>
</table>
</div>
)
}
