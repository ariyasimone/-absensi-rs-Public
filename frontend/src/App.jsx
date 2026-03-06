
import React from "react"
import Dashboard from "./pages/Dashboard.jsx"

export default function App(){

return(
<div className="flex justify-center p-6">

<div className="w-[390px] bg-white rounded-2xl shadow-xl overflow-hidden min-h-screen">

<div className="bg-blue-600 text-white p-5">
<h1 className="text-lg font-semibold">Welcome, Pegawai</h1>
<p className="text-sm opacity-80">Hospital Attendance</p>
</div>

<Dashboard/>

<div className="fixed bottom-0 w-[390px] bg-white border-t flex justify-around py-3 text-sm">
<span>Home</span>
<span>Report</span>
<span>Profile</span>
</div>

</div>

</div>
)
}
