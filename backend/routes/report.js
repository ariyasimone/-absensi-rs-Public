
const router = require("express").Router()
const Absensi = require("../models/Absensi")

router.get("/summary",async(req,res)=>{

const total = await Absensi.countDocuments()

res.json({
total_presensi:total
})

})

module.exports = router
