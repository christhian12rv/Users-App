const { conn } = require('../configs/db');

exports.list = async (req, res) => {
    const { filter } = req.query || '';
    try {
        const con = await conn();
        const [rows] = await con.query(`SELECT * FROM users WHERE name LIKE "%${filter}%"`);
        con.end();
        res.json({ users: rows });
    } catch (error) {
        res.status(500).send({ message: 'Houve um erro interno.' });
    }
}

exports.register = async (req, res) => {
    const { name } = req.body;
    try {
        const con = await conn();
        const [rows] = await con.query(`INSERT INTO users(name) VALUES("${name}")`);
        con.end();
        res.json({ newUser: { id: rows.insertId, name }, message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(500).send({ message: 'Houve um erro interno.' });
    }
}