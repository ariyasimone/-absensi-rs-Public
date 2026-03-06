
const mongoose = require("mongoose")

const schema = new mongoose.Schema({
nama:String,
nip:String,
password:String,
role:{type:String,default:"pegawai"},
shift:String,
created:{type:Date,default:Date.now}
})

module.exports = mongoose.model("User",schema)
