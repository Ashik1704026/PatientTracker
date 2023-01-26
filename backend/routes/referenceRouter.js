const {createReference} = require("../controllers/referenceController");

const referenceRouter = require("express").Router();

referenceRouter.post("/createReference", createReference);

module.exports = referenceRouter;