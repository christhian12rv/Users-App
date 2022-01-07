const express = require('express');
const app = express();
const db = require('./configs/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;

const userModel = require('./models/user.model');

const usersRoute = require('./routes/users.route');

app.use(bodyParser.json());
app.use(cors());

db.conn();
userModel.createUsersTable();

app.use('/users', usersRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});