
import React,{useEffect,useState} from "react"

export default function Dashboard(){

const [data,setData] = useState({})

useEffect(()=>{

fetch("http://localhost:5000/api/absensi/today")
.then(res=>res.json())
.then(setData)

},[])

return(

<div className="p-5 space-y-5 pb-20">

<div className="flex gap-3">

<button className="flex-1 bg-blue-600 text-white py-3 rounded-xl">
Check In
</button>

<button className="flex-1 bg-red-500 text-white py-3 rounded-xl">
Check Out
</button>

</div>

<div className="bg-gray-100 p-4 rounded-xl">

<h3 className="font-semibold">Work Time</h3>
<p className="text-gray-600">08:00 AM - 05:00 PM</p>

</div>

<div>

<h3 className="font-semibold mb-3">Attendance This Month</h3>

<div className="grid grid-cols-3 gap-3">

<div className="bg-green-100 p-4 rounded-xl text-center">
<p className="text-sm text-gray-600">Present</p>
<p className="text-xl font-bold text-green-600">{data.present}</p>
</div>

<div className="bg-yellow-100 p-4 rounded-xl text-center">
<p className="text-sm text-gray-600">Late</p>
<p className="text-xl font-bold text-yellow-600">{data.late}</p>
</div>

<div className="bg-red-100 p-4 rounded-xl text-center">
<p className="text-sm text-gray-600">Absent</p>
<p className="text-xl font-bold text-red-600">{data.absent}</p>
</div>

</div>

</div>

<div className="bg-white border p-4 rounded-xl">

<h3 className="font-semibold mb-2">Selfie Absensi</h3>

<input type="file" accept="image/*" capture="user"/>

</div>

<div className="bg-white border p-4 rounded-xl">

<h3 className="font-semibold mb-2">GPS Lokasi</h3>

<button className="bg-blue-500 text-white px-4 py-2 rounded">
Ambil Lokasi
</button>

</div>

</div>

)
}
