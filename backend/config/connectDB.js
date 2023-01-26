const mongoose = require("mongoose");

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Database connect success");
    } catch (error) {
        console.log("Databse connection fail");
    }
}


module.exports = connectDB;