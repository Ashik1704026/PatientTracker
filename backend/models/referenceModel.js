const mongoose = require('mongoose');

const referenceSchema = new mongoose.Schema({
    doctorId : {
        type : String,
        trim : true,
        required : true
    },
    patientId : {
        type : String,
        trim : true,
        required : true,
    },
    labtechnitianId : {
        type : String,
        trim : true,
        default : "No Lab Test Given",
    },
    referenceId : {
        type : Number,
        trim : true,
        unique : true
    },
},{
    timestamps : true,
});

const referenceModel = mongoose.model("Reference", referenceSchema);

module.exports = referenceModel;