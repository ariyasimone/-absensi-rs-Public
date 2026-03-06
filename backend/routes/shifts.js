
const router = require("express").Router()
const Shift = require("../models/Shift")

router.get("/",async(req,res)=>{
const shifts = await Shift.find()
res.json(shifts)
})

router.post("/",async(req,res)=>{
const shift = new Shift(req.body)
await shift.save()
res.json(shift)
})

module.exports = router
