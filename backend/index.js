const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 27017;


const Register = require('./routes/RegisterRoute');

app.use(cors());
app.use(express.json());

app.use('/register', Register);

app.listen(PORT, console.log("Escutando a porta "+PORT));