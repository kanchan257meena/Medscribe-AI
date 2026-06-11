import "./visit.css";

function SOAPPreview({ soapNote }) {
  if (!soapNote) {
    return (
      <div className="card p-3 mt-3">
        <h5 className="mb-2">SOAP Preview</h5>

        <p className="text-muted mb-0">
          SOAP note will appear here after transcript processing.
        </p>
      </div>
    );
  }

  const soapSections = [
    {
      title: "Subjective",
      content: soapNote.subjective,
    },

    {
      title: "Objective",
      content: soapNote.objective,
    },

    {
      title: "Assessment",
      content: soapNote.assessment,
    },

    {
      title: "Plan",
      content: soapNote.plan,
    },
  ];

  return (
    <div className="card p-3 mt-3">
      <h5 className="mb-4">SOAP Preview</h5>

      {soapSections.map((section, index) => (
        <div key={index} className="soap-section">
          <h6 className="fw-bold">{section.title}</h6>

          <p className="mb-0">{section.content}</p>
        </div>
      ))}
    </div>
  );
}

export default SOAPPreview;
