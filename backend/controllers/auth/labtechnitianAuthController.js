const LabTechnitian = require("../../models/labtechnitianModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signup = async(req, res, next) => {
    
    try {
        req.body.password = await bcrypt.hash(req.body.password, 11);

        const {name, email, phone, password, address, hospital, profile} = req.body;

        const labtechnitian = await LabTechnitian.create({
            name, email, phone, password, address, hospital, profile
        });

        res.status(201).json({
            message : `Hello ${name}, your account has been created`,
            labtechnitian, 
        })

    } catch (error) {
        res.status(401).json({
            message: "Something went wrond to sign up",
            error,
        });
        
    }
}



// log in


exports.login = async (req, res, next) =>{
    // res.send("hello, i am from log in");

    let success = false;
    const {email, password} = req.body;
    try {
        const user = await LabTechnitian.findOne({email});
        
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
        
        const token = jwt.sign({email, _id: user._id}, process.env.PRIVATE_KEY);
        success = true;

        res.status(200).json({
            message : "login successful",
            token,
            success
        })

    } catch (error) {
        res.status(404).json({
            message : "Not found",
        });
    }
}