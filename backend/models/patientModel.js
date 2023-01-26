const mongoose = require('mongoose');


const patientSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true,
    },
    email : {
        type : String,
        trim : true,
        required : true,
        unique : true,
    },
    phone : {
        type : String,
        trim : true,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        trim : true,
        required : true,
    },
    address : {
        type : String,
        trim : true,
        required : true,
    },
    gender : {
        type : String,
        trim : true,
        required : true,
    },
    profile: {
        type : String,
        default : "avatar.png",
    },
}, {
    timestamps: true,
});


const patientModel = mongoose.model("Patient", patientSchema);

module.exports = patientModel;