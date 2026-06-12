const symptomData = {
  fever: {
    assessment: "Possible viral infection",
    plan: "Hydration, rest, monitor temperature",
  },

  cough: {
    assessment: "Possible upper respiratory tract infection",
    plan: "Symptomatic treatment and follow-up if symptoms worsen",
  },

  cold: {
    assessment: "Common cold",
    plan: "Rest, fluids, and symptomatic management",
  },

  headache: {
    assessment: "Possible tension headache",
    plan: "Adequate hydration and pain management",
  },

  "body pain": {
    assessment: "Generalized body ache",
    plan: "Rest and analgesics if required",
  },

  vomiting: {
    assessment: "Possible gastroenteritis",
    plan: "Oral rehydration and dietary precautions",
  },

  nausea: {
    assessment: "Gastrointestinal irritation",
    plan: "Hydration and observation",
  },

  diarrhea: {
    assessment: "Possible gastrointestinal infection",
    plan: "Oral rehydration therapy and dietary management",
  },

  "stomach pain": {
    assessment: "Possible gastritis or gastrointestinal disorder",
    plan: "Clinical evaluation and dietary modification",
  },

  "back pain": {
    assessment: "Musculoskeletal back pain",
    plan: "Posture correction, rest, and pain management",
  },

  "chest pain": {
    assessment: "Chest discomfort requiring further evaluation",
    plan: "Immediate clinical assessment if symptoms persist",
  },

  "shortness of breath": {
    assessment: "Possible respiratory condition",
    plan: "Monitor oxygen status and further evaluation",
  },

  fatigue: {
    assessment: "Generalized fatigue",
    plan: "Adequate rest, hydration, and further investigation if persistent",
  },

  dizziness: {
    assessment: "Possible vertigo or dehydration",
    plan: "Hydration and clinical assessment",
  },

  allergy: {
    assessment: "Possible allergic reaction",
    plan: "Avoid triggers and consider antihistamines",
  },
};

const generateSoap = (transcript, symptoms) => {
  const assessments = [];
  const plans = [];

  symptoms.forEach((symptom) => {
    if (symptomData[symptom]) {
      assessments.push(symptomData[symptom].assessment);
      plans.push(symptomData[symptom].plan);
    }
  });

  return {
    subjective: transcript,

    objective:
      symptoms.length > 0
        ? `Symptoms detected: ${symptoms.join(", ")}`
        : "No symptoms detected",

    assessment:
      assessments.length > 0
        ? assessments.join(". ")
        : "Further clinical evaluation required",

    plan:
      plans.length > 0
        ? plans.join(". ")
        : "Monitor symptoms and follow up as needed",
  };
};

module.exports = generateSoap;