const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./Config/database');

const usersRoutes = require('./Routes/UsersRoutes');
const authRoutes = require('./Routes/AuthRoutes');
const patientsRoutes = require('./Routes/PatientsRoutes');

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request.url);
    response.status(200).send({mensaje: 'Api running'});
});

app.use('/api/v1', usersRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', patientsRoutes);

db.connect();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

