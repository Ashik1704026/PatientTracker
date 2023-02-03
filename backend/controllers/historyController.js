const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Symptom = require("../models/symptomsModel");
const Reference = require("../models/referenceModel");
const Histories = require("../models/historyModel");
const Doctor = require("../models/doctorModel");
const Patient = require("../models/patientModel");
const  ObjectId = require('mongodb').ObjectId;




// counter table for auto increment.....
const refereceCounterSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    seq: {
        type: Number,
    },
}, {
    timestamps: true,
});

const refereceCounterModel = mongoose.model("ReferenceCounter", refereceCounterSchema);
// counter table end here





exports.getPatientHistory = async(req, res, next) =>{
    const {patientId} = req.query;
    let flag = false;
    try {
                    // finding reference id with corresponding history

        // const referece = await Reference.find({patientId},{referenceId: 1, _id: 0});
        // let refId = [];

        // for (var i = 0; i < referece.length; i++) {
        //     var object = referece[i];
        //     refId.push(object.referenceId);
        // }

        // let symptoms;
        // if(refId){
        //     symptoms = await Symptom.find({
        //         referenceId : {
        //             $in : refId,
        //         }
        //     })
        // }
                        // end

        // const doctor = await Histories.aggregate([
        //     {$match: {patientId: patientId}},
        //     {$group:{_id: "$doctorId"}}], {doctorId : 1, _id : 0});


        const history = await Histories.aggregate([
            {$match: {patientId: ObjectId(patientId)}},
            {
                $lookup:{
                from: "doctors",
                localField: "doctorId",
                foreignField: "_id",
                as: "doctorInfo"
                }
            },
            {
                "$unwind": "$doctorInfo"
            },
            {
                $project: {
                "_id": 0,
                "doctorId": 0,
                "patientId": 0,
                "updatedAt": 0,
                "__v": 0,
                "doctorInfo._id": 0,
                "doctorInfo.email": 0,
                "doctorInfo.phone": 0,
                "doctorInfo.password": 0,
                "doctorInfo.address": 0,
                "doctorInfo.specialization": 0,
                "doctorInfo.profile": 0,
                "doctorInfo.createdAt": 0,
                "doctorInfo.updatedAt": 0,
                "doctorInfo.__v": 0,
                }
            }
        ]);

        const patientInfo = await Patient.findOne({patientId}, {name : 1, _id : 0});

        flag = true;
        res.status(200).json({
            message: "Successfully get symptoms",
            patientInfo,
            history,
            flag
        });
    } catch (error) {
        res.status(400).json({
            message: "Something went wrong",
            error,
            flag
        })
    }
};




exports.createPatientHistory = async(req, res) => {
    // const sToken = req.cookies.jwt;
    // const decode = jwt.verify(sToken, process.env.PRIVATE_KEY);

    try {
        let counterModel;
        counterModel = await refereceCounterModel.findOneAndUpdate(
            {id : "autoval"},
            {"$inc" : {"seq" : 1}},
            {new : true}
        );
        if(counterModel == null){
            counterModel  = await refereceCounterModel.create({
                id : "autoval",
                seq : 1,
            });
        }

        const referenceId = counterModel.seq + 100000;
        const {doctorToken, patientId, symptoms, medicines, vitalInfo, diagnosis} = req.body;

        const decode = jwt.verify(doctorToken, process.env.PRIVATE_KEY);
        const doctorId = decode._id;

        const history = await Histories.create({
            doctorId, patientId, referenceId, symptoms, medicines,vitalInfo, diagnosis
        });

        // console.log(history)
        res.status(200).json({
            message: "Successfully create history",
            history
        });
        
    } catch (error) {
        res.status(400).json({
            message: "Something went wrong to create history",
            error,
        })
    }
}