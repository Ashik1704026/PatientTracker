const mongoose = require('mongoose');


const doctorSchema = new mongoose.Schema({
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
    hospital : {
        type : String,
        trim : true,
        required : true,
    },
    designation : {
        type : String,
        trim : true,
        required : true,
    },
    specialization : {
        type : Array,
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


const doctorModel = mongoose.model("Doctor", doctorSchema);

module.exports = doctorModel;