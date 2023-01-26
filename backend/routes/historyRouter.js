const {getPatientHistory, createPatientHistory} = require("../controllers/historyController");

const patientHistoryRouter = require("express").Router();

patientHistoryRouter.get("", getPatientHistory);
patientHistoryRouter.post("/createHistory", createPatientHistory);
module.exports = patientHistoryRouter;