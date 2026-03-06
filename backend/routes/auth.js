
const router = require("express").Router()

router.post("/login",(req,res)=>{

const {username,password} = req.body

if(username==="admin" && password==="admin"){
return res.json({
status:"success",
token:"demo-jwt-token",
role:"admin"
})
}

res.status(401).json({status:"failed"})
})

module.exports = router
