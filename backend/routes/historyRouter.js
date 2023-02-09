const {getPatientHistory, getDiagnosisHistory, createPatientHistory} = require("../controllers/historyController");

const patientHistoryRouter = require("express").Router();

patientHistoryRouter.get("", getPatientHistory);
patientHistoryRouter.get("/diagnosis", getDiagnosisHistory);
patientHistoryRouter.post("/createHistory", createPatientHistory);
module.exports = patientHistoryRouter;