const mongoose = require('mongoose');

const symptomsSchema = new mongoose.Schema({
    referenceId : {
        type : Number,
        trim : true,
        unique : true
    },
    symptoms : {
        type : Array,
        trim : true,
    }
},{
    timestamps : true,
});

const symptomsModel = mongoose.model("Symptoms", symptomsSchema);

module.exports = symptomsModel;