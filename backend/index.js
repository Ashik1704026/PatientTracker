const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const doctorAuthRouter = require('./routes/auth/doctorAuthRouter');
const patientAuthRouter = require('./routes/auth/patientAuthRouter');
const labtechnitianAuthRouter = require('./routes/auth/labtechnitianAuthRouter');
const referenceRouter = require('./routes/referenceRouter');
const patientHistoryRouter = require('./routes/historyRouter');




dotenv.config();
mongoose.set('strictQuery', true);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors({
    origin: '*'
}));



const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`);
    connectDB();
})




// routes

app.use("/api/auth", doctorAuthRouter);
app.use("/api/auth", patientAuthRouter);
app.use("/api/auth", labtechnitianAuthRouter);

app.use("/api/reference", referenceRouter);
app.use("/api/history", patientHistoryRouter);