const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect(process.env.DB_URL);
    const connection = mongoose.connection;

    connection.once('open', () => {
    console.log('BD conectada');
    });

    connection.on('error', (error) => {
    console.error(`BD error connection: ${error}`);
    });
};

// exportamos para usar en otro lugar
module.exports = { connect };