const { signup, login } = require("../../controllers/auth/doctorAuthController");

const dcotorAuthRouter = require("express").Router();

dcotorAuthRouter.post("/doctor/signup", signup);
dcotorAuthRouter.post("/doctor/login", login)

module.exports = dcotorAuthRouter;