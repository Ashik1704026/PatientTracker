const mongoose = require("mongoose");
const  ObjectId = require('mongodb').ObjectId;

const historySchema = new mongoose.Schema({
    referenceId : {
        type : Number,
        trim : true,
        unique : true,
        required : true
    },
    doctorId : {
        type : ObjectId,
        trim : true,
        required : true
    },
    patientId : {
        type : ObjectId,
        trim : true,
        required : true
    },
    technitianId : {
        type : ObjectId,
        trim : true
    },
    symptoms : {
        type : Array,
        trim : true
    },
    medicines : [{
        name : {
            type : String,
            trim: true
        },
        days : {
            type : String,
            trim : true
        },
        time : {
            type : String,
            trim : true
        },
        direction : {
            type : String,
            trim : true
        },
    }],
    diagnosis : [{
        name : {
            type : String,
            trim : true
        },
        result : {
            type : String,
            trim : true,
            default : "Not yet done"
        },
        resultDoc : {
            type : Array,
            trim : true,
            default : "avatar.png"
        },
        done : {
            type : Number,
            trim : true,
            default : 0
        }
    }],
    vitalInfo : {
        sugarLevel : {
            type : String,
            trim : true,
        },
        BP : {
            type : String,
            trim : true
        },
        height : {
            type : String,
            trim : true
        },
        weight : {
            type : String,
            trim : true
        }
    }
},{
    timestamps : true,
});

const historyModel = mongoose.model("Histories", historySchema);

module.exports = historyModel;