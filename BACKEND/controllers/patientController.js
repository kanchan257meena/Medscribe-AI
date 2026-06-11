const Patient = require("../models/Patient");
const asyncWrapper = require("../utils/asyncWrapper");
const customError = require("../utils/customError");

const addPatient = asyncWrapper(async (req, res) => {
  const patient = await Patient.create(req.body);

  res.status(201).json(patient);
});

const getPatients = asyncWrapper(async (req, res) => {
  const patients = await Patient.find();

  res.status(200).json(patients);
});


// get patient
const getPatientById = asyncWrapper(async (req, res) => {
  const patient = await Patient.findById(req.params.id);
 if (!patient) {
    throw customError("Patient not found", 404);
  }
  res.status(200).json(patient);
});

const updatePatient = asyncWrapper(async (req, res) => {
  const updatedPatient = await Patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  if (!updatedPatient) {
    return res.status(404).json({
      message: "Patient not found",
    });
  }

  res.status(200).json(updatedPatient);
});

// Delete Patient
const deletePatient = asyncWrapper(async (req, res) => {
  const deletedPatient = await Patient.findByIdAndDelete(req.params.id);

  if (!deletedPatient) {
    return res.status(404).json({
      message: "Patient not found",
    });
  }
  res.status(200).json({
    message: "Patient deleted successfully",
  });
});

module.exports = {
  addPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};
