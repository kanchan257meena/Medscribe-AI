function SOAPEditForm({
  editData,
  setEditData,
  handleUpdate,
  setIsEditing,
  editError,
  updateLoading,
}) {
  return (
    <div className="transcript-box">
      <div className="mb-3">
        <label className="form-label">Transcript</label>

        <textarea
          className="form-control"
          rows="4"
          value={editData.transcript}
          onChange={(e) =>
            setEditData({
              ...editData,
              transcript: e.target.value,
            })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Symptoms</label>

        <input
          type="text"
          className="form-control"
          value={editData.symptoms}
          onChange={(e) =>
            setEditData({
              ...editData,
              symptoms: e.target.value,
            })
          }
        />
      </div>
      {/* edit subjective */}
      <div className="mb-3">
        <label className="form-label">Subjective</label>

        <textarea
          className="form-control"
          rows="3"
          value={editData.soapNote.subjective}
          onChange={(e) =>
            setEditData({
              ...editData,

              soapNote: {
                ...editData.soapNote,

                subjective: e.target.value,
              },
            })
          }
        />
      </div>
      {/* edit objective */}
      <div className="mb-3">
        <label className="form-label">Objective</label>

        <textarea
          className="form-control"
          rows="3"
          value={editData.soapNote.objective}
          onChange={(e) =>
            setEditData({
              ...editData,

              soapNote: {
                ...editData.soapNote,

                objective: e.target.value,
              },
            })
          }
        />
      </div>
      {/* Edit assessment */}
      <div className="mb-3">
        <label className="form-label">Assessment</label>

        <textarea
          className="form-control"
          rows="3"
          value={editData.soapNote.assessment}
          onChange={(e) =>
            setEditData({
              ...editData,

              soapNote: {
                ...editData.soapNote,

                assessment: e.target.value,
              },
            })
          }
        />
      </div>

      {/* edit plan */}
      <div className="mb-3">
        <label className="form-label">Plan</label>

        <textarea
          className="form-control"
          rows="3"
          value={editData.soapNote.plan}
          onChange={(e) =>
            setEditData({
              ...editData,

              soapNote: {
                ...editData.soapNote,

                plan: e.target.value,
              },
            })
          }
        />
      </div>

      {editError && <p className="text-danger">{editError}</p>}
      <button
        className="btn btn-success me-2"
        onClick={handleUpdate}
        disabled={updateLoading}
      >
        {updateLoading ? "Saving..." : "Save"}
      </button>

      <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
        Cancel
      </button>
    </div>
  );
}

export default SOAPEditForm;
