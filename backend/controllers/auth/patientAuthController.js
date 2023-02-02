const Patient = require("../../models/patientModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signup = async(req, res, next) => {
    
    try {
        req.body.password = await bcrypt.hash(req.body.password, 11);

        const {name, email, phone, password, address, gender, profile} = req.body;

        const patient = await Patient.create({
            name, email, phone, password, address, gender, profile
        });

        res.status(201).json({
            message : `Hello ${name}, your account has been created`,
            patient, 
        })

    } catch (error) {
        res.status(401).json({
            message: "Something went wrong to sign up",
            error,
        });
        
    }
}



// log in


exports.login = async (req, res, next) =>{
    // res.send("hello, i am from log in");
    success=false;
    const {email, password} = req.body;
    try {
        const user = await Patient.findOne({email});
        
        if(!user){
            return res.status(401).json({
                message : "Wrong credential",
                success
            });
        }

        const validated = await bcrypt.compare(password, user.password);
        
        if(!validated){
            return res.status(400).json({
                message : "Password does not match",
                success
            });
        }
        const patientId = user._id;
        
        const token = jwt.sign({email, _id: user._id}, process.env.PRIVATE_KEY, {expiresIn: "2h"});
        success=true
        res.status(200).json({
            message : "login successful",
            token,
            patientId,
            success
        })

    } catch (error) {
        res.status(404).json({
            message : "Not found",
            success
        });
    }
}