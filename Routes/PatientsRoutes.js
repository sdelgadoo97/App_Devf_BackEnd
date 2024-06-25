const express = require('express');
const { getPatients, createPatient, updatePatient, deletePatient } = require('../Controllers/PatientsController');

const patientRoutes = express.Router();

patientRoutes.get('/patients', getPatients);
patientRoutes.post('/patients', createPatient);
patientRoutes.put('/patients/:id', updatePatient);
patientRoutes.delete('/patients/:id', deletePatient);

module.exports = patientRoutes