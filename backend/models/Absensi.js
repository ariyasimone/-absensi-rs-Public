
const mongoose = require("mongoose")

const schema = new mongoose.Schema({
nama:String,
nip:String,
latitude:Number,
longitude:Number,
photo:String,
status:String,
waktu:{type:Date,default:Date.now}
})

module.exports = mongoose.model("Absensi",schema)
