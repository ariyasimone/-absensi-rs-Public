
import {useState} from "react"

export default function UserDashboard(){

const [photo,setPhoto] = useState(null)
const [preview,setPreview] = useState(null)

const handlePhoto=(e)=>{
const file=e.target.files[0]
setPhoto(file)
setPreview(URL.createObjectURL(file))
}

const presensi=()=>{

navigator.geolocation.getCurrentPosition(async(pos)=>{

const formData = new FormData()

formData.append("nama","pegawai")
formData.append("nip","0001")
formData.append("latitude",pos.coords.latitude)
formData.append("longitude",pos.coords.longitude)
formData.append("photo",photo)

await fetch("http://localhost:5000/api/absensi",{
method:"POST",
body:formData
})

alert("Presensi berhasil")

})

}

return(
<div style={{padding:40}}>
<h2>Dashboard Pegawai</h2>
<input type="file" accept="image/*" onChange={handlePhoto}/>
<br/><br/>
{preview && <img src={preview} width="200"/>}
<br/><br/>
<button onClick={presensi}>PRESENSI</button>
</div>
)
}
