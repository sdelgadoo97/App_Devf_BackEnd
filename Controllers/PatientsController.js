const PatientsCatalog = require("../Models/PatientsCatalog");

const getPatients = async (request, response) => {
    
  const doc_id = request.query.doc_id;
  let patientList = [];

  try {
    if (doc_id) {
      patientList = await PatientsCatalog.find({ doc_id: doc_id });
    } else {
      patientList = await PatientsCatalog.find();
    }
  
    response.send({
      success: true,
      data: patientList
    });
  } catch(error) {
    console.log('Error al obtener algunos datos:', error);
    response.status(500).send({
      success: false,
      message: error.message
    });
  }
}

const createPatient = async (request, response) => {
  const patientData = request.body;
  try {
    const newPatient = new PatientsCatalog(patientData);
    const result = await newPatient.save();
    response.status(201).send({
      success: true,
      data: result
    });
  } catch (error) {
    let errorMessage = 'El paciente no se puede guardar, revisa la información y vuelve a intentarlo.';
    if (error.code === 11000) {
      errorMessage = 'El paciente ya existe.';
    }
    console.log('Error al crear un nuevo paciente:', error);
    response.status(500).send({
      success: false,
      code: error.code,
      message: errorMessage
    });
  }
}

const updatePatient = async (request, response) => {
  const { id } = request.params;
  const patientData = request.body;
  try {
    const result = await PatientsCatalog.findByIdAndUpdate({doc_id: id}, patientData, {
      new: true
    });
    response.status(200).send({
      success: true,
      data: result
    });
  } catch (error) {
    console.log('Error al actualizar un paciente:', error);
    response.status(500).send({
      success: false,
      message: error.message
    });
  }
}

const deletePatient = async (request, response) => {
  const { id } = request.params;
  try {
    const result = await PatientsCatalog.findByIdAndDelete({doc_id: id});
    response.status(200).send({
      success: true,
      data: result
    });
  } catch (error) {
    console.log('Error al borrar un paciente:', error);
    response.status(500).send({
      success: false,
      message: error.message
    });
  }
}

module.exports = { getPatients, createPatient, updatePatient, deletePatient };
