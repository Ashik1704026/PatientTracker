const {getPatientHistory, getDiagnosisHistory, createPatientHistory, updateDiagnosis} = require("../controllers/historyController");

const patientHistoryRouter = require("express").Router();

patientHistoryRouter.get("", getPatientHistory);
patientHistoryRouter.get("/diagnosis", getDiagnosisHistory);
patientHistoryRouter.post("/createHistory", createPatientHistory);
patientHistoryRouter.put("/upload", updateDiagnosis);
module.exports = patientHistoryRouter;