
const router = require("express").Router()

router.get("/",(req,res)=>{

res.json({
pegawai:[
{nama:"Dr Andi",jabatan:"Dokter"},
{nama:"Siti",jabatan:"Perawat"},
{nama:"Budi",jabatan:"Admin"}
]
})

})

router.post("/create",(req,res)=>{

const {nama,jabatan} = req.body

res.json({
status:"pegawai dibuat",
nama,
jabatan
})

})

module.exports = router
