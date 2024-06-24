const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const validateToken = (req, res, next) => {

  const authHeader = req.headers.authorization;
  console.log("¿Tiene encabezado authorization?: " + !!authHeader);
  const secret = process.env.SECRET;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(400).send({
      success: false,
      message: 'Petición incorrecta. (Falta el token)'
    }); 
  }

  const token = authHeader.slice(7);
  try {
    const payload = jwt.verify(token, secret);

    req.userPayload = payload;
    console.log("Payload: ", { payload });

    next();
  } catch (error) {
    console.log("Error en la validación del Token: " + error.message);
    res.status(401).send({
      success: false,
      message: 'Petición incorrecta. (Token inválido)'
    });;
  }
}

const validateRole = (req, res, next) => {
  console.log("Payload: ", req.userPayload );
  if (req.userPayload.role !== "admin") { // usuario, operador
    return res.status(403).send({
      success: false,
      message: 'Permisos insuficientes.'
    });  // no autorizado
  }

  next(); // avanzamos al siguiente paso de la petición (middleware)
} 

const encryptPassword = async (req, res, next) => {
  const { password } = req.body;
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);  // generamos una cadena a partir del password
    // const user = await UserModel.create({ email, encryptPassword, role });
    console.log('Middleware for encryption ', password, encryptedPassword);
    req.encryptedPassword = encryptedPassword;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Algo salió mal al encriptar el password.' // cambiar por algo más seguro
    });
  }
}

module.exports = { validateToken, validateRole, encryptPassword };
