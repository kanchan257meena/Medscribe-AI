import api from "../../services/api";
import { useState } from "react";
import SOAPPreview from "./SOAPPreview";
import SOAPEditForm from "./SOAPEditForm";
import "./visit.css";

function VisitCard({ visit, patientId, fetchPatient }) {
  const [showFullTranscript, setShowFullTranscript] = useState(false);
  // to controll soap edit errors
  const [editError, setEditError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  // loading after updating to disable save button
  const [updateLoading, setUpdateLoading] = useState(false);
  const [editData, setEditData] = useState({
    transcript: visit.transcript,

    symptoms: visit.symptoms,

    soapNote: {
      subjective: visit.soapNote?.subjective || "",

      objective: visit.soapNote?.objective || "",

      assessment: visit.soapNote?.assessment || "",

      plan: visit.soapNote?.plan || "",
    },
  });

  // Edit visit
  const handleUpdate = async () => {
    setEditError("");
    if (
      !editData.soapNote.subjective.trim() ||
      !editData.soapNote.objective.trim() ||
      !editData.soapNote.assessment.trim() ||
      !editData.soapNote.plan.trim()
    ) {
      setEditError("All SOAP fields are required.");

      return;
    }
    setUpdateLoading(true);
    try {
      await api.put(
        `/patients/${patientId}/visits/${visit._id}`,

        editData,
      );

      fetchPatient();

      setIsEditing(false);
      setUpdateLoading(false);
    } catch (error) {
      console.log(error);
      setUpdateLoading(false);
    }
  };

  // Delete visit
  const handleDelete = async () => {
    try {
      await api.delete(`/patients/${patientId}/visits/${visit._id}`);

      fetchPatient();
    } catch (error) {
      console.log(error);
    }
  };

  // Edit card
  if (isEditing) {
    return (
      <SOAPEditForm
        editData={editData}
        setEditData={setEditData}
        handleUpdate={handleUpdate}
        setIsEditing={setIsEditing}
        editError={editError}
        updateLoading={updateLoading}
      />
    );
  }

  const transcriptPreview = visit.transcript.slice(0, 120);

  return (

    // returning the card
    <div className="transcript-box">
      
      <p className="text-muted small mb-3">
        Visit Date:
        {new Date(visit.visitDate).toLocaleString()}
      </p>

      {/* TransStrip */}
      <div className="visit-card">
        <h6 className="fw-bold">Doctor Transcript</h6>

        <p className="mb-2">
          {showFullTranscript ? visit.transcript : `${transcriptPreview}...`}
        </p>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => setShowFullTranscript(!showFullTranscript)}
        >
          {showFullTranscript ? "Show Less" : "Show More"}
        </button>
      </div>

      <p>
        <strong>Symptoms:</strong>
      </p>

      {/* Symptoms card  */}
      <div className="mb-3">
        <h6 className="fw-bold">Extracted Symptoms</h6>

        <div className="d-flex gap-2 flex-wrap">
          {visit.symptoms.map((symptom, index) => (
            <span key={index} className="badge bg-primary">
              {symptom}
            </span>
          ))}
        </div>
      </div>

      {/* Soap preview */}
      <SOAPPreview soapNote={visit.soapNote} />

      <button
        className="btn btn-warning mt-2 me-2"
        onClick={() => setIsEditing(true)}
      >
        Edit Visit
      </button>
      <button className="btn btn-danger mt-2" onClick={handleDelete}>
        Delete Visit
      </button>
    </div>
  );
}

export default VisitCard;
