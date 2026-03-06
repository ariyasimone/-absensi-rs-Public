
const router = require("express").Router()

router.get("/monthly",(req,res)=>{

res.json({
present:250,
late:12,
absent:6
})

})

module.exports = router
