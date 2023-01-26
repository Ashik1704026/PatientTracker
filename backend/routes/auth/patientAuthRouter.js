const { signup, login } = require("../../controllers/auth/patientAuthController");

const patientAuthRouter = require("express").Router();

patientAuthRouter.post("/patient/signup", signup);
patientAuthRouter.post("/patient/login", login)

module.exports = patientAuthRouter;