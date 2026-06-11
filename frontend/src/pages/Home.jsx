import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/global.css";
import "./Home.css";

import AddPatientForm from "../components/patient/AddPatientForm";
import PatientList from "../components/patient/PatientList";

function Home() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPatients = async () => {
    try {
      const response = await api.get("/patients");

      setPatients(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // filer the patient array as per the searchTerm {"kanchan".includes("kan")}
  const filteredPatients = patients.filter((patient) =>
    patient.name
    .toLowerCase()
    .includes(searchTerm.trim().toLowerCase()),
  );

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Clinical Dashboard</h1>
        <p className="dashboard-subtitle">
          Manage patients and clinical records
        </p>
      </div>

      {/* add patient form */}
      <div className="dashboard-content">
        <div className="dashboard-sidebar">
          <AddPatientForm fetchPatients={fetchPatients} />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search patient..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Patient List */}
        <div className="dashboard-main">
          <PatientList patients={filteredPatients} />
        </div>
      </div>
    </div>
  );
}

export default Home;
