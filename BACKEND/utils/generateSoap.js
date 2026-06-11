const generateSoap = (transcript, symptoms) => {

  return {
    subjective: transcript,

    objective: `Symptoms detected: ${symptoms.join(", ")}`,

    assessment: "Possible viral illness",

    plan: "Rest and hydration",
  };
};

module.exports = generateSoap;