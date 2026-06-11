const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const patientRoutes = require("./routes/patientRoutes");
const visitRoutes = require("./routes/visitRoutes");
const authRoutes = require("./routes/authRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");

dotenv.config();

connectDB(); //db.js in config

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/patients", patientRoutes);
app.use("/api/patients", visitRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("MedScribe AI Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(errorMiddleware);
