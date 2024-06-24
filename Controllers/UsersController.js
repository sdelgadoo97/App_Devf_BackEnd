const UserModel = require("../models/User");


const createUser = async (request, response) => {
  const { email, role } = request.body;
  const { encryptedPassword } = request;
  try {
    const newUser = new UserModel({
      email,
      encryptedPassword: encryptedPassword,
      role
    });
    const result = await newUser.save();
    console.log("Usuario creado en controller", result);
    response.status(201).send({
      success: true,
      message: 'Usuario creado correctamente'
    });
  } catch (error) {
    let errorMessage = 'El usuario no se puede guardar, revisa la información y vuelve a intentarlo.';
    if (error.code === 11000) {
      errorMessage = 'El usuario ya existe.';
    }
    console.log('Error al crear un nuevo usuario:', error.message);
    response.status(500).send({
      success: false,
      code: error.code,
      message: errorMessage
    });
  }
}

module.exports = { createUser };
