# MedScribe AI

MedScribe AI is a MERN-based clinical documentation system that helps doctors manage patients, record consultations, and automatically generate structured SOAP notes from doctor-patient conversations.

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Password Hashing with bcrypt

### Patient Management

* Add Patient
* View Patient Details
* Edit Patient Information
* Delete Patient
* Search Patients by Name

### Visit Management

* Add Patient Visits
* View Visit History
* Delete Visits
* Store Consultation Records

### Voice & Documentation

* Speech-to-Text using Browser Speech Recognition
* Automatic Symptom Extraction
* Automated SOAP Note Generation

## Workflow

Doctor Speaks

↓

Speech Recognition

↓

Transcript Generated

↓

Symptoms Extracted

↓

SOAP Note Generated

↓

Visit Saved

## Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Bootstrap
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt

## Project Structure

frontend/

* components/
* pages/
* services/
* styles/

backend/

* controllers/
* routes/
* models/
* middleware/
* utils/

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## Key Concepts Implemented

* JWT Authentication
* Protected Routes
* REST APIs
* Middleware
* Error Handling
* Speech Recognition
* Symptom Extraction
* SOAP Note Generation
* CRUD Operations
* MongoDB Data Modeling

## Future Improvements

* Multi-doctor support
* Patient ownership and access control
* AI-powered SOAP generation using LLMs
* PDF export for reports
* Appointment scheduling
* Deployment and cloud hosting

## Author

Kanchan Meena

B.Tech Computer Science Engineering

LNCT, Bhopal
