const Reference = require("../models/referenceModel");
const Symptoms = require("../models/symptomsModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");


// counter table for auto increment.....
// const refereceCounterSchema = new mongoose.Schema({
//     id: {
//         type: String,
//     },
//     seq: {
//         type: Number,
//     },
// }, {
//     timestamps: true,
// });

// const refereceCounterModel = mongoose.model("ReferenceCounter", refereceCounterSchema);
// counter table end here


exports.createReference = async (req, res, next) => {

    const sToken = req.cookies.jwt;
    const decode = jwt.verify(sToken, process.env.PRIVATE_KEY);

    try {
        // let counterModel;
        // counterModel = await refereceCounterModel.findOneAndUpdate(
        //     {id : "autoval"},
        //     {"$inc" : {"seq" : 1}},
        //     {new : true}
        // );
        // if(counterModel == null){
        //     counterModel  = await refereceCounterModel.create({
        //         id : "autoval",
        //         seq : 1,
        //     });
        // }

        const doctorId = decode._id;
        const referenceId = counterModel.seq + 100000;
        const { patientId, symptoms} = req.body;

        const referece = await Reference.create({
            doctorId, patientId, referenceId
        });

        const sympModel = await Symptoms.create({
            referenceId, symptoms
        });

        res.status(200).json(({
            message: "Create reference successfully",
            referece,
            sympModel,
        }));

    } catch (error) {
        res.status(401).json({
            message: "Something went wrong to create reference",
            error,
        });
    }

}