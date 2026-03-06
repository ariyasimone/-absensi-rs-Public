
const router = require("express").Router()

router.post("/checkin",(req,res)=>{

const {pegawai,gps} = req.body

res.json({
status:"checkin",
pegawai,
gps,
time:new Date()
})

})

router.post("/checkout",(req,res)=>{

const {pegawai} = req.body

res.json({
status:"checkout",
pegawai,
time:new Date()
})

})

router.get("/today",(req,res)=>{

res.json({
present:13,
late:2,
absent:4
})

})

module.exports = router
