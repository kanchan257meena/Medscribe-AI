import { useState } from "react";
import api from "../../services/api";
import "./visit.css";

// it add visit in patient's list

function AddVisitForm({ patientId, fetchPatient }) {
  const [visitData, setVisitData] = useState({
    transcript: "",
  });

  // to manage what button to show during soap loading
  const [loading, setLoading] = useState(false);

  // to controll errors
  const [error, setError] = useState("");

  // Listening indicator
  const [isListening, setIsListening] = useState(false);

  // speech to text
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition(); //objet of SR which a window class for s to t
  recognition.continuous = false; //stop after transcript done
  recognition.lang = "en-US";
  recognition.interimResults = false; // to prevent intermediate result

  const startListening = () => {
    setIsListening(true);
    recognition.start();
  };
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setVisitData((prev) => ({
      ...prev,
      transcript: prev.transcript + " " + transcript,
    }));
  };
  recognition.onend = () => {
    setIsListening(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!visitData.transcript.trim()) {
      setError("Transcript is required.");

      return;
    }

    try {
      const response = await api.post(
        `/patients/${patientId}/visits`,
        visitData,
      );

      // console.log(response.data);

      setVisitData({
        transcript: "",
      });

      fetchPatient(); //refresh the page
      setError("");
      setLoading(false);
    } catch (error) {
      setError("Failed to generate SOAP.");
      console.log(error);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="card p-4 mt-4">
      <h3 className="mb-3">Add Visit</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Doctor Transcript</label>

          <button
            type="button"
            className="custom-btn mb-3"
            onClick={startListening}
          >
            {isListening ? "🔴 Listening..." : "🎤 Start Recording"}
          </button>

          <textarea
            className="form-control"
            rows="5"
            placeholder="Enter doctor-patient conversation..."
            value={visitData.transcript}
            onChange={(e) =>
              setVisitData({
                ...visitData,
                transcript: e.target.value,
              })
            }
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading || !visitData.transcript.trim()}
        >
          {loading ? "Generating SOAP..." : "Generate & Save Visit"}
        </button>
      </form>
    </div>
  );
}

export default AddVisitForm;
