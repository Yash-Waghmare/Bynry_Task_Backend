const mongoose = require('mongoose');

const uri =
  "mongodb+srv://Yash:passwordfordatabase@cluster0.cygolk9.mongodb.net/?retryWrites=true&w=majority";

const connection = mongoose.createConnection(uri).on('open', () => {   
    console.log('Connected to MongoDB');
}).on('error', (error) => {
    console.error(error);
});

module.exports = connection;
