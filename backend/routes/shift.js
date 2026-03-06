
const router = require("express").Router()

router.get("/",(req,res)=>{

res.json([
{nama:"Shift Pagi",jam:"07:00-14:00"},
{nama:"Shift Sore",jam:"14:00-21:00"},
{nama:"Shift Malam",jam:"21:00-07:00"}
])

})

module.exports = router
