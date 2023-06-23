const mongoose = require('mongoose')

const data = mongoose.Schema({
    
    title: {
        type:String
    },
    description:{
        type:String
    }
})

module.exports = mongoose.model("data",data)