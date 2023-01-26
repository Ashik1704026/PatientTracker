const { signup, login } = require("../../controllers/auth/labtechnitianAuthController");

const labtechnitianAuthRouter = require("express").Router();

labtechnitianAuthRouter.post("/labtechnitian/signup", signup);
labtechnitianAuthRouter.post("/labtechnitian/login", login)

module.exports = labtechnitianAuthRouter;