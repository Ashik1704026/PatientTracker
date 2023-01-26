const mongoose = require('mongoose');


const labtechnitianSchema = new mongoose.Schema({
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
    profile: {
        type : String,
        default : "avatar.png",
    },
}, {
    timestamps: true,
});


const labtechnitianModel = mongoose.model("LabTechnitian", labtechnitianSchema);

module.exports = labtechnitianModel;