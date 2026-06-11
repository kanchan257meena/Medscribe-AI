import VisitCard from "./VisitCard";
import "./visit.css";


function VisitList({ visits, patientId, fetchPatient }) {
  if (visits.length === 0) {
    return (
      <div className="card p-4 mt-4">
        <h3 className="mb-3">Visit History</h3>

        <p>No visits added yet.</p>
      </div>
    );
  }

  return (
  <div className="custom-card visit-list-wrapper">

  <div className="visit-list-header">

    <h3 className="section-title">
      Visit History
    </h3>

    <p className="muted-text">
      Review previous consultations,
      SOAP notes, and visit records.
    </p>

  </div>

  <div className="visit-list-content">

    {visits.map((visit) => (

      <VisitCard
        key={visit._id}
        visit={visit}
        patientId={patientId}
        fetchPatient={fetchPatient}
      />

    ))}

  </div>

</div>
  );
}

export default VisitList;
