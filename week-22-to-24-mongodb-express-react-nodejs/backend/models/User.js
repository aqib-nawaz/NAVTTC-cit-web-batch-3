const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        min: 3,
        max: 30,
        required: true
    },
    email:{
        type: String,
        min : 6,
        max : 20,
        required: true
    },
    password: {
        type: String,
        min: 6,
        max: 20,
        required: true
    },
    address: {
        type: String,
        min : 10,
        max : 100
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("User", userSchema)