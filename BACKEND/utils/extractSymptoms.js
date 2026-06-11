const extractSymptoms = (transcript) => {

  const symptoms = [];

  const text = transcript.toLowerCase();

  if (text.includes("fever")) {
    symptoms.push("fever");
  }

  if (text.includes("cough")) {
    symptoms.push("cough");
  }

  if (text.includes("headache")) {
    symptoms.push("headache");
  }

  if (text.includes("cold")) {
    symptoms.push("cold");
  }

  if (text.includes("body pain")) {
    symptoms.push("body pain");
  }

  if (text.includes("vomiting")) {
    symptoms.push("vomiting");
  }

  return symptoms;
};

module.exports = extractSymptoms;