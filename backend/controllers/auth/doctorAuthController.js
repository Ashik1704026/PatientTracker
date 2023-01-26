const Doctor = require("../../models/doctorModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signup = async(req, res, next) => {
    
    try {
        req.body.password = await bcrypt.hash(req.body.password, 11);

        const {name, email, phone, password, address, hospital, designation, specialization, profile} = req.body;

        const doctor = await Doctor.create({
            name, email, phone, password, address, hospital, designation, specialization, profile,
        });

        res.status(201).json({
            message : `Hello ${name}, your account has been created`,
            doctor, 
        })

    } catch (error) {
        res.status(401).json({
            message: "Something went wrond to sign up",
            error,
        });
        
    }
}



exports.login = async (req, res, next) =>{
    // res.send("hello, i am from log in");

    const {email, password} = req.body;
    try {
        const user = await Doctor.findOne({email});
        
        if(!user){
            return res.status(401).json({
                message : "Wrong credential",
            });
        }

        const validated = await bcrypt.compare(password, user.password);
        
        if(!validated){
            return res.status(400).json({
                message : "Password does not match",
            });
        }
        
        const token = jwt.sign({email, _id: user._id}, process.env.PRIVATE_KEY, {expiresIn: "2h"});

        // cookie start
        res.cookie("jwt", token,{
            // expiresIn : "1h",
            // httpOnly : true,
        });
        // cookie end

        res.status(200).json({
            message : "login successful",
            token,
            user,
        })

    } catch (error) {
        res.status(404).json({
            message : "Not found",
        });
    }
}