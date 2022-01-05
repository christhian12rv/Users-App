const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

const usersRoute = require('./routes/users.route');

app.use(bodyParser.json());

app.use('/users', usersRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});