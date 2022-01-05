const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;

const usersRoute = require('./routes/users.route');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/users-app', (error) => {
    if (!error)
        console.log('Conectado ao MongoDB')
})

app.use('/users', usersRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});