import { useState } from "react";
import api from "../../services/api";

function EditPatientForm({ patient, fetchPatient, setIsEditing }) {
  const [formData, setFormData] = useState({
    name: patient.name,
    age: patient.age,
    gender: patient.gender,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.put(
        `/patients/${patient._id}`,

        formData,
      );

      console.log(response.data);

      setIsEditing(false);

      fetchPatient();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card p-4 mt-4">
      <h3 className="mb-3">Edit Patient</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>

          <input
            type="text"
            className="form-control"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>

          <input
            type="number"
            className="form-control"
            value={formData.age}
            onChange={(e) =>
              setFormData({
                ...formData,
                age: e.target.value,
              })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>

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
            <option value="Male">Male</option>

            <option value="Female">Female</option>
          </select>
        </div>

        <button type="submit" className="btn btn-warning">
          Update Patient
        </button>
      </form>
    </div>
  );
}

export default EditPatientForm;
