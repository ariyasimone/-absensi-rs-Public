
const mongoose = require("mongoose")

const schema = new mongoose.Schema({
nama:String,
jam_masuk:String,
jam_pulang:String
})

module.exports = mongoose.model("Shift",schema)
