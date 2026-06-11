import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AddVisitForm from "../components/visit/AddVisitForm";
import api from "../services/api";
import VisitList from "../components/visit/VisitList";
import EditPatientForm from "../components/patient/EditPatientForm";
import "../components/visit/visit.css";
import "./PatientDetails.css";

function PatientDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [patient, setPatient] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // get patient detail in edit form
  const fetchPatient = async () => {
    try {
      const response = await api.get(`/patients/${id}`);

      setPatient(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPatient();
  }, []);

  if (!patient) {
    return <h2 className="m-4">Loading...</h2>;
  }

  // delete patient
  const handleDelete = async () => {
    try {
      await api.delete(`/patients/${patient._id}`);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="patient-layout">
      <div className="patient-left">
        <div className="custom-card">
          <h2>{patient.name}</h2>

          <p>Age: {patient.age}</p>

          <p>Gender: {patient.gender}</p>

          <button
            className="btn btn-warning mt-3"
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit Patient
          </button>

          <button className="btn btn-danger mt-3 ms-2" onClick={handleDelete}>
            Delete Patient
          </button>
        </div>

        {isEditing && (
          <EditPatientForm
            patient={patient}
            fetchPatient={fetchPatient}
            setIsEditing={setIsEditing}
          />
        )}

        <AddVisitForm patientId={id} fetchPatient={fetchPatient} />
      </div>

      <div className="patient-right">
        <VisitList
          visits={patient.visits}
          patientId={patient._id}
          fetchPatient={fetchPatient}
        />
      </div>
    </div>
  );
}

export default PatientDetails;
