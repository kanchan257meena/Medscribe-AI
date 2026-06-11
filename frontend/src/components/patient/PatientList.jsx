import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./patient.css";

function PatientList({ patients }) {
  function getInitials(name) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  return (
    <div className="custom-card patient-list-wrapper">
      <div className="patient-list-header">
        <h3 className="section-title">Patient list</h3>
        <p className="section-desc">View and manage all registered patients.</p>
      </div>

      <div className="patient-list-divider" />

      <div className="patient-list-content">
        {patients.length === 0 ? (
          <div className="muted-text">No patients found.</div>
        ) : (
          patients.map((patient) => {
            const gender = patient.gender?.toLowerCase();
            const isFemale = gender === "female";

            const lastVisit = patient.visits?.at(-1)?.visitDate;

            return (
              <div key={patient._id} className="patient-card">
                <div
                  className={`patient-avatar ${isFemale ? "female" : "male"}`}
                >
                  {getInitials(patient.name)}
                </div>

                <div className="patient-info">
                  <p className="patient-name">{patient.name}</p>

                  <p className="patient-meta">
                    Age {patient.age} · {patient.gender} · Last visit:{" "}
                    {lastVisit
                      ? new Date(lastVisit).toLocaleDateString()
                      : "No visits yet"}
                  </p>
                </div>

                <span className={`gender-tag ${isFemale ? "female" : "male"}`}>
                  {patient.gender}
                </span>

                <Link to={`/patient/${patient._id}`} className="view-btn">
                  View ↗
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default PatientList;
