const extractSymptoms = (transcript) => {
  const symptoms = [];

  const text = transcript.toLowerCase();

  const symptomKeywords = [
    "fever",
    "cough",
    "cold",
    "headache",
    "body pain",
    "vomiting",
    "nausea",
    "diarrhea",
    "stomach pain",
    "back pain",
    "chest pain",
    "shortness of breath",
    "fatigue",
    "dizziness",
    "allergy",
  ];

  symptomKeywords.forEach((symptom) => {
    if (text.includes(symptom)) {
      symptoms.push(symptom);
    }
  });

  return symptoms;
};

module.exports = extractSymptoms;