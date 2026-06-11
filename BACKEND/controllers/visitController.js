const Patient = require("../models/Patient");
const extractSymptoms = require("../utils/extractSymptoms");
const generateSoap = require("../utils/generateSoap");
const asyncWrapper = require("../utils/asyncWrapper");
const customError = require("../utils/customError");

// add a new visit
const addVisit = asyncWrapper(async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  if (!patient) {
    return res.status(404).json({
      message: "Patient not found",
    });
  }

  if (!req.body.transcript) {
    return res.status(400).json({
      message: "Transcript is required",
    });
  }

  const { transcript } = req.body;

  const symptoms = extractSymptoms(transcript);

  const soapNote = generateSoap(transcript, symptoms);

  patient.visits.push({
    transcript,
    symptoms,
    soapNote,
  });

  await patient.save();

  res.status(201).json({
    message: "Visit added successfully",
    visit: patient.visits[patient.visits.length - 1],
  });
});

// upadate an existing visit
const updateVisit = asyncWrapper(async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  if (!patient) {
  throw customError("Patient not found", 404);
}

  const visit = patient.visits.id(req.params.visitId);
 if (!visit) {
  throw customError("Visit not found", 404);
}

  Object.assign(visit, req.body);

  await patient.save();

  res.status(200).json({
    message: "Visit updated successfully",
    visit,
  });
});

// delete a visit
const deleteVisit = asyncWrapper(async (req, res) => {
 
  const patient = await Patient.findById(req.params.id);


  if (!patient) {
    return res.status(404).json({
      message: "Patient not found",
    });
  }

  patient.visits.pull(req.params.visitId);



try {

  await patient.save();

  console.log("after save");

} catch (err) {

  console.log(err);

}



  res.status(200).json({
    message: "Visit deleted successfully",
  });
});

module.exports = {
  addVisit,
  updateVisit,
  deleteVisit,
};
