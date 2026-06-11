import { useState } from "react";
import api from "../../services/api";
import "./patient.css";

function AddPatientForm({ fetchPatients }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/patients", formData);

      fetchPatients();

      alert("Patient added successfully");
      setFormData({
        name: "",
        age: "",
        gender: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="custom-card mt-4">
      <div className="mb-4">
        <h3 className="section-title">Add New Patient</h3>

        <p className="muted-text">
          Create a patient profile to begin clinical documentation.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label fw-semibold">Patient Name</label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter patient name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />
          {/* <p>{formData.name}</p> */}
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Age</label>

          <input
            type="number"
            className="form-control"
            placeholder="Enter age"
            value={formData.age}
            onChange={(e) =>
              setFormData({
                ...formData,
                age: e.target.value,
              })
            }
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Gender</label>

          <select
            className="form-select"
            value={formData.gender}
            onChange={(e) =>
              setFormData({
                ...formData,
                gender: e.target.value,
              })
            }
          >
            <option value="">Select Gender</option>

            <option value="Male">Male</option>

            <option value="Female">Female</option>
          </select>
        </div>

        <button type="submit" className="custom-btn w-100">
          Add Patient
        </button>
      </form>
    </div>
  );
}

export default AddPatientForm;
