const mongoose = require("mongoose")
const userName = new mongoose.Schema({

    "firstName": {
        type: String,
        required: true ,
        trim: true
    },

    "lastName": {
        type: String,
        required: true,
        trim: true
    },

    "Mobile":{
        type:String,
        required: true,
        trim: true
    },


    "E-mail":{
        type:String,
        required: true,
        trim: true

    },

    "Password":{
        type:String,
        required: true,
        trim: true

    }

})